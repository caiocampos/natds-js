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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disabled = exports.Sizes = exports.Playground = void 0;
var react_1 = __importDefault(require("react"));
var _1 = require(".");
var StoryContainer_1 = __importDefault(require("../../helpers/StoryContainer"));
var componentStatus = "\n---\n\n**NOTE FOR UXs**: This component is available in the following variants:\n\n  - \u2705 `standard`\n\nWith the following attribute status:\n\n- \u2705 **Label**\n- **Size**\n    - \u2705 `semiX`\n    - \u2705 `medium`\n- \u2705 **Disabled**\n\n---\n";
exports.default = {
    title: 'Components/Counter',
    component: _1.Counter,
    parameters: {
        componentSubtitle: 'Reduce input effort for fields with values that deviate little from the default by allowing users to increase or decrease the number in a single button press.',
        docs: { description: { component: componentStatus } },
        actions: { argTypesRegex: '^on.*' }
    }
};
var Playground = function (_a) {
    var value = _a.value, args = __rest(_a, ["value"]);
    var _b = react_1.default.useState(value || 0), amount = _b[0], setAmount = _b[1];
    var handleIncrement = function () { return setAmount(amount + 1); };
    var handleDecrement = function () { return setAmount(amount - 1); };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(_1.Counter, __assign({}, args, { onIncrement: handleIncrement, onDecrement: handleDecrement, value: amount }))));
};
exports.Playground = Playground;
exports.Playground.args = { value: 0, label: 'label' };
var Sizes = function (args) {
    var _a = react_1.default.useState(0), counter1 = _a[0], setCounter1 = _a[1];
    var _b = react_1.default.useState(0), counter2 = _b[0], setCounter2 = _b[1];
    return (react_1.default.createElement(StoryContainer_1.default, null,
        react_1.default.createElement(_1.Counter, __assign({}, args, { value: counter1, onIncrement: function () { return setCounter1(counter1 + 1); }, onDecrement: function () { return setCounter1(counter1 - 1); } })),
        react_1.default.createElement(_1.Counter, __assign({}, args, { size: "medium", value: counter2, onIncrement: function () { return setCounter2(counter2 + 1); }, onDecrement: function () { return setCounter2(counter2 - 1); } }))));
};
exports.Sizes = Sizes;
var Disabled = function (args) { return react_1.default.createElement(_1.Counter, __assign({}, args)); };
exports.Disabled = Disabled;
exports.Disabled.args = { disabled: true };
//# sourceMappingURL=Counter.stories.js.map