"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_jss_1 = require("react-jss");
var styles = (0, react_jss_1.createUseStyles)(function (theme) { return ({
    root: {
        '& svg': {
            height: '100%',
            width: function (_a) {
                var size = _a.size;
                return theme.size[size];
            },
            '& path': {
                fill: function (_a) {
                    var color = _a.color;
                    return color !== 'neutral' && theme.color[color];
                }
            }
        }
    }
}); });
exports.default = styles;
//# sourceMappingURL=Logo.styles.js.map