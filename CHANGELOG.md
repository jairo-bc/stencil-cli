# [3.0.0](https://github.com/jairo-bc/stencil-cli/compare/2.1.1...3.0.0) (2025-07-02)


### Bug Fixes

* (strf-5280) Multiple themes - Changes to config.json not reflected ([0b28309](https://github.com/jairo-bc/stencil-cli/commit/0b28309f1c51984a5220339f8be41cdf157112b2))
* (strf-8705) fix broken headers and cookies in local server ([1dc8afd](https://github.com/jairo-bc/stencil-cli/commit/1dc8afd6c9e854650bee2dcf393d948aa5064de5))
* (strf-8734) fix a typo in renderer.module -> getTemplatePath() ([de5a91b](https://github.com/jairo-bc/stencil-cli/commit/de5a91bb5f0a549548e3069bb9eb740221e3f391))
* (strf-8740) fix a typo in StencilStart.assembleTemplates() ([7f58d48](https://github.com/jairo-bc/stencil-cli/commit/7f58d4847d374bad0617825f0646c82c7f12af86))
* (strf-8745) move common headers inside sendApiRequest and refactor NetworkUtils ([21a3522](https://github.com/jairo-bc/stencil-cli/commit/21a352286881651d115667ed39bc5138b1728cf3))
* (strf-8746) make local server parse binary data responses right ([39dacd8](https://github.com/jairo-bc/stencil-cli/commit/39dacd8f89ee3d43951d1c832b9cf917a3037931))
* (strf-8840) add missing rejectUnauthorized parameter to the API requests ([5ee6138](https://github.com/jairo-bc/stencil-cli/commit/5ee6138a36c88bbffbf61004a3b8845db7099116))
* (STRF-9019) wrong reading from stream breaks stencil-download command ([eb9b082](https://github.com/jairo-bc/stencil-cli/commit/eb9b082dcd89f489dbc864b32763a51a2467e5b4))
* (STRF-9087) set upstream=storefront to support multiple channels in start command ([3f6b8ed](https://github.com/jairo-bc/stencil-cli/commit/3f6b8edf50d4fba361b6fb3b07e26424942a82a1))
* (STRF-9294) Added check to ensure we are not looping over undefined object ([bcd2401](https://github.com/jairo-bc/stencil-cli/commit/bcd24010288e49d518a147cbd9021a580c5a71a1))
* add activate engine name ([#837](https://github.com/jairo-bc/stencil-cli/issues/837)) ([eb41787](https://github.com/jairo-bc/stencil-cli/commit/eb41787018df1d456dc8c84c5915f59ca6f043b9))
* add file list to package file to ignore tests and cli release code ([de4468f](https://github.com/jairo-bc/stencil-cli/commit/de4468f86dfda2189ecae4f59a255b4917fdf603))
* add handling cases when redirect link is already stripped in normalizeRedirectUrl ([88fee5d](https://github.com/jairo-bc/stencil-cli/commit/88fee5d62b9992cd190221819a487222af87732d))
* add missed linting step to github actions ([19b4012](https://github.com/jairo-bc/stencil-cli/commit/19b4012910f7d47624ca7f62bcadafad59a81a42))
* add missed test coverage check to github actions ([39d137d](https://github.com/jairo-bc/stencil-cli/commit/39d137dbc03f379cc9da485b0df805ed91d3a8b2))
* Add new stencil config file to zip bundle ([#1259](https://github.com/jairo-bc/stencil-cli/issues/1259)) ([4f66d71](https://github.com/jairo-bc/stencil-cli/commit/4f66d71e0b77ca967e29766751604138733af95b))
* apply various PR fixes ([c5d964b](https://github.com/jairo-bc/stencil-cli/commit/c5d964b4bd1891331646d9e3bd4d9ad1b0ab165f))
* broken changelog.md after stencil release command ([ec4a72a](https://github.com/jairo-bc/stencil-cli/commit/ec4a72a72ea016b325b561b21bdb9261237ad4d2))
* bump changes to docker ghcr login ([#1279](https://github.com/jairo-bc/stencil-cli/issues/1279)) ([f43e611](https://github.com/jairo-bc/stencil-cli/commit/f43e61195aa142301dfea56eecb3f2da5bb68121))
* bump paper to 5.1.4 ([#1260](https://github.com/jairo-bc/stencil-cli/issues/1260)) ([1b78b72](https://github.com/jairo-bc/stencil-cli/commit/1b78b725bf431fede0269625d48d722f681480de))
* bump paper to 5.1.6; fix chrono-node version ([#1263](https://github.com/jairo-bc/stencil-cli/issues/1263)) ([a32a36b](https://github.com/jairo-bc/stencil-cli/commit/a32a36b4d1343b7d7683ec02d637a941e80f8658))
* debug command ([#970](https://github.com/jairo-bc/stencil-cli/issues/970)) ([4aa3db2](https://github.com/jairo-bc/stencil-cli/commit/4aa3db27f13e0abea89fbe5f36b6c7e7d927688e))
* disable checking changelog, that was auto-generated ([#1020](https://github.com/jairo-bc/stencil-cli/issues/1020)) ([127cde2](https://github.com/jairo-bc/stencil-cli/commit/127cde2f9ff74c3bd2150f201629a1410fedd77e))
* empty response from regions graphql ([#878](https://github.com/jairo-bc/stencil-cli/issues/878)) ([1ad0520](https://github.com/jairo-bc/stencil-cli/commit/1ad0520df924e3e0b876c848b83b95ff7d27105d))
* fix build config manager ([#1277](https://github.com/jairo-bc/stencil-cli/issues/1277)) ([52c7d41](https://github.com/jairo-bc/stencil-cli/commit/52c7d4133aabb3914327652870ac3bf79df49056))
* fix lint errors in lib/stencil-init.js ([a2e7383](https://github.com/jairo-bc/stencil-cli/commit/a2e73831cb47dcef4afac0c56dec465f102fe562))
* fix lint errors in lib/stencil-init.spec.js ([0b2b328](https://github.com/jairo-bc/stencil-cli/commit/0b2b32816b2f122475f8bcce7a98e1e3092538b0))
* fix linting problems on Windows ([bcdfaa4](https://github.com/jairo-bc/stencil-cli/commit/bcdfaa4420a00d59b17b757f878d7aa59d9129bb))
* fixes merge conflicts ([8a56259](https://github.com/jairo-bc/stencil-cli/commit/8a56259c4726056bd82404656c6d61d9a22f6789))
* inquirer.prompt is not called when not necessary ([beeca29](https://github.com/jairo-bc/stencil-cli/commit/beeca29c8e25927498b38fcc68a9562627491ef9))
* make running tests in verbose mode ([8bdd3d4](https://github.com/jairo-bc/stencil-cli/commit/8bdd3d40f62ef9991b0efc1e57fff4dd6625af4f))
* merc--7873 Support 5 character language code for schema translations ([b1d291a](https://github.com/jairo-bc/stencil-cli/commit/b1d291a37a66305771481503a89c93948ce53785))
* MERC-8592 Check if a theme is deleted before pushing a new theme ([afdab92](https://github.com/jairo-bc/stencil-cli/commit/afdab92953784ddc08eaaa3820efbc6f730bfe2e))
* move release image CI job to relase workflow ([#1266](https://github.com/jairo-bc/stencil-cli/issues/1266)) ([16a4539](https://github.com/jairo-bc/stencil-cli/commit/16a45394d4bfebd9d68076e278f11e22c017f8cd))
* noop PR ([#1158](https://github.com/jairo-bc/stencil-cli/issues/1158)) ([7a7ee74](https://github.com/jairo-bc/stencil-cli/commit/7a7ee74fe26a8e373b2c1b8f2c9881fbd8bf27e0))
* package-lock.json ([#886](https://github.com/jairo-bc/stencil-cli/issues/886)) ([7278e0f](https://github.com/jairo-bc/stencil-cli/commit/7278e0fa3e8098fdd0d37b9781068b5c31f7e2ff))
* package-lock.json ([#990](https://github.com/jairo-bc/stencil-cli/issues/990)) ([ac2af92](https://github.com/jairo-bc/stencil-cli/commit/ac2af92fda3413eabaafb118b136727b9cfde21c))
* print cli errors to stderr ([#1133](https://github.com/jairo-bc/stencil-cli/issues/1133)) ([d369a00](https://github.com/jairo-bc/stencil-cli/commit/d369a0006545a0424e8eaff542660e4ed9418b92))
* Properly add stencil-cli headers to internalapi requests ([15e1202](https://github.com/jairo-bc/stencil-cli/commit/15e12029b007932231a08ec218ea39cc2e671e4b))
* Properly add stencil-cli headers to internalapi requests ([#1164](https://github.com/jairo-bc/stencil-cli/issues/1164)) ([24ae309](https://github.com/jairo-bc/stencil-cli/commit/24ae3093bbc100fc45bd37488aa58db032af33f6))
* raise an error when 409 happen while trying to upload a theme for the second time ([887a2f8](https://github.com/jairo-bc/stencil-cli/commit/887a2f806578f96e07f0bbf2c36551eaf50f7ce2))
* **release:** registry env var for the release ([#989](https://github.com/jairo-bc/stencil-cli/issues/989)) ([6c6a607](https://github.com/jairo-bc/stencil-cli/commit/6c6a6074dbd1575f23028ef33e45061686a2f082))
* remove npm 5 ([77db7f8](https://github.com/jairo-bc/stencil-cli/commit/77db7f82b1fba08fa4cfc95776588791a95b1450))
* repo name 3 ([11b609f](https://github.com/jairo-bc/stencil-cli/commit/11b609f08f15fc104aadb08636a78641e01b97da))
* repo name 4 ([546877e](https://github.com/jairo-bc/stencil-cli/commit/546877e9d6e5afa768bd29010e004c255d463e2a))
* return channel id as an iterable when a store only has a single channel ([#849](https://github.com/jairo-bc/stencil-cli/issues/849)) ([a6c79d3](https://github.com/jairo-bc/stencil-cli/commit/a6c79d343713e811c28c1c41c8c9b089aa75be76))
* reverts change to mock test answers ([ea9c76e](https://github.com/jairo-bc/stencil-cli/commit/ea9c76e9b7d02123609524ccb5ac6b16000dd205))
* semantic release deploy to npm ([#1233](https://github.com/jairo-bc/stencil-cli/issues/1233)) ([5ed0cf3](https://github.com/jairo-bc/stencil-cli/commit/5ed0cf359f9f3101898cea075ad98600ad9e320b))
* set node 20 for release ([#1234](https://github.com/jairo-bc/stencil-cli/issues/1234)) ([250bb07](https://github.com/jairo-bc/stencil-cli/commit/250bb076942dfc70b3b6a3f69654a7c4f0a8dfd6))
* **stencil-init.spec.js:** fixed a broken test ([66ab50d](https://github.com/jairo-bc/stencil-cli/commit/66ab50d489faa47719f952d61071ee78978093b6))
* **stencil-push:** (STRF-8913) increase maxBodyLength in NetworkUtils.sendApiRequest ([f2e3918](https://github.com/jairo-bc/stencil-cli/commit/f2e39181e5c790eb25e444c5aea9ce3c9e8f6062))
* **stencil-release:** (STRF-6905) add updating version in package-lock.json ([8f9ff79](https://github.com/jairo-bc/stencil-cli/commit/8f9ff794f255094e0f9f433b680cdd829fa6b209))
* **stencil-release:** fix typo in the code ([e6dfbc3](https://github.com/jairo-bc/stencil-cli/commit/e6dfbc351bbb06a92bde4f3334b4fd1c10c26be7))
* **stencil-release:** fix uploading broken bundle archive to github ([0271ed4](https://github.com/jairo-bc/stencil-cli/commit/0271ed4200958a0875fa24381efa689bfd7c52e5))
* **storefront:** bctheme-1000 handle correctly regular css file ([#845](https://github.com/jairo-bc/stencil-cli/issues/845)) ([80230c3](https://github.com/jairo-bc/stencil-cli/commit/80230c33027881c9dc39b988343714070e89c010))
* **storefront:** bctheme-1138 fix error on import components with @ symbol in the path ([#953](https://github.com/jairo-bc/stencil-cli/issues/953)) ([ad241ce](https://github.com/jairo-bc/stencil-cli/commit/ad241ce8d68801e994895d48bd38a2e86f09aca4))
* **storefront:** bctheme-1145 enable using external lib for templates under organization ([#954](https://github.com/jairo-bc/stencil-cli/issues/954)) ([49576c9](https://github.com/jairo-bc/stencil-cli/commit/49576c9f46ae122c3bedcc601f8330430374f865))
* **storefront:** bctheme-1284 Fix error on using scoped nested external templates ([#1003](https://github.com/jairo-bc/stencil-cli/issues/1003)) ([1964ff5](https://github.com/jairo-bc/stencil-cli/commit/1964ff58ebebce3a43d79df51b159dbf0b57301d))
* **storefront:** bctheme-1331 Incorrect handling of nested external templates with params ([#1031](https://github.com/jairo-bc/stencil-cli/issues/1031)) ([51903de](https://github.com/jairo-bc/stencil-cli/commit/51903de21d65577b2204f9dce8032b14cd0fdd83))
* **storefront:** fix typo in AutoFixer ([#1091](https://github.com/jairo-bc/stencil-cli/issues/1091)) ([4f550e1](https://github.com/jairo-bc/stencil-cli/commit/4f550e1218368d3dcb1d4f9dc90f29f840cee726))
* **storefront:** strf 9587 api host command is not recognized ([#830](https://github.com/jairo-bc/stencil-cli/issues/830)) ([37fcd49](https://github.com/jairo-bc/stencil-cli/commit/37fcd4988f96f59d8a32798093e2d90bac38db34))
* **storefront:** strf-10118 Fix redirects stalling locally ([#1000](https://github.com/jairo-bc/stencil-cli/issues/1000)) ([7fd7089](https://github.com/jairo-bc/stencil-cli/commit/7fd70897c1aeeca5fb4cdf6befce01cc4b6afe06))
* **storefront:** strf-10130 Fix 404s on pagination in brands/categories ([#1004](https://github.com/jairo-bc/stencil-cli/issues/1004)) ([870b262](https://github.com/jairo-bc/stencil-cli/commit/870b2623e393aa6e21e7eca4369eeebedbdf4d07))
* **storefront:** strf-10193 Bad request for custom front matter: ([#1019](https://github.com/jairo-bc/stencil-cli/issues/1019)) ([b7aefca](https://github.com/jairo-bc/stencil-cli/commit/b7aefca859184737e315e8bb3c49890a25d20e99))
* **storefront:** strf-10231 Mapped URLs do not use their respective templates: ([#1028](https://github.com/jairo-bc/stencil-cli/issues/1028)) ([3066d30](https://github.com/jairo-bc/stencil-cli/commit/3066d30eff1f71165d9d45e846fa00ef0a1a09d6))
* **storefront:** strf-9594 loosed frontmatter refex ([#841](https://github.com/jairo-bc/stencil-cli/issues/841)) ([1abf15c](https://github.com/jairo-bc/stencil-cli/commit/1abf15c4e1d89a0c049f9271d13a1e936fa5428e))
* strf-10049 npm 8 install fix ([#997](https://github.com/jairo-bc/stencil-cli/issues/997)) ([12888cc](https://github.com/jairo-bc/stencil-cli/commit/12888cc63f46d1e4e41c9123c36b4418b6e0327d))
* STRF-10081 stencil pull overrides only variation config ([#1105](https://github.com/jairo-bc/stencil-cli/issues/1105)) ([c0e1097](https://github.com/jairo-bc/stencil-cli/commit/c0e10976f4dd28b63ec4701e5e6dd4fd70ffac12))
* STRF-10157 Added missing dependency ([#1013](https://github.com/jairo-bc/stencil-cli/issues/1013)) ([ebc3bdd](https://github.com/jairo-bc/stencil-cli/commit/ebc3bdd18dfdce066fa92224940d5351c75498e3))
* STRF-10157 Divide docker image release and semantic ([#1012](https://github.com/jairo-bc/stencil-cli/issues/1012)) ([7a2f869](https://github.com/jairo-bc/stencil-cli/commit/7a2f869e59255310dc5dcff06642a56e2cafc3bc))
* STRF-10768 Stencil bundle fails on some ([#1101](https://github.com/jairo-bc/stencil-cli/issues/1101)) ([968e5e6](https://github.com/jairo-bc/stencil-cli/commit/968e5e6723b00021f5adcabdb8a812b3fb0add6a))
* strf-11280 Exclude any css files from scss validation ([#1137](https://github.com/jairo-bc/stencil-cli/issues/1137)) ([e40c9f9](https://github.com/jairo-bc/stencil-cli/commit/e40c9f972269dfdf423df888ca24690d2f894df7))
* STRF-11281 Narrow comma separation cases and Improve Base Rules Error ([#1139](https://github.com/jairo-bc/stencil-cli/issues/1139)) ([3879486](https://github.com/jairo-bc/stencil-cli/commit/3879486c07589aca561b92cdca04582198df0aa8))
* STRF-11419 Move scss file matching logic to stencil-styles ([#1149](https://github.com/jairo-bc/stencil-cli/issues/1149)) ([2d21f69](https://github.com/jairo-bc/stencil-cli/commit/2d21f69c3c50c372e35fc25e0b27ce6f34a48e7c))
* STRF-11523 Enable dynamic partials ([#1248](https://github.com/jairo-bc/stencil-cli/issues/1248)) ([4fab613](https://github.com/jairo-bc/stencil-cli/commit/4fab61385b076ffe6105bb1196aace787143ef9b))
* strf-11740 bump stencil-styles ([#1161](https://github.com/jairo-bc/stencil-cli/issues/1161)) ([1c75d45](https://github.com/jairo-bc/stencil-cli/commit/1c75d4507c55b09e7282a5680de298b31c79f448))
* STRF-11740 Inconsistent responses in Stencil CLI Bundle and Theme Editor for scss compilation ([#1157](https://github.com/jairo-bc/stencil-cli/issues/1157)) ([b0c7538](https://github.com/jairo-bc/stencil-cli/commit/b0c75383a80521ffa99c6d692c341002d695f51d))
* STRF-11741 Provide stencil init options to set up package manager and skip packages install ([#1190](https://github.com/jairo-bc/stencil-cli/issues/1190)) ([2fb7b7d](https://github.com/jairo-bc/stencil-cli/commit/2fb7b7d45425970a72a92c94431f0cc4a5c37f70))
* STRF-11856 - Filter list of channels from getStoreChannels() to storefront channels ([#1180](https://github.com/jairo-bc/stencil-cli/issues/1180)) ([0a0d229](https://github.com/jairo-bc/stencil-cli/commit/0a0d2298adb76718671f8e7fb0a89a4532b12e07))
* STRF-11856 - Filter the response for getStoreChannels() to only include type 'storefront' channels. ([4376c9e](https://github.com/jairo-bc/stencil-cli/commit/4376c9e51387c9743dc184330f3416bbb230f6f8))
* STRF-11898 fix undefined variable stencil scss autofix ([#1174](https://github.com/jairo-bc/stencil-cli/issues/1174)) ([2f70840](https://github.com/jairo-bc/stencil-cli/commit/2f70840b3d97dd51c37134e1c5484343c33391bf))
* STRF-11899 Update cart when multiple coupons are removed ([#1197](https://github.com/jairo-bc/stencil-cli/issues/1197)) ([13a31ba](https://github.com/jairo-bc/stencil-cli/commit/13a31ba21b2eea46cf8c8fdb2087a74a6cc3acdc))
* STRF-11923 - Handle Missing a New Channels Permission Requirement in Auth Token ([#1191](https://github.com/jairo-bc/stencil-cli/issues/1191)) ([20e5fcb](https://github.com/jairo-bc/stencil-cli/commit/20e5fcb5845570a18329f4d6e6ab6239cbea4fb0))
* STRF-11923 - Handle missing Channels auth permission in getStoreChannels() method. ([73703a4](https://github.com/jairo-bc/stencil-cli/commit/73703a4dbc7243a54e564dfb3c726250f0ece2ee))
* STRF-11934 Move PR Title to env ([#1196](https://github.com/jairo-bc/stencil-cli/issues/1196)) ([1560f4e](https://github.com/jairo-bc/stencil-cli/commit/1560f4e45dd3c987d6cdd90683e60e28b1363746))
* STRF-11934 Separate Github PR Title check  ([#1199](https://github.com/jairo-bc/stencil-cli/issues/1199)) ([345f698](https://github.com/jairo-bc/stencil-cli/commit/345f698f4ff8ac7dca41c308602af8bdc48263cd))
* STRF-12935 Fix docker image publishing ([#1265](https://github.com/jairo-bc/stencil-cli/issues/1265)) ([64afbce](https://github.com/jairo-bc/stencil-cli/commit/64afbcea2d63b6c7ea948fc83a6858623a3916e7))
* STRF-12935 Update docker CI actions versions ([#1268](https://github.com/jairo-bc/stencil-cli/issues/1268)) ([ea8e831](https://github.com/jairo-bc/stencil-cli/commit/ea8e831a8168f1f6f60c6b3b12d1ecf8a0b590fa))
* STRF-12935 Update nodejs Docker version and CI job env var names ([#1269](https://github.com/jairo-bc/stencil-cli/issues/1269)) ([555f58b](https://github.com/jairo-bc/stencil-cli/commit/555f58b6ff63e7d602b7db79625bc722cef1cd78))
* STRF-12941 Fix stencil release in case of having .git extension in the remote name ([#1252](https://github.com/jairo-bc/stencil-cli/issues/1252)) ([15195aa](https://github.com/jairo-bc/stencil-cli/commit/15195aaf82644e6680c7859d087f7117fbf5cfd0))
* STRF-13442 Fix semantic release PR creation and update docker tags ([#1282](https://github.com/jairo-bc/stencil-cli/issues/1282)) ([fbfcd8d](https://github.com/jairo-bc/stencil-cli/commit/fbfcd8dfdcbc154773286d9c455329103d757aa0))
* strf-4307 Frontmatter/yaml validation and trailing symbols checks ([#798](https://github.com/jairo-bc/stencil-cli/issues/798)) ([c1cf1ce](https://github.com/jairo-bc/stencil-cli/commit/c1cf1ce0017078df5ae41e8c1581dcd1037870ce))
* strf-8574 Bump version of "archiver" to fix security issues ([42f4528](https://github.com/jairo-bc/stencil-cli/commit/42f45287184be385ad20e7823c290352d745f4b0))
* strf-8574 Bump versions of npm modules to fix security issues ([2587d0a](https://github.com/jairo-bc/stencil-cli/commit/2587d0a4705c289b5e881bfa377854b9ba44b5c7))
* strf-8574, bump "hapi" and its modules to fix security issues ([b520daa](https://github.com/jairo-bc/stencil-cli/commit/b520daa6f30703139a87b339e3c97a33202ba564))
* strf-8574, bump version of "@hapi/lab" to fix security issues ([44872f2](https://github.com/jairo-bc/stencil-cli/commit/44872f2a9c50ecd96b65e1035633066d76705b03))
* strf-8574, bump version of "github" package to fix security issues ([1013e3a](https://github.com/jairo-bc/stencil-cli/commit/1013e3a8357fded819ff9764fdb95423e66351f6))
* strf-8574, bump version of "inquirer" to fix security issues ([474c9af](https://github.com/jairo-bc/stencil-cli/commit/474c9afb2896c92234dcb5f7b5154f56b1e957e7))
* strf-8574, remove redundant dependency "hoek" ([9aeb3c1](https://github.com/jairo-bc/stencil-cli/commit/9aeb3c1955db9d943551baa21bea13e5fbcfe48b))
* strf-8846 Send stencil-cli header to storefront api ([#789](https://github.com/jairo-bc/stencil-cli/issues/789)) ([aefa595](https://github.com/jairo-bc/stencil-cli/commit/aefa59527a9dfdbbcb8fc218eb82a5b7c19b5ffb))
* strf-9245 don't try to load default shopper lang file, when it doesn't exist ([#805](https://github.com/jairo-bc/stencil-cli/issues/805)) ([10e7dbb](https://github.com/jairo-bc/stencil-cli/commit/10e7dbbd8679e331a24064eb6397a42dcddd1fd3))
* strf-9257 Added check if theme version exists ([#745](https://github.com/jairo-bc/stencil-cli/issues/745)) ([a520a55](https://github.com/jairo-bc/stencil-cli/commit/a520a551f93765f16e46414557d0a15fb88c9dd4))
* strf-9312 Rename github workflow on relaese action ([#763](https://github.com/jairo-bc/stencil-cli/issues/763)) ([c2671de](https://github.com/jairo-bc/stencil-cli/commit/c2671deeb8659bba6d7ee7ce5db5e81e646afc7b))
* strf-9356 Replace ssh to https on node-sass dep ([#775](https://github.com/jairo-bc/stencil-cli/issues/775)) ([8801911](https://github.com/jairo-bc/stencil-cli/commit/8801911f977d2910fdc894b55236cbf74f866707))
* strf-9356 Support npm 7 for stencil cli ([#769](https://github.com/jairo-bc/stencil-cli/issues/769)) ([6131b55](https://github.com/jairo-bc/stencil-cli/commit/6131b55f3becd12696ed84428d62d62e38f7c215))
* strf-9375 Fix custom release tag selection ([#783](https://github.com/jairo-bc/stencil-cli/issues/783)) ([666fb59](https://github.com/jairo-bc/stencil-cli/commit/666fb59f8491b49b6fc4a2ecac1b2c533fd8d9ba))
* strf-9474 Removed "git+" prefix from package-lock ([#794](https://github.com/jairo-bc/stencil-cli/issues/794)) ([b942ca0](https://github.com/jairo-bc/stencil-cli/commit/b942ca049d8716646c26c4f7bd7a1488b097d534))
* strf-9535 Add fallback for shopper language default ([4ab500c](https://github.com/jairo-bc/stencil-cli/commit/4ab500c7a83ef1b24ea3658ee28943280af64be0))
* strf-9553 bundled lang.json has lowercase lang keys ([#808](https://github.com/jairo-bc/stencil-cli/issues/808)) ([bb8a981](https://github.com/jairo-bc/stencil-cli/commit/bb8a981e37aa14f2f28704dce15da3368a117c35))
* strf-9576 Fix graphql queries ([#810](https://github.com/jairo-bc/stencil-cli/issues/810)) ([7ba579a](https://github.com/jairo-bc/stencil-cli/commit/7ba579a74ff790033044312345c9e2fb0fea23f4))
* strf-9581 Remove gulp tasks, that are not used anymore ([#817](https://github.com/jairo-bc/stencil-cli/issues/817)) ([c5f2b44](https://github.com/jairo-bc/stencil-cli/commit/c5f2b441c1b9611c802b1b46eb15115ae820410d))
* strf-9581 Update cheerio version ([#819](https://github.com/jairo-bc/stencil-cli/issues/819)) ([3a754f4](https://github.com/jairo-bc/stencil-cli/commit/3a754f49c046e5c5aa68fe846b41be9ee56b4fc0))
* strf-9600 bump stencil styles version ([#832](https://github.com/jairo-bc/stencil-cli/issues/832)) ([7249709](https://github.com/jairo-bc/stencil-cli/commit/72497095efe8da3a1925e6ef25880e5d5aa1305b))
* strf-9612 Fix stencil pull when there is 1 channel ([#859](https://github.com/jairo-bc/stencil-cli/issues/859)) ([4674a4f](https://github.com/jairo-bc/stencil-cli/commit/4674a4f70ee009a75f7af81a37f70c6b528c5354))
* STRF-9781 Bump async and confidence ([#929](https://github.com/jairo-bc/stencil-cli/issues/929)) ([e2692cb](https://github.com/jairo-bc/stencil-cli/commit/e2692cb4648614934d5678caec3d6eb865032c4f))
* strf-9781 Bump axios, @ocktokit/rest and browser-sync ([#931](https://github.com/jairo-bc/stencil-cli/issues/931)) ([9cfa244](https://github.com/jairo-bc/stencil-cli/commit/9cfa24469563684a96dbb07f0fcfc77802e7dd8a))
* strf-9781 Bump dev packages for linting ([#932](https://github.com/jairo-bc/stencil-cli/issues/932)) ([53216f1](https://github.com/jairo-bc/stencil-cli/commit/53216f1328eee99f46c390916a4153b118e07120))
* STRF-9781 Bump hapi dependencies ([#930](https://github.com/jairo-bc/stencil-cli/issues/930)) ([05cb607](https://github.com/jairo-bc/stencil-cli/commit/05cb6077497e3fee68578d04f95ab86f0b522c4d))
* STRF-9781 Bump simple-git ([#928](https://github.com/jairo-bc/stencil-cli/issues/928)) ([220f18e](https://github.com/jairo-bc/stencil-cli/commit/220f18e33ccc6a8480775d3f847e1c178b5175bb))
* strf-9835 Bump paper ([#947](https://github.com/jairo-bc/stencil-cli/issues/947)) ([36e0192](https://github.com/jairo-bc/stencil-cli/commit/36e01923eea949ca3590d7510c773a0853c6fae1))
* STRF-9883 Interm fix to grab 1st variation ([#951](https://github.com/jairo-bc/stencil-cli/issues/951)) ([cd36482](https://github.com/jairo-bc/stencil-cli/commit/cd3648214125b430904c1b8c99ec0420416bb6b4))
* tags ([3f32d2c](https://github.com/jairo-bc/stencil-cli/commit/3f32d2c47a7a8e0c59ce0847e84c9981d930ec93))
* tags2 ([6f7146d](https://github.com/jairo-bc/stencil-cli/commit/6f7146d33740f74d17e4d110e843c4639bb4e6f0))
* update changelog and add tag format w/o 'v' ([#1014](https://github.com/jairo-bc/stencil-cli/issues/1014)) ([26af8fa](https://github.com/jairo-bc/stencil-cli/commit/26af8fadcf47de16f80c1e2560b58857671679cc))
* update node version in readme ([#1239](https://github.com/jairo-bc/stencil-cli/issues/1239)) ([3a8b0ef](https://github.com/jairo-bc/stencil-cli/commit/3a8b0ef2312638f48cc4eb490317d199ac614639))
* update scss autofix cmd name ([de977a4](https://github.com/jairo-bc/stencil-cli/commit/de977a4d0ac526ffa404d44572f8baef951cb4cf))
* Updated package.json ([#827](https://github.com/jairo-bc/stencil-cli/issues/827)) ([8d71941](https://github.com/jairo-bc/stencil-cli/commit/8d71941f68abb4b5692ece8f28c82cbaf380bd85))
* use absolute path for build tag ([#1280](https://github.com/jairo-bc/stencil-cli/issues/1280)) ([d0ba859](https://github.com/jairo-bc/stencil-cli/commit/d0ba85989348b5c1247ea0354534c055427c448a))
* windows circle ci ([#879](https://github.com/jairo-bc/stencil-cli/issues/879)) ([08be707](https://github.com/jairo-bc/stencil-cli/commit/08be707c90728d180dc091589ef724db148ea2a5))


### Features

* (strf-8608) bump recent updates in npm packages ([e50e231](https://github.com/jairo-bc/stencil-cli/commit/e50e23186c4e08853be48985585252d298d50d16))
* (strf-8608) deleted unused npm dependencies ([1f64ad9](https://github.com/jairo-bc/stencil-cli/commit/1f64ad94dc536626f236293385d50fc5071669da))
* (strf-8608) replace "request" with "node-fetch" ([e758b01](https://github.com/jairo-bc/stencil-cli/commit/e758b01cf923a280ac0c3bedb64d980183c24fc5))
* (strf-8608) replaced lab+code+sinon with jest ([71e952f](https://github.com/jairo-bc/stencil-cli/commit/71e952fb6e21825a082ee2aa25cb3db00e98a222))
* (strf-8608) update "front-matter" ([a0aa6fd](https://github.com/jairo-bc/stencil-cli/commit/a0aa6fd34d1e320d39fe36de8403339ed900b346))
* (strf-8608) update "simple-git" ([7153455](https://github.com/jairo-bc/stencil-cli/commit/7153455ade76a7254a41e4e88929cc57824e5c30))
* (strf-8608) update "tarjan-graph" ([4a27ee6](https://github.com/jairo-bc/stencil-cli/commit/4a27ee6823563cfccb4f377d5db84647605e85c9))
* (strf-8608) updated some npm dependencies ([9059210](https://github.com/jairo-bc/stencil-cli/commit/9059210c113c22cd5d54412c4dfa351f72a1ff69))
* (strf-8625) support Node 12.x ([1449751](https://github.com/jairo-bc/stencil-cli/commit/1449751916e1e90793ba7150c418c26a3046f58c))
* (strf-8630) fix template engine values ([0af2cb5](https://github.com/jairo-bc/stencil-cli/commit/0af2cb589ca0dff294a8ccac85f3d68ceda630b9))
* (strf-8671) replace "wreck" with "node-fetch" ([6dcdd9b](https://github.com/jairo-bc/stencil-cli/commit/6dcdd9bb0e261ea0531051ca76ccf12128e1980e))
* (strf-8672) improve ESLint config and add prettier ([a8b78c8](https://github.com/jairo-bc/stencil-cli/commit/a8b78c8817e00922e12d5278f79f3963f7e6cbf4))
* (strf-8673) update "commander" ([dc3bf29](https://github.com/jairo-bc/stencil-cli/commit/dc3bf296e5f8d4bc852859934428b6d16cfecff9))
* (strf-8674) update "async" npm package ([9f64096](https://github.com/jairo-bc/stencil-cli/commit/9f6409622cb02ec03f523e360d7d66bb3fbf8a30))
* (strf-8684) update 'tmp' package ([b1e932c](https://github.com/jairo-bc/stencil-cli/commit/b1e932cd53e2161e6482148e5c9e950cef774614))
* (strf-8740) cover StencilStart.assembleTemplates() with tests ([0adf1f8](https://github.com/jairo-bc/stencil-cli/commit/0adf1f860ef752fd49fad918d67929081741a327))
* (strf-8747) split .stencil file into 2 configs ([6f3d2dc](https://github.com/jairo-bc/stencil-cli/commit/6f3d2dcaa7205b7c8c54da729c936c649d109e38))
* add codewoners ([#1097](https://github.com/jairo-bc/stencil-cli/issues/1097)) ([e671f6b](https://github.com/jairo-bc/stencil-cli/commit/e671f6b00eda8de6a13e46e6dfdfd3e4dea19fe8))
* Add overwrite option to download command ([#785](https://github.com/jairo-bc/stencil-cli/issues/785)) ([eb78444](https://github.com/jairo-bc/stencil-cli/commit/eb78444a9dd3ac8a80a9b5321852ee5af58b3e01))
* Add source maps option to bundle and push process ([#1245](https://github.com/jairo-bc/stencil-cli/issues/1245)) ([2604750](https://github.com/jairo-bc/stencil-cli/commit/2604750209d5784a1117329acacb0df9d860abeb))
* allow `.css`-files imports within SCSS files ([#882](https://github.com/jairo-bc/stencil-cli/issues/882)) ([4ef424e](https://github.com/jairo-bc/stencil-cli/commit/4ef424e59fe3a5946dfd70d75d52be8a3a814a4c))
* bump paper to rc30, release 2.2.0 ([6945a3c](https://github.com/jairo-bc/stencil-cli/commit/6945a3cbd0676b5b0282d82c91ae70b2eb9e3274))
* bump paper to rc31 ([b958744](https://github.com/jairo-bc/stencil-cli/commit/b958744effafdf3351b9af600a41e4ce8e5c6919))
* **config:** add ability to specify the secret file name ([#957](https://github.com/jairo-bc/stencil-cli/issues/957)) ([1590a7e](https://github.com/jairo-bc/stencil-cli/commit/1590a7e6e8c7267627cb38d6eefdaf924dbf1e62))
* **docs:** add project structure and best practices ([251c1ff](https://github.com/jairo-bc/stencil-cli/commit/251c1fff4a1a1809d434b76e213654759fa71440))
* increase coverage threshold ([9dfa78c](https://github.com/jairo-bc/stencil-cli/commit/9dfa78c050bda5d0d922e85eeeb257b73916d80e))
* init no longer prompts when cli option is present ([a9fee29](https://github.com/jairo-bc/stencil-cli/commit/a9fee29848877fc054d62a379d7d69fccdd949c9))
* **localization:** merc-7830 support for region translations ([9e66d6b](https://github.com/jairo-bc/stencil-cli/commit/9e66d6be6c81adc15651537e1b34d48e4ac4432a))
* make init command more suitable for automation  ([ab9b919](https://github.com/jairo-bc/stencil-cli/commit/ab9b9190bb2cf8c9c225c98a55079fcaf7b202b9))
* **other:** merc-7797 added feature to render widgets ([40c410b](https://github.com/jairo-bc/stencil-cli/commit/40c410bcbb46dbcb44968fb4d4a60c849d88fe08))
* **other:** merc-7834 validate theme variation translations ([219dc60](https://github.com/jairo-bc/stencil-cli/commit/219dc600ff90ef376afcb764d3d3ea2a9d0c8582))
* **payments:** paypal-1514 add sort item to theme schema ([f3820ba](https://github.com/jairo-bc/stencil-cli/commit/f3820ba503cef27b554d5613d1ce91ca95b7e370))
* remove old unused field staplerUrl from local server ([a3ec69f](https://github.com/jairo-bc/stencil-cli/commit/a3ec69f04a4d6fe67f8bcca12eba12afb2c8d796))
* Show channel IDs in channel prompt when starting dev server ([#1225](https://github.com/jairo-bc/stencil-cli/issues/1225)) ([df23a36](https://github.com/jairo-bc/stencil-cli/commit/df23a3639e2020cdfff1a0ce92181b34f8048820))
* **storefront:** bctheme-1063 modify stencil to start locally with components ui library ([eccacb9](https://github.com/jairo-bc/stencil-cli/commit/eccacb921c99dd832082f2793899ed5387dd2495))
* **storefront:** bctheme-1064 modify stencil bundle for using components ui library ([59af216](https://github.com/jairo-bc/stencil-cli/commit/59af21604b1103b38ce01a93d5270f684de5d890))
* **storefront:** strf-10292 Node 16 Support ([#1048](https://github.com/jairo-bc/stencil-cli/issues/1048)) ([c754933](https://github.com/jairo-bc/stencil-cli/commit/c754933a70672e7741e2c1566dcb664071eed3cf))
* **storefront:** strf-10292 Node 18 Support ([#1048](https://github.com/jairo-bc/stencil-cli/issues/1048)) ([#1058](https://github.com/jairo-bc/stencil-cli/issues/1058)) ([48c912c](https://github.com/jairo-bc/stencil-cli/commit/48c912c563d8eea9c8830b19ed5c4923d565789e))
* **storefront:** strf-9174 Product object in quick view on localhost not consistent with prod: ([#991](https://github.com/jairo-bc/stencil-cli/issues/991)) ([2f14d57](https://github.com/jairo-bc/stencil-cli/commit/2f14d57dabbd6d3e3f6f8d57dfe8cf0703a65f76))
* **storefront:** strf-9582 stencil push: apply theme to multiple storefronts ([#825](https://github.com/jairo-bc/stencil-cli/issues/825)) ([fa7a257](https://github.com/jairo-bc/stencil-cli/commit/fa7a257b1166ac5bf0012d5faf820897a3f9a381))
* **storefront:** strf-9832 Inconsistent behavior for FM in custom templates: ([#983](https://github.com/jairo-bc/stencil-cli/issues/983)) ([17a25f1](https://github.com/jairo-bc/stencil-cli/commit/17a25f169d39aa7c20b3df1d3858f94f041cd8bc))
* **storefront:** strf-9921 Hide logging for successful internal API calls in Stencil CLI: ([#1033](https://github.com/jairo-bc/stencil-cli/issues/1033)) ([d8c2492](https://github.com/jairo-bc/stencil-cli/commit/d8c2492097c49de93f1640c93a393d6df3d2a322))
* **storefront:** strf-9923 CLI should not ask users for which API hostname to use: ([#955](https://github.com/jairo-bc/stencil-cli/issues/955)) ([d7c4c47](https://github.com/jairo-bc/stencil-cli/commit/d7c4c478cd179281d04c51ffb4644c04ef79e8e6))
* STRF-10101 Check translation rows compilation on stencil bundle/start ([#1145](https://github.com/jairo-bc/stencil-cli/issues/1145)) ([92b760a](https://github.com/jairo-bc/stencil-cli/commit/92b760a7d4a1a1fe38467c1d5213b85a00e95975))
* STRF-10157 Introduce Semantic Release ([#1008](https://github.com/jairo-bc/stencil-cli/issues/1008)) ([085684d](https://github.com/jairo-bc/stencil-cli/commit/085684dae7afef55b1681f6bf3236777fde1df4d))
* strf-10366 beta version ([e7887ea](https://github.com/jairo-bc/stencil-cli/commit/e7887ea9c5e82a2fb98f5fad196f3d10cdfdadac))
* strf-10437 Autofix script: conditional file import ([#1064](https://github.com/jairo-bc/stencil-cli/issues/1064)) ([d00f35c](https://github.com/jairo-bc/stencil-cli/commit/d00f35c3d7c99314cc1f05aea7c5c12b682ebbf9))
* strf-10437 Autofix script: conditional file import ([#1071](https://github.com/jairo-bc/stencil-cli/issues/1071)) ([e4d084c](https://github.com/jairo-bc/stencil-cli/commit/e4d084cc28c6108950701385e09c157d9c6e79ec))
* strf-10457 Conditional multi import ([483c752](https://github.com/jairo-bc/stencil-cli/commit/483c752e7b58dd9f231e8f214743ed9e751a814a))
* strf-10477, strf-10457 Base-level rules and conditional multi file import ([037c4d5](https://github.com/jairo-bc/stencil-cli/commit/037c4d51c0fdba61fc6149d0fc37ea612177c508))
* strf-10482 Bad comma in the selectors ([14f4f79](https://github.com/jairo-bc/stencil-cli/commit/14f4f790afcd098c32b96dfb1b71570b9d05106e))
* STRF-10485 Nested multi file import ([5507b5e](https://github.com/jairo-bc/stencil-cli/commit/5507b5ed60b6a7b93555a70f0c22a724b07aeab4))
* STRF-10507 Scss autofix issue: Undefined variable ([4991e6f](https://github.com/jairo-bc/stencil-cli/commit/4991e6f7febab80619256909d8c97afbcfb0dcd1))
* STRF-10840 Provide optional --branch to release command ([#1111](https://github.com/jairo-bc/stencil-cli/issues/1111)) ([d5b9103](https://github.com/jairo-bc/stencil-cli/commit/d5b910377774f6aebc11c5ef9c49f027febc3f2c))
* STRF-11523 Add the ability to use Handlebar Partial Blocks ([#1167](https://github.com/jairo-bc/stencil-cli/issues/1167)) ([39a7fbc](https://github.com/jairo-bc/stencil-cli/commit/39a7fbcad5a45f95fddeecc463a207818bfd8db2))
* STRF-11741 Stencil init: auto install dependencies ([#1183](https://github.com/jairo-bc/stencil-cli/issues/1183)) ([ca4221b](https://github.com/jairo-bc/stencil-cli/commit/ca4221bdb4756352b537b8dc06989c0361e43628))
* STRF-11834 Consolidate css assembing logic ([#1231](https://github.com/jairo-bc/stencil-cli/issues/1231)) ([94e97d9](https://github.com/jairo-bc/stencil-cli/commit/94e97d90f0e6bd3a6243a4ba93d6ec3e04437f6b))
* STRF-11900 Bump paper and handlebars for node 20 ([#1219](https://github.com/jairo-bc/stencil-cli/issues/1219)) ([72758ef](https://github.com/jairo-bc/stencil-cli/commit/72758ef6228ba9a8be9db830dc5a0c2b37732f22))
* STRF-11903 Migrate to ESM ([#1230](https://github.com/jairo-bc/stencil-cli/issues/1230)) ([9e462ea](https://github.com/jairo-bc/stencil-cli/commit/9e462ea44967e60c8003519154301d1c96a949b0))
* STRF-12315 Bump stencil-paper version; BREAKING CHANGE: Drop Node 16 Support ([#1217](https://github.com/jairo-bc/stencil-cli/issues/1217)) ([cfbb706](https://github.com/jairo-bc/stencil-cli/commit/cfbb7064f1f1ff128dad1c4e29c4a89f48c117c8))
* STRF-12941 Add channelUrl parameter to stencil start ([#1254](https://github.com/jairo-bc/stencil-cli/issues/1254)) ([988c787](https://github.com/jairo-bc/stencil-cli/commit/988c7878bf8d3838955478b67dd7938ab90fc0eb))
* STRF-13396 Stencil Context Attributes Usage Analyzer ([#1264](https://github.com/jairo-bc/stencil-cli/issues/1264)) ([b329fbc](https://github.com/jairo-bc/stencil-cli/commit/b329fbcb4656bf6c36e6b38bf4f27f29b0271d1b))
* STRF-13399 If theme doesn't have stencil.conf.js, download it from cornerstone ([#1271](https://github.com/jairo-bc/stencil-cli/issues/1271)) ([8041754](https://github.com/jairo-bc/stencil-cli/commit/80417541f809f4a14cf8b6b2566e58407cbd7cc6))
* strf-7651 - update push command to take into account multiple channels ([7582e7c](https://github.com/jairo-bc/stencil-cli/commit/7582e7c85b4b6c858a25670a13e7981611e2ca03))
* strf-8282 - update pull command to take into account multiple channels ([00b4571](https://github.com/jairo-bc/stencil-cli/commit/00b4571e6fe7ecf16ffb47c3cfc01ae734e528a9))
* strf-8282 - use sites instead of channels API ([bf16215](https://github.com/jairo-bc/stencil-cli/commit/bf162151d773fffec289b9a1162ca7b74c507c1e))
* strf-8589, drop JSPM support ([c39c67b](https://github.com/jairo-bc/stencil-cli/commit/c39c67b483fd01caaa79973c239d9a49b1d53de8))
* strf-9040 Support dart-sass as primary engine for css rendering ([#779](https://github.com/jairo-bc/stencil-cli/issues/779)) ([39abce5](https://github.com/jairo-bc/stencil-cli/commit/39abce5a9b83caa55b200e4480af662933b9df21))
* strf-9071 - update download command to support multiple channels ([d6a9f94](https://github.com/jairo-bc/stencil-cli/commit/d6a9f949207cfa15909ce72c17deffec726fe1bd))
* strf-9087 stencil localhost only shows default storefront data ([#720](https://github.com/jairo-bc/stencil-cli/issues/720)) ([85d7733](https://github.com/jairo-bc/stencil-cli/commit/85d77339c7beee1346ce33ad2b4d6dc4881bff04))
* strf-9245 Warn user if shopper default language file is missing or has missing keys ([#802](https://github.com/jairo-bc/stencil-cli/issues/802)) ([1660d15](https://github.com/jairo-bc/stencil-cli/commit/1660d15cb277d1a496197525702713d6c88291c3))
* strf-9303 Replaced jsonlint with parse-json ([#758](https://github.com/jairo-bc/stencil-cli/issues/758)) ([48b46cf](https://github.com/jairo-bc/stencil-cli/commit/48b46cf7f052b0acc2ddc4911c561271b89d68c6))
* strf-9319 Github Release for stencil-cli ([#751](https://github.com/jairo-bc/stencil-cli/issues/751)) ([7283549](https://github.com/jairo-bc/stencil-cli/commit/728354906f8bcfbd9d7f4c9a47f44211ca5d2266))
* strf-9332 added timeout parameter for stencil bundle command ([#767](https://github.com/jairo-bc/stencil-cli/issues/767)) ([a4a268c](https://github.com/jairo-bc/stencil-cli/commit/a4a268c4ccd9148489b76b9dd26f8a64efa89ce2))
* strf-9345 Infer apiHost from storeUrl ([5b132e9](https://github.com/jairo-bc/stencil-cli/commit/5b132e90b62ab5583e43fe600431ff4787903f2c))
* strf-9345: Fallback to API_HOST constant in the absense of a provided one ([d138536](https://github.com/jairo-bc/stencil-cli/commit/d138536c82d784b158ed743996311053af121a54))
* strf-9345: Log api host ([51b08a9](https://github.com/jairo-bc/stencil-cli/commit/51b08a9b233c32662c1571d427021664f805192e))
* strf-9440 Stencil Bundle: fail on scss failure compilation ([#884](https://github.com/jairo-bc/stencil-cli/issues/884)) ([c5cd24d](https://github.com/jairo-bc/stencil-cli/commit/c5cd24d5d6dccad5f87e3443da9aae8f904f25db))
* STRF-9706 Support node 14 and drop node 14 ([#910](https://github.com/jairo-bc/stencil-cli/issues/910)) ([b012aa7](https://github.com/jairo-bc/stencil-cli/commit/b012aa7507f09ba26a5d44a992923dba9b9abc27))
* strf-9718 Add OAuth token to headers ([#903](https://github.com/jairo-bc/stencil-cli/issues/903)) ([4056814](https://github.com/jairo-bc/stencil-cli/commit/4056814340ebecb028c76b878a9313a1fa8975dd))
* STRF-9741 Verbose error logging in Stencil CLI ([fa37d48](https://github.com/jairo-bc/stencil-cli/commit/fa37d48b2d7ca2f2179a083d2e981c004c83db66))
* STRF-9749 Update Stencil Cli to use node-sass latest by default ([#923](https://github.com/jairo-bc/stencil-cli/issues/923)) ([6b57389](https://github.com/jairo-bc/stencil-cli/commit/6b5738904fd3e980a1b04f684147c1392841860b))
* STRF-9757 Add some "stencil debug" command which dumps system info useful for troubleshooting in a user-friendly way ([#918](https://github.com/jairo-bc/stencil-cli/issues/918)) ([6a4167f](https://github.com/jairo-bc/stencil-cli/commit/6a4167f0adef6024052b71883001b350c67647ef))
* strf-9791 Drop Node 12 Support ([#945](https://github.com/jairo-bc/stencil-cli/issues/945)) ([eabcf31](https://github.com/jairo-bc/stencil-cli/commit/eabcf31eeb012b7a25a8b187436ffbcc3f86c30e))
* STRF-9807 Dockerize stencil cli ([#938](https://github.com/jairo-bc/stencil-cli/issues/938)) ([3ef14ab](https://github.com/jairo-bc/stencil-cli/commit/3ef14aba84bc29f4ec6f85d4665ec7abe3927ceb))
* STRF-9877 Publish stencil cli docker image ([#972](https://github.com/jairo-bc/stencil-cli/issues/972)) ([63bc0aa](https://github.com/jairo-bc/stencil-cli/commit/63bc0aa1f32c0f6e06feae4ca26c41d0a9594005))
* update "stencil pull" to use configurations API, improving performance ([2b142fc](https://github.com/jairo-bc/stencil-cli/commit/2b142fc0d911ce7ec62375517740fac1795708d6))
* update cli to use template engine based on the value stored in ([f9ea0a9](https://github.com/jairo-bc/stencil-cli/commit/f9ea0a924dc9701b5b5302a0650a846f96812f0c))
* warn npm users if npm is above 7 version ([#846](https://github.com/jairo-bc/stencil-cli/issues/846)) ([32ee074](https://github.com/jairo-bc/stencil-cli/commit/32ee0749e05aef6527ccc617af1b4e7fe8adf07e))


### Reverts

* "feat: strf-10437 Autofix script: conditional file import ([#1064](https://github.com/jairo-bc/stencil-cli/issues/1064))" ([#1068](https://github.com/jairo-bc/stencil-cli/issues/1068)) ([060b713](https://github.com/jairo-bc/stencil-cli/commit/060b7132859550f9ae8594d3312198498c224640))
* Revert "build(release): v3.9.3 dump stencil styles ([#865](https://github.com/jairo-bc/stencil-cli/issues/865))" ([#866](https://github.com/jairo-bc/stencil-cli/issues/866)) ([6af7b2e](https://github.com/jairo-bc/stencil-cli/commit/6af7b2e00eda12c66706afc972efd7da281c5458))
* Revert "docs(release): 5.2.1: ([#984](https://github.com/jairo-bc/stencil-cli/issues/984))" ([#985](https://github.com/jairo-bc/stencil-cli/issues/985)) ([4f6fd14](https://github.com/jairo-bc/stencil-cli/commit/4f6fd14ef0e280efe201c5bf50708af7a6c5cc54))
* Revert "docs(release): 5.2.1: ([#986](https://github.com/jairo-bc/stencil-cli/issues/986))" ([#987](https://github.com/jairo-bc/stencil-cli/issues/987)) ([1d703fb](https://github.com/jairo-bc/stencil-cli/commit/1d703fbe9a25bb4f763c6879d580f51120103803))
* Revert "Show channel IDs in channel prompt when starting dev server" ([#1223](https://github.com/jairo-bc/stencil-cli/issues/1223)) ([5872c13](https://github.com/jairo-bc/stencil-cli/commit/5872c13c267e60e3520c1fca9d10fb395984be6a)), closes [#1222](https://github.com/jairo-bc/stencil-cli/issues/1222)


### BREAKING CHANGES

* Drop Node 16 Support
* **storefront:** Drop Node 14 Support
* **storefront:** logging for successful internal API calls has been removed.

## [8.8.0](https://github.com/bigcommerce/stencil-cli/compare/8.7.0...8.8.0) (2025-06-27)


### Features

* STRF-13399 If theme doesn't have stencil.conf.js, download it from cornerstone ([#1271](https://github.com/bigcommerce/stencil-cli/issues/1271)) ([8041754](https://github.com/bigcommerce/stencil-cli/commit/80417541f809f4a14cf8b6b2566e58407cbd7cc6))



## [8.7.0](https://github.com/bigcommerce/stencil-cli/compare/8.6.7...8.7.0) (2025-06-27)


### Features

* STRF-13396 Stencil Context Attributes Usage Analyzer ([#1264](https://github.com/bigcommerce/stencil-cli/issues/1264)) ([b329fbc](https://github.com/bigcommerce/stencil-cli/commit/b329fbcb4656bf6c36e6b38bf4f27f29b0271d1b))



## [8.6.7](https://github.com/bigcommerce/stencil-cli/compare/8.6.6...8.6.7) (2025-06-26)


### Bug Fixes

* STRF-12935 Update nodejs Docker version and CI job env var names ([#1269](https://github.com/bigcommerce/stencil-cli/issues/1269)) ([555f58b](https://github.com/bigcommerce/stencil-cli/commit/555f58b6ff63e7d602b7db79625bc722cef1cd78))



## [8.6.6](https://github.com/bigcommerce/stencil-cli/compare/8.6.5...8.6.6) (2025-06-19)


### Bug Fixes

* STRF-12935 Update docker CI actions versions ([#1268](https://github.com/bigcommerce/stencil-cli/issues/1268)) ([ea8e831](https://github.com/bigcommerce/stencil-cli/commit/ea8e831a8168f1f6f60c6b3b12d1ecf8a0b590fa))



## [8.6.5](https://github.com/bigcommerce/stencil-cli/compare/8.6.4...8.6.5) (2025-06-18)


### Bug Fixes

* move release image CI job to relase workflow ([#1266](https://github.com/bigcommerce/stencil-cli/issues/1266)) ([16a4539](https://github.com/bigcommerce/stencil-cli/commit/16a45394d4bfebd9d68076e278f11e22c017f8cd))



## [8.6.4](https://github.com/bigcommerce/stencil-cli/compare/8.6.3...8.6.4) (2025-06-18)


### Bug Fixes

* STRF-12935 Fix docker image publishing ([#1265](https://github.com/bigcommerce/stencil-cli/issues/1265)) ([64afbce](https://github.com/bigcommerce/stencil-cli/commit/64afbcea2d63b6c7ea948fc83a6858623a3916e7))



## [8.6.3](https://github.com/bigcommerce/stencil-cli/compare/8.6.2...8.6.3) (2025-05-28)


### Bug Fixes

* bump paper to 5.1.6; fix chrono-node version ([#1263](https://github.com/bigcommerce/stencil-cli/issues/1263)) ([a32a36b](https://github.com/bigcommerce/stencil-cli/commit/a32a36b4d1343b7d7683ec02d637a941e80f8658))



## [8.6.2](https://github.com/bigcommerce/stencil-cli/compare/8.6.1...8.6.2) (2025-05-14)


### Bug Fixes

* bump paper to 5.1.4 ([#1260](https://github.com/bigcommerce/stencil-cli/issues/1260)) ([1b78b72](https://github.com/bigcommerce/stencil-cli/commit/1b78b725bf431fede0269625d48d722f681480de))



## [8.6.1](https://github.com/bigcommerce/stencil-cli/compare/8.6.0...8.6.1) (2025-04-14)


### Bug Fixes

* Add new stencil config file to zip bundle ([#1259](https://github.com/bigcommerce/stencil-cli/issues/1259)) ([4f66d71](https://github.com/bigcommerce/stencil-cli/commit/4f66d71e0b77ca967e29766751604138733af95b))



# [8.6.0](https://github.com/bigcommerce/stencil-cli/compare/8.5.2...8.6.0) (2025-01-17)


### Features

* STRF-12941 Add channelUrl parameter to stencil start ([#1254](https://github.com/bigcommerce/stencil-cli/issues/1254)) ([988c787](https://github.com/bigcommerce/stencil-cli/commit/988c7878bf8d3838955478b67dd7938ab90fc0eb))



## [8.5.2](https://github.com/bigcommerce/stencil-cli/compare/8.5.1...8.5.2) (2025-01-09)


### Bug Fixes

* STRF-12941 Fix stencil release in case of having .git extension in the remote name ([#1252](https://github.com/bigcommerce/stencil-cli/issues/1252)) ([15195aa](https://github.com/bigcommerce/stencil-cli/commit/15195aaf82644e6680c7859d087f7117fbf5cfd0))


## [8.5.1](https://github.com/bigcommerce/stencil-cli/compare/8.5.0...8.5.1) (2024-12-18)


### Bug Fixes

* STRF-11523 Enable dynamic partials ([#1248](https://github.com/bigcommerce/stencil-cli/issues/1248)) ([4fab613](https://github.com/bigcommerce/stencil-cli/commit/4fab61385b076ffe6105bb1196aace787143ef9b))



# [8.5.0](https://github.com/bigcommerce/stencil-cli/compare/8.4.1...8.5.0) (2024-12-13)


### Features

* Add source maps option to bundle and push process ([#1245](https://github.com/bigcommerce/stencil-cli/issues/1245)) ([2604750](https://github.com/bigcommerce/stencil-cli/commit/2604750209d5784a1117329acacb0df9d860abeb))


# [8.4.0](https://github.com/bigcommerce/stencil-cli/compare/8.3.0...8.4.0) (2024-09-26)


### Bug Fixes

* semantic release deploy to npm ([#1233](https://github.com/bigcommerce/stencil-cli/issues/1233)) ([5ed0cf3](https://github.com/bigcommerce/stencil-cli/commit/5ed0cf359f9f3101898cea075ad98600ad9e320b))
* set node 20 for release ([#1234](https://github.com/bigcommerce/stencil-cli/issues/1234)) ([250bb07](https://github.com/bigcommerce/stencil-cli/commit/250bb076942dfc70b3b6a3f69654a7c4f0a8dfd6))


### Features

* STRF-11903 Migrate to ESM ([#1230](https://github.com/bigcommerce/stencil-cli/issues/1230)) ([9e462ea](https://github.com/bigcommerce/stencil-cli/commit/9e462ea44967e60c8003519154301d1c96a949b0))


# [8.3.0](https://github.com/bigcommerce/stencil-cli/compare/8.2.0...8.3.0) (2024-09-20)


### Features

* STRF-11834 Consolidate css assembing logic ([#1231](https://github.com/bigcommerce/stencil-cli/issues/1231)) ([94e97d9](https://github.com/bigcommerce/stencil-cli/commit/94e97d90f0e6bd3a6243a4ba93d6ec3e04437f6b))

# [8.2.0](https://github.com/bigcommerce/stencil-cli/compare/8.1.1...8.2.0) (2024-08-29)


### Features

* Show channel IDs in channel prompt when starting dev server ([#1225](https://github.com/bigcommerce/stencil-cli/issues/1225)) ([df23a36](https://github.com/bigcommerce/stencil-cli/commit/df23a3639e2020cdfff1a0ce92181b34f8048820))

## [8.1.1](https://github.com/bigcommerce/stencil-cli/compare/8.1.0...8.1.1) (2024-08-29)


### Reverts

* Revert "Show channel IDs in channel prompt when starting dev server" (#1223) ([5872c13](https://github.com/bigcommerce/stencil-cli/commit/5872c13c267e60e3520c1fca9d10fb395984be6a)), closes [#1223](https://github.com/bigcommerce/stencil-cli/issues/1223) [#1222](https://github.com/bigcommerce/stencil-cli/issues/1222)


# [8.1.0](https://github.com/bigcommerce/stencil-cli/compare/8.0.0...8.1.0) (2024-08-21)


### Features

* STRF-11900 Bump paper and handlebars for node 20 ([#1219](https://github.com/bigcommerce/stencil-cli/issues/1219)) ([72758ef](https://github.com/bigcommerce/stencil-cli/commit/72758ef6228ba9a8be9db830dc5a0c2b37732f22))

# [8.0.0](https://github.com/bigcommerce/stencil-cli/compare/7.5.5...8.0.0) (2024-08-05)


### Features

* STRF-12315 Bump stencil-paper version; BREAKING CHANGE: Drop Node 16 Support ([#1217](https://github.com/bigcommerce/stencil-cli/issues/1217)) ([cfbb706](https://github.com/bigcommerce/stencil-cli/commit/cfbb7064f1f1ff128dad1c4e29c4a89f48c117c8))


### BREAKING CHANGES

* Drop Node 16 Support

## [7.5.5](https://github.com/bigcommerce/stencil-cli/compare/7.5.4...7.5.5) (2024-04-16)


### Bug Fixes

* STRF-11899 Update cart when multiple coupons are removed ([#1197](https://github.com/bigcommerce/stencil-cli/issues/1197)) ([13a31ba](https://github.com/bigcommerce/stencil-cli/commit/13a31ba21b2eea46cf8c8fdb2087a74a6cc3acdc))

## [7.5.4](https://github.com/bigcommerce/stencil-cli/compare/7.5.3...7.5.4) (2024-04-16)


### Bug Fixes

* STRF-11934 Separate Github PR Title check  ([#1199](https://github.com/bigcommerce/stencil-cli/issues/1199)) ([345f698](https://github.com/bigcommerce/stencil-cli/commit/345f698f4ff8ac7dca41c308602af8bdc48263cd))

## [7.5.3](https://github.com/bigcommerce/stencil-cli/compare/7.5.2...7.5.3) (2024-04-15)


### Bug Fixes

* STRF-11934 Move PR Title to env ([#1196](https://github.com/bigcommerce/stencil-cli/issues/1196)) ([1560f4e](https://github.com/bigcommerce/stencil-cli/commit/1560f4e45dd3c987d6cdd90683e60e28b1363746))

## [7.5.2](https://github.com/bigcommerce/stencil-cli/compare/7.5.1...7.5.2) (2024-04-10)


### Bug Fixes

* STRF-11741 Provide stencil init options to set up package manager and skip packages install ([#1190](https://github.com/bigcommerce/stencil-cli/issues/1190)) ([2fb7b7d](https://github.com/bigcommerce/stencil-cli/commit/2fb7b7d45425970a72a92c94431f0cc4a5c37f70))

## [7.5.1](https://github.com/bigcommerce/stencil-cli/compare/7.5.0...7.5.1) (2024-04-10)


### Bug Fixes

* STRF-11923 - Handle Missing a New Channels Permission Requirement in Auth Token ([#1191](https://github.com/bigcommerce/stencil-cli/issues/1191)) ([20e5fcb](https://github.com/bigcommerce/stencil-cli/commit/20e5fcb5845570a18329f4d6e6ab6239cbea4fb0))
* STRF-11923 - Handle missing Channels auth permission in getStoreChannels() method. ([73703a4](https://github.com/bigcommerce/stencil-cli/commit/73703a4dbc7243a54e564dfb3c726250f0ece2ee))

# [7.5.0](https://github.com/bigcommerce/stencil-cli/compare/7.4.2...7.5.0) (2024-04-09)


### Features

* STRF-11741 Stencil init: auto install dependencies ([#1183](https://github.com/bigcommerce/stencil-cli/issues/1183)) ([ca4221b](https://github.com/bigcommerce/stencil-cli/commit/ca4221bdb4756352b537b8dc06989c0361e43628))

## [7.4.2](https://github.com/bigcommerce/stencil-cli/compare/7.4.1...7.4.2) (2024-04-05)


### Bug Fixes

* STRF-11856 - Filter list of channels from getStoreChannels() to storefront channels ([#1180](https://github.com/bigcommerce/stencil-cli/issues/1180)) ([0a0d229](https://github.com/bigcommerce/stencil-cli/commit/0a0d2298adb76718671f8e7fb0a89a4532b12e07))
* STRF-11856 - Filter the response for getStoreChannels() to only include type 'storefront' channels. ([4376c9e](https://github.com/bigcommerce/stencil-cli/commit/4376c9e51387c9743dc184330f3416bbb230f6f8))

## [7.4.1](https://github.com/bigcommerce/stencil-cli/compare/7.4.0...7.4.1) (2024-04-04)


### Bug Fixes

* STRF-11898 fix undefined variable stencil scss autofix ([#1174](https://github.com/bigcommerce/stencil-cli/issues/1174)) ([2f70840](https://github.com/bigcommerce/stencil-cli/commit/2f70840b3d97dd51c37134e1c5484343c33391bf))

# [7.4.0](https://github.com/bigcommerce/stencil-cli/compare/7.3.4...7.4.0) (2024-03-29)


### Features

* STRF-11523 Add the ability to use Handlebar Partial Blocks ([#1167](https://github.com/bigcommerce/stencil-cli/issues/1167)) ([39a7fbc](https://github.com/bigcommerce/stencil-cli/commit/39a7fbcad5a45f95fddeecc463a207818bfd8db2))

## [7.3.4](https://github.com/bigcommerce/stencil-cli/compare/7.3.3...7.3.4) (2024-02-27)


### Bug Fixes

* Properly add stencil-cli headers to internalapi requests ([15e1202](https://github.com/bigcommerce/stencil-cli/commit/15e12029b007932231a08ec218ea39cc2e671e4b))
* Properly add stencil-cli headers to internalapi requests ([#1164](https://github.com/bigcommerce/stencil-cli/issues/1164)) ([24ae309](https://github.com/bigcommerce/stencil-cli/commit/24ae3093bbc100fc45bd37488aa58db032af33f6))

## [7.3.3](https://github.com/bigcommerce/stencil-cli/compare/7.3.2...7.3.3) (2024-02-19)


### Bug Fixes

* strf-11740 bump stencil-styles ([#1161](https://github.com/bigcommerce/stencil-cli/issues/1161)) ([1c75d45](https://github.com/bigcommerce/stencil-cli/commit/1c75d4507c55b09e7282a5680de298b31c79f448))

## [7.3.2](https://github.com/bigcommerce/stencil-cli/compare/7.3.1...7.3.2) (2024-02-16)


### Bug Fixes

* noop PR ([#1158](https://github.com/bigcommerce/stencil-cli/issues/1158)) ([7a7ee74](https://github.com/bigcommerce/stencil-cli/commit/7a7ee74fe26a8e373b2c1b8f2c9881fbd8bf27e0))
* STRF-11740 Inconsistent responses in Stencil CLI Bundle and Theme Editor for scss compilation ([#1157](https://github.com/bigcommerce/stencil-cli/issues/1157)) ([b0c7538](https://github.com/bigcommerce/stencil-cli/commit/b0c75383a80521ffa99c6d692c341002d695f51d))

## [7.3.1](https://github.com/bigcommerce/stencil-cli/compare/7.3.0...7.3.1) (2023-11-28)


### Bug Fixes

* STRF-11419 Move scss file matching logic to stencil-styles ([#1149](https://github.com/bigcommerce/stencil-cli/issues/1149)) ([2d21f69](https://github.com/bigcommerce/stencil-cli/commit/2d21f69c3c50c372e35fc25e0b27ce6f34a48e7c))

# [7.3.0](https://github.com/bigcommerce/stencil-cli/compare/7.2.3...7.3.0) (2023-11-07)


### Features

* STRF-10101 Check translation rows compilation on stencil bundle/start ([#1145](https://github.com/bigcommerce/stencil-cli/issues/1145)) ([92b760a](https://github.com/bigcommerce/stencil-cli/commit/92b760a7d4a1a1fe38467c1d5213b85a00e95975))

## [7.2.3](https://github.com/bigcommerce/stencil-cli/compare/7.2.2...7.2.3) (2023-10-06)


### Bug Fixes

* STRF-11281 Narrow comma separation cases and Improve Base Rules Error ([#1139](https://github.com/bigcommerce/stencil-cli/issues/1139)) ([3879486](https://github.com/bigcommerce/stencil-cli/commit/3879486c07589aca561b92cdca04582198df0aa8))

## [7.2.2](https://github.com/bigcommerce/stencil-cli/compare/7.2.1...7.2.2) (2023-10-04)


### Bug Fixes

* strf-11280 Exclude any css files from scss validation ([#1137](https://github.com/bigcommerce/stencil-cli/issues/1137)) ([e40c9f9](https://github.com/bigcommerce/stencil-cli/commit/e40c9f972269dfdf423df888ca24690d2f894df7))

## [7.2.1](https://github.com/bigcommerce/stencil-cli/compare/7.2.0...7.2.1) (2023-09-14)


### Bug Fixes

* print cli errors to stderr ([#1133](https://github.com/bigcommerce/stencil-cli/issues/1133)) ([d369a00](https://github.com/bigcommerce/stencil-cli/commit/d369a0006545a0424e8eaff542660e4ed9418b92))

# [7.2.0](https://github.com/bigcommerce/stencil-cli/compare/7.1.2...7.2.0) (2023-06-15)


### Features

* STRF-10840 Provide optional --branch to release command ([#1111](https://github.com/bigcommerce/stencil-cli/issues/1111)) ([d5b9103](https://github.com/bigcommerce/stencil-cli/commit/d5b910377774f6aebc11c5ef9c49f027febc3f2c))

## [7.1.2](https://github.com/bigcommerce/stencil-cli/compare/7.1.1...7.1.2) (2023-05-24)


### Bug Fixes

* STRF-10081 stencil pull overrides only variation config ([#1105](https://github.com/bigcommerce/stencil-cli/issues/1105)) ([c0e1097](https://github.com/bigcommerce/stencil-cli/commit/c0e10976f4dd28b63ec4701e5e6dd4fd70ffac12))

## [7.1.1](https://github.com/bigcommerce/stencil-cli/compare/7.1.0...7.1.1) (2023-05-12)


### Bug Fixes

* STRF-10768 Stencil bundle fails on some ([#1101](https://github.com/bigcommerce/stencil-cli/issues/1101)) ([968e5e6](https://github.com/bigcommerce/stencil-cli/commit/968e5e6723b00021f5adcabdb8a812b3fb0add6a))

# [7.1.0](https://github.com/bigcommerce/stencil-cli/compare/7.0.1...7.1.0) (2023-04-27)


### Features

* add codeowners ([#1097](https://github.com/bigcommerce/stencil-cli/issues/1097)) ([e671f6b](https://github.com/bigcommerce/stencil-cli/commit/e671f6b00eda8de6a13e46e6dfdfd3e4dea19fe8))

### Bug Fixes

* fix(storefront): MERC-9452 Return variation id when activating theme ([#1094](https://github.com/bigcommerce/stencil-cli/issues/1094)) ([027b5c0](https://github.com/bigcommerce/stencil-cli/commit/027b5c0788f2778080bd5b4ede725ee8e034a48f))

## [7.0.1](https://github.com/bigcommerce/stencil-cli/compare/7.0.0...7.0.1) (2023-04-13)

### Bug Fixes

* **storefront:** fix typo in AutoFixer ([#1091](https://github.com/bigcommerce/stencil-cli/issues/1091)) ([4f550e1](https://github.com/bigcommerce/stencil-cli/commit/4f550e1218368d3dcb1d4f9dc90f29f840cee726))


# [7.0.0](https://github.com/bigcommerce/stencil-cli/compare/6.1.1...7.0.0) (2023-03-30)


### Bug Fixes

* update scss autofix cmd name ([de977a4](https://github.com/bigcommerce/stencil-cli/commit/de977a4d0ac526ffa404d44572f8baef951cb4cf))


### Features

* **storefront:** strf-10292 Node 16 Support ([#1048](https://github.com/bigcommerce/stencil-cli/issues/1048)) ([c754933](https://github.com/bigcommerce/stencil-cli/commit/c754933a70672e7741e2c1566dcb664071eed3cf))
* **storefront:** strf-10292 Node 18 Support ([#1048](https://github.com/bigcommerce/stencil-cli/issues/1048)) ([#1058](https://github.com/bigcommerce/stencil-cli/issues/1058)) ([48c912c](https://github.com/bigcommerce/stencil-cli/commit/48c912c563d8eea9c8830b19ed5c4923d565789e))
* strf-10366 beta version ([e7887ea](https://github.com/bigcommerce/stencil-cli/commit/e7887ea9c5e82a2fb98f5fad196f3d10cdfdadac))
* strf-10437 Autofix script: conditional file import ([#1071](https://github.com/bigcommerce/stencil-cli/issues/1071)) ([e4d084c](https://github.com/bigcommerce/stencil-cli/commit/e4d084cc28c6108950701385e09c157d9c6e79ec))
* strf-10457 Conditional multi import ([483c752](https://github.com/bigcommerce/stencil-cli/commit/483c752e7b58dd9f231e8f214743ed9e751a814a))
* strf-10477, strf-10457 Base-level rules and conditional multi file import ([037c4d5](https://github.com/bigcommerce/stencil-cli/commit/037c4d51c0fdba61fc6149d0fc37ea612177c508))
* strf-10482 Bad comma in the selectors ([14f4f79](https://github.com/bigcommerce/stencil-cli/commit/14f4f790afcd098c32b96dfb1b71570b9d05106e))
* STRF-10485 Nested multi file import ([5507b5e](https://github.com/bigcommerce/stencil-cli/commit/5507b5ed60b6a7b93555a70f0c22a724b07aeab4))
* STRF-10507 Scss autofix issue: Undefined variable ([4991e6f](https://github.com/bigcommerce/stencil-cli/commit/4991e6f7febab80619256909d8c97afbcfb0dcd1))


### BREAKING CHANGES

* **storefront:** Drop Node 14 Support


## [6.1.1](https://github.com/bigcommerce/stencil-cli/compare/6.1.0...6.1.1) (2023-02-28)


### Reverts

* "feat: strf-10437 Autofix script: conditional file import ([#1064](https://github.com/bigcommerce/stencil-cli/issues/1064))" ([#1068](https://github.com/bigcommerce/stencil-cli/issues/1068)) ([060b713](https://github.com/bigcommerce/stencil-cli/commit/060b7132859550f9ae8594d3312198498c224640))

# [6.0.0](https://github.com/bigcommerce/stencil-cli/compare/5.3.5...6.0.0) (2022-12-08)


### Features

* **storefront:** strf-9921 Hide logging for successful internal API calls in Stencil CLI: ([#1033](https://github.com/bigcommerce/stencil-cli/issues/1033)) ([d8c2492](https://github.com/bigcommerce/stencil-cli/commit/d8c2492097c49de93f1640c93a393d6df3d2a322))


### BREAKING CHANGES

* **storefront:** logging for successful internal API calls has been removed.

## [5.3.5](https://github.com/bigcommerce/stencil-cli/compare/5.3.4...5.3.5) (2022-12-08)


### Bug Fixes

* **storefront:** strf-10231 Mapped URLs do not use their respective templates: ([#1028](https://github.com/bigcommerce/stencil-cli/issues/1028)) ([3066d30](https://github.com/bigcommerce/stencil-cli/commit/3066d30eff1f71165d9d45e846fa00ef0a1a09d6))

## [5.3.4](https://github.com/bigcommerce/stencil-cli/compare/5.3.3...5.3.4) (2022-12-07)


### Bug Fixes

* **storefront:** bctheme-1331 Incorrect handling of nested external templates with params ([#1031](https://github.com/bigcommerce/stencil-cli/issues/1031)) ([51903de](https://github.com/bigcommerce/stencil-cli/commit/51903de21d65577b2204f9dce8032b14cd0fdd83))

## [5.3.3](https://github.com/bigcommerce/stencil-cli/compare/5.3.2...5.3.3) (2022-11-04)


### Bug Fixes

* **storefront:** strf-10193 Bad request for custom front matter: ([#1019](https://github.com/bigcommerce/stencil-cli/issues/1019)) ([b7aefca](https://github.com/bigcommerce/stencil-cli/commit/b7aefca859184737e315e8bb3c49890a25d20e99))

## [5.3.2](https://github.com/bigcommerce/stencil-cli/compare/5.3.1...5.3.2) (2022-11-02)


### Bug Fixes

* disable checking changelog, that was auto-generated ([#1020](https://github.com/bigcommerce/stencil-cli/issues/1020)) ([127cde2](https://github.com/bigcommerce/stencil-cli/commit/127cde2f9ff74c3bd2150f201629a1410fedd77e))

## [5.3.1](https://github.com/bigcommerce/stencil-cli/compare/5.3.0...5.3.1) (2022-10-28)


### Bug Fixes

* STRF-9781 Bump hapi dependencies ([#930](https://github.com/bigcommerce/stencil-cli/issues/930)) ([05cb607](https://github.com/bigcommerce/stencil-cli/commit/05cb6077497e3fee68578d04f95ab86f0b522c4d))

# [5.3.0](https://github.com/bigcommerce/stencil-cli/compare/5.2.5...5.3.0) (2022-10-28)


### Bug Fixes

* **storefront:** bctheme-1284 Fix error on using scoped nested external templates ([#1003](https://github.com/bigcommerce/stencil-cli/issues/1003)) ([1964ff5](https://github.com/bigcommerce/stencil-cli/commit/1964ff58ebebce3a43d79df51b159dbf0b57301d))
* STRF-10157 Added missing dependency ([#1013](https://github.com/bigcommerce/stencil-cli/issues/1013)) ([ebc3bdd](https://github.com/bigcommerce/stencil-cli/commit/ebc3bdd18dfdce066fa92224940d5351c75498e3))
* STRF-10157 Divide docker image release and semantic ([#1012](https://github.com/bigcommerce/stencil-cli/issues/1012)) ([7a2f869](https://github.com/bigcommerce/stencil-cli/commit/7a2f869e59255310dc5dcff06642a56e2cafc3bc))
* update changelog and add tag format w/o 'v' ([#1014](https://github.com/bigcommerce/stencil-cli/issues/1014)) ([26af8fa](https://github.com/bigcommerce/stencil-cli/commit/26af8fadcf47de16f80c1e2560b58857671679cc))


### Features

* STRF-10157 Introduce Semantic Release ([#1008](https://github.com/bigcommerce/stencil-cli/issues/1008)) ([085684d](https://github.com/bigcommerce/stencil-cli/commit/085684dae7afef55b1681f6bf3236777fde1df4d))

### 5.2.5 (2022-10-18)

-   fix: BCTHEME-1284 fix error on using scoped nested external templates ([1003](https://github.com/bigcommerce/stencil-cli/pull/1003))
-   fix: STRF-10130 fix 404s on pagination in brands/categories ([1004](https://github.com/bigcommerce/stencil-cli/pull/1004))

### 5.2.4 (2022-10-10)

-   fix: STRF-10118 fix redirects stalling locally ([1000](https://github.com/bigcommerce/stencil-cli/pull/1000))

### 5.2.3 (2022-09-29)

-   fix: STRF-10049 npm 8 install fix ([997](https://github.com/bigcommerce/stencil-cli/pull/997))

### 5.2.2 (2022-09-29)

-   fix: STRF-9174 review section is shown on quick-view page ([991](https://github.com/bigcommerce/stencil-cli/pull/991))

### 5.2.1 (2022-09-30)

-   fix: STRF-9832 custom template frontmatter is prioritized over default one ([983](https://github.com/bigcommerce/stencil-cli/pull/983))

### 5.2.0 (2022-08-30)

-   feat: STRF-9877 Publish stencil cli docker image ([972](https://github.com/bigcommerce/stencil-cli/pull/972))
-   fix: debug command ([970](https://github.com/bigcommerce/stencil-cli/pull/970))

### 5.1.0 (2022-07-14)

-   fix: STRF-9883 Interm fix to grab 1st variation ([951](https://github.com/bigcommerce/stencil-cli/pull/951))
-   feat(storefront): bctheme-1063 modify stencil to start locally with components ui library ([895](https://github.com/bigcommerce/stencil-cli/pull/895))
-   feat(storefront): bctheme-1064 Modify Stencil bundle for using Components UI Library ([904](https://github.com/bigcommerce/stencil-cli/pull/904))
-   feat: paypal-1514 add sort type to schema ([960](https://github.com/bigcommerce/stencil-cli/pull/960))
-   feat(storefront): strf-9923 CLI should not ask users for which API hostname to use ([955](https://github.com/bigcommerce/stencil-cli/pull/955))
-   fix(storefront): bctheme-1138 fix error on import components with @ symbol in the path ([953](https://github.com/bigcommerce/stencil-cli/pull/953))
-   fix(storefront): bctheme-1145 Enable using of external lib nested into organization for templates ([954](https://github.com/bigcommerce/stencil-cli/pull/954))
-   feat(config): add ability to specify the secret file name ([957](https://github.com/bigcommerce/stencil-cli/pull/957))

### 5.0.0 (2022-06-07)

-   fix: STRF-9835 Bump paper ([947](https://github.com/bigcommerce/stencil-cli/pull/947))
-   feat: strf-9791 Drop Node 12 Support ([945](https://github.com/bigcommerce/stencil-cli/pull/945))
-   feat: STRF-9807 Dockerize stencil cli ([938](https://github.com/bigcommerce/stencil-cli/pull/938))
-   merc-8592 Fix stencil CLI Push resulting in intermittent failures ([935](https://github.com/bigcommerce/stencil-cli/pull/935))
-   feat: strf-9923 CLI should not ask users for which API hostname to use ([955](https://github.com/bigcommerce/stencil-cli/pull/955))

### 4.1.1 (2022-05-24)

-   fix: strf-9781 Bump dev packages for linting ([932](https://github.com/bigcommerce/stencil-cli/pull/932))
-   fix: STRF-9781 Bump axios, @ocktokit/rest and browser-sync ([931](https://github.com/bigcommerce/stencil-cli/pull/931))
-   fix: STRF-9781 Bump async and confidence ([929](https://github.com/bigcommerce/stencil-cli/pull/929))
-   fix: STRF-9781 Bump simple-git ([928](https://github.com/bigcommerce/stencil-cli/pull/928))

### 4.1.0 (2022-04-28)

-   feat: strf-9749 Update Stencil Cli to use node-sass latest by default ([923](https://github.com/bigcommerce/stencil-cli/pull/923))
    New option:`--use-old-node-sass-fork (--oldn)` to bypass error warning (in case it exist) using latest node-sass version.
    Soon, it node sass fork will be deprecated and it won't be possible to compile with it.

-   feat: STRF-9757 Introduced "stencil debug" ([918](https://github.com/bigcommerce/stencil-cli/pull/918))

Available options: --output [filename] (-o)
If not provided, will be logged to std

-   feat: STRF-9741 Verbose network requests logging in Stencil CLI by default ([914](https://github.com/bigcommerce/stencil-cli/pull/914))
    Introduced `--no-verbose` option on all commands to supress verbose network requests logging.

### 4.0.0 (2022-04-11)

-   Added support for node 14 and drop node 10

### 3.13.0 (2022-04-08)

-   feat: strf-9718 Add OAuth token to headers ([903](https://github.com/bigcommerce/stencil-cli/pull/903))

### 3.12.0 (2022-03-29)

-   feat: allow .css-files imports within SCSS files ([882](https://github.com/bigcommerce/stencil-cli/pull/882))
-   bump paper version ([897](https://github.com/bigcommerce/stencil-cli/pull/897))

### 3.11.0 (2022-03-10)

-   feat: strf-9440 Stencil Bundle: fail on scss failure compilation ([884](https://github.com/bigcommerce/stencil-cli/pull/884))

### 3.10.1 (2022-02-24)

-   fix: when there's no regions on the page ([878](https://github.com/bigcommerce/stencil-cli/pull/878))
-   fix: STRF-9667 Storefront fallback logic works incorrectly on store with Stencil CLI ([877](https://github.com/bigcommerce/stencil-cli/pull/877))

### 3.10.0 (2022-02-08)

-   fix(storefront): bctheme-1000 handle regular css in stencil ([845](https://github.com/bigcommerce/stencil-cli/pull/845))
-   chore: bump paper to 3.0.0 ([868](https://github.com/bigcommerce/stencil-cli/pull/868))

### 3.9.2 (2022-01-31)

-   chore: bump paper to latest ([863](https://github.com/bigcommerce/stencil-cli/pull/863))

### 3.9.1 (2022-01-25)

-   fix: strf-9612 Fix stencil pull when there is 1 channel ([859](https://github.com/bigcommerce/stencil-cli/pull/859))

### 3.9.0 (2022-01-21)

-   fix: return channel id as an iterable when a store only has a single storefront ([849](https://github.com/bigcommerce/stencil-cli/pull/849))
-   feat: warn npm users if npm is above 7 version ([846](https://github.com/bigcommerce/stencil-cli/pull/846))

### 3.8.5 (2022-01-18)

-   fix(storefront): strf-9594 loosed frontmatter refex ([841](https://github.com/bigcommerce/stencil-cli/pull/841))

### 3.8.4 (2022-01-13)

-   fix: `stencil init` command including `apiHost` option is now recognized ([830](https://github.com/bigcommerce/stencil-cli/pull/830))
-   feat: `stencil push` command allows to push a theme to multiple channels ([825](https://github.com/bigcommerce/stencil-cli/pull/825))

### 3.8.3 (2022-01-12)

-   fix: add activate sass engine name logic ([837](https://github.com/bigcommerce/stencil-cli/pull/837))

### 3.8.2 (2022-01-11)

-   fix: strf-9600 bump stencil styles version ([832](https://github.com/bigcommerce/stencil-cli/pull/832))

### 3.8.1 (2022-01-10)

-   fix: Updated package.json to use colors 1.4.0 ([827](https://github.com/bigcommerce/stencil-cli/pull/827))

### 3.8.0 (2021-12-30)

-   build(deps): bump axios from 0.21.4 to 0.24.0 ([821](https://github.com/bigcommerce/stencil-cli/pull/821))
-   fix: strf-9581 Update cheerio version ([819](https://github.com/bigcommerce/stencil-cli/pull/819))
-   fix: strf-9581 Remove gulp tasks, that are not used anymore ([817](https://github.com/bigcommerce/stencil-cli/pull/817))

### 3.7.1 (2021-12-20)

-   fix: strf-9576 Fix graphql queries ([810](https://github.com/bigcommerce/stencil-cli/pull/810))
-   fix: strf-9553 bundled lang.json has lowercase lang keys ([808](https://github.com/bigcommerce/stencil-cli/pull/808))

### 3.7.0 (2021-12-08)

-   fix: strf-9535 Add fallback for shopper language default ([804](https://github.com/bigcommerce/stencil-cli/pull/804))
-   feat: strf-9245 Warn user if shopper default language file is missing or has missing keys ([802](https://github.com/bigcommerce/stencil-cli/pull/802))
-   Bump paper to rc52

Note: BREAKING CHANGE!
In order to get stencil cli working with this version, new Stencil CLI token should be created

### 3.6.5 (2021-11-22)

-   fix: strf-4307 Frontmatter/yaml validation and trailing symbols checks ([798](https://github.com/bigcommerce/stencil-cli/pull/798))

### 3.6.4 (2021-11-5)

-   fix: strf-9474 Removed "git+" prefix from package-lock ([794](https://github.com/bigcommerce/stencil-cli/pull/794))

### 3.6.3 (2021-10-22)

-   Bump paper to rc51
-   fix: strf-8846 Send stencil-cli header to storefront api ([789](https://github.com/bigcommerce/stencil-cli/pull/789))

### 3.6.2 (2021-10-06)

-   feat: Add overwrite option to download command ([785](https://github.com/bigcommerce/stencil-cli/pull/785))

### 3.6.1 (2021-10-04)

-   fix: strf-9375 Fix custom release tag selection ([f41d6dd44fb](https://github.com/bigcommerce/stencil-cli/commit/f41d6dd44fb))

### 3.6.0 (2021-09-28)

-   feat: strf-9332 added timeout parameter for stencil bundle command ([9c762fa0aa1](https://github.com/bigcommerce/stencil-cli/commit/9c762fa0aa1))
-   feat: strf-9040 Support dart-sass as primary engine for css rendering ([514ea778eda](https://github.com/bigcommerce/stencil-cli/commit/514ea778eda))

### 3.5.2 (2021-09-17)

-   fix: strf-9356 Support npm 7 for stencil cli ([d67747d5384](https://github.com/bigcommerce/stencil-cli/commit/d67747d5384))

### 3.5.1 (2021-09-15)

-   fix: strf-9345: Fallback to API_HOST constant in the absense of a provided one ([d138536c8](https://github.com/bigcommerce/stencil-cli/commit/d138536c8))

### 3.5.0 (2021-09-15)

-   fix: STRF-9351 Stop sending "X-Forwarded-..." headers as it causes remote store to redirect ([36f5663da](https://github.com/bigcommerce/stencil-cli/commit/36f5663da))
-   feat: strf-9303 Replaced jsonlint with parse-json ([b5f16db85](https://github.com/bigcommerce/stencil-cli/commit/b5f16db85))
-   feat: strf-9345: Log api host ([51b08a9b2](https://github.com/bigcommerce/stencil-cli/commit/51b08a9b2))
-   feat: strf-9345 Infer apiHost from storeUrl ([5b132e90b6](https://github.com/bigcommerce/stencil-cli/commit/5b132e90b6))
-   feat: strf-9319 Github Release for stencil-cli ([22949011](https://github.com/bigcommerce/stencil-cli/commit/22949011))

### 3.4.2 (2021-08-17)

-   fix: strf-9257 Added check if theme version exists and release method refactoring ([a520a55](https://github.com/bigcommerce/stencil-cli/commit/a520a55))

### 3.4.1 (2021-08-09)

-   fix: merc-8038 Added check to ensure we are not looping over undefined object ([bcd2401](https://github.com/bigcommerce/stencil-cli/commit/bcd2401))

## 3.4.0 (2021-07-27)

-   feat: merc-7830 support for region translations ([a6bc312](https://github.com/bigcommerce/stencil-cli/commit/a6bc312))
-   feat: merc-7797 added feature to render widgets ([40c410b](https://github.com/bigcommerce/stencil-cli/commit/40c410b))
-   feat: merc-7834 validate theme variation translations ([219dc60](https://github.com/bigcommerce/stencil-cli/commit/219dc60))

## 3.3.0 (2021-06-14)

-   feat: strf-9087 Prompt user to select channel id if multiple storefronts are enabled ([85d773](https://github.com/bigcommerce/stencil-cli/commit/85d773))

## <small>3.2.1 (2021-05-24)</small>

-   refactor: move API requests from commands to themeApiClient ([06f8d61](https://github.com/bigcommerce/stencil-cli/commit/06f8d61))
-   feat: remove old unused field staplerUrl from local server ([a3ec69f](https://github.com/bigcommerce/stencil-cli/commit/a3ec69f))
-   fix: (STRF-9087) set upstream=storefront to support multiple channels in start command ([3f6b8ed](https://github.com/bigcommerce/stencil-cli/commit/3f6b8ed))
-   fix: Typo fix at StencilConfigManager.js([4c2a04d](https://github.com/bigcommerce/stencil-cli/commit/4c2a04d))

## 3.2.0 (2021-03-22)

-   feat: strf-7651 - update push command to take into account multiple channels ([7582e7c](https://github.com/bigcommerce/stencil-cli/commit/7582e7c))
-   feat: strf-8282 - update pull command to take into account multiple channels ([00b4571](https://github.com/bigcommerce/stencil-cli/commit/00b4571))
-   feat: strf-8282 - use sites instead of channels API ([bf16215](https://github.com/bigcommerce/stencil-cli/commit/bf16215))
-   feat: strf-9071 - update download command to support multiple channels ([d6a9f94](https://github.com/bigcommerce/stencil-cli/commit/d6a9f94))

## <small>3.1.1 (2021-03-10)</small>

-   fix: (STRF-9019) wrong reading from stream breaks stencil-download command ([eb9b082](https://github.com/bigcommerce/stencil-cli/commit/eb9b082))
-   fix: broken changelog.md after stencil release command ([ec4a72a](https://github.com/bigcommerce/stencil-cli/commit/ec4a72a))

## 3.1.0 (2021-01-15)

-   fix:(STRF-8909) theme variation not applied with activate flag (#679) ([6830f15](https://github.com/bigcommerce/stencil-cli/commit/6830f15))
-   fix: (strf-8745) move common headers inside sendApiRequest and refactor NetworkUtils ([21a3522](https://github.com/bigcommerce/stencil-cli/commit/21a3522))
-   fix: (strf-8840) add missing rejectUnauthorized parameter to the API requests ([5ee6138](https://github.com/bigcommerce/stencil-cli/commit/5ee6138))
-   fix: add handling cases when redirect link is already stripped in normalizeRedirectUrl ([88fee5d](https://github.com/bigcommerce/stencil-cli/commit/88fee5d))
-   fix(stencil-push): (STRF-8913) increase maxBodyLength in NetworkUtils.sendApiRequest ([f2e3918](https://github.com/bigcommerce/stencil-cli/commit/f2e3918))
-   fix(stencil-release): (STRF-6905) add updating version in package-lock.json ([8f9ff79](https://github.com/bigcommerce/stencil-cli/commit/8f9ff79))
-   fix(stencil-release): fix typo in the code ([e6dfbc3](https://github.com/bigcommerce/stencil-cli/commit/e6dfbc3))
-   fix(stencil-release): fix uploading broken bundle archive to github ([0271ed4](https://github.com/bigcommerce/stencil-cli/commit/0271ed4))
-   refactor: (strf-8745) replace fetch with axios ([946a012](https://github.com/bigcommerce/stencil-cli/commit/946a012))
-   refactor: (strf-8747) move code dealing with .stencil file into a separate class ([7b371e8](https://github.com/bigcommerce/stencil-cli/commit/7b371e8))
-   feat: (strf-8747) split .stencil file into 2 configs ([6f3d2dc](https://github.com/bigcommerce/stencil-cli/commit/6f3d2dc))
-   feat: increase coverage threshold ([9dfa78c](https://github.com/bigcommerce/stencil-cli/commit/9dfa78c))

## <small>3.0.3 (2020-10-19)</small>

-   fix: (strf-8746) make local server parse binary data responses right ([39dacd8](https://github.com/bigcommerce/stencil-cli/commit/39dacd8))

## <small>3.0.2 (2020-10-13)</small>

-   fix: (strf-8740) fix a typo in StencilStart.assembleTemplates() ([7f58d48](https://github.com/bigcommerce/stencil-cli/commit/7f58d48))
-   fix: add missed linting step to github actions ([19b4012](https://github.com/bigcommerce/stencil-cli/commit/19b4012))
-   fix: add missed test coverage check to github actions ([39d137d](https://github.com/bigcommerce/stencil-cli/commit/39d137d))
-   fix: fix linting problems on Windows ([bcdfaa4](https://github.com/bigcommerce/stencil-cli/commit/bcdfaa4))
-   feat: (strf-8740) cover StencilStart.assembleTemplates() with tests ([0adf1f8](https://github.com/bigcommerce/stencil-cli/commit/0adf1f8))
-   refactor: (strf-8740) move recursiveReadDir to fsUtils ([f2e2724](https://github.com/bigcommerce/stencil-cli/commit/f2e2724))

## <small>3.0.1 (2020-10-08)</small>

-   fix: (strf-8734) fix a typo in renderer.module -> getTemplatePath() ([de5a91b](https://github.com/bigcommerce/stencil-cli/commit/de5a91b))
-   fix: add file list to package file to ignore tests and cli release code ([de4468f](https://github.com/bigcommerce/stencil-cli/commit/de4468f))

## 3.0.0 (2020-10-06)

-   fix: (strf-5280) Multiple themes - Changes to config.json not reflected ([0b28309](https://github.com/bigcommerce/stencil-cli/commit/0b28309))
-   fix: (strf-8705) fix broken headers and cookies in local server ([1dc8afd](https://github.com/bigcommerce/stencil-cli/commit/1dc8afd))
-   fix: apply various PR fixes ([c5d964b](https://github.com/bigcommerce/stencil-cli/commit/c5d964b))
-   fix: fix lint errors in lib/stencil-init.js ([a2e7383](https://github.com/bigcommerce/stencil-cli/commit/a2e7383))
-   fix: fix lint errors in lib/stencil-init.spec.js ([0b2b328](https://github.com/bigcommerce/stencil-cli/commit/0b2b328))
-   fix: inquirer.prompt is not called when not necessary ([beeca29](https://github.com/bigcommerce/stencil-cli/commit/beeca29))
-   fix: make running tests in verbose mode ([8bdd3d4](https://github.com/bigcommerce/stencil-cli/commit/8bdd3d4))
-   fix: reverts change to mock test answers ([ea9c76e](https://github.com/bigcommerce/stencil-cli/commit/ea9c76e))
-   fix: strf-8574 Bump version of "archiver" to fix security issues ([42f4528](https://github.com/bigcommerce/stencil-cli/commit/42f4528))
-   fix: strf-8574 Bump versions of npm modules to fix security issues ([2587d0a](https://github.com/bigcommerce/stencil-cli/commit/2587d0a))
-   fix: strf-8574, bump "hapi" and its modules to fix security issues ([b520daa](https://github.com/bigcommerce/stencil-cli/commit/b520daa))
-   fix: strf-8574, bump version of "@hapi/lab" to fix security issues ([44872f2](https://github.com/bigcommerce/stencil-cli/commit/44872f2))
-   fix: strf-8574, bump version of "github" package to fix security issues ([1013e3a](https://github.com/bigcommerce/stencil-cli/commit/1013e3a))
-   fix: strf-8574, bump version of "inquirer" to fix security issues ([474c9af](https://github.com/bigcommerce/stencil-cli/commit/474c9af))
-   fix: strf-8574, remove redundant dependency "hoek" ([9aeb3c1](https://github.com/bigcommerce/stencil-cli/commit/9aeb3c1))
-   fix(stencil-init.spec.js): fixed a broken test ([66ab50d](https://github.com/bigcommerce/stencil-cli/commit/66ab50d))
-   refactor: (strf-8608) make fsUtils async ([bcab218](https://github.com/bigcommerce/stencil-cli/commit/bcab218))
-   refactor: (strf-8672) fix ESLint & Prettier errors and refactor some code ([300de1e](https://github.com/bigcommerce/stencil-cli/commit/300de1e))
-   refactor: move printErrorMessages() from theme-api-client.js to cliCommon.js ([d2c259b](https://github.com/bigcommerce/stencil-cli/commit/d2c259b))
-   refactor: move tests to GitHub Actions, remove Travis and AppVeyor ([18c6ff9](https://github.com/bigcommerce/stencil-cli/commit/18c6ff9))
-   refactor: moved common constants to constants.js ([a205c5b](https://github.com/bigcommerce/stencil-cli/commit/a205c5b))
-   refactor: moved StencilStart class to a separate file ([fdcdd82](https://github.com/bigcommerce/stencil-cli/commit/fdcdd82))
-   refactor: replace Promises with async/await in stencil-start ([9492a42](https://github.com/bigcommerce/stencil-cli/commit/9492a42))
-   refactor: strf-8606; removed unused modules "good", "good-console" ([1db7f5a](https://github.com/bigcommerce/stencil-cli/commit/1db7f5a))
-   refactor: use fs.existsSync instead of Fs.statSync hack ([e097e36](https://github.com/bigcommerce/stencil-cli/commit/e097e36))
-   refactor(.eslintrc): update .eslinrc to allow newer JS syntax ([f132275](https://github.com/bigcommerce/stencil-cli/commit/f132275))
-   refactor(/bin/stencil-start): rearrange some variables ([e8edabb](https://github.com/bigcommerce/stencil-cli/commit/e8edabb))
-   refactor(/lib/release.js): use async/await instead of callbacks ([720fbb1](https://github.com/bigcommerce/stencil-cli/commit/720fbb1))
-   refactor(stencil-init): improve code style and test coverage ([4ac65ff](https://github.com/bigcommerce/stencil-cli/commit/4ac65ff))
-   refactor(stencil-start): refactored the module to OOP style ([2ae5b0c](https://github.com/bigcommerce/stencil-cli/commit/2ae5b0c))
-   refactor(tests): move tests from /bin to /lib ([930922f](https://github.com/bigcommerce/stencil-cli/commit/930922f))
-   feat: (strf-8608) bump recent updates in npm packages ([e50e231](https://github.com/bigcommerce/stencil-cli/commit/e50e231))
-   feat: (strf-8608) deleted unused npm dependencies ([1f64ad9](https://github.com/bigcommerce/stencil-cli/commit/1f64ad9))
-   feat: (strf-8608) replace "request" with "node-fetch" ([e758b01](https://github.com/bigcommerce/stencil-cli/commit/e758b01))
-   feat: (strf-8608) replaced lab+code+sinon with jest ([71e952f](https://github.com/bigcommerce/stencil-cli/commit/71e952f))
-   feat: (strf-8608) update "front-matter" ([a0aa6fd](https://github.com/bigcommerce/stencil-cli/commit/a0aa6fd))
-   feat: (strf-8608) update "simple-git" ([7153455](https://github.com/bigcommerce/stencil-cli/commit/7153455))
-   feat: (strf-8608) update "tarjan-graph" ([4a27ee6](https://github.com/bigcommerce/stencil-cli/commit/4a27ee6))
-   feat: (strf-8608) updated some npm dependencies ([9059210](https://github.com/bigcommerce/stencil-cli/commit/9059210))
-   feat: (strf-8625) support Node 12.x ([1449751](https://github.com/bigcommerce/stencil-cli/commit/1449751))
-   feat: (strf-8630) fix template engine values ([0af2cb5](https://github.com/bigcommerce/stencil-cli/commit/0af2cb5))
-   feat: (strf-8671) replace "wreck" with "node-fetch" ([6dcdd9b](https://github.com/bigcommerce/stencil-cli/commit/6dcdd9b))
-   feat: (strf-8672) improve ESLint config and add prettier ([a8b78c8](https://github.com/bigcommerce/stencil-cli/commit/a8b78c8))
-   feat: (strf-8673) update "commander" ([dc3bf29](https://github.com/bigcommerce/stencil-cli/commit/dc3bf29))
-   feat: (strf-8674) update "async" npm package ([9f64096](https://github.com/bigcommerce/stencil-cli/commit/9f64096))
-   feat: (strf-8684) update 'tmp' package ([b1e932c](https://github.com/bigcommerce/stencil-cli/commit/b1e932c))
-   feat: bump paper to rc30, release 2.2.0 ([6945a3c](https://github.com/bigcommerce/stencil-cli/commit/6945a3c))
-   feat: bump paper to rc31 ([b958744](https://github.com/bigcommerce/stencil-cli/commit/b958744))
-   feat: init no longer prompts when cli option is present ([a9fee29](https://github.com/bigcommerce/stencil-cli/commit/a9fee29))
-   feat: make init command more suitable for automation ([ab9b919](https://github.com/bigcommerce/stencil-cli/commit/ab9b919))
-   feat: strf-8589, drop JSPM support ([c39c67b](https://github.com/bigcommerce/stencil-cli/commit/c39c67b))
-   feat: update "stencil pull" to use configurations API, improving performance ([2b142fc](https://github.com/bigcommerce/stencil-cli/commit/2b142fc))
-   feat: update cli to use template engine based on the value stored in ([f9ea0a9](https://github.com/bigcommerce/stencil-cli/commit/f9ea0a9))
-   feat(docs): add project structure and best practices ([251c1ff](https://github.com/bigcommerce/stencil-cli/commit/251c1ff))
-   Add npm cache ([ad50756](https://github.com/bigcommerce/stencil-cli/commit/ad50756))
-   Resolve Schema Translation Error Logging ([7e668df](https://github.com/bigcommerce/stencil-cli/commit/7e668df))
-   STRF-8582 Bump stencil-styles version ([6611284](https://github.com/bigcommerce/stencil-cli/commit/6611284))
-   Update test badges ([0fdafcf](https://github.com/bigcommerce/stencil-cli/commit/0fdafcf))
-   test: updates integration and unit tests ([9e6131d](https://github.com/bigcommerce/stencil-cli/commit/9e6131d))
-   test: use better naming of methods and constants ([506be68](https://github.com/bigcommerce/stencil-cli/commit/506be68))
-   chore: remove json schema since it has been replaced by ajv ([80911e5](https://github.com/bigcommerce/stencil-cli/commit/80911e5))

<a name="2.1.1"></a>

## <small>2.1.1 (2020-06-12)</small>

-feat: bump paper ([91acd1c](https://github.com/bigcommerce/stencil-cli/commit/91acd1c))
-feat: watch storefront config file ([e7b43d9](https://github.com/bigcommerce/stencil-cli/commit/e7b43d9))

<a name="2.1.0"></a>

## 2.1.0 (2020-04-27)

-   feat: added re-integration script with new command download ([dc6df02](https://github.com/bigcommerce/stencil-cli/commit/dc6df02))

<a name="2.0.0"></a>

## 2.0.0 (2020-03-24)

-   fix: address chrome cookie SameSite issue ([5938ce1](https://github.com/bigcommerce/stencil-cli/commit/5938ce1))
-   feat: add schema validation to bundle process ([b86d440](https://github.com/bigcommerce/stencil-cli/commit/b86d440))
-   feat: bump paper ([f1d2b5a](https://github.com/bigcommerce/stencil-cli/commit/f1d2b5a))
-   feat: deprecate theme editor ([c0466dc](https://github.com/bigcommerce/stencil-cli/commit/c0466dc))
-   feat(translate): added the translationsSchema.json file into a bundle ([ba04cd6](https://github.com/bigcommerce/stencil-cli/commit/ba04cd6))
-   feat(translate): added validation for schemaTranslations.json ([fccafe2](https://github.com/bigcommerce/stencil-cli/commit/fccafe2))
-   feat(translate): fixed regarding reviewers notes ([0a1f43d](https://github.com/bigcommerce/stencil-cli/commit/0a1f43d))

<a name="1.23.1"></a>

## <small>1.23.1 (2020-02-18)</small>

-   fix: add hapi as a direct dependency to lock down hapi version ([3b9a258](https://github.com/bigcommerce/stencil-cli/commit/3b9a258))

<a name="1.23.0"></a>

## 1.23.0 (2020-02-17)

-   fix: move code to dev dependency ([f1fd570](https://github.com/bigcommerce/stencil-cli/commit/f1fd570))
-   fix: remove less dependency and ref since it is not supported or used ([c586dd8](https://github.com/bigcommerce/stencil-cli/commit/c586dd8))
-   fix: tunnel issues and add support for tunnel names ([820fa4d](https://github.com/bigcommerce/stencil-cli/commit/820fa4d))
-   fix: update readme to reflect node 8 is no longer supported ([6e793a9](https://github.com/bigcommerce/stencil-cli/commit/6e793a9))
-   feat: drop node 8 support ([5aa1624](https://github.com/bigcommerce/stencil-cli/commit/5aa1624))
-   feat: move lab to dev deps and update it to 14.3.3 ([0f57631](https://github.com/bigcommerce/stencil-cli/commit/0f57631))
-   feat: remove hapi as a direct dependecy ([3164fbc](https://github.com/bigcommerce/stencil-cli/commit/3164fbc))
-   feat: update browser sync to use latest master ([0916991](https://github.com/bigcommerce/stencil-cli/commit/0916991))
-   feat: update colors dependency ([b488557](https://github.com/bigcommerce/stencil-cli/commit/b488557))
-   feat: upgrade lodash dependency ([640c61d](https://github.com/bigcommerce/stencil-cli/commit/640c61d))
-   feat(dependencies): update eslint to the latest and fix lint errors ([5a2fd85](https://github.com/bigcommerce/stencil-cli/commit/5a2fd85))

<a name="1.22.0"></a>

## 1.22.0 (2020-02-10)

-   feat(dependencies): remove compression as a dependency ([2c02e9e](https://github.com/bigcommerce/stencil-cli/commit/2c02e9e))
-   feat(dependencies): remove decompress-zip as a dependency ([34c7fde](https://github.com/bigcommerce/stencil-cli/commit/34c7fde))
-   feat(dependencies): remove express as a dependecy since it is not used ([ba1c2c5](https://github.com/bigcommerce/stencil-cli/commit/ba1c2c5))
-   feat(dependencies): remove gulp git, sass, sass-lint dependency ([14dceeb](https://github.com/bigcommerce/stencil-cli/commit/14dceeb))
-   feat(dependencies): remove install as a dependency since it is not used ([1c2549c](https://github.com/bigcommerce/stencil-cli/commit/1c2549c))
-   feat(dependencies): remove npm as a dependency ([4733649](https://github.com/bigcommerce/stencil-cli/commit/4733649))
-   feat(dependencies): remove script-loader as a direct dependecy ([9a2b817](https://github.com/bigcommerce/stencil-cli/commit/9a2b817))
-   feat(dependencies): update dev dependency ([d5bdfe3](https://github.com/bigcommerce/stencil-cli/commit/d5bdfe3))

<a name="1.21.6"></a>

## <small>1.21.6 (2020-02-04)</small>

-   Add feature to allow pulling live config files (#550) ([43558fc](https://github.com/bigcommerce/stencil-cli/commit/43558fc))
-   fix: add account_payment_methods_v2 to theme config schema ([373a485](https://github.com/bigcommerce/stencil-cli/commit/373a485))
-   feat(dependencies): remove dateformat as a direct dependecy ([6044e91](https://github.com/bigcommerce/stencil-cli/commit/6044e91))

<a name="1.21.5"></a>

## <small>1.21.5 (2020-01-30)</small>

-   feat: add flag to auto-delete oldest theme during push ([ea93793](https://github.com/bigcommerce/stencil-cli/commit/ea93793))
-   feat: bump paper to 3.0.0-rc.27 ([86e4f74](https://github.com/bigcommerce/stencil-cli/commit/86e4f74))
-   fix: more detailed theme variation error ([96e3a30](https://github.com/bigcommerce/stencil-cli/commit/96e3a30))
-   fix: schema.json formatting ([73c8a26](https://github.com/bigcommerce/stencil-cli/commit/73c8a26))

<a name="1.21.4"></a>

## <small>1.21.4 (2019-12-20)</small>

<a name="1.21.3"></a>

## <small>1.21.3 (2019-12-20)</small>

-   fix: avoid caching of storefront api responses ([9974a07](https://github.com/bigcommerce/stencil-cli/commit/9974a07))
-   fix: correcting url for deploy issues docs ([44ef5e9](https://github.com/bigcommerce/stencil-cli/commit/44ef5e9))
-   fix: fix origin sent with graphql requests (#541) ([8f3f02c](https://github.com/bigcommerce/stencil-cli/commit/8f3f02c))

<a name="1.21.2"></a>

## <small>1.21.2 (2019-11-15)</small>

-   fix: bump stencil-styles to 1.2.0 ([97389b9](https://github.com/bigcommerce/stencil-cli/commit/97389b9))

<a name="1.21.1"></a>

## <small>1.21.1 (2019-10-22)</small>

-   fix: update paper to 3.0.0-rc.26 ([32ef114](https://github.com/bigcommerce/stencil-cli/commit/32ef114))

<a name="1.21.0"></a>

## 1.21.0 (2019-10-14)

-   Adding Support for Node 10 (#525) ([3013fb4](https://github.com/bigcommerce/stencil-cli/commit/3013fb4))

<a name="1.20.3"></a>

## <small>1.20.3 (2019-10-10)</small>

-   feat: strf-7393 make cli work with paper 3.x branch ([7ba9688](https://github.com/bigcommerce/stencil-cli/commit/7ba9688))

<a name="1.20.2"></a>

## <small>1.20.2 (2019-09-12)</small>

-   fix: bump paper to 2.0.19 ([670a7ad](https://github.com/bigcommerce/stencil-cli/commit/670a7ad))
-   Revert "Merge pull request #500 from bc-williamkwon/changePaperBranch" ([3e195e8](https://github.com/bigcommerce/stencil-cli/commit/3e195e8))
-   Revert "Merge pull request #506 from bookernath/paper-rc.20" ([5ada1b4](https://github.com/bigcommerce/stencil-cli/commit/5ada1b4))

<a name="1.20.1"></a>

## <small>1.20.1 (2019-09-05)</small>

-   Revert "Merge pull request #491 from bookernath/browser-sync-master" ([020ca91](https://github.com/bigcommerce/stencil-cli/commit/020ca91))

<a name="1.20.0"></a>

## 1.20.0 (2019-08-16)

-   feat: accept url and token as arguments on stencil init ([b69a9fe](https://github.com/bigcommerce/stencil-cli/commit/b69a9fe))

<a name="1.19.0"></a>

## 1.19.0 (2019-08-07)

-   fix: bump paper to 3.0.0-rc20 ([e9c7691](https://github.com/bigcommerce/stencil-cli/commit/e9c7691))
-   feat: strf-7175 bump paper to 3.0.0-rc.19 ([eb5ef78](https://github.com/bigcommerce/stencil-cli/commit/eb5ef78))

<a name="1.18.0"></a>

## 1.18.0 (2019-08-01)

-   feat: bump paper to 2.0.18 ([fa71b05](https://github.com/bigcommerce/stencil-cli/commit/fa71b05))
-   feat: remove client id from required fields ([0cbc093](https://github.com/bigcommerce/stencil-cli/commit/0cbc093))
-   fix: strf-7023 move browser-sync back to master ([c3db4db](https://github.com/bigcommerce/stencil-cli/commit/c3db4db))

<a name="1.17.0"></a>

## 1.17.0 (2019-07-15)

-   feat: update stencil-paper to add getImageSrcset helper ([892fbfd](https://github.com/bigcommerce/stencil-cli/commit/892fbfd))
-   Update README ([73898c0](https://github.com/bigcommerce/stencil-cli/commit/73898c0))

<a name="1.16.0"></a>

## 1.16.0 (2019-06-04)

-   Remove Node 6 from Travis ([1cab37f](https://github.com/bigcommerce/stencil-cli/commit/1cab37f))
-   fix: strf-6383 add check for template size for stencil bundling ([f674c05](https://github.com/bigcommerce/stencil-cli/commit/f674c05))
-   fix: update engines for node in package.json ([70ae9a3](https://github.com/bigcommerce/stencil-cli/commit/70ae9a3))
-   feat: strf-6687 update stencil-paper to add font-display support ([3af5562](https://github.com/bigcommerce/stencil-cli/commit/3af5562))

<a name="1.15.9"></a>

## <small>1.15.9 (2019-04-03)</small>

-   fix: added browser-sync to package-lock (#454) ([dcc4795](https://github.com/bigcommerce/stencil-cli/commit/dcc4795))
-   Revert "feat: Add support for base_url and secure_base_url" (#453) ([74d1122](https://github.com/bigcommerce/stencil-cli/commit/74d1122))

<a name="1.15.8"></a>

## <small>1.15.8 (2019-04-02)</small>

-   ci: updated paper to 2.0.12 (#451) ([5e83f64](https://github.com/bigcommerce/stencil-cli/commit/5e83f64))
-   docs: Update stencil cli installation link ([834fee2](https://github.com/bigcommerce/stencil-cli/commit/834fee2))
-   feat: Add support for base_url and secure_base_url ([cc3ca08](https://github.com/bigcommerce/stencil-cli/commit/cc3ca08))

<a name="1.15.7"></a>

## <small>1.15.7 (2019-03-26)</small>

<a name="1.15.6"></a>

## <small>1.15.6 (2019-03-07)</small>

-   fix: added bump of package-lock.json to gulp release task (#448) ([f2c423b](https://github.com/bigcommerce/stencil-cli/commit/f2c423b))
-   fix: revert paper_2.0.11 pr (#445) ([adf424f](https://github.com/bigcommerce/stencil-cli/commit/adf424f))
-   docs: updated paper to 2.0.11 + checked package-lock (#446) ([54ddad0](https://github.com/bigcommerce/stencil-cli/commit/54ddad0))
-   docs(release): releasing 1.15.6 ([0bb0eb1](https://github.com/bigcommerce/stencil-cli/commit/0bb0eb1))
-   Docs: upgraded paper (#441) ([26b3937](https://github.com/bigcommerce/stencil-cli/commit/26b3937))
-   feat(theme): add csrf protection to the list of valid features ([fe4b795](https://github.com/bigcommerce/stencil-cli/commit/fe4b795))

<a name="1.15.5"></a>

## <small>1.15.5 (2019-02-05)</small>

-   fix: added fix for scss compilation issue ([e6a20a2](https://github.com/bigcommerce/stencil-cli/commit/e6a20a2))
-   fix(cp): STRF-5614 Add enhanced_ecommerce to theme config schema. ([58c6fb9](https://github.com/bigcommerce/stencil-cli/commit/58c6fb9))
-   feat: changelog generator (#431) ([9e6e225](https://github.com/bigcommerce/stencil-cli/commit/9e6e225))
-   Increase timeout for build worker process to be ready ([794e796](https://github.com/bigcommerce/stencil-cli/commit/794e796))
-   log push errors to the console ([a9aca72](https://github.com/bigcommerce/stencil-cli/commit/a9aca72))
-   PROJECT-1897: Card Management - List, Delete, Edit, Add Cards ([44022a0](https://github.com/bigcommerce/stencil-cli/commit/44022a0))
-   Proper error handling for bundle task ([a4dc6c9](https://github.com/bigcommerce/stencil-cli/commit/a4dc6c9))
-   update paper npm version ([d5f78a4](https://github.com/bigcommerce/stencil-cli/commit/d5f78a4))
-   Update README ([298beaa](https://github.com/bigcommerce/stencil-cli/commit/298beaa))
-   upgrade paper package to 2.0.10 ([b4ec832](https://github.com/bigcommerce/stencil-cli/commit/b4ec832))

<a name="1.15.4"></a>

## <small>1.15.4 (2018-12-17)</small>

-   fix(cp): STRF-5614 Add enhanced_ecommerce to theme config schema. ([58c6fb9](https://github.com/bigcommerce/stencil-cli/commit/58c6fb9))

<a name="1.15.3"></a>

## <small>1.15.3 (2018-12-11)</small>

-   upgrade paper package to 2.0.10 ([b4ec832](https://github.com/bigcommerce/stencil-cli/commit/b4ec832))
-   Proper error handling for bundle task ([a4dc6c9](https://github.com/bigcommerce/stencil-cli/commit/a4dc6c9))
-   PROJECT-1897: Card Management - List, Delete, Edit, Add Cards ([44022a0](https://github.com/bigcommerce/stencil-cli/commit/44022a0))
-   Increase timeout for build worker process to be ready ([794e796](https://github.com/bigcommerce/stencil-cli/commit/794e796))
-   log push errors to the console ([a9aca72](https://github.com/bigcommerce/stencil-cli/commit/a9aca72))
-   update paper npm version ([d5f78a4](https://github.com/bigcommerce/stencil-cli/commit/d5f78a4))
-   Point to http instead of https for stencil editor sdk. ([0a9acf6](https://github.com/bigcommerce/stencil-cli/commit/0a9acf6))
-   Update README ([298beaa](https://github.com/bigcommerce/stencil-cli/commit/298beaa))
-   Deprecate support for node 4.x ([e5c3e96](https://github.com/bigcommerce/stencil-cli/commit/e5c3e96))
-   Deprecate support for node 4.x ([1ead058](https://github.com/bigcommerce/stencil-cli/commit/1ead058))
-   Bundle all webpack files + release 1.15.0 ([537bb93](https://github.com/bigcommerce/stencil-cli/commit/537bb93))
-   STRF-4889: Fix error message for upload limit ([95ba66b](https://github.com/bigcommerce/stencil-cli/commit/95ba66b))
-   Update paper & bump version ([9217d6f](https://github.com/bigcommerce/stencil-cli/commit/9217d6f))
-   adding -a and --activate flags to stencil push ([5f2ceb8](https://github.com/bigcommerce/stencil-cli/commit/5f2ceb8))
-   Update README.md to include min versions of Node ([cf9798c](https://github.com/bigcommerce/stencil-cli/commit/cf9798c))
-   trailing comma on output ([0d77cd6](https://github.com/bigcommerce/stencil-cli/commit/0d77cd6))
-   ability to locally save bundled theme after push ([f9610d0](https://github.com/bigcommerce/stencil-cli/commit/f9610d0))
