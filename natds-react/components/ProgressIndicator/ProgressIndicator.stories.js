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
exports.Backdrop = exports.Size = exports.Playground = void 0;
/* eslint-disable max-len */
var react_1 = __importDefault(require("react"));
var StoryContainer_1 = __importDefault(require("../../helpers/StoryContainer"));
var _1 = require(".");
var componentStatus = "\n---\n\n**NOTE**: This component is available in the following variant:\n\n  - \u2705 `circular`\n  - \u274C `linear `\n\nWith the following attribute status:\n\n- **Size**\n  - \u2705  `standard`\n  - \u2705  `semi`\n  - \u2705  `medium`\n  - \u2705  `large`\n- \u2705 **Layer**\n\n---\n";
exports.default = {
    title: 'Components/ProgressIndicator',
    component: _1.ProgressIndicator,
    parameters: {
        componentSubtitle: 'Progress indicators express an unspecified wait time.',
        docs: { description: { component: componentStatus } }
    }
};
var Playground = function (args) { return react_1.default.createElement(_1.ProgressIndicator, __assign({}, args)); };
exports.Playground = Playground;
var Size = function (args) { return (react_1.default.createElement(StoryContainer_1.default, null,
    react_1.default.createElement(_1.ProgressIndicator, __assign({}, args, { size: "standard" })),
    react_1.default.createElement(_1.ProgressIndicator, __assign({}, args, { size: "semi" })),
    react_1.default.createElement(_1.ProgressIndicator, __assign({}, args)),
    react_1.default.createElement(_1.ProgressIndicator, __assign({}, args, { size: "large" })))); };
exports.Size = Size;
var Backdrop = function (args) { return (react_1.default.createElement("div", { style: {
        alignItems: 'center',
        backgroundColor: '#00000099',
        display: 'flex',
        height: '100vh',
        justifyContent: 'center'
    } },
    react_1.default.createElement(_1.ProgressIndicator, __assign({}, args)))); };
exports.Backdrop = Backdrop;
exports.Backdrop.args = __assign(__assign({}, exports.Playground.args), { showBackdrop: true });
//# sourceMappingURL=ProgressIndicator.stories.js.map