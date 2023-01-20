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
exports.checkIcon = void 0;
var react_1 = __importDefault(require("react"));
var natds_icons_1 = require("@naturacosmeticos/natds-icons");
var Icon_styles_1 = __importDefault(require("./Icon.styles"));
var checkIcon = function (iconName) { return (iconName in natds_icons_1.icons ? iconName : 'outlined-default-mockup'); };
exports.checkIcon = checkIcon;
var Icon = react_1.default.forwardRef(function (_a, ref) {
    var _b = _a.ariaHidden, ariaHidden = _b === void 0 ? true : _b, ariaLabel = _a.ariaLabel, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.color, color = _d === void 0 ? 'highlight' : _d, name = _a.name, _e = _a.role, role = _e === void 0 ? 'img' : _e, _f = _a.size, size = _f === void 0 ? 'standard' : _f, _g = _a.testID, testID = _g === void 0 ? "icon-".concat(name) : _g, props = __rest(_a, ["ariaHidden", "ariaLabel", "className", "color", "name", "role", "size", "testID"]);
    var icon = (0, Icon_styles_1.default)({ size: size, color: color }).icon;
    var defaultIconName = "natds-icons-".concat((0, exports.checkIcon)('outlined-default-mockup'));
    var iconName = name ? "natds-icons-".concat((0, exports.checkIcon)(name)) : defaultIconName;
    return (react_1.default.createElement("i", __assign({ "aria-hidden": ariaHidden, "aria-label": ariaLabel, className: "".concat(className, " ").concat(icon, " natds-icons ").concat(iconName), "data-testid": testID, ref: ref, role: role }, props)));
});
exports.default = Icon;
//# sourceMappingURL=Icon.js.map