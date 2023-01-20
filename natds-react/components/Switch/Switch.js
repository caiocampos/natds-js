"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Switch_styles_1 = __importDefault(require("./Switch.styles"));
var Switch = react_1.default.forwardRef(function (_a, ref) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.id, id = _c === void 0 ? 'toggleSwitch' : _c, value = _a.value, _d = _a.checked, checked = _d === void 0 ? false : _d, _e = _a.disabled, disabled = _e === void 0 ? false : _e, onChange = _a.onChange, testID = _a.testID;
    var _f = (0, Switch_styles_1.default)({ checked: checked, disabled: disabled }), switchContainer = _f.switchContainer, switchBase = _f.switchBase, switchInput = _f.switchInput, switchTrack = _f.switchTrack, switchOverlay = _f.switchOverlay, switchThumb = _f.switchThumb;
    var handleBlur = function () {
        var _a;
        (_a = document.getElementById(id)) === null || _a === void 0 ? void 0 : _a.blur();
    };
    return (react_1.default.createElement("span", { className: "".concat(className, " ").concat(switchContainer) },
        react_1.default.createElement("input", { ref: ref, id: id, "data-testid": testID, className: switchInput, type: "checkbox", checked: checked, disabled: disabled, value: value, onChange: onChange }),
        react_1.default.createElement("label", { onMouseLeave: handleBlur, className: switchBase, htmlFor: id },
            react_1.default.createElement("span", { className: switchTrack }),
            react_1.default.createElement("span", { className: switchOverlay }),
            react_1.default.createElement("span", { className: switchThumb }))));
});
exports.default = Switch;
//# sourceMappingURL=Switch.js.map