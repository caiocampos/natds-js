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
exports.Radius = exports.Elevation = exports.Playground = void 0;
var react_1 = __importDefault(require("react"));
var react_jss_1 = require("react-jss");
var _1 = require(".");
var Button_1 = require("../Button");
var Icon_1 = require("../Icon");
var StoryContainer_1 = __importDefault(require("../../helpers/StoryContainer"));
var componentStatus = "\n---\n\n**NOTE**: This component is available in the following attributes:\n\n  - \u2705 `elevation`\n  - \u2705 `radius`\n\n---\n";
exports.default = {
    title: 'Components/Card',
    component: _1.Card,
    parameters: {
        componentSubtitle: 'Cards are surfaces that groups content and actions in the same space. Its construction must always create a visual hierarchy of the content and communicate its purposes',
        docs: { description: { component: componentStatus } }
    }
};
var Playground = function (args) {
    var _a = containerStyles(), image = _a.image, wrapper = _a.wrapper;
    var text = textStyle().text;
    return (react_1.default.createElement(_1.Card, __assign({}, args),
        react_1.default.createElement("div", { className: image },
            react_1.default.createElement(Icon_1.Icon, { name: "outlined-product-brandsproduct", size: "hugeXXX" })),
        react_1.default.createElement("div", { className: wrapper },
            react_1.default.createElement("p", { className: text }, "This is just an example of the Card component containing an image, a text and a button"),
            react_1.default.createElement(Button_1.Button, { onClick: function () { return ''; }, fullWidth: true }, "button"))));
};
exports.Playground = Playground;
var Elevation = function (args) {
    var text = textStyle().text;
    return (react_1.default.createElement(StoryContainer_1.default, null,
        react_1.default.createElement(_1.Card, __assign({}, args),
            react_1.default.createElement("p", { className: text }, "This is an example of the Card component with elevation")),
        react_1.default.createElement(_1.Card, __assign({}, args, { elevation: false }),
            react_1.default.createElement("p", { className: text }, "This is an example of the Card component without elevation"))));
};
exports.Elevation = Elevation;
var Radius = function (args) {
    var text = textStyle().text;
    return (react_1.default.createElement(StoryContainer_1.default, null,
        react_1.default.createElement(_1.Card, __assign({}, args),
            react_1.default.createElement("p", { className: text }, "This is an example of the Card component with radius")),
        react_1.default.createElement(_1.Card, __assign({}, args, { radius: false }),
            react_1.default.createElement("p", { className: text }, "This is an example of the Card component without radius"))));
};
exports.Radius = Radius;
var textStyle = (0, react_jss_1.createUseStyles)(function (theme) { return ({
    text: {
        color: theme.color.highEmphasis,
        fontFamily: [theme.typography.fontFamily.primary, theme.typography.fontFamily.secondary],
        fontSize: 14,
        fontWeight: 'normal',
        letterSpacing: 0.22,
        maxWidth: 200,
        textAlign: 'center'
    }
}); });
var containerStyles = (0, react_jss_1.createUseStyles)(function (theme) { return ({
    image: {
        backgroundColor: theme.color.lowEmphasis,
        opacity: 0.4,
        textAlign: 'center'
    },
    wrapper: {
        padding: theme.spacing.small
    }
}); });
//# sourceMappingURL=Card.stories.js.map