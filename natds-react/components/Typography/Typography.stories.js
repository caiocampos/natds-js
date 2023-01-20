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
exports.Playground = void 0;
var react_1 = __importDefault(require("react"));
var _1 = require(".");
var componentStatus = "\n- - -\n\nThe component of Text is rendered inside a DIV. This happen because the component has dynamic behavior depending of variant value.\n\n- - -\n\n**NOTE FOR UXs**: This component is available in the following variants:\n\n  - \u2705 Heading1\n  - \u2705 Heading2\n  - \u2705 Heading3\n  - \u2705 Heading4\n  - \u2705 Heading5\n  - \u2705 Heading6\n  - \u2705 Subtitle1\n  - \u2705 Subtitle2\n  - \u2705 Subtitle2\n  - \u2705 Body1\n  - \u2705 Body2\n  - \u2705 Caption\n  - \u2705 Overline\n\n- - -\n";
exports.default = {
    title: 'Components/Typography',
    component: _1.Typography,
    parameters: {
        docs: { description: { component: componentStatus } }
    }
};
var Playground = function (args) { return (react_1.default.createElement(_1.Typography, __assign({}, args), "Hello world")); };
exports.Playground = Playground;
//# sourceMappingURL=Typography.stories.js.map