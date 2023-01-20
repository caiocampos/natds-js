"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
var styles = (0, react_jss_1.createUseStyles)(function (theme) { return ({
    labelText: {
        color: getFeedbackTextColor(theme),
        display: function (_a) {
            var label = _a.label;
            return (label ? 'inline-block' : 'none');
        },
        fontFamily: [
            theme.textField.label.primary.fontFamily,
            theme.textField.label.fallback.fontFamily
        ],
        fontSize: theme.textField.label.fontSize,
        fontWeight: theme.textField.label.primary.fontWeight,
        letterSpacing: theme.textField.label.letterSpacing,
        lineHeight: theme.textField.label.lineHeight,
        marginBottom: theme.spacing.micro
    }
}); });
exports.default = styles;
//# sourceMappingURL=TextField.styles.js.map