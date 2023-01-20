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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithLogo = exports.Elevation = exports.Color = exports.Playground = void 0;
/* eslint-disable @typescript-eslint/ban-ts-comment */
var react_1 = __importDefault(require("react"));
var IconButton_1 = require("../IconButton");
var Icon_1 = require("../Icon");
var _1 = require(".");
var Logo_1 = require("../Logo");
var componentStatus = "\n---\n\n**NOTE FOR UX**: This component is available in the following variants:\n\n  - \u2705 `base`\n  - \u2705 `standard`\n\nWith the following attribute status:\n\n  - **Color**\n      - \u2705 `default`\n      - \u2705 `primary`\n      - \u2705 `inverse`\n      - \u2705 `none`\n  - \u2705 **Elevation**\n  - \u2705 **Content Position** (available but with alternative composition)\n  - \u2705 **Content Type** (available but with alternative composition)\n  - \u2705 **Content Proeminent** (available but with alternative composition)\n  - **Behaviour**\n      - \u2705  `fixed`\n      - \u2705  `scroll`\n  - **Action**\n      - \u2705 `left` (available but with alternative composition)\n      - \u2705 `right` (available but with alternative composition)\n\n---\n";
exports.default = {
    title: 'Components/AppBarTop',
    component: _1.AppBarTop,
    parameters: {
        componentSubtitle: 'The App Bar Top displays information and actions relating to the current screen.',
        docs: { description: { component: componentStatus } }
    }
};
var Playground = function (args) { return react_1.default.createElement(_1.AppBarTop, __assign({}, args)); };
exports.Playground = Playground;
exports.Playground.args = {
    children: 'App Bar - Top',
    // @ts-ignore
    style: { position: 'static' }
};
var Color = function (args) { return (react_1.default.createElement("div", { style: { display: 'flex', gap: 8, flexDirection: 'column' } },
    react_1.default.createElement(_1.AppBarTop, __assign({}, args, { color: "default" }), "Default"),
    react_1.default.createElement(_1.AppBarTop, __assign({}, args, { color: "primary" }), "Primary"),
    react_1.default.createElement(_1.AppBarTop, __assign({}, args, { color: "inverse" }), "Inverse"),
    react_1.default.createElement(_1.AppBarTop, __assign({}, args, { color: "none" }), "None"))); };
exports.Color = Color;
exports.Color.args = __assign({}, exports.Playground.args);
var Elevation = function (args) { return (react_1.default.createElement("div", { style: { display: 'flex', gap: 8, flexDirection: 'column' } },
    react_1.default.createElement(_1.AppBarTop, __assign({}, args), "Elevation"),
    react_1.default.createElement(_1.AppBarTop, __assign({}, args, { elevation: false }), "No Elevation"))); };
exports.Elevation = Elevation;
exports.Elevation.args = __assign({}, exports.Playground.args);
var WithLogo = function (args) { return (react_1.default.createElement(_1.AppBarTop, __assign({}, args),
    react_1.default.createElement("div", { style: { display: 'flex', alignItems: 'center', width: '100%' } },
        react_1.default.createElement(IconButton_1.IconButton, { IconComponent: react_1.default.createElement(Icon_1.Icon, { name: "outlined-navigation-menu", color: "highlight" }), ariaLabel: "menu", onClick: function () { return ''; } }),
        react_1.default.createElement("div", { style: { flexGrow: 1, justifyContent: 'center', display: 'flex' } },
            react_1.default.createElement(Logo_1.Logo, { size: "hugeX" })),
        react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(IconButton_1.IconButton, { IconComponent: react_1.default.createElement(Icon_1.Icon, { name: "outlined-action-search", color: "highlight" }), ariaLabel: "search", onClick: function () { return ''; } }),
            react_1.default.createElement(IconButton_1.IconButton, { IconComponent: react_1.default.createElement(Icon_1.Icon, { name: "outlined-finance-bag", color: "highlight" }), ariaLabel: "profile", onClick: function () { return ''; } }))))); };
exports.WithLogo = WithLogo;
exports.WithLogo.args = __assign({}, exports.Playground.args);
//# sourceMappingURL=AppBarTop.stories.js.map