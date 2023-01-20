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
var Snackbar_styles_1 = __importDefault(require("./Snackbar.styles"));
var Snackbar = react_1.default.forwardRef(
// eslint-disable-next-line complexity
function (props, ref) {
    var testID = props.testID, _a = props.className, className = _a === void 0 ? '' : _a, _b = props.position, position = _b === void 0 ? 'topCenter' : _b, _c = props.feedback, feedback = _c === void 0 ? 'default' : _c, directionButton = props.directionButton, _d = props.animation, animation = _d === void 0 ? false : _d, _e = props.timer, timer = _e === void 0 ? 10 : _e, buttonComponent = props.buttonComponent, rest = __rest(props, ["testID", "className", "position", "feedback", "directionButton", "animation", "timer", "buttonComponent"]);
    var _f = (0, Snackbar_styles_1.default)({
        position: position,
        feedback: feedback,
        directionButton: directionButton,
        timer: timer,
        animation: animation
    }), snackbarContainer = _f.snackbarContainer, wrapper = _f.wrapper, wrapperRow = _f.wrapperRow, wrapperColumm = _f.wrapperColumm, wrapperAction = _f.wrapperAction, bodyText = _f.bodyText, wrapperIcon = _f.wrapperIcon, show = _f.show, close = _f.close;
    var _g = (0, react_1.useState)(false), state = _g[0], setState = _g[1];
    (0, react_1.useImperativeHandle)(ref, function () { return ({
        show: function () {
            setState(!state);
            if (animation) {
                setTimeout(function () { return setState(false); }, timer * 1000);
            }
        }
    }); });
    return (react_1.default.createElement("div", __assign({ "data-timer": timer, "data-testid": testID, className: "".concat(className, " ").concat(state ? show : close, " ").concat(snackbarContainer) }, rest),
        react_1.default.createElement("div", { className: wrapper },
            react_1.default.createElement("div", { className: wrapperRow },
                rest.icon && (react_1.default.createElement("div", { "data-testid": "icon-item", className: wrapperIcon }, rest.icon)),
                react_1.default.createElement("div", { className: wrapperColumm, "data-testid": "title-item" },
                    rest.title && react_1.default.createElement("div", { className: bodyText }, rest.title),
                    react_1.default.createElement("div", { className: bodyText }, props.children))),
            directionButton !== 'none'
                && (react_1.default.createElement("div", { "data-testid": "btn-action-wrapper", className: wrapperAction },
                    react_1.default.createElement("span", { "data-testid": "btn-component" }, buttonComponent))))));
});
exports.default = Snackbar;
//# sourceMappingURL=Snackbar.js.map