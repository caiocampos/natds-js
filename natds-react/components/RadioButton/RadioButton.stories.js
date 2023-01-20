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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disabled = exports.Playground = void 0;
var react_1 = __importStar(require("react"));
var _1 = require(".");
var componentStatus = "\n---\n\n**NOTE FOR UXs**: This component is available with the following attribute status:\n\n  - \u2705 **Disabled**\n\n---\n";
exports.default = {
    title: 'Components/RadioButton',
    component: _1.RadioButton,
    parameters: {
        componentSubtitle: 'RadioButton buttons allow users to select one option from a set.',
        docs: { description: { component: componentStatus } },
        actions: { argTypesRegex: '^on.*' }
    }
};
var Playground = function (_a) {
    var checked = _a.checked, args = __rest(_a, ["checked"]);
    var _b = (0, react_1.useState)(checked), check = _b[0], setCheck = _b[1];
    return (react_1.default.createElement(_1.RadioButton, __assign({}, args, { checked: check, onChange: function () { return setCheck(!check); } })));
};
exports.Playground = Playground;
exports.Playground.args = { checked: false, label: 'Example' };
var Disabled = function (args) { return (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(_1.RadioButton, __assign({}, args)),
    react_1.default.createElement(_1.RadioButton, __assign({}, args, { checked: true })))); };
exports.Disabled = Disabled;
exports.Disabled.args = __assign(__assign({}, exports.Playground.args), { disabled: true });
//# sourceMappingURL=RadioButton.stories.js.map