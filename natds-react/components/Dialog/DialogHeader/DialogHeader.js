"use strict";
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
var DialogHeader_styles_1 = __importDefault(require("./DialogHeader.styles"));
var DialogHeader = react_1.default.forwardRef(function (_a, ref) {
    var children = _a.children, id = _a.id, title = _a.title, _b = _a.className, className = _b === void 0 ? '' : _b;
    var _c = (0, DialogHeader_styles_1.default)(), header = _c.header, classes = __rest(_c, ["header"]);
    return (react_1.default.createElement("div", { className: "".concat(className, " ").concat(header), ref: ref },
        react_1.default.createElement("h2", { id: id, className: classes.title }, title),
        children));
});
exports.default = DialogHeader;
//# sourceMappingURL=DialogHeader.js.map