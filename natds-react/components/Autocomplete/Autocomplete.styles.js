"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_jss_1 = require("react-jss");
var getColor = function (theme) { return function (_a) {
    var isFilled = _a.isFilled, feedback = _a.feedback, isDisabled = _a.isDisabled;
    if (feedback === 'error')
        return theme.color.alert;
    if (feedback === 'success')
        return theme.color.success;
    if (isDisabled)
        return theme.color.lowEmphasis;
    if (isFilled)
        return theme.color.highEmphasis;
    return theme.color.highEmphasis;
}; };
var styles = (0, react_jss_1.createUseStyles)(function (theme) { return ({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        fontFamily: theme.textField.label.primary.fontFamily
    },
    labelText: {
        color: getColor(theme),
        fontFamily: [theme.typography.body.regular.fontFamily, theme.typography.fallback.fontFamily],
        fontSize: theme.textField.label.fontSize,
        fontWeight: theme.textField.label.primary.fontWeight,
        letterSpacing: theme.textField.label.letterSpacing,
        lineHeight: theme.textField.label.lineHeight,
        marginBottom: theme.spacing.micro,
        '&:disabled': {
            color: 'blue'
        }
    },
    inputWrapper: {
        position: 'relative'
    },
    input: {
        width: '100%',
        height: function (_a) {
            var size = _a.size;
            return theme.size[size];
        },
        position: 'relative',
        // cursor: 'pointer',
        backgroundColor: function (_a) {
            var readonly = _a.readonly;
            return (readonly ? theme.color.neutral100 : theme.color.surface);
        },
        border: '1px solid',
        borderColor: getColor(theme),
        borderRadius: theme.textField.borderRadius,
        padding: "0 ".concat(theme.spacing.small, "px"),
        paddingRight: '45px',
        color: function (_a) {
            var isDisabled = _a.isDisabled;
            return (isDisabled ? theme.color.lowEmphasis : theme.color.highEmphasis);
        },
        fontSize: theme.body1.fontSize,
        fontWeight: theme.textField.content.primary.fontWeight,
        letterSpacing: theme.textField.content.letterSpacing,
        lineHeight: theme.textField.content.lineHeight,
        appearance: 'none',
        outline: 'none',
        boxSizing: 'border-box',
        '&::placeholder': {
            color: function (_a) {
                var isDisabled = _a.isDisabled;
                return (isDisabled ? theme.color.lowEmphasis : theme.color.highEmphasis);
            }
        },
        '&:focus:enabled': {
            borderColor: theme.color.primary,
            color: theme.color.mediumEmphasis
        },
        '&:hover:enabled': {
            borderColor: theme.color.highEmphasis,
            color: theme.color.highEmphasis
        }
    },
    icon: {
        color: function (_a) {
            var isDisabled = _a.isDisabled;
            return (isDisabled ? theme.color.lowEmphasis : 'inherit');
        },
        position: 'absolute',
        top: 0,
        right: theme.spacing.small,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer'
    },
    surfaceWrapper: {
        position: 'absolute',
        width: '100%',
        borderRadius: theme.borderRadius.medium,
        backgroundColor: theme.color.surface,
        boxShadow: theme.elevation.largeX,
        maxHeight: '208px',
        minHeight: '48px',
        overflowY: 'auto',
        bottom: function (_a) {
            var position = _a.position;
            return (position === 'bottom' ? '56px' : 'initial');
        }
    },
    menuOptionsWrapper: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: theme.size.tiny,
        paddingBottom: theme.size.tiny,
        width: '100%',
        borderRadius: theme.borderRadius.medium,
        margin: '0px',
        padding: '0px'
    },
    optionsItem: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '48px',
        color: function (_a) {
            var isDisabled = _a.isDisabled;
            return (isDisabled ? theme.color.lowEmphasis : theme.color.mediumEmphasis);
        },
        borderRadius: theme.borderRadius.medium,
        '&:hover': {
            backgroundColor: theme.color.neutral200
        },
        transition: 'all 0.3s',
        paddingLeft: theme.size.small,
        paddingRight: theme.size.small,
        boxSizing: 'border-box'
    }
}); });
exports.default = styles;
//# sourceMappingURL=Autocomplete.styles.js.map