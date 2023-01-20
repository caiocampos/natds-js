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
var react_1 = __importStar(require("react"));
var Icon_1 = __importDefault(require("../Icon"));
var Tab_styles_1 = __importDefault(require("./Tab.styles"));
var Tab = react_1.default.forwardRef(function (props, ref) {
    var _a = props.icon, icon = _a === void 0 ? 'left' : _a, _b = props.align, align = _b === void 0 ? 'left' : _b, _c = props.position, position = _c === void 0 ? 'fixed' : _c, _d = props.elevation, elevation = _d === void 0 ? true : _d, _e = props.color, color = _e === void 0 ? true : _e;
    var _f = (0, Tab_styles_1.default)({
        icon: icon,
        align: align,
        position: position,
        elevation: elevation,
        color: color
    }), wrapper = _f.wrapper, container = _f.container, navigation = _f.navigation, navigationPrev = _f.navigationPrev, navigationNext = _f.navigationNext;
    var listRef = (0, react_1.createRef)();
    var _g = (0, react_1.useState)(0), itemWitdth = _g[0], setItemWidth = _g[1];
    var showNavigation = (0, react_1.useState)(function () { return position === 'scrollable'; })[0];
    (0, react_1.useEffect)(function () {
        if (!listRef.current)
            return;
        var current = listRef.current;
        var item = current.firstChild;
        setItemWidth(item.offsetWidth);
    }, [listRef]);
    var handleNext = function () {
        if (!listRef.current)
            return;
        listRef.current.scrollLeft += itemWitdth;
    };
    var handlePrev = function () {
        if (!listRef.current)
            return;
        listRef.current.scrollLeft -= itemWitdth;
    };
    return (react_1.default.createElement("div", { className: wrapper, ref: ref },
        showNavigation && (react_1.default.createElement("button", { type: "button", className: "".concat(navigation, " ").concat(navigationPrev), onClick: handlePrev, "data-testid": "btn-prev" },
            react_1.default.createElement(Icon_1.default, { name: "filled-navigation-arrowleft" }))),
        react_1.default.createElement("ul", { className: container, ref: listRef }, props.children),
        showNavigation && (react_1.default.createElement("button", { type: "button", className: "".concat(navigation, " ").concat(navigationNext), onClick: handleNext, "data-testid": "btn-next" },
            react_1.default.createElement(Icon_1.default, { name: "filled-navigation-arrowright" })))));
});
exports.default = Tab;
//# sourceMappingURL=Tab.js.map