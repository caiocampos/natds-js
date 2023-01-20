"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var DialogFooter_styles_1 = __importDefault(require("./DialogFooter.styles"));
var DialogFooter = react_1.default.forwardRef(function (_a, ref) {
    var primaryButton = _a.primaryButton, _b = _a.className, className = _b === void 0 ? '' : _b, secondaryButton = _a.secondaryButton;
    var footer = (0, DialogFooter_styles_1.default)().footer;
    return (react_1.default.createElement("div", { className: "".concat(className, " ").concat(footer), ref: ref },
        secondaryButton,
        primaryButton));
});
exports.default = DialogFooter;
//# sourceMappingURL=DialogFooter.js.map