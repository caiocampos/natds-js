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
exports.WithHorizontalScroll = exports.OnlyIcons = exports.WithIcons = exports.Playground = void 0;
var react_1 = __importDefault(require("react"));
var TabItem_1 = __importDefault(require("../TabItem"));
var _1 = require(".");
var Icon_1 = __importDefault(require("../Icon"));
var componentStatus = "\n- - -\n\n**NOTE FOR UXs**: This component is available in the following variants:\n\n  - \u2705 Standard (available but with alternative composition)\n\nWith the following attribute statuses:\n\n  - **Icon:** \n    - \u2705 `left`\n    - \u2705 `top`\n    - \u2705 `icon` (available but with alternative composition)\n  - **Align:**\n    - \u2705 `left`\n    - \u2705 `center`\n    - \u2705 `right`\n  - **Position:**\n    - \u2705 `fixed`\n    - \u2705 `scrollable`\n  - \u2705 `elevation`\n  - \u2705 `color`\n  - \u2705 `disabled` (available but with alternative composition)\n\n- - -\n";
exports.default = {
    title: 'Components/Tab',
    component: _1.Tab,
    parameters: {
        componentSubtitle: '',
        docs: { description: { component: componentStatus } },
        actions: { argTypesRegex: '^on.*' }
    }
};
var onClick = function () { return console.log('Tab is clicked'); };
var Playground = function (args) { return (react_1.default.createElement(_1.Tab, __assign({}, args),
    react_1.default.createElement(TabItem_1.default, { onClick: onClick, isActive: true }, "Tab 1"),
    react_1.default.createElement(TabItem_1.default, { onClick: onClick }, "Tab 2"),
    react_1.default.createElement(TabItem_1.default, { onClick: onClick, isDisabled: true }, "Tab 3"))); };
exports.Playground = Playground;
var WithIcons = function (args) { return (react_1.default.createElement(_1.Tab, __assign({}, args),
    react_1.default.createElement(TabItem_1.default, { onClick: onClick, isActive: true },
        react_1.default.createElement(Icon_1.default, { size: "standard", name: "outlined-default-mockup", color: "highEmphasis" }),
        "Tab 1"),
    react_1.default.createElement(TabItem_1.default, { onClick: onClick },
        react_1.default.createElement(Icon_1.default, { size: "standard", name: "outlined-default-mockup", color: "highEmphasis" }),
        "Tab 2"),
    react_1.default.createElement(TabItem_1.default, { onClick: onClick, isDisabled: true },
        react_1.default.createElement(Icon_1.default, { size: "standard", name: "outlined-default-mockup", color: "highEmphasis" }),
        "Tab 3"))); };
exports.WithIcons = WithIcons;
var OnlyIcons = function (args) { return (react_1.default.createElement(_1.Tab, __assign({}, args),
    react_1.default.createElement(TabItem_1.default, { onClick: onClick, isActive: true },
        react_1.default.createElement(Icon_1.default, { size: "standard", name: "outlined-default-mockup", color: "highEmphasis" })),
    react_1.default.createElement(TabItem_1.default, { onClick: onClick },
        react_1.default.createElement(Icon_1.default, { size: "standard", name: "outlined-default-mockup", color: "highEmphasis" })),
    react_1.default.createElement(TabItem_1.default, { onClick: onClick, isDisabled: true },
        react_1.default.createElement(Icon_1.default, { size: "standard", name: "outlined-default-mockup", color: "highEmphasis" })))); };
exports.OnlyIcons = OnlyIcons;
var WithHorizontalScroll = function (args) { return (react_1.default.createElement("div", { style: { maxWidth: 400 } },
    react_1.default.createElement(_1.Tab, __assign({}, args, { position: "scrollable" }),
        react_1.default.createElement(TabItem_1.default, { onClick: onClick, isActive: true }, "Tab 1"),
        react_1.default.createElement(TabItem_1.default, { onClick: onClick }, "Tab 2"),
        react_1.default.createElement(TabItem_1.default, { onClick: onClick }, "Tab 3"),
        react_1.default.createElement(TabItem_1.default, { onClick: onClick }, "Tab 4"),
        react_1.default.createElement(TabItem_1.default, { onClick: onClick }, "Tab 5"),
        react_1.default.createElement(TabItem_1.default, { onClick: onClick }, "Tab 2"),
        react_1.default.createElement(TabItem_1.default, { onClick: onClick }, "Tab 3"),
        react_1.default.createElement(TabItem_1.default, { onClick: onClick }, "Tab 4"),
        react_1.default.createElement(TabItem_1.default, { onClick: onClick }, "Tab 5")))); };
exports.WithHorizontalScroll = WithHorizontalScroll;
//# sourceMappingURL=Tab.stories.js.map