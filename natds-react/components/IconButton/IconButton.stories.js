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
exports.Disabled = exports.BackgroundStyle = exports.Size = exports.Color = exports.Playground = void 0;
var react_1 = __importDefault(require("react"));
var _1 = require(".");
var StoryContainer_1 = __importDefault(require("../../helpers/StoryContainer"));
var Icon_1 = require("../Icon");
var componentStatus = "\n---\n\n**NOTE**: This component is available with the following attribute status:\n\n- **Color**\n  - \u2705 `primary`\n  - \u2705 `highEmphasis`\n- **Size**\n  - \u2705 `semi`\n  - \u2705 `semiX`\n  - \u2705 `medium`\n- **Background Style**\n  - \u2705 `none`\n  - \u2705 `float`\n  - \u2705 `overlay`\n- \u2705  **Disabled**\n\n---\n";
exports.default = {
    title: 'Components/IconButton',
    component: _1.IconButton,
    parameters: {
        componentSubtitle: 'Icon button allow users to take actions, and make choices, with a single tap.',
        docs: { description: { component: componentStatus } },
        actions: { argTypesRegex: '^on.*' }
    }
};
var Playground = function (args) { return react_1.default.createElement(_1.IconButton, __assign({}, args, { onClick: function () { return console.log('clicked!'); } })); };
exports.Playground = Playground;
exports.Playground.args = {
    IconComponent: react_1.default.createElement(Icon_1.Icon, { size: "standard", name: "outlined-default-mockup", color: "highEmphasis" })
};
var Color = function (args) { return (react_1.default.createElement(StoryContainer_1.default, null,
    react_1.default.createElement(_1.IconButton, __assign({}, args)),
    react_1.default.createElement(_1.IconButton, __assign({}, args, { IconComponent: react_1.default.createElement(Icon_1.Icon, { size: "standard", name: "outlined-default-mockup", color: "primary" }) })),
    react_1.default.createElement(_1.IconButton, __assign({}, args, { IconComponent: react_1.default.createElement(Icon_1.Icon, { size: "standard", name: "outlined-default-mockup", color: "surface" }) })))); };
exports.Color = Color;
exports.Color.args = __assign({}, exports.Playground.args);
var Size = function (args) { return (react_1.default.createElement(StoryContainer_1.default, null,
    react_1.default.createElement(_1.IconButton, __assign({}, args)),
    react_1.default.createElement(_1.IconButton, __assign({}, args, { size: "semiX", IconComponent: react_1.default.createElement(Icon_1.Icon, { size: "semi", name: "outlined-default-mockup", color: "highEmphasis" }) })),
    react_1.default.createElement(_1.IconButton, __assign({}, args, { size: "medium", IconComponent: react_1.default.createElement(Icon_1.Icon, { size: "semiX", name: "outlined-default-mockup", color: "highEmphasis" }) })))); };
exports.Size = Size;
exports.Size.args = __assign({}, exports.Playground.args);
var BackgroundStyle = function (args) { return (react_1.default.createElement(StoryContainer_1.default, null,
    react_1.default.createElement(_1.IconButton, __assign({}, args)),
    react_1.default.createElement(_1.IconButton, __assign({}, args, { backgroundStyle: "float" })),
    react_1.default.createElement(_1.IconButton, __assign({}, args, { backgroundStyle: "overlay" })))); };
exports.BackgroundStyle = BackgroundStyle;
exports.BackgroundStyle.args = __assign({}, exports.Playground.args);
var Disabled = function (args) { return (react_1.default.createElement(StoryContainer_1.default, null,
    react_1.default.createElement(_1.IconButton, __assign({}, args, { IconComponent: react_1.default.createElement(Icon_1.Icon, { size: "standard", name: "outlined-default-mockup", color: "mediumEmphasis" }) })),
    react_1.default.createElement(_1.IconButton, __assign({}, args, { backgroundStyle: "float", IconComponent: react_1.default.createElement(Icon_1.Icon, { size: "standard", name: "outlined-default-mockup", color: "mediumEmphasis" }) })),
    react_1.default.createElement(_1.IconButton, __assign({}, args, { backgroundStyle: "overlay", IconComponent: react_1.default.createElement(Icon_1.Icon, { size: "standard", name: "outlined-default-mockup", color: "lowEmphasis" }) })))); };
exports.Disabled = Disabled;
exports.Disabled.args = __assign(__assign({}, exports.Playground.args), { disabled: true });
//# sourceMappingURL=IconButton.stories.js.map