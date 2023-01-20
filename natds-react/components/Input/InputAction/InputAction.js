"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isImageAction = exports.isIconAction = void 0;
/* eslint-disable react/destructuring-assignment */
var react_1 = __importDefault(require("react"));
var IconButton_1 = require("../../IconButton");
var InputAction_styles_1 = __importDefault(require("./InputAction.styles"));
var isIconAction = function (props) { return props.action === 'icon'; };
exports.isIconAction = isIconAction;
var isImageAction = function (props) { return props.action === 'image'; };
exports.isImageAction = isImageAction;
var InputAction = function (props) {
    var classes = (0, InputAction_styles_1.default)(props);
    return (react_1.default.createElement("div", { className: classes.container },
        (0, exports.isIconAction)(props)
            && (react_1.default.createElement(IconButton_1.IconButton, { IconComponent: props.IconComponent, onClick: props.onClick, ariaLabel: props.ariaLabel, disabled: props.disabled || props.readOnly, testID: "ds-input-action-icon" })),
        (0, exports.isImageAction)(props)
            && (react_1.default.createElement("div", { className: classes.wrapper },
                react_1.default.createElement("img", { src: props.src, alt: props.alt, className: classes.image, "data-testid": "ds-input-action-image" })))));
};
exports.default = InputAction;
//# sourceMappingURL=InputAction.js.map