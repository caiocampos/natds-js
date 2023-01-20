"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable max-lines-per-function */
var react_1 = __importDefault(require("react"));
var Ripple_1 = require("../Ripple");
var Label_1 = require("../Label");
var RadioButton_styles_1 = __importDefault(require("./RadioButton.styles"));
var RadioButton = react_1.default.forwardRef(function (_a, ref) {
    var _b = _a.checked, checked = _b === void 0 ? false : _b, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, id = _a.id, label = _a.label, name = _a.name, onBlur = _a.onBlur, onChange = _a.onChange, onFocus = _a.onFocus, _e = _a.required, required = _e === void 0 ? false : _e, _f = _a.testID, testID = _f === void 0 ? "ds-RadioButton-".concat(id) : _f, value = _a.value;
    var _g = (0, RadioButton_styles_1.default)({ disabled: disabled }), radioButton = _g.radioButton, wrapper = _g.wrapper, container = _g.container, labelText = _g.labelText;
    var getRippleColor = checked && !disabled ? 'primary' : 'highlight';
    return (react_1.default.createElement("div", { className: "".concat(className, " ").concat(container) },
        react_1.default.createElement(Ripple_1.Ripple, { isCentered: true, hideOverflow: false, disabled: disabled, color: getRippleColor, animationDuration: 500, showHover: true, focus: true },
            react_1.default.createElement("div", { className: wrapper },
                react_1.default.createElement("input", { checked: checked, className: radioButton, "data-testid": testID, disabled: disabled, id: id, name: name, onBlur: onBlur, onFocus: onFocus, onChange: onChange, type: "radio", value: value, required: required, ref: ref }))),
        label && react_1.default.createElement(Label_1.Label, { className: labelText, label: label, htmlFor: id })));
});
exports.default = RadioButton;
//# sourceMappingURL=RadioButton.js.map