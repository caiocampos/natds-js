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
exports.WithIcon = exports.Colors = exports.Variants = exports.Playground = void 0;
var react_1 = __importDefault(require("react"));
var _1 = require(".");
var Icon_1 = require("../Icon");
var componentStatus = "\n---\n\n**NOTE FOR UX**: This component is available in the following variants:\n\n  - \u2705 `regular`\n  - \u2705 `underline`\n\nWith the following attribute status:\n\n  - **Icon**\n      - \u2705 `left`\n      - \u2705 `right`\n  - **Color**\n      - \u2705 `default`\n      - \u2705 `light`\n\n---\n";
exports.default = {
    title: 'Components/Link',
    component: _1.Link,
    parameters: {
        componentSubtitle: 'The link component allows you to have a pattern for anchor text.',
        docs: { description: { component: componentStatus } }
    }
};
var Playground = function (args) { return react_1.default.createElement(_1.Link, __assign({}, args)); };
exports.Playground = Playground;
exports.Playground.args = {
    text: 'Link',
    href: 'https://'
};
var Variants = function (args) { return (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(_1.Link, __assign({}, args, { variant: "underline", text: "underline variant example" })),
    react_1.default.createElement(_1.Link, __assign({}, args, { variant: "regular", text: "regular variant example" })))); };
exports.Variants = Variants;
exports.Variants.args = __assign({}, exports.Playground.args);
var Colors = function (args) { return (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(_1.Link, __assign({}, args, { text: "default link color" })),
    react_1.default.createElement(_1.Link, __assign({}, args, { textColor: "light", text: "light link color" })))); };
exports.Colors = Colors;
exports.Colors.args = __assign({}, exports.Playground.args);
var WithIcon = function (args) { return (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(_1.Link, __assign({}, args, { text: "right icon example", IconComponent: react_1.default.createElement(Icon_1.Icon, { name: "outlined-navigation-directionright-alt", color: "link" }) })),
    react_1.default.createElement(_1.Link, __assign({}, args, { text: "left icon example", iconPosition: "left", IconComponent: react_1.default.createElement(Icon_1.Icon, { name: "outlined-navigation-directionleft-alt", color: "link" }) })))); };
exports.WithIcon = WithIcon;
exports.WithIcon.args = __assign({}, exports.Playground.args);
//# sourceMappingURL=Link.stories.js.map