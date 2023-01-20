"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Icon_1 = __importDefault(require("../Icon"));
var IconButtonBase_1 = __importDefault(require("../IconButton/IconButtonBase"));
var Rating_styles_1 = require("./Rating.styles");
var RatingBase = react_1.default.forwardRef(function (_a, ref) {
    var ariaLabel = _a.ariaLabel, _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.iconActive, iconActive = _c === void 0 ? true : _c, _d = _a.iconFilled, iconFilled = _d === void 0 ? true : _d, _e = _a.isClickable, isClickable = _e === void 0 ? false : _e, onClick = _a.onClick, onMouseEnter = _a.onMouseEnter, onMouseLeave = _a.onMouseLeave, value = _a.value, size = _a.size, testID = _a.testID;
    var _f = (0, Rating_styles_1.useBaseStyles)({
        disabled: disabled,
        isClickable: isClickable,
        iconFilled: iconFilled,
        iconActive: iconActive
    }), ratingIcon = _f.ratingIcon, ratingContainer = _f.ratingContainer;
    var checkIcon = iconFilled ? 'filled-action-rating' : 'outlined-action-rating';
    return (react_1.default.createElement("div", { onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, className: ratingContainer },
        react_1.default.createElement(IconButtonBase_1.default, { ref: ref, ariaLabel: ariaLabel, disabled: disabled || !isClickable, IconComponent: (react_1.default.createElement(Icon_1.default, { ariaHidden: true, ariaLabel: ariaLabel, name: checkIcon, role: "button", size: size })), onClick: onClick, size: size, className: ratingIcon, value: value, testID: testID })));
});
exports.default = RatingBase;
//# sourceMappingURL=RatingBase.js.map