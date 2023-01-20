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
exports.isBadgeStandard = exports.buildValue = void 0;
var react_1 = __importDefault(require("react"));
var Badge_styles_1 = __importDefault(require("./Badge.styles"));
var buildValue = function (_a) {
    var value = _a.value, limit = _a.limit;
    return (limit && value >= limit ? "".concat(limit, "+") : value);
};
exports.buildValue = buildValue;
var isBadgeStandard = function (props) { return props.variant === 'standard'; };
exports.isBadgeStandard = isBadgeStandard;
var Badge = react_1.default.forwardRef(function (props, ref) {
    var ariaHidden = props.ariaHidden, ariaLabel = props.ariaLabel, _a = props.className, className = _a === void 0 ? '' : _a, _b = props.color, color = _b === void 0 ? 'alert' : _b, variant = props.variant, testID = props.testID, rest = __rest(props, ["ariaHidden", "ariaLabel", "className", "color", "variant", "testID"]);
    var _c = (0, Badge_styles_1.default)({ variant: variant, color: color }), badge = _c.badge, label = _c.label;
    return (react_1.default.createElement("div", __assign({ "aria-hidden": ariaHidden, "aria-label": ariaLabel, className: "".concat(className, " ").concat(badge), "data-testid": testID, ref: ref }, rest), (0, exports.isBadgeStandard)(props) && (react_1.default.createElement("span", { className: label }, (0, exports.buildValue)(props)))));
});
exports.default = Badge;
//# sourceMappingURL=Badge.js.map