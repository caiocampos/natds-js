"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Ripple_1 = __importDefault(require("../Ripple"));
var TabItem_styles_1 = __importDefault(require("./TabItem.styles"));
var TabItem = react_1.default.forwardRef(function (props, ref) {
    var _a = props.isActive, isActive = _a === void 0 ? false : _a, _b = props.isDisabled, isDisabled = _b === void 0 ? false : _b, onClick = props.onClick;
    var _c = (0, TabItem_styles_1.default)({ isActive: isActive, isDisabled: isDisabled }), wrapper = _c.wrapper, tabButton = _c.tabButton;
    return (react_1.default.createElement("li", { className: wrapper, ref: ref },
        react_1.default.createElement(Ripple_1.default, { isCentered: true, fullWidth: true },
            react_1.default.createElement("button", { type: "button", onClick: onClick, className: tabButton, disabled: isDisabled }, props.children))));
});
exports.default = TabItem;
//# sourceMappingURL=TabItem.js.map