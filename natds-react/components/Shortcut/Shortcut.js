"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var IconButtonBase_1 = __importDefault(require("../IconButton/IconButtonBase"));
var Label_1 = require("../Label");
var Shortcut_styles_1 = __importDefault(require("./Shortcut.styles"));
var Shortcut = react_1.default.forwardRef(function (props, ref) {
    var _a = props.className, className = _a === void 0 ? '' : _a, ariaLabel = props.ariaLabel, _b = props.disabled, disabled = _b === void 0 ? false : _b, onClick = props.onClick, testID = props.testID, _c = props.variant, variant = _c === void 0 ? 'contained' : _c, _d = props.color, color = _d === void 0 ? 'primary' : _d, label = props.label, IconComponent = props.IconComponent, BadgeComponent = props.BadgeComponent, id = props.id, _e = props.breakLine, breakLine = _e === void 0 ? true : _e;
    var _f = (0, Shortcut_styles_1.default)({
        variant: variant,
        color: color,
        disabled: disabled,
        breakLine: breakLine
    }), container = _f.container, content = _f.content, labelText = _f.labelText, badgeContainer = _f.badgeContainer, wrapper = _f.wrapper;
    return (react_1.default.createElement("div", { className: wrapper },
        react_1.default.createElement("div", { className: container },
            react_1.default.createElement(IconButtonBase_1.default, { className: "".concat(className, " ").concat(content), id: id, ref: ref, ariaLabel: ariaLabel, disabled: disabled, onClick: onClick, size: "mediumX", testID: testID, IconComponent: IconComponent }),
            BadgeComponent
                && (react_1.default.createElement("div", { className: badgeContainer }, BadgeComponent))),
        label && react_1.default.createElement(Label_1.Label, { className: labelText, label: label, htmlFor: id })));
});
exports.default = Shortcut;
//# sourceMappingURL=Shortcut.js.map