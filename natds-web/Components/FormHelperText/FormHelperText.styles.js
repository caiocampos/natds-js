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
exports.useStyles = void 0;
var createStyles_1 = __importDefault(require("@material-ui/core/styles/createStyles"));
var makeStyles_1 = __importDefault(require("@material-ui/core/styles/makeStyles"));
var style = function (_a) {
    var typography = _a.typography, palette = _a.palette, sizes = _a.sizes;
    return (0, createStyles_1.default)({
        root: __assign(__assign({}, typography.caption), { alignItems: 'center', color: function (_a) {
                var _b, _c, _d;
                var state = _a.state;
                if (state === 'error') {
                    return (_b = palette === null || palette === void 0 ? void 0 : palette.error) === null || _b === void 0 ? void 0 : _b.main;
                }
                if (state === 'success') {
                    return (_c = palette === null || palette === void 0 ? void 0 : palette.success) === null || _c === void 0 ? void 0 : _c.main;
                }
                return (_d = palette === null || palette === void 0 ? void 0 : palette.text) === null || _d === void 0 ? void 0 : _d.secondary;
            }, display: 'flex', lineHeight: '1.2em', padding: "".concat(sizes === null || sizes === void 0 ? void 0 : sizes.micro, "px ").concat(sizes === null || sizes === void 0 ? void 0 : sizes.none, " ").concat(sizes === null || sizes === void 0 ? void 0 : sizes.none) }),
        icon: {
            height: sizes === null || sizes === void 0 ? void 0 : sizes.small,
            marginRight: sizes === null || sizes === void 0 ? void 0 : sizes.micro,
            width: sizes === null || sizes === void 0 ? void 0 : sizes.small
        }
    });
};
exports.useStyles = (0, makeStyles_1.default)(style, { name: 'NatDSFormHelperText' });
exports.default = exports.useStyles;
//# sourceMappingURL=FormHelperText.styles.js.map