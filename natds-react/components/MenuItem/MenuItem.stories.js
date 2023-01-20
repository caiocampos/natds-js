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
exports.Disabled = exports.Selected = exports.Activated = exports.Title = exports.Submenu = exports.Playground = void 0;
var react_1 = __importDefault(require("react"));
var Icon_1 = __importDefault(require("../Icon"));
var _1 = require(".");
var Badge_1 = __importDefault(require("../Badge"));
var componentStatus = "\n---\n\n**NOTE FOR UXs**: This component is available in the following variants:\n\n  - \u2705 Standard\n\nWith the following attribute statuses:\n\n  - \u2705 **Submenu**\n  - \u2705 **Actived**\n  - \u2705 **Selected**\n  - \u2705 **Disabled**\n  - \u2705 **Add** (available but with alternative composition)\n  - **Action**\n      - \u2705 `left` (available but with alternative composition)\n      - \u2705 `right` (available but with alternative composition)\n\n---\n";
exports.default = {
    title: 'Components/MenuItem',
    component: _1.MenuItem,
    parameters: {
        componentSubtitle: '',
        docs: { description: { component: componentStatus } }
    }
};
var Playground = function (args) { return (react_1.default.createElement("ul", { style: { padding: 0, margin: 0 } },
    react_1.default.createElement(_1.MenuItem, __assign({}, args)))); };
exports.Playground = Playground;
exports.Playground.args = {
    children: react_1.default.createElement("div", { style: { width: '100%', display: 'flex', justifyContent: 'space-between' } },
        react_1.default.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 20 } },
            react_1.default.createElement(Icon_1.default, { name: "outlined-default-mockup", size: "standard", color: "highEmphasis" }),
            react_1.default.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 6 } },
                "Menu Item",
                react_1.default.createElement(Badge_1.default, { variant: "standard", color: "alert", value: 100, limit: 99 }))),
        react_1.default.createElement(Icon_1.default, { name: "outlined-default-mockup", size: "standard", color: "highEmphasis" }))
};
exports.Submenu = exports.Playground.bind({});
exports.Submenu.args = __assign(__assign({}, exports.Playground.args), { type: 'submenu' });
exports.Title = exports.Playground.bind({});
exports.Title.args = __assign(__assign({}, exports.Playground.args), { type: 'title' });
exports.Activated = exports.Playground.bind({});
exports.Activated.args = __assign(__assign({}, exports.Playground.args), { activated: true });
exports.Selected = exports.Playground.bind({});
exports.Selected.args = __assign(__assign({}, exports.Playground.args), { selected: true });
exports.Disabled = exports.Playground.bind({});
exports.Disabled.args = {
    disabled: true,
    children: react_1.default.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 20 } },
        react_1.default.createElement(Icon_1.default, { name: "outlined-default-mockup", size: "standard", color: "lowEmphasis" }),
        react_1.default.createElement("div", null, "Menu Item"))
};
//# sourceMappingURL=MenuItem.stories.js.map