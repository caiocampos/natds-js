"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBiggestSide = void 0;
/* eslint-disable max-lines-per-function */
var react_1 = __importStar(require("react"));
var Ripple_styles_1 = __importDefault(require("./Ripple.styles"));
var getBiggestSide = function (_a) {
    var width = _a.width, height = _a.height;
    return (width > height ? width : height);
};
exports.getBiggestSide = getBiggestSide;
var Ripple = function (_a) {
    var _b = _a.animationDuration, animationDuration = _b === void 0 ? 300 : _b, children = _a.children, _c = _a.color, color = _c === void 0 ? 'highlight' : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.focus, focus = _e === void 0 ? false : _e, _f = _a.fullWidth, fullWidth = _f === void 0 ? false : _f, _g = _a.hideOverflow, hideOverflow = _g === void 0 ? true : _g, _h = _a.isCentered, isCentered = _h === void 0 ? false : _h, _j = _a.showHover, showHover = _j === void 0 ? false : _j;
    var _k = (0, react_1.useState)(''), animation = _k[0], setAnimation = _k[1];
    var _l = (0, react_1.useState)({ x: 0, y: 0 }), mousePosition = _l[0], setMousePosition = _l[1];
    var _m = (0, react_1.useState)({ width: 0, height: 0 }), rippleSize = _m[0], setRippleSize = _m[1];
    (0, react_1.useEffect)(function () {
        if (animation) {
            var timeout_1 = setTimeout(function () { return setAnimation(''); }, animationDuration);
            return function () { return clearTimeout(timeout_1); };
        }
        return function () { return null; };
    }, [animation, animationDuration]);
    var showRipple = function (e) {
        if (!disabled) {
            setAnimation(rippleActive);
        }
        var _a = e.currentTarget.getBoundingClientRect(), width = _a.width, height = _a.height, x = _a.x, y = _a.y;
        var posX = e.pageX - x;
        var posY = e.pageY - y;
        setMousePosition({ x: posX, y: posY });
        setRippleSize({ width: width, height: height });
    };
    var size = (0, exports.getBiggestSide)(rippleSize);
    var _o = (0, Ripple_styles_1.default)({
        animationDuration: animationDuration,
        color: color,
        disabled: disabled,
        fullWidth: fullWidth,
        hideOverflow: hideOverflow,
        isCentered: isCentered,
        mousePosition: mousePosition,
        size: size,
        showHover: showHover
    }), ripple = _o.ripple, rippleActive = _o.rippleActive, rippleContainer = _o.rippleContainer, wrapper = _o.wrapper;
    var showFocus = focus ? 0 : -1;
    return (react_1.default.createElement("div", { className: wrapper, onClick: showRipple, "data-testid": "ripple-wrapper", tabIndex: showFocus },
        react_1.default.createElement("div", { className: rippleContainer },
            react_1.default.createElement("div", { className: "".concat(ripple, " ").concat(animation), "data-testid": "ripple-animation" })),
        children));
};
exports.default = Ripple;
//# sourceMappingURL=Ripple.js.map