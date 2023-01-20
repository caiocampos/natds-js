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
exports.Icon = exports.Size = exports.Color = exports.Position = exports.Playground = void 0;
var react_1 = __importDefault(require("react"));
var _1 = require(".");
var Icon_1 = require("../Icon");
var StoryContainer_1 = __importDefault(require("../../helpers/StoryContainer"));
var componentStatus = "\n- - -\n\n**NOTE FOR UXs**: This component is available in the following variants:\n\n  - \u2705 Standard\n\nWith the following attribute statuses:\n\n  - **Attributes:**\n  - **Position**\n    - \u2705 `center`\n    - \u2705 `right`\n    - \u2705 `left`\n  - **Color**\n    - \u2705 `primary`\n    - \u2705 `secondary`\n    - \u2705 `success`\n    - \u2705 `alert`\n    - \u2705 `warning`\n    - \u2705 `link`\n    - \u2705 `custom`\n  - **Size**\n    - \u2705 `small`\n    - \u2705 `standard`\n  - \u2705 **Icon**\n\n- - -\n";
exports.default = {
    title: 'Components/Tag',
    component: _1.Tag,
    parameters: {
        componentSubtitle: 'Tags are used to label, categorize, or organize items using keywords that describe them.',
        docs: { description: { component: componentStatus } }
    }
};
var Playground = function (args) { return (react_1.default.createElement(_1.Tag, __assign({}, args))); };
exports.Playground = Playground;
exports.Playground.args = {
    children: 'Design System'
};
var Position = function () { return (react_1.default.createElement(StoryContainer_1.default, null,
    react_1.default.createElement(_1.Tag, null, "center"),
    react_1.default.createElement(_1.Tag, { position: "right" }, "right"),
    react_1.default.createElement(_1.Tag, { position: "left" }, "left"))); };
exports.Position = Position;
var Color = function () { return (react_1.default.createElement(StoryContainer_1.default, null,
    react_1.default.createElement(_1.Tag, { color: "primary" }, "primary"),
    react_1.default.createElement(_1.Tag, { color: "secondary" }, "secondary"),
    react_1.default.createElement(_1.Tag, { color: "success" }, "success"),
    react_1.default.createElement(_1.Tag, { color: "alert" }, "alert"),
    react_1.default.createElement(_1.Tag, { color: "warning" }, "warning"),
    react_1.default.createElement(_1.Tag, { color: "link" }, "link"),
    react_1.default.createElement(_1.Tag, { customBackgroundColor: "#FF00FF", customLabelColor: "#FFFFFF" }, "custom"))); };
exports.Color = Color;
var Size = function () { return (react_1.default.createElement(StoryContainer_1.default, null,
    react_1.default.createElement(_1.Tag, { size: "small" }, "small"),
    react_1.default.createElement(_1.Tag, { size: "standard" }, "standard"))); };
exports.Size = Size;
var Icon = function () { return (react_1.default.createElement(StoryContainer_1.default, null,
    react_1.default.createElement(_1.Tag, { size: "small", IconComponent: react_1.default.createElement(Icon_1.Icon, { name: "outlined-default-mockup", color: "highEmphasis", size: "small" }) }, "small"),
    react_1.default.createElement(_1.Tag, { size: "standard", IconComponent: react_1.default.createElement(Icon_1.Icon, { name: "outlined-default-mockup", color: "highEmphasis", size: "standard" }) }, "standard"))); };
exports.Icon = Icon;
//# sourceMappingURL=Tag.stories.js.map