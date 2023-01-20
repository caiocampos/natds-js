"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIconColor = exports.getIconName = void 0;
var react_1 = __importDefault(require("react"));
var InputHelperText_styles_1 = __importDefault(require("./InputHelperText.styles"));
var Icon_1 = require("../../Icon");
var getIconName = function (feedback) { return (feedback === 'success' ? 'outlined-action-check' : 'outlined-action-cancel'); };
exports.getIconName = getIconName;
var getIconColor = function (feedback) { return (feedback === 'success' ? 'success' : 'alert'); };
exports.getIconColor = getIconColor;
var InputHelperText = function (_a) {
    var disabled = _a.disabled, feedback = _a.feedback, helperText = _a.helperText;
    var classes = (0, InputHelperText_styles_1.default)({ feedback: feedback, disabled: disabled });
    return (react_1.default.createElement("p", { className: classes.helperText },
        feedback && react_1.default.createElement(Icon_1.Icon, { name: (0, exports.getIconName)(feedback), color: (0, exports.getIconColor)(feedback), size: "small" }),
        helperText));
};
exports.default = InputHelperText;
//# sourceMappingURL=InputHelperText.js.map