"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Select_styles_1 = __importDefault(require("./Select.styles"));
var Label_1 = __importDefault(require("../Label"));
var Icon_1 = __importDefault(require("../Icon"));
var Input_1 = require("../Input");
var Select = react_1.default.forwardRef(function (props, ref) {
    var testID = props.testID, label = props.label, name = props.name, placeholder = props.placeholder, options = props.options, _a = props.size, size = _a === void 0 ? 'mediumX' : _a, helperText = props.helperText, value = props.value, feedback = props.feedback, _b = props.required, required = _b === void 0 ? false : _b, _c = props.disabled, disabled = _c === void 0 ? false : _c, onChange = props.onChange;
    var _d = (0, Select_styles_1.default)({
        size: size,
        isFilled: !!value,
        feedback: feedback,
        isDisabled: disabled
    }), wrapper = _d.wrapper, labelText = _d.labelText, inputWrapper = _d.inputWrapper, input = _d.input, icon = _d.icon;
    return (react_1.default.createElement("div", { "data-testid": testID, ref: ref, className: wrapper },
        react_1.default.createElement(Label_1.default, { htmlFor: name, label: label, className: labelText, required: required }),
        react_1.default.createElement("div", { className: inputWrapper },
            react_1.default.createElement("select", { value: value, name: name, id: name, className: input, onChange: onChange, required: required, disabled: disabled, "aria-label": labelText },
                !!placeholder && react_1.default.createElement("option", { "data-testid": "placeholder-option", selected: true, disabled: true }, placeholder),
                options.map(function (_a) {
                    var valueOption = _a.value, labelOption = _a.label;
                    return (react_1.default.createElement("option", { key: valueOption, value: valueOption, selected: valueOption === value }, labelOption));
                })),
            react_1.default.createElement(Icon_1.default, { size: "semi", name: "outlined-navigation-arrowbottom", className: icon })),
        !!helperText
            && (react_1.default.createElement(Input_1.InputHelperText, { helperText: helperText, feedback: feedback, disabled: disabled }))));
});
exports.default = Select;
//# sourceMappingURL=Select.js.map