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
exports.Select = exports.handleOptions = void 0;
var React = __importStar(require("react"));
var Select_1 = __importDefault(require("@material-ui/core/Select"));
var core_1 = require("@material-ui/core");
var Icon_1 = require("../Icon");
var MenuItem_1 = require("../MenuItem");
var InputStateHelpTextProvider_1 = __importDefault(require("../InputStateHelpTextProvider"));
var styles = (0, core_1.makeStyles)(function () { return (0, core_1.createStyles)({
    select: {
        marginTop: '0 !important'
    }
}); });
/**
 * ## Importing
 *
 * ```
 * import { Select } from '@naturacosmeticos/natds-web';
 * ```
 */
var handleOptions = function (selectOptions) { return (selectOptions.map(function (option) {
    if (typeof option === 'number' || typeof option === 'string') {
        return { value: option, description: option };
    }
    return option;
})); };
exports.handleOptions = handleOptions;
exports.Select = React.forwardRef(function (props, ref) {
    var _a;
    var defaultValue = props.defaultValue, id = props.id, onChange = props.onChange, onClose = props.onClose, onBlur = props.onBlur, onOpen = props.onOpen, options = props.options, placeholder = props.placeholder, state = props.state, value = props.value, rest = __rest(props, ["defaultValue", "id", "onChange", "onClose", "onBlur", "onOpen", "options", "placeholder", "state", "value"]);
    var menuProps = {
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left'
        },
        transformOrigin: {
            vertical: 'top',
            horizontal: 'left'
        },
        getContentAnchorEl: null
    };
    var select = styles(props).select;
    return (React.createElement(InputStateHelpTextProvider_1.default, __assign({}, rest, { state: state }),
        React.createElement(Select_1.default, __assign({}, props, { "data-state": state, defaultValue: defaultValue, displayEmpty: true, IconComponent: function (props) { return (React.createElement(Icon_1.Icon, __assign({ name: "outlined-navigation-arrowbottom" }, props))); }, id: id, MenuProps: menuProps, onChange: onChange, onClose: onClose, onOpen: onOpen, ref: ref, value: value, onBlur: onBlur, className: select }),
            placeholder && (React.createElement(MenuItem_1.MenuItem, { value: "", disabled: true }, placeholder)), (_a = (0, exports.handleOptions)(options)) === null || _a === void 0 ? void 0 :
            _a.map(function (option, index) { return (React.createElement(MenuItem_1.MenuItem, { value: option.value, key: index }, option.description)); }))));
});
exports.Select.displayName = 'Select';
exports.default = exports.Select;
//# sourceMappingURL=Select.js.map