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
exports.Sizes = exports.Custom = exports.Selected = exports.Disabled = exports.WithAvatar = exports.WithIcon = exports.Playground = void 0;
var react_1 = __importDefault(require("react"));
var _1 = require(".");
var componentStatus = "\n- - -\n\n**NOTE FOR UXs**: This component is available in the following variants:\n\n  - \u2705 Standard\n\nWith the following attribute statuses:\n\n  - **Attributes:**\n    - \u2705 Color\n    - \u2705 Icon\n    - \u2705 Avatar\n    - \u2705 Disabled\n    - \u2705 Size\n\n- - -\n";
exports.default = {
    title: 'Components/Chip',
    component: _1.Chip,
    parameters: {
        componentSubtitle: '',
        docs: { description: { component: componentStatus } }
    }
};
var Playground = function (args) { return (react_1.default.createElement(_1.Chip, __assign({}, args, { labelText: "Chip label", onClick: function () { return console.log('clicked!'); } }))); };
exports.Playground = Playground;
var WithIcon = function (args) { return (react_1.default.createElement("div", { style: { display: 'flex', gap: '16px' } },
    react_1.default.createElement(_1.Chip, __assign({}, args, { labelText: "Chip label", leftIcon: "outlined-default-mockup" })),
    react_1.default.createElement(_1.Chip, __assign({}, args, { labelText: "Chip label", rightIcon: "outlined-default-mockup" })),
    react_1.default.createElement(_1.Chip, __assign({}, args, { labelText: "Chip label", leftIcon: "outlined-default-mockup", rightIcon: "outlined-default-mockup" })))); };
exports.WithIcon = WithIcon;
var WithAvatar = function (args) { return (react_1.default.createElement("div", { style: { display: 'flex', gap: '16px' } },
    react_1.default.createElement(_1.Chip, __assign({}, args, { labelText: "Chip label", leftAvatar: "https://via.placeholder.com/200x200" })),
    react_1.default.createElement(_1.Chip, __assign({}, args, { labelText: "Chip label", rightAvatar: "https://via.placeholder.com/200x200" })),
    react_1.default.createElement(_1.Chip, __assign({}, args, { labelText: "Chip label", leftAvatar: "https://via.placeholder.com/200x200", rightAvatar: "https://via.placeholder.com/200x200" })))); };
exports.WithAvatar = WithAvatar;
var Disabled = function (args) { return (react_1.default.createElement(_1.Chip, __assign({}, args, { labelText: "Chip label", disabled: true }))); };
exports.Disabled = Disabled;
var Selected = function (args) { return (react_1.default.createElement("div", { style: { display: 'flex', gap: '16px' } },
    react_1.default.createElement(_1.Chip, __assign({}, args, { labelText: "Neutral", color: "neutral", selected: true })),
    react_1.default.createElement(_1.Chip, __assign({}, args, { labelText: "Primary", color: "primary", selected: true })),
    react_1.default.createElement(_1.Chip, __assign({}, args, { labelText: "Secondary", color: "secondary", selected: true })),
    react_1.default.createElement(_1.Chip, __assign({}, args, { labelText: "Custom", color: "custom", customBackground: "#FF00FF", customBorderColor: "#FF00FF", customLabelColor: "#fff", selected: true })))); };
exports.Selected = Selected;
var Custom = function (args) { return (react_1.default.createElement(_1.Chip, __assign({}, args, { labelText: "Chip label", color: "custom", customBackground: "#FF00FF", customBorderColor: "#FF00FF" }))); };
exports.Custom = Custom;
var Sizes = function (args) { return (react_1.default.createElement("div", { style: { display: 'flex', gap: '16px' } },
    react_1.default.createElement(_1.Chip, __assign({}, args, { labelText: "Chip label", size: "semi" })),
    react_1.default.createElement(_1.Chip, __assign({}, args, { labelText: "Chip label", size: "semiX" })),
    react_1.default.createElement(_1.Chip, __assign({}, args, { labelText: "Chip label", size: "medium" })))); };
exports.Sizes = Sizes;
//# sourceMappingURL=Chip.stories.js.map