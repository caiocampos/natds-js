"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable max-lines-per-function */
var react_1 = __importDefault(require("react"));
var Label_1 = require("../Label");
var Button_1 = require("../Button");
var Counter_styles_1 = __importDefault(require("./Counter.styles"));
var Counter = react_1.default.forwardRef(function (_a, ref) {
    var ariaLabelDecrementButton = _a.ariaLabelDecrementButton, ariaLabelIncrementButton = _a.ariaLabelIncrementButton, _b = _a.className, className = _b === void 0 ? '' : _b, disabled = _a.disabled, label = _a.label, _c = _a.maxValue, maxValue = _c === void 0 ? 99 : _c, _d = _a.minValue, minValue = _d === void 0 ? 0 : _d, onDecrement = _a.onDecrement, onIncrement = _a.onIncrement, _e = _a.size, size = _e === void 0 ? 'semiX' : _e, testID = _a.testID, _f = _a.value, value = _f === void 0 ? 0 : _f;
    var _g = (0, Counter_styles_1.default)({ size: size }), buttonGroup = _g.buttonGroup, inputBase = _g.inputBase, buttonLeft = _g.buttonLeft, buttonRight = _g.buttonRight, labelText = _g.labelText;
    var maxReached = value >= maxValue;
    var minReached = value <= minValue;
    return (react_1.default.createElement("div", { "data-testid": testID, ref: ref, className: className },
        label && react_1.default.createElement(Label_1.Label, { className: labelText, label: label }),
        react_1.default.createElement("div", { className: buttonGroup },
            react_1.default.createElement(Button_1.Button, { ariaLabel: ariaLabelDecrementButton, className: buttonLeft, disabled: disabled || minReached, onClick: onDecrement, size: size, testID: "onDecrement-btn", variant: "text" }, "-"),
            react_1.default.createElement("input", { className: inputBase, readOnly: true, value: value }),
            react_1.default.createElement(Button_1.Button, { ariaLabel: ariaLabelIncrementButton, className: buttonRight, disabled: disabled || maxReached, onClick: onIncrement, size: size, testID: "onIncrement-btn", variant: "text" }, "+"))));
});
exports.default = Counter;
//# sourceMappingURL=Counter.js.map