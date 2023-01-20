Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var createStyles_1 = require("../../styles/createStyles");
var makeStyles_1 = require("../../styles/makeStyles");
var style = function (_a) {
    var palette = _a.palette, sizes = _a.sizes;
    return (0, createStyles_1.createStyles)({
        root: {
            borderTop: "".concat(palette === null || palette === void 0 ? void 0 : palette.divider, " 1px solid"),
            flex: '0 0 auto',
            padding: "0 ".concat(sizes === null || sizes === void 0 ? void 0 : sizes.tiny, "px ").concat(sizes === null || sizes === void 0 ? void 0 : sizes.small, "px")
        }
    });
};
exports.useStyles = (0, makeStyles_1.makeStyles)(style, { name: 'NatDSDrawerFooter' });
exports.default = exports.useStyles;
//# sourceMappingURL=DrawerFooter.styles.js.map