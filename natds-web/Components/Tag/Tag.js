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
exports.ContextualBadge = exports.Tag = void 0;
// eslint-disable-next-line no-use-before-define
var React = __importStar(require("react"));
var clsx_1 = __importDefault(require("clsx"));
var Tag_styles_1 = __importDefault(require("./Tag.styles"));
exports.Tag = React.forwardRef(function (props, ref) {
    var children = props.children, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    legacyClasses = props.classes, className = props.className, _a = props.component, Component = _a === void 0 ? 'span' : _a, _b = props.color, color = _b === void 0 ? 'primary' : _b, _c = props.position, position = _c === void 0 ? 'default' : _c, _d = props.size, size = _d === void 0 ? 'small' : _d, style = props.style, otherProps = __rest(props, ["children", "classes", "className", "component", "color", "position", "size", "style"]);
    var classes = (0, Tag_styles_1.default)();
    var classNames = (0, clsx_1.default)(className, classes.root, classes[color], classes[position], classes[size]);
    return (React.createElement(Component, __assign({ className: (0, clsx_1.default)(classNames, legacyClasses), ref: ref, style: style }, otherProps), children));
});
exports.Tag.displayName = 'Tag';
/**
     * @deprecated `Contextual Badge` is deprecated since 1.1.0.
     * Use Tag instead.
*/
exports.ContextualBadge = exports.Tag;
exports.default = { ContextualBadge: exports.ContextualBadge, Tag: exports.Tag };
//# sourceMappingURL=Tag.js.map