var _ = require('lodash'),
    Fs = require('fs'),
    Hoek = require('hoek'),
    Path = require('path'),
    themeConfigInstance;

module.exports.getInstance = getInstance;

/**
 * Grabs the currently set instance or creates one if it doesn't exist.  If called
 * a second time with params, it will set those specific params and return the instance.
 *
 * @param configPath
 * @param schemaPath
 * @param variationName
 * @returns {ThemeConfig}
 */
function getInstance(configPath, schemaPath, variationName) {
    if (!themeConfigInstance) {
        themeConfigInstance = new ThemeConfig(configPath, schemaPath, variationName);

        return themeConfigInstance;
    }

    if (configPath) {
        themeConfigInstance.setConfigPath(configPath);
    }

    if (schemaPath) {
        themeConfigInstance.setSchemaPath(schemaPath);
    }

    if (variationName) {
        themeConfigInstance.setVariationName(variationName);
    }

    return themeConfigInstance;
}

/**
 * ThemeConfig Class Constructor
 *
 * @param configPath
 * @param schemaPath
 * @param variationName
 * @constructor
 */
function ThemeConfig(configPath, schemaPath, variationName) {
    this.configPath = configPath;
    this.schemaPath = schemaPath;
    this.currentVariationSettings = null;
    this.globalSettings = null;
    this.variationName = variationName;
}

/**
 * Returns the full Theme Config.
 *
 * @returns {object}
 */
ThemeConfig.prototype.getConfig = function() {
    return getConfig.call(this);
};

/**
 * Updates the config.json and returns a boolean based on if the browser should do a
 * hard reload or not.
 *
 * @param newConfig
 * @param saveToFile
 * @returns Boolean
 */
ThemeConfig.prototype.updateConfig = function(newConfig, saveToFile) {
    return updateConfig.call(this, newConfig, saveToFile);
};

/**
 * Config Path Setter
 *
 * @param configPath
 * @returns {ThemeConfig}
 */
ThemeConfig.prototype.setConfigPath = function(configPath) {
    this.configPath = configPath;

    return this;
};

/**
 * Schema Path Setter
 *
 * @param schemaPath
 * @returns {ThemeConfig}
 */
ThemeConfig.prototype.setSchemaPath = function(schemaPath) {
    this.schemaPath = schemaPath;

    return this;
};

/**
 * Variation Name Setter
 *
 * @param variationName
 * @returns {ThemeConfig}
 */
ThemeConfig.prototype.setVariationName = function(variationName) {
    this.variationName = variationName;
    this.currentVariationSettings = null;

    return this;
};

/**
 * Pass in an array of setting keys which will be compared against the
 * schema to see if any of them need to be force-reloaded.
 *
 * @param settingKeys
 * @returns Boolean
 */
ThemeConfig.prototype.checkForceReload = function(settingKeys) {
    return _.some(settingKeys, needForceReloaded(this.schemaPath));
};

/**
 * Grab the config JSON string, parse it into an object, grab the current variation,
 * and then merge it into the top level settings.
 *
 * @return {object}
 */
function getConfig() {
    var config = JSON.parse(Fs.readFileSync(this.configPath, {encoding: 'utf-8'})),
        variation;

    this.globalSettings = Hoek.clone(config.settings);
    variation = getVariation(config, this.variationName);

    if (!this.currentVariationSettings) {
        this.currentVariationSettings = variation.settings;
    }

    // Set some defaults
    config.css_compiler = config.css_compiler || 'scss';
    config.autoprefixer_cascade = config.autoprefixer_cascade || true;
    config.autoprefixer_browsers = config.autoprefixer_browsers || ['> 5% in US'];

    // Add in actual variation name since the one passed in to the constructor could have been blank
    config.variationName = variation.name;

    // Merge in the variation settings and images objects
    config.settings = Hoek.applyToDefaults(config.settings || {}, this.currentVariationSettings);
    config.images = Hoek.applyToDefaults(config.images || {}, variation.images);

    return config;
}

/**
 * Grab the schema JSON string, parse it into an object, and return it
 *
 * @param schemaPath
 * @returns {object}
 */
function getSchema(schemaPath) {
    var rawConfigSchema = Fs.readFileSync(schemaPath, {encoding: 'utf-8'});

    return JSON.parse(rawConfigSchema);
}

/**
 * Updates a variation param in theme config based on variation name
 *
 * @param newSettings
 * @param saveToFile
 * @return
 */
function updateConfig(newSettings, saveToFile) {
    var config = this.getConfig(),
        changedSettings = _.pick(newSettings, function (val, key) {
            return config.settings[key] !== val;
        }),
        ret = {
            forceReload: false
        },
        rawConfig,
        variation;

    // Remove all variation settings that match theme's settings
    this.currentVariationSettings = _.omit(newSettings, function(value, key) {
        return this.globalSettings[key] === value;
    }, this);

    if (saveToFile) {
        // Resetting the global settings so the only data saved to the file are the changes
        // from a specific variation's settings.
        rawConfig = JSON.parse(Fs.readFileSync(this.configPath, {encoding: 'utf-8'}));
        variation = getVariation(rawConfig, this.variationName);

        variation.settings = this.currentVariationSettings;

        Fs.writeFileSync(this.configPath, JSON.stringify(rawConfig, null, 2), {encoding: 'utf-8'});
    }

    if (! _.isEmpty(changedSettings)) {
        ret.forceReload = _.some(_.keys(changedSettings), needForceReloaded(this.schemaPath));
    }

    return ret;
}

/**
 * Grabs out a variation based on a name. Or if the name is not passed in, the very first one in the list.
 *
 * @param config
 * @param variationName
 * @returns {object}
 */
function getVariation(config, variationName) {
    var variation;

    if (! _.isArray(config.variations) || config.variations.length === 0) {
        throw new Error('Your theme must have at least one variation in the config.json file.');
    }

    if (! variationName) {
        variation = config.variations[0];
    } else {
        variation = _.find(config.variations, {
            name: variationName
        });

        if (! variation) {
            throw new Error(
                'Variation: ' +
                variationName +
                ' is not defined in the theme\'s config.json'
            );
        }
    }

    if (! variation.settings) {
        variation.settings = {};
    }

    if (! variation.images) {
        variation.images = {};
    }

    return variation;
}

/**
 * Helper function to see if some setting names need force-reloading.
 *
 * @param schemaPath
 * @returns {Function}
 */
function needForceReloaded(schemaPath) {
    var configSchema = getSchema(schemaPath);

    return function(key) {
        var okay = false;

        _.forEach(configSchema, function(chunk) {
            var forceReloadCheck = _.find(chunk.settings, {id: key});

            if (! forceReloadCheck) {
                return;
            }

            if (forceReloadCheck.force_reload === true) {
                okay = true;

                // We found what we were looking for, lets kick out of the _.forEach();
                return false;
            }
        });

        return okay;
    };
}