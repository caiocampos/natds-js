Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var createStyles_1 = require("../../styles/createStyles");
var makeStyles_1 = require("../../styles/makeStyles");
var style = function (_a) {
    var sizes = _a.sizes;
    return (0, createStyles_1.createStyles)({
        root: {
            flex: '1 1 auto'
        },
        listPadding: {
            marginBottom: sizes === null || sizes === void 0 ? void 0 : sizes.tiny,
            marginTop: sizes === null || sizes === void 0 ? void 0 : sizes.tiny,
            paddingBottom: sizes === null || sizes === void 0 ? void 0 : sizes.none,
            paddingTop: sizes === null || sizes === void 0 ? void 0 : sizes.none
        }
    });
};
exports.useStyles = (0, makeStyles_1.makeStyles)(style, { name: 'NatDSDrawerMenu' });
exports.default = exports.useStyles;
//# sourceMappingURL=DrawerMenu.styles.js.map