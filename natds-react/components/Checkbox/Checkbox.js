"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Ripple_1 = require("../Ripple");
var Label_1 = require("../Label");
var Checkbox_styles_1 = __importDefault(require("./Checkbox.styles"));
var Checkbox = react_1.default.forwardRef(function (_a, ref) {
    var _b = _a.checked, checked = _b === void 0 ? false : _b, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, id = _a.id, _e = _a.indeterminate, indeterminate = _e === void 0 ? false : _e, onChange = _a.onChange, _f = _a.testID, testID = _f === void 0 ? "ds-checkbox-".concat(id) : _f, value = _a.value, label = _a.label;
    var _g = (0, Checkbox_styles_1.default)({ indeterminate: indeterminate, disabled: disabled }), checkbox = _g.checkbox, wrapper = _g.wrapper, container = _g.container, labelText = _g.labelText;
    var getRippleColor = checked && !disabled ? 'primary' : 'highlight';
    return (react_1.default.createElement("div", { className: "".concat(className, " ").concat(container) },
        react_1.default.createElement(Ripple_1.Ripple, { isCentered: true, hideOverflow: false, disabled: disabled, color: getRippleColor, animationDuration: 500, showHover: true, focus: true },
            react_1.default.createElement("div", { className: wrapper },
                react_1.default.createElement("input", { "data-testid": testID, checked: checked, className: checkbox, disabled: disabled, id: id, onChange: onChange, type: "checkbox", value: value, ref: ref }))),
        label && react_1.default.createElement(Label_1.Label, { className: labelText, label: label, htmlFor: id })));
});
exports.default = Checkbox;
//# sourceMappingURL=Checkbox.js.map