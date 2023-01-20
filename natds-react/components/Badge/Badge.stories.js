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
exports.Limit = exports.Colors = exports.Variants = exports.Playground = void 0;
var react_1 = __importDefault(require("react"));
var react_jss_1 = require("react-jss");
var _1 = require(".");
var componentStatus = "\n---\n\n**NOTE FOR UXs**: This component is available in the following variants:\n\n  - \u2705 `dot`\n  - \u2705 `pulse`\n  - \u2705 `standard`\n\nWith the following attribute status:\n\n- \u2705 **Limit** (only available for Standard variant)\n- **Color**\n    - \u2705 `alert`\n    - \u2705 `primary`\n    - \u2705 `secondary`\n    - \u2705 `success`\n\n---\n";
exports.default = {
    title: 'Components/Badge',
    component: _1.Badge,
    parameters: {
        componentSubtitle: 'The badge is used to notify the user',
        docs: { description: { component: componentStatus } },
        actions: { argTypesRegex: '^on.*' }
    }
};
var styles = (0, react_jss_1.createUseStyles)(function (theme) { return ({
    container: {
        position: 'relative',
        height: theme.size.standard,
        width: theme.size.standard,
        backgroundColor: theme.color.lowEmphasis
    },
    badge: {
        position: 'absolute',
        left: 18,
        bottom: 18
    }
}); });
var Playground = function (args) {
    var _a = styles(), badge = _a.badge, container = _a.container;
    return (react_1.default.createElement("div", { className: container },
        react_1.default.createElement(_1.Badge, __assign({}, args, { className: badge }))));
};
exports.Playground = Playground;
exports.Playground.args = {
    variant: 'dot',
    ariaLabel: 'notifications'
};
var Variants = function (args) { return (react_1.default.createElement("div", { style: { display: 'flex', gap: 8 } },
    react_1.default.createElement(_1.Badge, __assign({}, args, { variant: "dot" })),
    react_1.default.createElement(_1.Badge, __assign({}, args, { variant: "pulse" })),
    react_1.default.createElement(_1.Badge, __assign({}, args, { variant: "standard", value: 99 })))); };
exports.Variants = Variants;
exports.Variants.args = __assign({}, exports.Playground.args);
var Colors = function (args) { return (react_1.default.createElement("div", { style: { display: 'flex', flexDirection: 'column', gap: 8 } },
    react_1.default.createElement("div", { style: { display: 'flex', gap: 8 } },
        react_1.default.createElement(_1.Badge, __assign({}, args, { variant: "dot" })),
        react_1.default.createElement(_1.Badge, __assign({}, args, { variant: "dot", color: "primary" })),
        react_1.default.createElement(_1.Badge, __assign({}, args, { variant: "dot", color: "secondary" })),
        react_1.default.createElement(_1.Badge, __assign({}, args, { variant: "dot", color: "success" }))),
    react_1.default.createElement("div", { style: { display: 'flex', gap: 8 } },
        react_1.default.createElement(_1.Badge, __assign({}, args, { variant: "pulse" })),
        react_1.default.createElement(_1.Badge, __assign({}, args, { variant: "pulse", color: "primary" })),
        react_1.default.createElement(_1.Badge, __assign({}, args, { variant: "pulse", color: "secondary" })),
        react_1.default.createElement(_1.Badge, __assign({}, args, { variant: "pulse", color: "success" }))),
    react_1.default.createElement("div", { style: { display: 'flex', gap: 8 } },
        react_1.default.createElement(_1.Badge, __assign({}, args, { variant: "standard", value: 99 })),
        react_1.default.createElement(_1.Badge, __assign({}, args, { variant: "standard", value: 99, color: "primary" })),
        react_1.default.createElement(_1.Badge, __assign({}, args, { variant: "standard", value: 99, color: "secondary" })),
        react_1.default.createElement(_1.Badge, __assign({}, args, { variant: "standard", value: 99, color: "success" }))))); };
exports.Colors = Colors;
exports.Colors.args = __assign({}, exports.Playground.args);
var Limit = function (args) { return (react_1.default.createElement("div", { style: { display: 'flex', gap: 8 } },
    react_1.default.createElement(_1.Badge, __assign({}, args, { variant: "standard", value: 99 })),
    react_1.default.createElement(_1.Badge, __assign({}, args, { variant: "standard", value: 99, limit: 99 })))); };
exports.Limit = Limit;
exports.Limit.args = __assign({}, exports.Playground.args);
//# sourceMappingURL=Badge.stories.js.map