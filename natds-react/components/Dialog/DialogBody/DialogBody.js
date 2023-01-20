"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Divider_1 = require("../../Divider");
var DialogBody_styles_1 = __importDefault(require("./DialogBody.styles"));
var DialogBody = react_1.default.forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.showDivider, showDivider = _b === void 0 ? false : _b, _c = _a.className, className = _c === void 0 ? '' : _c;
    var content = (0, DialogBody_styles_1.default)().content;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        showDivider && react_1.default.createElement(Divider_1.Divider, null),
        react_1.default.createElement("div", { className: "".concat(className, " ").concat(content), ref: ref }, children),
        showDivider && react_1.default.createElement(Divider_1.Divider, null)));
});
exports.default = DialogBody;
//# sourceMappingURL=DialogBody.js.map