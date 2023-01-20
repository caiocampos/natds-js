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
exports.WithBorder = exports.WithComponent = exports.WithFallback = exports.WithFade = exports.Highlight = exports.Playground = void 0;
var react_1 = __importDefault(require("react"));
var _1 = require(".");
var StoryContainer_1 = __importDefault(require("../../helpers/StoryContainer"));
var Typography_1 = __importDefault(require("../Typography"));
var componentStatus = "\n- - -\n\n**NOTE FOR UXs**: This component is available in the following variants:\n\n  - \u274C Standard\n\nWith the following attribute statuses:\n\n  - **Attributes:**\n    - \u274C `Types`\n\n- - -\n";
exports.default = {
    title: 'Components/Image',
    component: _1.Image,
    parameters: {
        componentSubtitle: '',
        docs: { description: { component: componentStatus } }
    }
};
var Playground = function (args) { return (react_1.default.createElement(StoryContainer_1.default, null,
    react_1.default.createElement(_1.Image, __assign({}, args, { sourceImage: "https://picsum.photos/256" }), "Lorem ipsum dolor sit amet consectetur adipisicing elit."))); };
exports.Playground = Playground;
var Highlight = function (args) { return (react_1.default.createElement(StoryContainer_1.default, null,
    react_1.default.createElement(_1.Image, __assign({}, args, { highlight: true, sourceImage: "https://picsum.photos/256" })))); };
exports.Highlight = Highlight;
var WithFade = function (args) { return (react_1.default.createElement(StoryContainer_1.default, null,
    react_1.default.createElement(_1.Image, __assign({}, args, { highlight: true, fade: "top", sourceImage: "https://picsum.photos/256" })),
    react_1.default.createElement(_1.Image, __assign({}, args, { highlight: true, fade: "bottom", sourceImage: "https://picsum.photos/256" })),
    react_1.default.createElement(_1.Image, __assign({}, args, { highlight: true, fade: "right", sourceImage: "https://picsum.photos/256" })),
    react_1.default.createElement(_1.Image, __assign({}, args, { highlight: true, fade: "left", sourceImage: "https://picsum.photos/256" })))); };
exports.WithFade = WithFade;
var WithFallback = function (args) { return (react_1.default.createElement(StoryContainer_1.default, null,
    react_1.default.createElement(_1.Image, __assign({}, args, { sourceImage: "INVALID_URL", fallbackImage: "https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-web@latest/dist/assets/product-empty-256x256.png" }), "Lorem ipsum dolor sit amet consectetur adipisicing elit."))); };
exports.WithFallback = WithFallback;
var WithComponent = function (args) { return (react_1.default.createElement(StoryContainer_1.default, null,
    react_1.default.createElement(_1.Image, __assign({}, args, { highlight: true, sourceImage: "https://picsum.photos/256" }),
        react_1.default.createElement("div", { style: { color: '#fff' } },
            react_1.default.createElement(Typography_1.default, { variant: "caption" }, "Lorem Ipsum"))))); };
exports.WithComponent = WithComponent;
var WithBorder = function (args) { return (react_1.default.createElement(StoryContainer_1.default, null,
    react_1.default.createElement(_1.Image, __assign({}, args, { sourceImage: "https://picsum.photos/256" })),
    react_1.default.createElement(_1.Image, __assign({}, args, { border: "medium", sourceImage: "https://picsum.photos/256" })),
    react_1.default.createElement(_1.Image, __assign({}, args, { border: "circle", sourceImage: "https://picsum.photos/256" })))); };
exports.WithBorder = WithBorder;
//# sourceMappingURL=Image.stories.js.map