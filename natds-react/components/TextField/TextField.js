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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Input_1 = require("../Input");
var Label_1 = require("../Label");
var TextField_styles_1 = __importDefault(require("./TextField.styles"));
var TextField = react_1.default.forwardRef(function (_a, ref) {
    var _b = _a.disabled, disabled = _b === void 0 ? false : _b, feedback = _a.feedback, helperText = _a.helperText, id = _a.id, _c = _a.isResizable, isResizable = _c === void 0 ? false : _c, label = _a.label, _d = _a.minRows, minRows = _d === void 0 ? 3 : _d, onBlur = _a.onBlur, onChange = _a.onChange, onFocus = _a.onFocus, placeholder = _a.placeholder, _e = _a.readOnly, readOnly = _e === void 0 ? false : _e, _f = _a.required, required = _f === void 0 ? false : _f, _g = _a.size, size = _g === void 0 ? 'mediumX' : _g, testID = _a.testID, _h = _a.type, type = _h === void 0 ? 'text' : _h, value = _a.value, _j = _a.className, className = _j === void 0 ? '' : _j, rest = __rest(_a, ["disabled", "feedback", "helperText", "id", "isResizable", "label", "minRows", "onBlur", "onChange", "onFocus", "placeholder", "readOnly", "required", "size", "testID", "type", "value", "className"]);
    var labelText = (0, TextField_styles_1.default)({ feedback: feedback, disabled: disabled, label: label }).labelText;
    return (react_1.default.createElement("div", { "data-testid": testID, className: className },
        react_1.default.createElement(Label_1.Label, { htmlFor: id, required: required, label: label, className: labelText }),
        react_1.default.createElement(Input_1.Input, __assign({ id: id, disabled: disabled, onBlur: onBlur, onChange: onChange, onFocus: onFocus, placeholder: placeholder, readOnly: readOnly, size: size, type: type, value: value, minRows: minRows, isResizable: isResizable, feedback: feedback, ref: ref }, rest)),
        react_1.default.createElement(Input_1.InputHelperText, { disabled: disabled, feedback: feedback, helperText: helperText })));
});
exports.default = TextField;
//# sourceMappingURL=TextField.js.map