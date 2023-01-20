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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Playground = void 0;
var react_1 = __importStar(require("react"));
var AccordionItem_1 = __importDefault(require("../AccordionItem"));
var StoryContainer_1 = __importDefault(require("../../helpers/StoryContainer"));
var _1 = require(".");
var componentStatus = "\n- - -\n\n**NOTE FOR UXs**: This component is available in the following variants:\n\n  - \u2705 Standard\n\n- - -\n";
var Item = function () {
    var _a = (0, react_1.useState)(false), isActive = _a[0], setIsActive = _a[1];
    var onClick = function () { return setIsActive(!isActive); };
    return (react_1.default.createElement(AccordionItem_1.default, { title: "Lorem ipsum", isActive: isActive, onClick: onClick }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deserunt, ratione alias recusandae error fuga vero obcaecati impedit in dicta esse ad debitis iure voluptatem ipsam atque! Quam, doloribus alias!"));
};
exports.default = {
    title: 'Components/AccordionGroup',
    component: _1.AccordionGroup,
    parameters: {
        componentSubtitle: '',
        docs: { description: { component: componentStatus } }
    }
};
var Playground = function (args) { return (react_1.default.createElement(StoryContainer_1.default, null,
    react_1.default.createElement(_1.AccordionGroup, __assign({}, args),
        react_1.default.createElement(Item, null),
        react_1.default.createElement(Item, null),
        react_1.default.createElement(Item, null)))); };
exports.Playground = Playground;
//# sourceMappingURL=AccordionGroup.stories.js.map