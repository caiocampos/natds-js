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
exports.Notify = exports.Disabled = exports.Color = exports.Playground = void 0;
var react_1 = __importDefault(require("react"));
var _1 = require(".");
var Icon_1 = require("../Icon");
var StoryContainer_1 = __importDefault(require("../../helpers/StoryContainer"));
var Badge_1 = __importDefault(require("../Badge"));
var componentStatus = "\n- - -\n\n**NOTE FOR UXs**: This component is available in the following variants:\n\n  - \u2705 `contained`\n  - \u2705 `outlined`\n\nWith the following attribute statuses:\n\n  - \u2705  **Notify**\n  - **Color:**\n    - \u2705 `primary`\n    - \u2705 `neutral`\n  - \u2705  **Disabled**\n\n- - -\n";
exports.default = {
    title: 'Components/Shortcut',
    component: _1.Shortcut,
    parameters: {
        componentSubtitle: 'Used for quick access to a page and facilitate navigation.',
        docs: { description: { component: componentStatus } }
    }
};
var Playground = function (args) { return (react_1.default.createElement(_1.Shortcut, __assign({}, args))); };
exports.Playground = Playground;
exports.Playground.args = {
    id: 'shortcut-id',
    label: 'Text Example',
    IconComponent: react_1.default.createElement(Icon_1.Icon, { size: "semi", name: "outlined-default-mockup", color: "highEmphasis" })
};
var Color = function (args) { return (react_1.default.createElement(StoryContainer_1.default, null,
    react_1.default.createElement(_1.Shortcut, __assign({}, args, { id: "contained-primary" })),
    react_1.default.createElement(_1.Shortcut, __assign({}, args, { id: "contained-neutral", color: "neutral" })),
    react_1.default.createElement(_1.Shortcut, __assign({}, args, { id: "outlined-primary", variant: "outlined" })),
    react_1.default.createElement(_1.Shortcut, __assign({}, args, { id: "outlined-neutral", variant: "outlined", color: "neutral" })))); };
exports.Color = Color;
exports.Color.args = __assign({}, exports.Playground.args);
var Disabled = function (args) { return (react_1.default.createElement(StoryContainer_1.default, null,
    react_1.default.createElement(_1.Shortcut, __assign({}, args, { id: "contained-disabled", variant: "contained", disabled: true, IconComponent: react_1.default.createElement(Icon_1.Icon, { size: "semi", name: "outlined-default-mockup", color: "mediumEmphasis" }) })),
    react_1.default.createElement(_1.Shortcut, __assign({}, args, { id: "outlined-disabled", variant: "outlined", disabled: true, IconComponent: react_1.default.createElement(Icon_1.Icon, { size: "semi", name: "outlined-default-mockup", color: "lowEmphasis" }) })))); };
exports.Disabled = Disabled;
exports.Disabled.args = __assign({}, exports.Playground.args);
var Notify = function (args) { return (react_1.default.createElement(_1.Shortcut, __assign({}, args))); };
exports.Notify = Notify;
exports.Notify.args = __assign(__assign({}, exports.Playground.args), { BadgeComponent: react_1.default.createElement(Badge_1.default, { variant: "standard", value: 99, limit: 99 }) });
//# sourceMappingURL=Shortcut.stories.js.map