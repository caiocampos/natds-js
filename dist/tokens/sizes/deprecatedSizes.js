var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deprecatedSizes = exports.getDeprecatedSizes = void 0;
var natds_themes_1 = __importDefault(require("@naturacosmeticos/natds-themes"));
var getDeprecatedSizes = function (theme) {
    var themeSize = theme.size;
    return {
        semix: themeSize.semiX,
        mediumx: themeSize.mediumX,
        largex: themeSize.largeX,
        largexx: themeSize.largeXX,
        largexxx: themeSize.largeXXX,
        hugex: themeSize.hugeX,
        hugexx: themeSize.hugeXX,
        hugexxx: themeSize.hugeXXX,
        veryhuge: themeSize.veryHuge
    };
};
exports.getDeprecatedSizes = getDeprecatedSizes;
var size = natds_themes_1.default.natura.light.size;
/**
 * @deprecated size keys `semix`, `mediumx`, `largex*`, `hugex*` and `veryhuge` are deprecated since version 0.19
 * and will be deleted in v1.0.
 */
exports.deprecatedSizes = {
    /**
     * @deprecated `semix` key is deprecated since version 0.19 and will be deleted in version 1.0.
     *
     * In case you need `semiX` token, please use `semiX` (with capital X) instead of `semix`.
     */
    semix: size.semiX,
    /**
     * @deprecated `mediumx` key is deprecated since version 0.19 and will be deleted in version 1.0.
     *
     * In case you need `mediumX` token, please use `mediumX` (with capital X) instead of `mediumx`.
     */
    mediumx: size.mediumX,
    /**
     * @deprecated `largex` key is deprecated since version 0.19 and will be deleted in version 1.0.
     *
     * In case you need `largeX` token, please use `largeX` (with capital X) instead of `largex`.
     */
    largex: size.largeX,
    /**
     * @deprecated `largexx` key is deprecated since version 0.19 and will be deleted in version 1.0.
     *
     * In case you need `largeXX` token, please use `largeXX` (with capital X) instead of `largexx`.
     */
    largexx: size.largeXX,
    /**
     * @deprecated `largexxx` key is deprecated since version 0.19 and will be deleted in version 1.0.
     *
     * In case you need `largeXXX` token, please use `largeXXX` (with capital X) instead of `largexxx`.
     */
    largexxx: size.largeXXX,
    /**
     * @deprecated `hugex` key is deprecated since version 0.19 and will be deleted in version 1.0.
     *
     * In case you need `hugeX` token, please use `hugeX` (with capital X) instead of `hugex`.
     */
    hugex: size.hugeX,
    /**
     * @deprecated `hugexx` key is deprecated since version 0.19 and will be deleted in version 1.0.
     *
     * In case you need `hugeXX` token, please use `hugeXX` (with capital X) instead of `hugexx`.
     */
    hugexx: size.hugeXX,
    /**
     * @deprecated `hugexxx` key is deprecated since version 0.19 and will be deleted in version 1.0.
     *
     * In case you need `hugeXXX` token, please use `hugeXXX` (with capital X) instead of `hugexxx`.
     */
    hugexxx: size.hugeXXX,
    /**
     * @deprecated `veryhuge` key is deprecated since version 0.19 and will be deleted in version 1.0.
     *
     * In case you need `veryHuge` token, please use `veryHuge` (with capital H) instead of `veryhuge`.
     */
    veryhuge: size.veryHuge
};
//# sourceMappingURL=deprecatedSizes.js.map