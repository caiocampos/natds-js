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
Object.defineProperty(exports, "__esModule", { value: true });
var createStyles_1 = require("../../styles/createStyles");
var makeStyles_1 = require("../../styles/makeStyles");
var style = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
    var palette = _a.palette, shape = _a.shape, sizes = _a.sizes, typography = _a.typography;
    return (0, createStyles_1.createStyles)({
        root: __assign(__assign({}, typography.caption), { lineHeight: "".concat(sizes === null || sizes === void 0 ? void 0 : sizes.small, "px") }),
        dark: {
            backgroundColor: (_b = palette === null || palette === void 0 ? void 0 : palette.text) === null || _b === void 0 ? void 0 : _b.disabled,
            color: (_c = palette === null || palette === void 0 ? void 0 : palette.background) === null || _c === void 0 ? void 0 : _c.defaultContrastText
        },
        error: {
            backgroundColor: (_d = palette === null || palette === void 0 ? void 0 : palette.error) === null || _d === void 0 ? void 0 : _d.main,
            color: (_e = palette === null || palette === void 0 ? void 0 : palette.error) === null || _e === void 0 ? void 0 : _e.contrastText
        },
        info: {
            backgroundColor: (_f = palette === null || palette === void 0 ? void 0 : palette.complementary) === null || _f === void 0 ? void 0 : _f.link,
            color: (_g = palette === null || palette === void 0 ? void 0 : palette.complementary) === null || _g === void 0 ? void 0 : _g.linkContrastText
        },
        light: {
            backgroundColor: (_h = palette === null || palette === void 0 ? void 0 : palette.background) === null || _h === void 0 ? void 0 : _h.paper,
            color: (_j = palette === null || palette === void 0 ? void 0 : palette.background) === null || _j === void 0 ? void 0 : _j.paperContrastText
        },
        primary: {
            backgroundColor: (_k = palette === null || palette === void 0 ? void 0 : palette.primary) === null || _k === void 0 ? void 0 : _k.main,
            color: (_l = palette === null || palette === void 0 ? void 0 : palette.primary) === null || _l === void 0 ? void 0 : _l.contrastText
        },
        secondary: {
            backgroundColor: (_m = palette === null || palette === void 0 ? void 0 : palette.secondary) === null || _m === void 0 ? void 0 : _m.main,
            color: (_o = palette === null || palette === void 0 ? void 0 : palette.secondary) === null || _o === void 0 ? void 0 : _o.contrastText
        },
        success: {
            backgroundColor: (_p = palette === null || palette === void 0 ? void 0 : palette.success) === null || _p === void 0 ? void 0 : _p.main,
            color: (_q = palette === null || palette === void 0 ? void 0 : palette.success) === null || _q === void 0 ? void 0 : _q.contrastText
        },
        warning: {
            backgroundColor: (_r = palette === null || palette === void 0 ? void 0 : palette.complementary) === null || _r === void 0 ? void 0 : _r.warning,
            color: (_s = palette === null || palette === void 0 ? void 0 : palette.complementary) === null || _s === void 0 ? void 0 : _s.warningContrastText
        },
        default: {
            borderRadius: shape === null || shape === void 0 ? void 0 : shape.badgeBorderRadius
        },
        left: {
            borderTopRightRadius: shape === null || shape === void 0 ? void 0 : shape.badgeBorderRadius,
            borderBottomRightRadius: shape === null || shape === void 0 ? void 0 : shape.badgeBorderRadius
        },
        small: {
            padding: "".concat(sizes === null || sizes === void 0 ? void 0 : sizes.none, "px  ").concat(sizes === null || sizes === void 0 ? void 0 : sizes.tiny, "px")
        },
        standard: {
            padding: "".concat(sizes === null || sizes === void 0 ? void 0 : sizes.micro, "px ").concat(sizes === null || sizes === void 0 ? void 0 : sizes.tiny, "px")
        }
    });
};
var useStyles = (0, makeStyles_1.makeStyles)(style, { name: 'NatDSTag' });
exports.default = useStyles;
//# sourceMappingURL=Tag.styles.js.map