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
exports.Counter = exports.ReadOnly = exports.Input = exports.Playground = void 0;
/* eslint-disable max-len */
var react_1 = __importStar(require("react"));
var _1 = require(".");
var componentStatus = "\n---\n\n**NOTE FOR UXs**: This component is available in the following variants:\n\n  - \u2705 `counter`\n  - \u2705 `input`\n  - \u2705 `read-only`\n\nWith the following attribute status:\n\n- \u2705 **Label** (only for Input and Counter variant)\n- \u2705 **Disabled** (only for Input variant)\n- \u2705 **Rate** (only for Read-Only variant)\n- **Size**\n    - \u2705 `small` (only for Read-Only and Counter variants)\n    - \u2705 `standard`\n    - \u2705 `semi`\n    - \u2705 `semiX`\n    - \u2705 `medium` (only for Input variant)\n- **Align** (only for Counter variant)\n    - \u2705 `left`\n    - \u2705 `right`\n\n---\n";
exports.default = {
    title: 'Components/Rating',
    component: _1.Rating,
    parameters: {
        componentSubtitle: 'Provides a user interactive stars for rating or checking something’s rating.',
        docs: { description: { component: componentStatus } },
        actions: { argTypesRegex: '^on.*' }
    }
};
var Playground = function (args) { return react_1.default.createElement(_1.Rating, __assign({}, args)); };
exports.Playground = Playground;
exports.Playground.args = {
    variant: 'counter',
    label: 'Placeholder',
    size: 'semi',
    ariaLabel: 'rating star'
};
var Input = function (_a) {
    var rate = _a.rate, args = __rest(_a, ["rate"]);
    var _b = (0, react_1.useState)(rate), rating = _b[0], setRating = _b[1];
    return (react_1.default.createElement(_1.Rating, __assign({}, args, { rate: rating, onClick: function (e) { return setRating(e.target.value); } })));
};
exports.Input = Input;
exports.Input.args = {
    ariaLabel: 'rating star',
    disabled: false,
    rate: 2,
    size: 'semi',
    variant: 'input',
    ariaLabelGroup: 'rating star group'
};
exports.Input.parameters = { controls: { exclude: ['align', 'rate'] } };
var ReadOnly = function (args) { return react_1.default.createElement(_1.Rating, __assign({}, args)); };
exports.ReadOnly = ReadOnly;
exports.ReadOnly.parameters = { controls: { exclude: ['align', 'label', 'disabled'] } };
exports.ReadOnly.args = {
    ariaLabel: 'rating star',
    rate: 2,
    size: 'semi',
    variant: 'read-only',
    ariaLabelGroup: 'rating star group'
};
var Counter = function (args) { return react_1.default.createElement(_1.Rating, __assign({}, args)); };
exports.Counter = Counter;
exports.Counter.parameters = { controls: { exclude: ['rate', 'disabled'] } };
exports.Counter.args = {
    align: 'left',
    ariaLabel: 'rating star',
    label: 'Placeholder',
    size: 'semi',
    variant: 'counter'
};
//# sourceMappingURL=Rating.stories.js.map