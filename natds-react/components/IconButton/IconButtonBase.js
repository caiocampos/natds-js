"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_jss_1 = require("react-jss");
var Ripple_1 = require("../Ripple");
var styles = (0, react_jss_1.createUseStyles)(function (theme) { return ({
    base: {
        alignItems: 'center',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        height: function (_a) {
            var size = _a.size;
            return theme.size[size];
        },
        justifyContent: 'center',
        outline: 'none',
        width: function (_a) {
            var size = _a.size;
            return theme.size[size];
        },
        '&:disabled': { cursor: 'default' }
    }
}); });
var IconButtonBase = react_1.default.forwardRef(function (_a, ref) {
    var ariaLabel = _a.ariaLabel, className = _a.className, disabled = _a.disabled, IconComponent = _a.IconComponent, onClick = _a.onClick, size = _a.size, testID = _a.testID, value = _a.value, id = _a.id;
    var base = styles({ size: size }).base;
    return (react_1.default.createElement(Ripple_1.Ripple, { disabled: disabled, isCentered: true },
        react_1.default.createElement("button", { "aria-label": ariaLabel, className: "".concat(className, " ").concat(base), "data-testid": testID, disabled: disabled, onClick: onClick, type: "button", value: value, ref: ref, id: id }, IconComponent)));
});
exports.default = IconButtonBase;
//# sourceMappingURL=IconButtonBase.js.map