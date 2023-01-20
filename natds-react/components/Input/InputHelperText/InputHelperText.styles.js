"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFeedbackTextColor = void 0;
/* eslint-disable max-len */
var react_jss_1 = require("react-jss");
var getFeedbackTextColor = function (theme) { return function (_a) {
    var feedback = _a.feedback, disabled = _a.disabled;
    var defaultColor = disabled ? theme.color.lowEmphasis : theme.color.mediumEmphasis;
    var textColor = {
        error: theme.color.alert,
        success: theme.color.success
    };
    return feedback ? textColor[feedback] : defaultColor;
}; };
exports.getFeedbackTextColor = getFeedbackTextColor;
var styles = (0, react_jss_1.createUseStyles)(function (theme) { return ({
    helperText: {
        alignItems: 'center',
        color: (0, exports.getFeedbackTextColor)(theme),
        display: 'flex',
        fontFamily: [
            theme.textField.helperText.primary.fontFamily,
            theme.textField.helperText.fallback.fontFamily
        ],
        fontSize: theme.textField.helperText.fontSize,
        fontWeight: theme.textField.helperText.primary.fontWeight,
        letterSpacing: theme.textField.helperText.letterSpacing,
        lineHeight: theme.textField.helperText.lineHeight,
        marginBottom: 0,
        marginTop: theme.spacing.micro,
        '& > i': {
            marginRight: function (_a) {
                var feedback = _a.feedback;
                return feedback && theme.spacing.micro;
            }
        }
    }
}); });
exports.default = styles;
//# sourceMappingURL=InputHelperText.styles.js.map