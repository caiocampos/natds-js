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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Playground = void 0;
var react_1 = __importStar(require("react"));
var _1 = require(".");
var Button_1 = require("../Button");
var IconButton_1 = require("../IconButton");
var DialogHeader_1 = require("./DialogHeader");
var DialogBody_1 = require("./DialogBody");
var DialogFooter_1 = require("./DialogFooter");
var Icon_1 = require("../Icon");
var componentStatus = "\n---\n\n**NOTES FOR UXs**: This component is available in the following variants:\n\n  - \u2705 `standard` (available but with alternative composition)\n  - \u2705 `alert` (available but with alternative composition)\n\nWith the following attribute status:\n\n- \u2705 **Divider**\n- **Size**\n    - \u2705  `small`\n    - \u2705  `medium`\n    - \u2705  `large`\n\n---\n";
exports.default = {
    title: 'Components/Dialog',
    component: _1.Dialog,
    subcomponents: { DialogHeader: DialogHeader_1.DialogHeader, DialogBody: DialogBody_1.DialogBody, DialogFooter: DialogFooter_1.DialogFooter },
    parameters: {
        componentSubtitle: 'Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.',
        docs: { description: { component: componentStatus } },
        actions: { argTypesRegex: '^on.*' }
    }
};
var Playground = function (_a) {
    var open = _a.open, args = __rest(_a, ["open"]);
    var _b = (0, react_1.useState)(open), showDialog = _b[0], setShowDialog = _b[1];
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Button_1.Button, { onClick: function () { return setShowDialog(!showDialog); } }, "open dialog"),
        react_1.default.createElement(_1.Dialog, __assign({}, args, { open: showDialog, onEscapeKeyDown: function () { return setShowDialog(false); } }),
            react_1.default.createElement(DialogHeader_1.DialogHeader, { title: "Example", id: "dialog-title" },
                react_1.default.createElement("div", { style: { display: 'flex', gap: 16 } },
                    react_1.default.createElement(IconButton_1.IconButton, { onClick: function () { return ''; }, ariaLabel: "any icon", IconComponent: react_1.default.createElement(Icon_1.Icon, { name: "outlined-default-mockup", color: "highEmphasis" }) }),
                    react_1.default.createElement(IconButton_1.IconButton, { onClick: function () { return ''; }, ariaLabel: "any icon", IconComponent: react_1.default.createElement(Icon_1.Icon, { name: "outlined-default-mockup", color: "highEmphasis" }) }),
                    react_1.default.createElement(IconButton_1.IconButton, { onClick: function () { return ''; }, ariaLabel: "any icon", IconComponent: react_1.default.createElement(Icon_1.Icon, { name: "outlined-default-mockup", color: "highEmphasis" }) }))),
            react_1.default.createElement(DialogBody_1.DialogBody, { showDivider: true },
                react_1.default.createElement("p", { id: "dialog-description", style: { margin: 0 } }, "This is an example of Dialog, which uses the DialogHeader, with title and three IconButtons, DialogBody and DialogFooter, with one button.")),
            react_1.default.createElement(DialogFooter_1.DialogFooter, { primaryButton: react_1.default.createElement(Button_1.Button, { onClick: function () { return setShowDialog(false); } }, "primary button close"), secondaryButton: react_1.default.createElement(Button_1.Button, { variant: "text", onClick: function () { return setShowDialog(false); } }, "secondary button close") }))));
};
exports.Playground = Playground;
exports.Playground.args = {
    ariaDescribedBy: 'dialog-description',
    ariaLabelledBy: 'dialog-title',
    open: true,
    role: 'dialog'
};
//# sourceMappingURL=Dialog.stories.js.map