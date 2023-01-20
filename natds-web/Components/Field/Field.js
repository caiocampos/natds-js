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
exports.Field = exports.PASSWORD_TYPE = exports.SEARCH_TYPE = exports.TEXT_TYPE = void 0;
/* eslint-disable complexity */
var React = __importStar(require("react"));
var react_text_mask_1 = __importDefault(require("react-text-mask"));
var PasswordReveal_1 = __importDefault(require("./PasswordReveal"));
var SearchClear_1 = __importDefault(require("./SearchClear"));
var CustomIcon_1 = __importDefault(require("./CustomIcon"));
var Input_1 = require("../Input");
exports.TEXT_TYPE = 'text';
exports.SEARCH_TYPE = 'search';
exports.PASSWORD_TYPE = 'password';
exports.Field = React.forwardRef(function (props, ref) {
    var className = props.className, _a = props.disabled, disabled = _a === void 0 ? false : _a, helpText = props.helpText, hidePasswordIcon = props.hidePasswordIcon, icon = props.icon, id = props.id, label = props.label, mask = props.mask, multiline = props.multiline, onBlur = props.onBlur, onChange = props.onChange, onClearSearch = props.onClearSearch, onFocus = props.onFocus, onIconPress = props.onIconPress, _b = props.placeholder, placeholder = _b === void 0 ? '' : _b, _c = props.required, required = _c === void 0 ? false : _c, searchIcon = props.searchIcon, showPasswordIcon = props.showPasswordIcon, state = props.state, providedTheme = props.theme, type = props.type, value = props.value, otherProps = __rest(props, ["className", "disabled", "helpText", "hidePasswordIcon", "icon", "id", "label", "mask", "multiline", "onBlur", "onChange", "onClearSearch", "onFocus", "onIconPress", "placeholder", "required", "searchIcon", "showPasswordIcon", "state", "theme", "type", "value"]);
    var fieldType = 'input';
    if (multiline) {
        fieldType = 'textarea';
    }
    else if (mask) {
        fieldType = react_text_mask_1.default;
    }
    var _d = React.useState(false), showing = _d[0], togglePasswordReveal = _d[1];
    var customType = showing ? exports.TEXT_TYPE : type;
    var showPasswordReveal = type === exports.PASSWORD_TYPE && !icon;
    var showSearchClear = type === exports.SEARCH_TYPE && !icon;
    var hasIcon = Boolean(showPasswordReveal) || Boolean(showSearchClear) || Boolean(icon);
    var endAdornment = null;
    if (showPasswordReveal) {
        endAdornment = (React.createElement(PasswordReveal_1.default, { hidePasswordIcon: hidePasswordIcon, onTogglePasswordReveal: togglePasswordReveal, showing: showing, showPasswordIcon: showPasswordIcon }));
    }
    if (showSearchClear) {
        endAdornment = (React.createElement(SearchClear_1.default, { onClearSearch: onClearSearch, searchIcon: searchIcon }));
    }
    if (icon) {
        // @ts-ignore
        endAdornment = React.createElement(CustomIcon_1.default, { icon: icon, onIconPress: onIconPress });
    }
    return (React.createElement(Input_1.Input, __assign({ disabled: disabled, endAdornment: endAdornment, hasIcon: hasIcon, id: id, inputComponent: fieldType, inputProps: __assign({ className: className && "".concat(className, "__input"), mask: mask }, otherProps), multiline: multiline, onChange: onChange, onBlur: onBlur, onFocus: onFocus, placeholder: placeholder, ref: ref, required: required, state: state, type: customType || exports.TEXT_TYPE, value: value, disableUnderline: true }, otherProps)));
});
exports.Field.displayName = 'Field';
exports.default = exports.Field;
//# sourceMappingURL=Field.js.map