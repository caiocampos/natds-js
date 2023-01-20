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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Autocomplete_styles_1 = __importDefault(require("./Autocomplete.styles"));
var Input_1 = require("../Input");
var Icon_1 = __importDefault(require("../Icon"));
var Autocomplete = react_1.default.forwardRef(function (props, ref) {
    var _a = (0, react_1.useState)(false), menuToggle = _a[0], setMenutoggle = _a[1];
    var testID = props.testID, name = props.name, label = props.label, _b = props.size, size = _b === void 0 ? 'mediumX' : _b, value = props.value, options = props.options, feedback = props.feedback, placeholder = props.placeholder, notFound = props.notFound, position = props.position, _c = props.readonly, readonly = _c === void 0 ? false : _c, handleSelect = props.handleSelect, _d = props.required, required = _d === void 0 ? false : _d, _e = props.disabled, disabled = _e === void 0 ? false : _e, helperText = props.helperText, onChange = props.onChange, _f = props.className, className = _f === void 0 ? '' : _f, rest = __rest(props, ["testID", "name", "label", "size", "value", "options", "feedback", "placeholder", "notFound", "position", "readonly", "handleSelect", "required", "disabled", "helperText", "onChange", "className"]);
    var _g = (0, Autocomplete_styles_1.default)({
        size: size,
        isFilled: !!value,
        feedback: feedback,
        isDisabled: disabled,
        position: position,
        readonly: readonly
    }), wrapper = _g.wrapper, labelText = _g.labelText, inputWrapper = _g.inputWrapper, input = _g.input, icon = _g.icon, surfaceWrapper = _g.surfaceWrapper, menuOptionsWrapper = _g.menuOptionsWrapper, optionsItem = _g.optionsItem;
    var handleToggle = function () {
        setMenutoggle(false);
    };
    (0, react_1.useEffect)(function () {
        document.addEventListener('click', handleToggle, false);
        return function () { return document.removeEventListener('click', handleToggle, false); };
    }, []);
    return (react_1.default.createElement("div", __assign({ className: "".concat(className, " ").concat(wrapper), "data-testid": testID }, rest),
        react_1.default.createElement("label", { htmlFor: name, className: "".concat(labelText) },
            label,
            required && '*'),
        react_1.default.createElement("div", { className: inputWrapper },
            react_1.default.createElement("input", { "data-testid": "input-search", value: value, onKeyDown: function () { return setMenutoggle(true); }, ref: ref, name: name, placeholder: placeholder, id: name, onClick: function (e) {
                    e.stopPropagation();
                    setMenutoggle(!menuToggle);
                }, className: input, onChange: onChange, required: required, disabled: disabled, "aria-label": labelText, readOnly: readonly, type: "text" }),
            react_1.default.createElement(Icon_1.default, { size: "semi", name: menuToggle ? 'outlined-navigation-arrowtop' : 'outlined-navigation-arrowbottom', className: icon }),
            menuToggle && (react_1.default.createElement("div", { className: surfaceWrapper },
                react_1.default.createElement("ul", { "data-testid": "ul-options", className: menuOptionsWrapper }, options === null || options === void 0 ? void 0 : options.map(function (optionItem, index) { return (react_1.default.createElement("li", { "data-testid": "li-options-".concat(index + 1), role: "option", key: "".concat(optionItem, "-").concat(index + 1), className: optionsItem, onClick: function () {
                        if (!readonly && optionItem.value !== 'false') {
                            handleSelect === null || handleSelect === void 0 ? void 0 : handleSelect(optionItem);
                        }
                        setMenutoggle(false);
                    } }, optionItem.value !== 'false' ? optionItem.label : notFound)); }))))),
        !!helperText
            && (react_1.default.createElement(Input_1.InputHelperText, { helperText: helperText, feedback: feedback, disabled: disabled }))));
});
exports.default = Autocomplete;
//# sourceMappingURL=Autocomplete.js.map