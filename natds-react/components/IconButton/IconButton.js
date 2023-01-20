"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var IconButtonBase_1 = __importDefault(require("./IconButtonBase"));
var IconButton_styles_1 = __importDefault(require("./IconButton.styles"));
var IconButton = react_1.default.forwardRef(function (_a, ref) {
    var ariaLabel = _a.ariaLabel, _b = _a.backgroundStyle, backgroundStyle = _b === void 0 ? 'none' : _b, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, IconComponent = _a.IconComponent, onClick = _a.onClick, _e = _a.size, size = _e === void 0 ? 'semi' : _e, testID = _a.testID;
    var iconButtonContainer = (0, IconButton_styles_1.default)({ disabled: disabled, backgroundStyle: backgroundStyle, size: size }).iconButtonContainer;
    return (react_1.default.createElement(IconButtonBase_1.default, { ariaLabel: ariaLabel, className: "".concat(className, " ").concat(iconButtonContainer), disabled: disabled, onClick: onClick, ref: ref, size: size, testID: testID, IconComponent: IconComponent }));
});
exports.default = IconButton;
//# sourceMappingURL=IconButton.js.map