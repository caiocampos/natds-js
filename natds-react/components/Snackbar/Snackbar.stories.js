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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithIconButton = exports.WithButton = exports.WithIcon = exports.Playground = void 0;
var react_1 = __importStar(require("react"));
var _1 = require(".");
var Button_1 = __importDefault(require("../Button"));
var Icon_1 = __importDefault(require("../Icon"));
var componentStatus = "\n- - -\n\n**NOTE FOR UXs**: This component is available in the following variants:\n\n- \u2705 Standard\n\nWith the following attribute statuses:\n\n  - **Attributes:**\n  - \u2705 Title\n  - \u2705 Icon\n  - \u2705 directionButton\n  - \u2705 Feedback\n  - \u2705 Position\n  - \u2705 Timer\n  - \u2705 Animation\n  - \u2705 buttonComponent\n\n\n- - -\n";
exports.default = {
    title: 'Components/Snackbar',
    component: _1.Snackbar,
    parameters: {
        componentSubtitle: '',
        docs: { description: { component: componentStatus } }
    }
};
var Playground = function (args) {
    var _a = (0, react_1.useState)(false), btnStatusD = _a[0], setBtnStatus = _a[1];
    var snackRef = (0, react_1.useRef)(null);
    var btnStatus = function () {
        setBtnStatus(true);
        setTimeout(function () {
            setBtnStatus(false);
        }, 2000);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(_1.Snackbar, __assign({}, args, { ref: snackRef }), "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae veritat!"),
        react_1.default.createElement(Button_1.default, { disabled: btnStatusD, onClick: function () {
                btnStatus();
                return snackRef.current ? snackRef.current.show() : '';
            } }, "Click")));
};
exports.Playground = Playground;
var WithIcon = function (args) {
    var _a = (0, react_1.useState)(false), btnStatusD = _a[0], setBtnStatus = _a[1];
    var snackRef = (0, react_1.useRef)(null);
    var btnStatus = function () {
        setBtnStatus(true);
        setTimeout(function () {
            setBtnStatus(false);
        }, 2000);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(_1.Snackbar, __assign({}, args, { ref: snackRef, icon: 
            // eslint-disable-next-line react/destructuring-assignment
            react_1.default.createElement(Icon_1.default, { name: "outlined-default-mockup", color: args.feedback === 'warning' ? 'highlight' : 'surface' }) }), "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae veritat!"),
        react_1.default.createElement(Button_1.default, { disabled: btnStatusD, onClick: function () {
                btnStatus();
                return snackRef.current ? snackRef.current.show() : '';
            } }, "Click")));
};
exports.WithIcon = WithIcon;
var WithButton = function (args) {
    var _a = (0, react_1.useState)(false), btnStatusD = _a[0], setBtnStatus = _a[1];
    var snackRef = (0, react_1.useRef)(null);
    var btnStatus = function () {
        setBtnStatus(true);
        setTimeout(function () {
            setBtnStatus(false);
        }, 2000);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(_1.Snackbar, __assign({}, args, { ref: snackRef, buttonComponent: (react_1.default.createElement(Button_1.default, { onClick: function () { return ''; }, variant: "contained" },
                react_1.default.createElement("span", null, "Default"))) }), "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae veritat!"),
        react_1.default.createElement(Button_1.default, { disabled: btnStatusD, onClick: function () {
                btnStatus();
                return snackRef.current ? snackRef.current.show() : '';
            } }, "Click")));
};
exports.WithButton = WithButton;
var WithIconButton = function (args) {
    var _a = (0, react_1.useState)(false), btnStatusD = _a[0], setBtnStatus = _a[1];
    var snackRef = (0, react_1.useRef)(null);
    var btnStatus = function () {
        setBtnStatus(true);
        setTimeout(function () {
            setBtnStatus(false);
        }, 2000);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(_1.Snackbar, __assign({}, args, { ref: snackRef, buttonComponent: (
            // eslint-disable-next-line react/destructuring-assignment
            react_1.default.createElement(Icon_1.default, { name: "outlined-default-mockup", color: args.feedback === 'warning' ? 'highlight' : 'surface' })) }), "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae veritat!"),
        react_1.default.createElement(Button_1.default, { disabled: btnStatusD, onClick: function () {
                btnStatus();
                return snackRef.current ? snackRef.current.show() : '';
            } }, "Click")));
};
exports.WithIconButton = WithIconButton;
//# sourceMappingURL=Snackbar.stories.js.map