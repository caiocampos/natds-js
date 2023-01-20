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
exports.Custom = exports.WithoutTitle = exports.WithoutIcon = exports.Playground = void 0;
var react_1 = __importDefault(require("react"));
var _1 = require(".");
var componentStatus = "\n- - -\n\n**NOTE FOR UXs**: This component is available in the following variants:\n\n  - \u2705 Standard\n\nWith the following attribute statuses:\n\n  - **Attributes:**\n    - \u2705 Color\n    - \u2705 Type\n    - \u2705 Title\n    - \u2705 CustomIcon\n    - \u2705 ShowIcon\n    - \u2705 CustomBackgroundColor\n    - \u2705 CustomTextColor\n    - \u2705 CustomIconColor\n    - \u2705 CustomBorderColor\n\n- - -\n";
exports.default = {
    title: 'Components/Alert',
    component: _1.Alert,
    parameters: {
        componentSubtitle: '',
        docs: { description: { component: componentStatus } }
    }
};
var Playground = function (args) { return (react_1.default.createElement(_1.Alert, __assign({}, args, { title: "Title" }), "Lorem, ipsum dolor sit amet consectetur adipisicing elit.")); };
exports.Playground = Playground;
var WithoutIcon = function (args) { return (react_1.default.createElement(_1.Alert, __assign({}, args, { title: "Title", showIcon: false }), "Lorem, ipsum dolor sit amet consectetur adipisicing elit.")); };
exports.WithoutIcon = WithoutIcon;
var WithoutTitle = function (args) { return (react_1.default.createElement(_1.Alert, __assign({}, args), "Lorem, ipsum dolor sit amet consectetur adipisicing elit.")); };
exports.WithoutTitle = WithoutTitle;
var Custom = function (args) { return (react_1.default.createElement(_1.Alert, __assign({}, args, { customIcon: "outlined-default-mockup", type: "outlined", color: "custom", customBackgroundColor: "#FF00FF", customBorderColor: "#FF00FF", customIconColor: "#FF00FF", customTextColor: "#FF00FF" }), "Lorem, ipsum dolor sit amet consectetur adipisicing elit.")); };
exports.Custom = Custom;
//# sourceMappingURL=Alert.stories.js.map