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
exports.Sizes = exports.Types = exports.Playground = void 0;
/* eslint-disable no-param-reassign */
var react_1 = __importDefault(require("react"));
var _1 = require(".");
var componentStatus = "\n---\n\n**NOTE FOR UXs**: This component is available in the following variants:\n\n  - \u2705 `standard`\n\nWith the following attribute status:\n\n- **Type**\n    - \u2705 `icon`\n    - \u2705 `label`\n    - \u2705 `image`\n- **Size**\n    - \u2705 `standard`\n    - \u2705 `semi`\n    - \u2705 `semiX`\n    - \u2705 `medium`\n    - \u2705 `largeXXX`\n\n---\n";
exports.default = {
    title: 'Components/Avatar',
    component: _1.Avatar,
    parameters: {
        componentSubtitle: 'Avatars are used to identify a user',
        docs: { description: { component: componentStatus } }
    }
};
var Playground = function (args) { return (react_1.default.createElement(_1.Avatar, __assign({}, args))); };
exports.Playground = Playground;
exports.Playground.args = {
    src: '/img_placeholder.png'
};
var handleError = function (e) {
    e.currentTarget.onerror = null;
    e.currentTarget.src = 'https://via.placeholder.com/200x200';
};
var Types = function () { return (react_1.default.createElement("div", { style: { display: 'flex', gap: 8 } },
    react_1.default.createElement(_1.Avatar, { type: "image", src: "/img_placeholder.png", onError: handleError }),
    react_1.default.createElement(_1.Avatar, { type: "icon" }),
    react_1.default.createElement(_1.Avatar, { type: "label" }))); };
exports.Types = Types;
var Sizes = function () { return (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("div", { style: { display: 'flex', gap: 8, marginBottom: 8 } },
        react_1.default.createElement(_1.Avatar, { type: "image", src: "/img_placeholder.png", size: "standard", onError: handleError }),
        react_1.default.createElement(_1.Avatar, { type: "image", src: "/img_placeholder.png", size: "semi", onError: handleError }),
        react_1.default.createElement(_1.Avatar, { type: "image", src: "/img_placeholder.png", size: "semiX", onError: handleError }),
        react_1.default.createElement(_1.Avatar, { type: "image", src: "/img_placeholder.png", size: "medium", onError: handleError }),
        react_1.default.createElement(_1.Avatar, { type: "image", src: "/img_placeholder.png", size: "largeXXX", onError: handleError })),
    react_1.default.createElement("div", { style: { display: 'flex', gap: 8, marginBottom: 8 } },
        react_1.default.createElement(_1.Avatar, { type: "icon", size: "standard" }),
        react_1.default.createElement(_1.Avatar, { type: "icon", size: "semi" }),
        react_1.default.createElement(_1.Avatar, { type: "icon", size: "semiX" }),
        react_1.default.createElement(_1.Avatar, { type: "icon", size: "medium" }),
        react_1.default.createElement(_1.Avatar, { type: "icon", size: "largeXXX" })),
    react_1.default.createElement("div", { style: { display: 'flex', gap: 8, marginBottom: 8 } },
        react_1.default.createElement(_1.Avatar, { type: "label", size: "standard" }),
        react_1.default.createElement(_1.Avatar, { type: "label", size: "semi" }),
        react_1.default.createElement(_1.Avatar, { type: "label", size: "semiX" }),
        react_1.default.createElement(_1.Avatar, { type: "label", size: "medium" }),
        react_1.default.createElement(_1.Avatar, { type: "label", size: "largeXXX" })))); };
exports.Sizes = Sizes;
//# sourceMappingURL=Avatar.stories.js.map