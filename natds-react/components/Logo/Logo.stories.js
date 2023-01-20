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
exports.Model = exports.Color = exports.Size = exports.Playground = void 0;
var react_1 = __importDefault(require("react"));
var _1 = require(".");
var StoryContainer_1 = __importDefault(require("../../helpers/StoryContainer"));
var componentStatus = "\n---\n\nAttribute status:\n\n- **Size**\n    - \u2705 `medium`\n    - \u2705 `mediumx`\n    - \u2705 `large`\n    - \u2705 `largex`\n    - \u2705 `largexx`\n    - \u2705 `largexxx`\n    - \u2705 `huge`\n    - \u2705 `hugex`\n    - \u2705 `hugexx`\n    - \u2705 `hugexxx`\n    - \u2705 `veryhuge`\n- **Color**\n    - \u2705 `neutral`\n    - \u2705 `primary`\n    - \u2705 `secondary`\n    - \u2705 `highlight`\n    - \u2705 `surface`\n- **Model**\n    - \u2705 `primary`\n    - \u2705 `secondary`\n\n---\n";
exports.default = {
    title: 'Components/Logo',
    component: _1.Logo,
    parameters: {
        componentSubtitle: 'Logo adapted as brand standards for each company',
        docs: { description: { component: componentStatus } },
        actions: { argTypesRegex: '^on.*' }
    }
};
var Playground = function (args) { return react_1.default.createElement(_1.Logo, __assign({}, args)); };
exports.Playground = Playground;
var Size = function (args) { return (react_1.default.createElement(StoryContainer_1.default, null,
    react_1.default.createElement(_1.Logo, __assign({}, args, { size: "medium" })),
    react_1.default.createElement(_1.Logo, __assign({}, args, { size: "mediumX" })),
    react_1.default.createElement(_1.Logo, __assign({}, args, { size: "large" })),
    react_1.default.createElement(_1.Logo, __assign({}, args, { size: "largeX" })),
    react_1.default.createElement(_1.Logo, __assign({}, args, { size: "largeXX" })),
    react_1.default.createElement(_1.Logo, __assign({}, args, { size: "largeXXX" })),
    react_1.default.createElement(_1.Logo, __assign({}, args, { size: "huge" })),
    react_1.default.createElement(_1.Logo, __assign({}, args, { size: "hugeX" })),
    react_1.default.createElement(_1.Logo, __assign({}, args, { size: "hugeXX" })),
    react_1.default.createElement(_1.Logo, __assign({}, args, { size: "hugeXXX" })),
    react_1.default.createElement(_1.Logo, __assign({}, args, { size: "veryHuge" })))); };
exports.Size = Size;
var Color = function (args) { return (react_1.default.createElement(StoryContainer_1.default, null,
    react_1.default.createElement(_1.Logo, __assign({}, args)),
    react_1.default.createElement(_1.Logo, __assign({}, args, { color: "primary" })),
    react_1.default.createElement(_1.Logo, __assign({}, args, { color: "secondary" })),
    react_1.default.createElement(_1.Logo, __assign({}, args, { color: "highlight" })),
    react_1.default.createElement(_1.Logo, __assign({}, args, { color: "surface" })))); };
exports.Color = Color;
var Model = function (args) { return (react_1.default.createElement(StoryContainer_1.default, null,
    react_1.default.createElement(_1.Logo, __assign({}, args)))); };
exports.Model = Model;
exports.Model.args = __assign(__assign({}, exports.Playground.args), { model: 'a' });
//# sourceMappingURL=Logo.stories.js.map