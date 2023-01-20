"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable max-len */
var react_jss_1 = require("react-jss");
var getFocusOpacity = function (theme) { return function (_a) {
    var interaction = _a.interaction;
    var focusOpacity = {
        none: theme.opacity.transparent,
        action: theme.opacity.low,
        selectable: theme.opacity.mediumLow
    };
    return interaction && focusOpacity[interaction];
}; };
var styles = (0, react_jss_1.createUseStyles)(function (theme) { return ({
    listItem: {
        alignItems: 'center',
        backgroundColor: theme.color.surface,
        boxSizing: 'border-box',
        cursor: function (_a) {
            var interaction = _a.interaction;
            return interaction !== 'none' && 'pointer';
        },
        display: 'flex',
        fontFamily: [theme.typography.fontFamily.primary, theme.typography.fontFamily.secondary],
        listStyleType: 'none',
        minHeight: theme.size.medium,
        padding: [theme.spacing.tiny, theme.spacing.small],
        position: 'relative',
        width: '100%',
        '&:after': {
            backgroundColor: function (_a) {
                var selected = _a.selected;
                return (selected ? theme.color.primary : theme.color.highlight);
            },
            content: '" "',
            height: '100%',
            left: 0,
            opacity: function (_a) {
                var selected = _a.selected;
                return (selected ? theme.opacity.mediumLow : theme.opacity.transparent);
            },
            position: 'absolute',
            top: 0,
            width: '100%'
        },
        '&:hover:after': {
            backgroundColor: function (_a) {
                var interaction = _a.interaction;
                return (interaction === 'none' ? 'transparent' : theme.color.highlight);
            },
            opacity: theme.opacity.lower
        },
        '&:focus:after': {
            backgroundColor: function (_a) {
                var selected = _a.selected;
                return (selected ? theme.color.primary : theme.color.highlight);
            },
            opacity: getFocusOpacity(theme)
        }
    }
}); });
exports.default = styles;
//# sourceMappingURL=ListItem.styles.js.map