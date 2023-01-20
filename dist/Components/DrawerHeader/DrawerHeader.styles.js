Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var createStyles_1 = require("../../styles/createStyles");
var makeStyles_1 = require("../../styles/makeStyles");
var style = function (_a) {
    var palette = _a.palette, sizes = _a.sizes;
    return (0, createStyles_1.createStyles)({
        root: {
            borderBottom: "".concat(palette === null || palette === void 0 ? void 0 : palette.divider, " 1px solid"),
            flex: '0 0 auto',
            padding: "".concat(sizes === null || sizes === void 0 ? void 0 : sizes.semi, "px ").concat(sizes === null || sizes === void 0 ? void 0 : sizes.small, "px ").concat(sizes === null || sizes === void 0 ? void 0 : sizes.small, "px")
        },
        avatar: {
            marginBottom: sizes === null || sizes === void 0 ? void 0 : sizes.small
        }
    });
};
exports.useStyles = (0, makeStyles_1.makeStyles)(style, { name: 'NatDSDrawerHeader' });
exports.default = exports.useStyles;
//# sourceMappingURL=DrawerHeader.styles.js.map