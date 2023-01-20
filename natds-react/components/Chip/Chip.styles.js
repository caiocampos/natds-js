"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_jss_1 = require("react-jss");
var getBorderColor = function (theme) { return function (_a) {
    var color = _a.color, isSelected = _a.isSelected, customBorderColor = _a.customBorderColor;
    if (isSelected)
        return 'transparent';
    if (color === 'neutral')
        return theme.color.lowEmphasis;
    if (color === 'custom')
        return customBorderColor;
    return theme.color[color];
}; };
// eslint-disable-next-line complexity
var getBackgroundColor = function (theme) { return function (_a) {
    var color = _a.color, isSelected = _a.isSelected, customBackground = _a.customBackground;
    if (isSelected) {
        if (color === 'neutral' || color === 'primary')
            return theme.color.primary;
        if (color === 'secondary')
            return theme.color.secondary;
        if (color === 'custom')
            return customBackground;
    }
    return 'transparent';
}; };
// eslint-disable-next-line complexity
var getLabelColor = function (theme) { return function (_a) {
    var color = _a.color, isSelected = _a.isSelected, customLabelColor = _a.customLabelColor;
    if (isSelected) {
        if (color === 'neutral' || color === 'primary')
            return theme.color.onPrimary;
        if (color === 'secondary')
            return theme.color.onSecondary;
        if (color === 'custom')
            return customLabelColor;
    }
    return theme.color.highEmphasis;
}; };
var styles = (0, react_jss_1.createUseStyles)(function (theme) { return ({
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        width: 'fit-content',
        height: function (_a) {
            var size = _a.size;
            return theme.size[size];
        },
        padding: function (_a) {
            var size = _a.size;
            return (size === 'semi' || size === 'semiX' ? theme.spacing.tiny : theme.spacing.small);
        },
        border: '1px solid',
        borderColor: getBorderColor(theme),
        borderRadius: function (_a) {
            var size = _a.size;
            return (size === 'semi' ? '16px' : '32px');
        },
        color: getLabelColor(theme),
        background: getBackgroundColor(theme),
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        '&:hover:not([disabled])': {
            background: '#F0F0F0'
        },
        '&:disabled': {
            cursor: 'default',
            borderColor: theme.color.lowEmphasis,
            '& span': {
                color: theme.color.lowEmphasis
            },
            '& i': {
                color: theme.color.lowEmphasis
            }
        }
    },
    label: {
        fontFamily: theme.typography.fontFamily.primary,
        fontSize: theme.body2.fontSize,
        marginLeft: function (_a) {
            var hasLeftIcon = _a.hasLeftIcon, hasLeftAvatar = _a.hasLeftAvatar;
            return (hasLeftIcon || hasLeftAvatar ? theme.spacing.micro : '0');
        },
        marginRight: function (_a) {
            var hasRightIcon = _a.hasRightIcon, hasRightAvatar = _a.hasRightAvatar;
            return (hasRightIcon || hasRightAvatar ? theme.spacing.micro : '0');
        }
    }
}); });
exports.default = styles;
//# sourceMappingURL=Chip.styles.js.map