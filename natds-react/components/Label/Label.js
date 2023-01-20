"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Label_styles_1 = __importDefault(require("./Label.styles"));
var Label = react_1.default.forwardRef(function (_a, ref) {
    var label = _a.label, htmlFor = _a.htmlFor, className = _a.className, required = _a.required;
    var labelContainer = (0, Label_styles_1.default)().labelContainer;
    return (react_1.default.createElement("label", { htmlFor: htmlFor, className: "".concat(className, " ").concat(labelContainer), ref: ref },
        label,
        required && label && '*'));
});
exports.default = Label;
//# sourceMappingURL=Label.js.map