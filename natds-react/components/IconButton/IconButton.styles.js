"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_jss_1 = require("react-jss");
var getBackgroundStyles = function (theme, props) {
    var styles = {
        none: 'transparent',
        float: (props.disabled ? theme.color.lowEmphasis : theme.color.surface),
        overlay: theme.color.highlight
    };
    return styles[props.backgroundStyle];
};
var setBoxShadow = function (theme) { return function (_a) {
    var backgroundStyle = _a.backgroundStyle, disabled = _a.disabled;
    return backgroundStyle === 'float' && !disabled && theme.elevation.medium;
}; };
var setOpacity = function (theme) { return function (_a) {
    var backgroundStyle = _a.backgroundStyle;
    return backgroundStyle === 'overlay' && theme.opacity.mediumHigh;
}; };
var styles = (0, react_jss_1.createUseStyles)(function (theme) { return ({
    iconButtonContainer: {
        backgroundColor: function (props) { return getBackgroundStyles(theme, props); },
        borderRadius: function (_a) {
            var size = _a.size;
            return theme.iconButton[size].borderRadius;
        },
        boxShadow: setBoxShadow(theme),
        opacity: setOpacity(theme),
        overflow: 'hidden',
        position: 'relative',
        width: function (_a) {
            var size = _a.size;
            return theme.size[size];
        },
        '&:after': {
            backgroundColor: theme.color.highlight,
            content: '" "',
            height: '100%',
            left: 0,
            opacity: 0,
            position: 'absolute',
            top: 0,
            width: '100%'
        },
        '&:hover:not([disabled]):after': { opacity: theme.opacity.lower },
        '&:focus:not([disabled]):after': { opacity: theme.opacity.low },
        '&:disabled': { cursor: 'default' }
    }
}); });
exports.default = styles;
//# sourceMappingURL=IconButton.styles.js.map