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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Divider = exports.InteractionSelectable = exports.InteractionAction = exports.Playground = void 0;
var react_1 = __importStar(require("react"));
var react_jss_1 = require("react-jss");
var _1 = require(".");
var Divider_1 = require("../Divider");
var componentStatus = "\n---\n\n**NOTE FOR UXs**: This component is available in the following variants:\n\n  - \u2705 `base`\n\nWith the following attribute status:\n\n- **Interaction**\n    - \u2705 `none`\n    - \u2705 `action`\n    - \u2705 `selectable`\n- \u2705 **Divider**\n\n---\n";
exports.default = {
    title: 'Components/ListItem',
    component: _1.ListItem,
    parameters: {
        componentSubtitle: 'Lists are continuous, vertical indexes of content such as text and images.',
        docs: { description: { component: componentStatus } },
        actions: { argTypesRegex: '^on.*' }
    }
};
var items = [
    { id: 'luca', title: 'Luca' },
    { id: 'cruella', title: 'Cruella' },
    { id: 'black-widow', title: 'Black Widow' },
    { id: 'mulan', title: 'Mulan' }
];
var Playground = function (args) {
    var theme = (0, react_jss_1.useTheme)();
    return (react_1.default.createElement("ul", { style: { margin: 0, padding: 0 } }, items.map(function (_a) {
        var id = _a.id, title = _a.title;
        return (react_1.default.createElement(_1.ListItem, __assign({}, args, { key: id }),
            react_1.default.createElement("span", { style: { color: theme.color.onSurface } }, title)));
    })));
};
exports.Playground = Playground;
exports.Playground.args = {
    interaction: 'none',
    selected: false
};
exports.InteractionAction = exports.Playground.bind({});
exports.InteractionAction.args = {
    interaction: 'action',
    onClick: function () { return console.log('something happened!'); }
};
var InteractionSelectable = function (args) {
    var _a = (0, react_1.useState)(''), selected = _a[0], setSelected = _a[1];
    var theme = (0, react_jss_1.useTheme)();
    return (react_1.default.createElement("ul", { style: { margin: 0, padding: 0 } }, items.map(function (_a) {
        var id = _a.id, title = _a.title;
        return (react_1.default.createElement(_1.ListItem, __assign({}, args, { key: id, selected: title === selected, onClick: function () { return setSelected(title); } }),
            react_1.default.createElement("span", { style: { color: theme.color.onSurface } }, title)));
    })));
};
exports.InteractionSelectable = InteractionSelectable;
exports.InteractionSelectable.args = {
    interaction: 'selectable'
};
exports.Divider = exports.Playground.bind({});
exports.Divider.args = __assign(__assign({}, exports.Playground.args), { SeparatorComponent: react_1.default.createElement(Divider_1.Divider, null) });
//# sourceMappingURL=ListItem.stories.js.map