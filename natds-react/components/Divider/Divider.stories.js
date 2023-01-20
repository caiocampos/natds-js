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
exports.Middle = exports.Inset = exports.FullBleed = exports.Playground = void 0;
var react_1 = __importDefault(require("react"));
var _1 = require(".");
var componentStatus = "\n---\n\n**NOTE**: This component is available in the following variants:\n\n  - \u2705 `full-bleed`\n  - \u2705 `inset`\n  - \u2705 `middle`\n\n---\n";
exports.default = {
    title: 'Components/Divider',
    component: _1.Divider,
    parameters: {
        componentSubtitle: 'A divider is a thin line that groups content in lists and layouts',
        docs: { description: { component: componentStatus } }
    }
};
var Playground = function (args) { return (react_1.default.createElement(Template, null,
    react_1.default.createElement(_1.Divider, __assign({}, args)))); };
exports.Playground = Playground;
var FullBleed = function (args) { return (react_1.default.createElement(Template, null,
    react_1.default.createElement(_1.Divider, __assign({}, args, { variant: "full-bleed" })))); };
exports.FullBleed = FullBleed;
exports.FullBleed.args = __assign({}, exports.Playground.args);
var Inset = function (args) { return (react_1.default.createElement(Template, null,
    react_1.default.createElement(_1.Divider, __assign({}, args, { variant: "inset" })))); };
exports.Inset = Inset;
exports.FullBleed.args = __assign({}, exports.Playground.args);
var Middle = function (args) { return (react_1.default.createElement(Template, null,
    react_1.default.createElement(_1.Divider, __assign({}, args, { variant: "middle" })))); };
exports.Middle = Middle;
exports.FullBleed.args = __assign({}, exports.Playground.args);
var Template = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement("div", { style: { maxWidth: 200, border: '1px solid #00000014', padding: '16px 0' } }, children));
};
//# sourceMappingURL=Divider.stories.js.map