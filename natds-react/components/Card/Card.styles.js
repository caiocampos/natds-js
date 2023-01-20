"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_jss_1 = require("react-jss");
var styles = (0, react_jss_1.createUseStyles)(function (theme) { return ({
    card: {
        backgroundColor: theme.color.surface,
        borderRadius: function (_a) {
            var radius = _a.radius;
            return (radius ? theme.borderRadius.medium : 'none');
        },
        boxShadow: function (_a) {
            var elevation = _a.elevation;
            return (elevation ? theme.elevation.micro : 'none');
        },
        display: 'inline-block',
        overflow: 'hidden'
    }
}); });
exports.default = styles;
//# sourceMappingURL=Card.styles.js.map