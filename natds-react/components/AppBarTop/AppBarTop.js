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
var react_1 = __importStar(require("react"));
var AppBarTop_styles_1 = __importDefault(require("./AppBarTop.styles"));
var AppBarTop = react_1.default.forwardRef(function (_a, ref) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.color, color = _c === void 0 ? 'default' : _c, _d = _a.behaviour, behaviour = _d === void 0 ? 'fixed' : _d, _e = _a.elevation, elevation = _e === void 0 ? true : _e, testID = _a.testID, children = _a.children, role = _a.role, props = __rest(_a, ["className", "color", "behaviour", "elevation", "testID", "children", "role"]);
    var _f = (0, react_1.useState)({
        hide: false,
        y: global.scrollY
    }), position = _f[0], setPosition = _f[1];
    (0, react_1.useLayoutEffect)(function () {
        var onScroll = function () {
            var currentY = global.scrollY;
            if (currentY < position.y) {
                setPosition({ y: currentY, hide: false });
            }
            else if (currentY > position.y) {
                setPosition({ y: currentY, hide: true });
            }
        };
        document.addEventListener('scroll', onScroll);
        return function () {
            document.removeEventListener('scroll', onScroll);
        };
    }, [position.y]);
    var _g = (0, AppBarTop_styles_1.default)({
        elevation: elevation,
        color: color,
        behaviour: behaviour,
        hide: position.hide
    }), container = _g.container, appBar = _g.appBar;
    return (react_1.default.createElement("header", __assign({ ref: ref, className: "".concat(className, " ").concat(container) }, props, { role: role, "data-testid": testID }),
        react_1.default.createElement("div", { className: appBar }, children)));
});
exports.default = AppBarTop;
//# sourceMappingURL=AppBarTop.js.map