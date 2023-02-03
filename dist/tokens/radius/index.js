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
exports.radius = exports.getRadius = void 0;
/* eslint-disable sort-keys */
var natds_themes_1 = __importDefault(require("@naturacosmeticos/natds-themes"));
var getRadius = function (theme) { return (__assign(__assign({}, theme.borderRadius), { circle: '50%' })); };
exports.getRadius = getRadius;
var borderRadius = natds_themes_1.default.natura.light.borderRadius;
/**
 * @deprecated since 0.19.0.
 * Please use `borderRadius` directly from your theme
 */
exports.radius = __assign(__assign({}, borderRadius), { circle: '50%' });
//# sourceMappingURL=index.js.map