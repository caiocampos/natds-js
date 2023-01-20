"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable max-lines-per-function */
var react_jss_1 = require("react-jss");
var getFeedbackBorderColor = function (theme) { return function (_a) {
    var feedback = _a.feedback;
    var borderColor = {
        error: theme.color.alert,
        success: theme.color.success
    };
    return feedback ? borderColor[feedback] : theme.color.lowEmphasis;
}; };
var styles = (0, react_jss_1.createUseStyles)(function (theme) { return ({
    wrapper: {
        alignItems: 'center',
        backgroundColor: theme.color.surface,
        border: '1px solid',
        borderColor: getFeedbackBorderColor(theme),
        borderRadius: theme.textField.borderRadius,
        cursor: function (_a) {
            var disabled = _a.disabled, readOnly = _a.readOnly;
            return (!disabled && !readOnly ? 'text' : 'default');
        },
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',
        '&:hover': {
            borderColor: function (_a) {
                var disabled = _a.disabled, readOnly = _a.readOnly;
                return (!disabled && !readOnly && theme.color.mediumEmphasis);
            }
        },
        '&:focus-within': {
            border: '2px solid',
            borderColor: theme.color.primary
        },
        '&:after': {
            backgroundColor: theme.color.lowEmphasis,
            content: '""',
            height: '100%',
            left: 0,
            opacity: function (_a) {
                var readOnly = _a.readOnly;
                return (readOnly ? theme.opacity.disabledLow : 0);
            },
            pointerEvents: 'none',
            position: 'absolute',
            top: 0,
            width: '100%'
        }
    },
    base: {
        background: 'none',
        border: 'none',
        color: theme.color.highEmphasis,
        fontFamily: [
            theme.textField.content.primary.fontFamily,
            theme.textField.content.fallback.fontFamily
        ],
        fontSize: theme.textField.content.fontSize,
        fontWeight: theme.textField.content.primary.fontWeight,
        letterSpacing: theme.textField.content.letterSpacing,
        lineHeight: theme.textField.content.lineHeight,
        outline: 'none',
        padding: theme.spacing.small,
        width: '100%',
        '&:read-only': {
            pointerEvents: 'none'
        },
        '&:disabled': {
            color: theme.color.lowEmphasis,
            cursor: 'default'
        }
    },
    input: {
        extend: 'base',
        boxSizing: 'border-box',
        height: function (_a) {
            var size = _a.size;
            return size && theme.size[size];
        },
        paddingRight: function (_a) {
            var action = _a.action;
            return action && theme.spacing.tiny;
        },
        '&::placeholder': {
            color: function (_a) {
                var disabled = _a.disabled;
                return (disabled ? theme.color.lowEmphasis : theme.color.mediumEmphasis);
            }
        }
    },
    textArea: {
        extend: 'base',
        paddingRight: function (_a) {
            var action = _a.action;
            return action && theme.spacing.tiny;
        },
        resize: function (_a) {
            var isResizable = _a.isResizable;
            return !isResizable && 'none';
        },
        '&::placeholder': {
            color: function (_a) {
                var disabled = _a.disabled;
                return (disabled ? theme.color.lowEmphasis : theme.color.mediumEmphasis);
            }
        }
    }
}); });
exports.default = styles;
//# sourceMappingURL=Input.styles.js.map