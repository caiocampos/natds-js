"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_jss_1 = require("react-jss");
var styles = (0, react_jss_1.createUseStyles)(function (theme) { return ({
    divider: {
        border: 0,
        height: 1,
        backgroundColor: theme.color.lowEmphasis,
        marginTop: 0,
        marginBottom: 0,
        marginRight: function (_a) {
            var variant = _a.variant;
            return (variant === 'middle' ? theme.spacing.standard : 0);
        },
        marginLeft: function (_a) {
            var variant = _a.variant;
            return (variant === 'full-bleed' ? 0 : theme.spacing.standard);
        }
    }
}); });
exports.default = styles;
//# sourceMappingURL=Divider.styles.js.map