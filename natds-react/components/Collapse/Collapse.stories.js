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
exports.Playground = void 0;
var react_1 = __importStar(require("react"));
var react_jss_1 = require("react-jss");
var _1 = require(".");
var Button_1 = __importDefault(require("../Button"));
exports.default = {
    title: 'Utilities/Collapse',
    component: _1.Collapse
};
var Playground = function (args) {
    var theme = (0, react_jss_1.useTheme)();
    var _a = (0, react_1.useState)(false), opened = _a[0], setOpened = _a[1];
    var text = opened ? 'hide content' : 'show content';
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Button_1.default, { onClick: function () { return setOpened(!opened); } }, text),
        react_1.default.createElement(_1.Collapse, __assign({}, args, { open: opened }),
            react_1.default.createElement("p", { style: {
                    color: theme.color.onSurface,
                    fontFamily: theme.typography.fontFamily.primary
                } }, "some content"))));
};
exports.Playground = Playground;
//# sourceMappingURL=Collapse.stories.js.map