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
exports.Disabled = exports.Required = exports.HasSuccess = exports.HasError = exports.WithHelperText = exports.WithPlaceholder = exports.Playground = void 0;
var react_1 = __importDefault(require("react"));
var _1 = require(".");
var componentStatus = "\n- - -\n\n**NOTE FOR UXs**: This component is available in the following variants:\n\n  - \u2705 Standard\n\nWith the following attribute statuses:\n\n  - **Attributes:**\n    - \u2705 Label\n    - \u2705 Name\n    - \u2705 Placeholder\n    - \u2705 Options\n    - \u2705 Size\n    - \u2705 HelperText\n    - \u2705 Feedback\n    - \u2705 Required\n    - \u2705 Disabled\n\n- - -\n";
exports.default = {
    title: 'Components/Select',
    component: _1.Select,
    parameters: {
        componentSubtitle: '',
        docs: { description: { component: componentStatus } }
    }
};
var options = [{
        value: '1',
        label: 'Option 1'
    },
    {
        value: '2',
        label: 'Option 2'
    }];
var Playground = function (args) { return (react_1.default.createElement(_1.Select, __assign({}, args, { label: "Label", options: options }))); };
exports.Playground = Playground;
var WithPlaceholder = function (args) { return (react_1.default.createElement(_1.Select, __assign({}, args, { label: "Label", placeholder: "Placeholder", options: options, helperText: "Helper Text" }))); };
exports.WithPlaceholder = WithPlaceholder;
var WithHelperText = function (args) { return (react_1.default.createElement(_1.Select, __assign({}, args, { label: "Label", options: options, helperText: "Helper Text" }))); };
exports.WithHelperText = WithHelperText;
var HasError = function (args) { return (react_1.default.createElement(_1.Select, __assign({}, args, { label: "Label", options: options, feedback: "error", helperText: "Helper Text" }))); };
exports.HasError = HasError;
var HasSuccess = function (args) { return (react_1.default.createElement(_1.Select, __assign({}, args, { label: "Label", options: options, feedback: "success", helperText: "Helper Text" }))); };
exports.HasSuccess = HasSuccess;
var Required = function (args) { return (react_1.default.createElement(_1.Select, __assign({}, args, { label: "Label", options: options, required: true }))); };
exports.Required = Required;
var Disabled = function (args) { return (react_1.default.createElement(_1.Select, __assign({}, args, { label: "Label", options: options, disabled: true }))); };
exports.Disabled = Disabled;
//# sourceMappingURL=Select.stories.js.map