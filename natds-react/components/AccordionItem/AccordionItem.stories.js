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
exports.Legend = exports.Disabled = exports.Primary = exports.Playground = void 0;
var react_1 = __importDefault(require("react"));
var addons_1 = require("@storybook/addons");
var StoryContainer_1 = __importDefault(require("../../helpers/StoryContainer"));
var _1 = require(".");
var componentStatus = "\n- - -\n\n**NOTE FOR UXs**: This component is available in the following variants:\n\n  - \u2705 Standard\n\nWith the following attribute statuses:\n\n  - **Attributes:**\n    - \u2705 Title\n    - \u2705 Legend\n    - \u2705 Color\n    - \u2705 IsActive\n    - \u2705 IsDisabled\n    - \u2705 OnClick\n    \n- - -\n";
exports.default = {
    title: 'Components/AccordionItem',
    component: _1.AccordionItem,
    parameters: {
        componentSubtitle: '',
        docs: { description: { component: componentStatus } }
    }
};
var Playground = function (args) {
    var _a = (0, addons_1.useState)(false), isActive = _a[0], setIsActive = _a[1];
    var onClick = function () { return setIsActive(!isActive); };
    return (react_1.default.createElement(StoryContainer_1.default, null,
        react_1.default.createElement(_1.AccordionItem, __assign({}, args, { title: "Subtitle 1", isActive: isActive, onClick: onClick }), "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deserunt, ratione alias recusandae error fuga vero obcaecati impedit in dicta esse ad debitis iure voluptatem ipsam atque! Quam, doloribus alias!")));
};
exports.Playground = Playground;
var Primary = function (args) {
    var _a = (0, addons_1.useState)(true), isActive = _a[0], setIsActive = _a[1];
    var onClick = function () { return setIsActive(!isActive); };
    return (react_1.default.createElement(StoryContainer_1.default, null,
        react_1.default.createElement(_1.AccordionItem, __assign({}, args, { title: "Subtitle 1", color: "primary", isActive: isActive, onClick: onClick }), "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deserunt, ratione alias recusandae error fuga vero obcaecati impedit in dicta esse ad debitis iure voluptatem ipsam atque! Quam, doloribus alias!")));
};
exports.Primary = Primary;
var Disabled = function (args) { return (react_1.default.createElement(StoryContainer_1.default, null,
    react_1.default.createElement(_1.AccordionItem, __assign({}, args, { title: "Subtitle 1", isDisabled: true, onClick: function () { return ({}); } }), "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deserunt, ratione alias recusandae error fuga vero obcaecati impedit in dicta esse ad debitis iure voluptatem ipsam atque! Quam, doloribus alias!"))); };
exports.Disabled = Disabled;
var Legend = function (args) {
    var _a = (0, addons_1.useState)(true), isActive = _a[0], setIsActive = _a[1];
    var onClick = function () { return setIsActive(!isActive); };
    return (react_1.default.createElement(StoryContainer_1.default, null,
        react_1.default.createElement(_1.AccordionItem, __assign({}, args, { title: "Subtitle 1", legend: "Legend", isActive: isActive, onClick: onClick }), "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deserunt, ratione alias recusandae error fuga vero obcaecati impedit in dicta esse ad debitis iure voluptatem ipsam atque! Quam, doloribus alias!")));
};
exports.Legend = Legend;
//# sourceMappingURL=AccordionItem.stories.js.map