"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable max-lines-per-function */
var react_1 = __importDefault(require("react"));
var Input_styles_1 = __importDefault(require("./Input.styles"));
var InputAction_1 = __importDefault(require("./InputAction"));
var Input = react_1.default.forwardRef(function (props, ref) {
    var action = props.action, _a = props.className, className = _a === void 0 ? '' : _a, _b = props.disabled, disabled = _b === void 0 ? false : _b, id = props.id, _c = props.isResizable, isResizable = _c === void 0 ? false : _c, _d = props.minRows, minRows = _d === void 0 ? 3 : _d, onBlur = props.onBlur, onChange = props.onChange, onFocus = props.onFocus, placeholder = props.placeholder, _e = props.readOnly, readOnly = _e === void 0 ? false : _e, _f = props.size, size = _f === void 0 ? 'mediumX' : _f, _g = props.type, type = _g === void 0 ? 'text' : _g, value = props.value;
    var _h = (0, Input_styles_1.default)(__assign({ size: size, isResizable: isResizable }, props)), wrapper = _h.wrapper, input = _h.input, textArea = _h.textArea;
    var isMultiline = type === 'multiline';
    return (react_1.default.createElement("div", { className: wrapper, ref: ref },
        isMultiline
            ? (react_1.default.createElement("textarea", { className: "".concat(className, " ").concat(textArea), "data-testid": "ds-input-multiline", disabled: disabled, onBlur: onBlur, onChange: onChange, onFocus: onFocus, placeholder: placeholder, readOnly: readOnly, rows: minRows, id: id }))
            : (react_1.default.createElement("input", { className: "".concat(className, " ").concat(input), "data-testid": "ds-input", disabled: disabled, onBlur: onBlur, onChange: onChange, onFocus: onFocus, placeholder: placeholder, readOnly: readOnly, type: type, value: value, id: id })),
        action && (react_1.default.createElement(InputAction_1.default, __assign({}, props)))));
});
exports.default = Input;
//# sourceMappingURL=Input.js.map