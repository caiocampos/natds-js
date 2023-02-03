var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sizes = exports.getSizes = void 0;
/* eslint-disable sort-keys */
var natds_themes_1 = __importDefault(require("@naturacosmeticos/natds-themes"));
var deprecatedSizes_1 = require("./deprecatedSizes");
var getSizes = function (theme) {
    var size = theme.size;
    return __assign(__assign({}, (0, deprecatedSizes_1.getDeprecatedSizes)(theme)), size);
};
exports.getSizes = getSizes;
exports.sizes = __assign(__assign({}, deprecatedSizes_1.deprecatedSizes), natds_themes_1.default.natura.light.size);
//# sourceMappingURL=index.js.map