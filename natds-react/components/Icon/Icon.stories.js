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
var componentStatus = "\n---\n\n**NOTE**: This component is available with the following attribute status:\n\n- \u2705 **Color**\n    - Support Color tokens from theme\n- \u2705  **Size**\n    - Support Size tokens from theme\n- \u2705  **Name**\n    - Check all Icon names in [Icon Library](https://ds.natura.design/28db352be/p/94367e-icon-library/b/6154b9)\n\n---\n";
exports.default = {
    title: 'Components/Icon',
    component: _1.Icon,
    parameters: {
        componentSubtitle: 'A helper component to display icons from @naturacosmeticos/natds-icons package',
        docs: { description: { component: componentStatus } }
    }
};
var Playground = function (args) { return react_1.default.createElement(_1.Icon, __assign({}, args)); };
exports.Playground = Playground;
//# sourceMappingURL=Icon.stories.js.map