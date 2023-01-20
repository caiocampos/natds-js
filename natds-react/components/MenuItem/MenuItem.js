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
var react_1 = __importDefault(require("react"));
var MenuItem_styles_1 = __importDefault(require("./MenuItem.styles"));
var Ripple_1 = __importDefault(require("../Ripple"));
var MenuItem = react_1.default.forwardRef(function (_a, ref) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, testID = _a.testID, onClick = _a.onClick, children = _a.children, _c = _a.disabled, disabled = _c === void 0 ? false : _c, _d = _a.type, type = _d === void 0 ? 'regular' : _d, href = _a.href, props = __rest(_a, ["className", "testID", "onClick", "children", "disabled", "type", "href"]);
    var _e = (0, MenuItem_styles_1.default)(__assign(__assign({}, props), { children: children, disabled: disabled, type: type })), listItem = _e.listItem, menuItem = _e.menuItem;
    return (react_1.default.createElement("li", { "data-testid": testID, className: "".concat(className, " ").concat(listItem), ref: ref, tabIndex: 0, onClick: onClick, "aria-disabled": disabled },
        react_1.default.createElement(Ripple_1.default, { disabled: disabled, fullWidth: true },
            react_1.default.createElement("a", __assign({ href: href }, props, { className: menuItem }), children))));
});
exports.default = MenuItem;
//# sourceMappingURL=MenuItem.js.map