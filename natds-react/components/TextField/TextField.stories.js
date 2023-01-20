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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionImage = exports.ActionIcon = exports.Type = exports.Disabled = exports.Required = exports.ReadOnly = exports.Feedback = exports.HelperText = exports.Size = exports.Playground = void 0;
var react_1 = __importStar(require("react"));
var _1 = require(".");
var Label_1 = require("../Label");
var Input_1 = require("../Input");
var StoryContainer_1 = __importDefault(require("../../helpers/StoryContainer"));
var Icon_1 = require("../Icon");
var componentStatus = "\n---\n\n**NOTE**: This component is available with the following attribute status:\n\n- **Size**\n  - \u2705  `medium`\n  - \u2705  `mediumX`\n- **Feedback**\n  - \u2705  `error`\n  - \u2705  `success`\n- \u2705 **Required**\n- \u2705 **Disabled**\n- \u2705 **ReadOnly**\n- \u2705 **HelperText**\n- **Action**\n  - \u2705  `icon `\n  - \u2705  `image `\n- **Type**\n  - \u2705  `password `\n  - \u2705  `multiline `\n  - \u2705  `text `\n\n---\n";
exports.default = {
    title: 'Components/TextField',
    component: _1.TextField,
    subcomponents: { Label: Label_1.Label, InputHelperText: Input_1.InputHelperText, Input: Input_1.Input },
    parameters: {
        componentSubtitle: 'Text fields let users enter and edit text',
        docs: { description: { component: componentStatus } },
        actions: { argTypesRegex: '^on.*' }
    }
};
var Playground = function (args) {
    var _a = (0, react_1.useState)(''), value = _a[0], setValue = _a[1];
    return (react_1.default.createElement(StoryContainer_1.default, null,
        react_1.default.createElement(_1.TextField, __assign({}, args, { onChange: function (e) { return setValue(e.target.value); }, value: value }))));
};
exports.Playground = Playground;
exports.Playground.args = { helperText: 'Helper text', label: 'Label', placeholder: 'Placeholder' };
var Size = function (args) { return (react_1.default.createElement(StoryContainer_1.default, null,
    react_1.default.createElement(_1.TextField, __assign({}, args)),
    react_1.default.createElement(_1.TextField, __assign({}, args, { size: "medium" })))); };
exports.Size = Size;
exports.Size.args = __assign({}, exports.Playground.args);
var HelperText = function (args) { return (react_1.default.createElement(StoryContainer_1.default, null,
    react_1.default.createElement(_1.TextField, __assign({}, args, { helperText: "Helper text" })))); };
exports.HelperText = HelperText;
exports.HelperText.args = __assign({}, exports.Playground.args);
var Feedback = function (args) { return (react_1.default.createElement(StoryContainer_1.default, null,
    react_1.default.createElement(_1.TextField, __assign({}, args, { feedback: "error" })),
    react_1.default.createElement(_1.TextField, __assign({}, args, { feedback: "success" })))); };
exports.Feedback = Feedback;
exports.Feedback.args = __assign({}, exports.Playground.args);
var ReadOnly = function (args) { return (react_1.default.createElement(StoryContainer_1.default, null,
    react_1.default.createElement(_1.TextField, __assign({}, args)))); };
exports.ReadOnly = ReadOnly;
exports.ReadOnly.args = __assign(__assign({}, exports.Playground.args), { readOnly: true, value: 'Hello World' });
var Required = function (args) { return (react_1.default.createElement(StoryContainer_1.default, null,
    react_1.default.createElement(_1.TextField, __assign({}, args)))); };
exports.Required = Required;
exports.Required.args = __assign(__assign({}, exports.Playground.args), { required: true });
var Disabled = function (args) { return (react_1.default.createElement(StoryContainer_1.default, null,
    react_1.default.createElement(_1.TextField, __assign({}, args)))); };
exports.Disabled = Disabled;
exports.Disabled.args = __assign(__assign({}, exports.Playground.args), { disabled: true, value: 'Hello World' });
var Type = function (args) {
    var _a = (0, react_1.useState)('Hello World'), password = _a[0], setPassword = _a[1];
    var _b = (0, react_1.useState)('Hello World'), text = _b[0], setText = _b[1];
    var _c = (0, react_1.useState)('Hello World'), textArea = _c[0], setTextArea = _c[1];
    return (react_1.default.createElement(StoryContainer_1.default, null,
        react_1.default.createElement(_1.TextField, __assign({}, args, { onChange: function (e) { return setPassword(e.target.value); }, value: password, type: "password", label: "Password type" })),
        react_1.default.createElement(_1.TextField, __assign({}, args, { onChange: function (e) { return setText(e.target.value); }, value: text, label: "Text type" })),
        react_1.default.createElement(_1.TextField, __assign({}, args, { onChange: function (e) { return setTextArea(e.target.value); }, value: textArea, type: "multiline", label: "Multiline type" }))));
};
exports.Type = Type;
var ActionIcon = function (args) { return (react_1.default.createElement(StoryContainer_1.default, null,
    react_1.default.createElement(_1.TextField, __assign({}, args)))); };
exports.ActionIcon = ActionIcon;
exports.ActionIcon.args = __assign(__assign({}, exports.Playground.args), { action: 'icon', IconComponent: react_1.default.createElement(Icon_1.Icon, { name: "filled-action-love", color: "highEmphasis" }), onClick: function () { return ''; }, ariaLabel: 'heart icon button' });
var ActionImage = function (args) { return (react_1.default.createElement(StoryContainer_1.default, null,
    react_1.default.createElement(_1.TextField, __assign({}, args)))); };
exports.ActionImage = ActionImage;
exports.ActionImage.args = __assign(__assign({}, exports.Playground.args), { action: 'image', src: '/img_placeholder.png', alt: 'image placeholder example' });
//# sourceMappingURL=TextField.stories.js.map