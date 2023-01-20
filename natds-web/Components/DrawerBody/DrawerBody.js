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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawerBody = void 0;
// eslint-disable-next-line no-use-before-define
var React = __importStar(require("react"));
var DrawerBody_styles_1 = require("./DrawerBody.styles");
/**
 * ## Importing
 *
 * ```
 * import { DrawerBody } from '@naturacosmeticos/natds-web';
 * ```
 */
exports.DrawerBody = React.forwardRef(function (props, ref) {
    var children = props.children, _a = props.component, Component = _a === void 0 ? 'div' : _a, _b = props.scrollComponent, ScrollComponent = _b === void 0 ? 'div' : _b, otherProps = __rest(props, ["children", "component", "scrollComponent"]);
    var _c = React.useState(false), scrolled = _c[0], setScrolled = _c[1];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var handleScrolled = function (event) {
        if (typeof event === 'undefined') {
            return;
        }
        var target = event.target;
        if (typeof target === 'undefined') {
            return;
        }
        var scrollTop = target.scrollTop;
        if (typeof scrollTop !== 'undefined') {
            var SCROLL_POSITION_ZERO = 0;
            setScrolled(scrollTop > SCROLL_POSITION_ZERO);
        }
    };
    var _d = (0, DrawerBody_styles_1.useStyles)({ scrolled: scrolled }), root = _d.root, scroll = _d.scroll;
    return (React.createElement(Component, __assign({ className: root, ref: ref }, otherProps),
        React.createElement(ScrollComponent, { className: scroll, onScroll: handleScrolled }, children)));
});
exports.DrawerBody.displayName = 'DrawerBody';
exports.default = exports.DrawerBody;
//# sourceMappingURL=DrawerBody.js.map