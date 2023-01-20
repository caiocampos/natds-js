Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var createStyles_1 = require("../../../styles/createStyles");
var makeStyles_1 = require("../../../styles/makeStyles");
var style = function (_a) {
    var sizes = _a.sizes;
    return (0, createStyles_1.createStyles)({
        badgeComponent: {
            marginLeft: sizes === null || sizes === void 0 ? void 0 : sizes.micro
        }
    });
};
exports.useStyles = (0, makeStyles_1.makeStyles)(style, { name: 'NatDSMenuItemText' });
exports.default = exports.useStyles;
//# sourceMappingURL=MenuItemText.styles.js.map