"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable max-len */
var react_jss_1 = require("react-jss");
// eslint-disable-next-line complexity
var getBackgroundColorByState = function (theme) { return function (_a) {
    var _b = _a.selected, selected = _b === void 0 ? false : _b, _c = _a.activated, activated = _c === void 0 ? false : _c, _d = _a.type, type = _d === void 0 ? 'regular' : _d;
    if (activated && !selected && type !== 'submenu') {
        return "".concat(theme.color.highlight, "09");
    }
    if ((selected && !activated) || (selected && activated)) {
        return "".concat(theme.color.primary, "29");
    }
    return 'transparent';
}; };
var getPseudoBackgroundColor = function (_a) {
    var theme = _a.theme, opacity = _a.opacity;
    return function (_a) {
        var disabled = _a.disabled;
        return (disabled && disabled ? 'transparent' : "".concat(theme.color.highlight).concat(opacity));
    };
};
var styles = (0, react_jss_1.createUseStyles)(function (theme) { return ({
    listItem: {
        listStyle: 'none',
        width: '100%'
    },
    menuItem: {
        alignItems: 'center',
        borderLeft: function (_a) {
            var type = _a.type;
            return (type === 'submenu' ? "1px solid ".concat(theme.color.lowEmphasis) : 'none');
        },
        backgroundColor: getBackgroundColorByState(theme),
        color: function (_a) {
            var disabled = _a.disabled;
            return disabled && (disabled ? theme.color.lowEmphasis : theme.color.highEmphasis);
        },
        cursor: function (_a) {
            var disabled = _a.disabled;
            return disabled && (disabled ? 'default' : 'pointer');
        },
        display: 'flex',
        fontFamily: [
            theme.navigationDrawer.section.item.primary.fontFamily,
            theme.navigationDrawer.section.item.fallback.fontFamily
        ],
        fontSize: function (_a) {
            var type = _a.type;
            return (type === 'title' ? theme.subtitle1.fontSize : theme.body1.fontSize);
        },
        fontWeight: function (_a) {
            var type = _a.type;
            return (type === 'title' ? theme.subtitle1.fontWeight : theme.body1.fontWeight);
        },
        height: theme.size.semiX,
        letterSpacing: function (_a) {
            var type = _a.type;
            return (type === 'title' ? theme.subtitle1.letterSpacing : theme.body1.letterSpacing);
        },
        lineHeight: function (_a) {
            var type = _a.type;
            return (type === 'title' ? theme.subtitle1.lineHeight : theme.body1.lineHeight);
        },
        padding: [0, theme.spacing.small],
        position: 'relative',
        '&:hover': {
            backgroundColor: getPseudoBackgroundColor({ theme: theme, opacity: '09' })
        },
        '&:focus': {
            backgroundColor: getPseudoBackgroundColor({ theme: theme, opacity: '29' })
        }
    }
}); });
exports.default = styles;
//# sourceMappingURL=MenuItem.styles.js.map