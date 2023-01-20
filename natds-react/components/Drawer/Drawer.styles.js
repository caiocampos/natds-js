"use strict";
/* eslint-disable @typescript-eslint/no-non-null-assertion */
Object.defineProperty(exports, "__esModule", { value: true });
var react_jss_1 = require("react-jss");
var getSize = function (size) {
    var width = {
        small: 256,
        medium: 375,
        large: 600
    };
    return width[size];
};
var styles = (0, react_jss_1.createUseStyles)(function (theme) { return ({
    overlayContainer: function (_a) {
        var open = _a.open;
        return ({
            backgroundColor: theme.color.highlight,
            display: !open && 'none',
            height: '100%',
            left: 0,
            opacity: theme.opacity.mediumHigh,
            position: 'fixed',
            top: 0,
            width: '100%',
            zIndex: 1199
        });
    },
    drawer: function (_a) {
        var _b = _a.open, open = _b === void 0 ? false : _b, _c = _a.size, size = _c === void 0 ? 'small' : _c;
        var x = open ? getSize(size) : 0;
        return {
            backgroundColor: theme.color.surface,
            boxShadow: theme.elevation.small,
            display: 'flex',
            flexFlow: 'column nowrap',
            height: '100%',
            justifyContent: 'space-between',
            left: getSize(size) * -1,
            overflow: 'hidden',
            position: 'absolute',
            top: 0,
            transform: "translateX(".concat(x, "px)"),
            transition: '0.3s ease-in-out',
            width: getSize(size),
            zIndex: 1200
        };
    }
}); });
exports.default = styles;
//# sourceMappingURL=Drawer.styles.js.map