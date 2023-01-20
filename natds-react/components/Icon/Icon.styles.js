"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_jss_1 = require("react-jss");
var styles = (0, react_jss_1.createUseStyles)(function (theme) { return ({
    icon: {
        color: function (_a) {
            var color = _a.color;
            return theme.color[color];
        },
        fontFamily: 'natds-icons',
        fontSize: function (_a) {
            var size = _a.size;
            return theme.size[size];
        },
        pointerEvents: 'none',
        userSelect: 'none'
    }
}); });
exports.default = styles;
//# sourceMappingURL=Icon.styles.js.map