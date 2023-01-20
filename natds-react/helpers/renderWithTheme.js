"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_jss_1 = require("react-jss");
var natds_themes_1 = __importDefault(require("@naturacosmeticos/natds-themes"));
var react_2 = require("@testing-library/react");
var ThemeProvider_1 = require("../ThemeProvider");
var renderWithTheme = function (component) {
    var sheets = new react_jss_1.SheetsRegistry();
    var renderTree = (0, react_2.render)(react_1.default.createElement(react_jss_1.JssProvider, { registry: sheets },
        react_1.default.createElement(ThemeProvider_1.ThemeProvider, { theme: natds_themes_1.default.natura.light }, component)));
    return { styles: sheets.toString(), component: renderTree };
};
exports.default = renderWithTheme;
//# sourceMappingURL=renderWithTheme.js.map