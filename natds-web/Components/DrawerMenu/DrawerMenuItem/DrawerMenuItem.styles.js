Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var core_1 = require("@material-ui/core");
var style = function (theme) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    return (0, core_1.createStyles)({
        listItem: {
            borderRadius: (_a = theme.shape) === null || _a === void 0 ? void 0 : _a.borderRadius,
            cursor: 'pointer',
            padding: (_b = theme.sizes) === null || _b === void 0 ? void 0 : _b.tiny,
            '&:hover': {
                backgroundColor: (_d = (_c = theme.palette) === null || _c === void 0 ? void 0 : _c.action) === null || _d === void 0 ? void 0 : _d.hover
            }
        },
        iconItem: {
            marginRight: (_e = theme.sizes) === null || _e === void 0 ? void 0 : _e.standard,
            marginTop: (_f = theme.sizes) === null || _f === void 0 ? void 0 : _f.none,
            minWidth: 'auto'
        },
        subheader: {
            backgroundColor: "".concat((_h = (_g = theme.palette) === null || _g === void 0 ? void 0 : _g.background) === null || _h === void 0 ? void 0 : _h.paper),
            borderTop: "".concat((_k = (_j = theme.palette) === null || _j === void 0 ? void 0 : _j.action) === null || _k === void 0 ? void 0 : _k.hover, " 1px solid"),
            margin: "".concat((_l = theme.sizes) === null || _l === void 0 ? void 0 : _l.small, "px -").concat((_m = theme.sizes) === null || _m === void 0 ? void 0 : _m.tiny, "px 0")
        },
        linkItem: {
            alignItems: 'center',
            color: 'inherit',
            display: 'flex',
            fontFamily: theme.typography.fontFamily,
            fontSize: (_o = theme.typography.body2) === null || _o === void 0 ? void 0 : _o.fontSize,
            fontWeight: (_p = theme.typography.body2) === null || _p === void 0 ? void 0 : _p.fontWeight,
            letterSpacing: (_q = theme.typography.body2) === null || _q === void 0 ? void 0 : _q.letterSpacing,
            lineHeight: (_r = theme.typography.body2) === null || _r === void 0 ? void 0 : _r.lineHeight,
            textDecoration: 'none',
            width: '100%'
        }
    });
};
exports.useStyles = (0, core_1.makeStyles)(style, { name: 'NatDSMenuItemText' });
exports.default = exports.useStyles;
//# sourceMappingURL=DrawerMenuItem.styles.js.map