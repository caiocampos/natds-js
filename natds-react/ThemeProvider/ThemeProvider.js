"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_jss_1 = require("react-jss");
var ThemeProvider = function (_a) {
    var children = _a.children, cssPrefix = _a.cssPrefix, theme = _a.theme;
    return (react_1.default.createElement(react_jss_1.JssProvider, { classNamePrefix: cssPrefix },
        react_1.default.createElement(react_jss_1.ThemeProvider, { theme: theme }, children)));
};
exports.default = ThemeProvider;
//# sourceMappingURL=ThemeProvider.js.map