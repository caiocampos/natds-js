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
exports.FullWidth = exports.Icon = exports.Disabled = exports.Sizes = exports.Variants = exports.Playground = void 0;
var react_1 = __importDefault(require("react"));
var _1 = require(".");
var StoryContainer_1 = __importDefault(require("../../helpers/StoryContainer"));
var componentStatus = "\n---\n\n**NOTE FOR UXs**: This component is available in the following variants:\n\n  - \u2705 `contained`\n  - \u2705 `outlined`\n  - \u2705 `text`\n\nWith the following attribute status:\n\n- **Size**\n    - \u2705 `semi`\n    - \u2705 `semiX`\n    - \u2705 `medium`\n- \u2705 **Icon**\n- \u2705 **Disabled**\n- **Display**\n    - \u2705 `inline`\n    - \u2705 `block`\n\n---\n";
exports.default = {
    title: 'Components/Button',
    component: _1.Button,
    parameters: {
        componentSubtitle: 'Buttons allow users to take actions, and make choices, with a single tap',
        docs: { description: { component: componentStatus } },
        actions: { argTypesRegex: '^on.*' }
    }
};
var Playground = function (args) { return react_1.default.createElement(_1.Button, __assign({}, args)); };
exports.Playground = Playground;
exports.Playground.args = {
    children: 'button',
    onClick: function () { return console.log('clicked!'); }
};
var Variants = function (args) { return (react_1.default.createElement(StoryContainer_1.default, null,
    react_1.default.createElement(_1.Button, __assign({}, args, { variant: "contained" })),
    react_1.default.createElement(_1.Button, __assign({}, args, { variant: "outlined" })),
    react_1.default.createElement(_1.Button, __assign({}, args, { variant: "text" })))); };
exports.Variants = Variants;
exports.Variants.args = __assign({}, exports.Playground.args);
var Sizes = function (args) { return (react_1.default.createElement("div", { style: { display: 'flex', flexDirection: 'column', gap: 8 } },
    react_1.default.createElement("div", { style: { display: 'flex', gap: 8 } },
        react_1.default.createElement(_1.Button, __assign({}, args, { size: "semi" })),
        react_1.default.createElement(_1.Button, __assign({}, args, { size: "semiX" })),
        react_1.default.createElement(_1.Button, __assign({}, args, { size: "medium" }))),
    react_1.default.createElement("div", { style: { display: 'flex', gap: 8 } },
        react_1.default.createElement(_1.Button, __assign({}, args, { variant: "outlined", size: "semi" })),
        react_1.default.createElement(_1.Button, __assign({}, args, { variant: "outlined", size: "semiX" })),
        react_1.default.createElement(_1.Button, __assign({}, args, { variant: "outlined", size: "medium" }))),
    react_1.default.createElement("div", { style: { display: 'flex', gap: 8 } },
        react_1.default.createElement(_1.Button, __assign({}, args, { variant: "text", size: "semi" })),
        react_1.default.createElement(_1.Button, __assign({}, args, { variant: "text", size: "semiX" })),
        react_1.default.createElement(_1.Button, __assign({}, args, { variant: "text", size: "medium" }))))); };
exports.Sizes = Sizes;
exports.Sizes.args = __assign({}, exports.Playground.args);
var Disabled = function (args) { return (react_1.default.createElement(StoryContainer_1.default, null,
    react_1.default.createElement(_1.Button, __assign({}, args, { variant: "contained" })),
    react_1.default.createElement(_1.Button, __assign({}, args, { variant: "outlined" })),
    react_1.default.createElement(_1.Button, __assign({}, args, { variant: "text" })))); };
exports.Disabled = Disabled;
exports.Disabled.args = __assign(__assign({}, exports.Playground.args), { disabled: true });
var Icon = function (args) { return (react_1.default.createElement("div", { style: { display: 'flex', flexDirection: 'column', gap: 8 } },
    react_1.default.createElement("div", { style: { display: 'flex', gap: 8 } },
        react_1.default.createElement(_1.Button, __assign({}, args, { showIcon: true, iconName: "outlined-default-mockup", iconPosition: "left" })),
        react_1.default.createElement(_1.Button, __assign({}, args, { showIcon: true, iconName: "outlined-default-mockup" }))),
    react_1.default.createElement("div", { style: { display: 'flex', gap: 8 } },
        react_1.default.createElement(_1.Button, __assign({}, args, { variant: "outlined", showIcon: true, iconName: "outlined-default-mockup", iconPosition: "left" })),
        react_1.default.createElement(_1.Button, __assign({}, args, { variant: "outlined", showIcon: true, iconName: "outlined-default-mockup" }))),
    react_1.default.createElement("div", { style: { display: 'flex', gap: 8 } },
        react_1.default.createElement(_1.Button, __assign({}, args, { variant: "text", showIcon: true, iconName: "outlined-default-mockup", iconPosition: "left" })),
        react_1.default.createElement(_1.Button, __assign({}, args, { variant: "text", showIcon: true, iconName: "outlined-default-mockup" }))))); };
exports.Icon = Icon;
exports.Icon.args = __assign({}, exports.Playground.args);
var FullWidth = function (args) { return (react_1.default.createElement("div", { style: { display: 'flex', gap: 8, flexDirection: 'column' } },
    react_1.default.createElement(_1.Button, __assign({}, args)),
    react_1.default.createElement(_1.Button, __assign({}, args, { variant: "outlined" })),
    react_1.default.createElement(_1.Button, __assign({}, args, { variant: "text" })))); };
exports.FullWidth = FullWidth;
exports.FullWidth.args = __assign(__assign({}, exports.Playground.args), { fullWidth: true });
//# sourceMappingURL=Button.stories.js.map