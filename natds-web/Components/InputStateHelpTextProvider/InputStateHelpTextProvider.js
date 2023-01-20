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
exports.InputStateHelpTextProvider = void 0;
var React = __importStar(require("react"));
var FormHelperText_1 = require("../FormHelperText");
var InputLabel_1 = require("../InputLabel");
var FormControl_1 = require("../FormControl");
// eslint-disable-next-line complexity
var InputStateHelpTextProvider = function (props) {
    var id = props.id, label = props.label, helpText = props.helpText, _a = props.required, required = _a === void 0 ? false : _a, _b = props.disabled, disabled = _b === void 0 ? false : _b, state = props.state, className = props.className, children = props.children, _c = props.readOnly, readOnly = _c === void 0 ? false : _c;
    var content = label && required ? "".concat(label, " *") : label;
    return (React.createElement(FormControl_1.FormControl, { className: className },
        content
            && (React.createElement(InputLabel_1.InputLabel, { htmlFor: id, error: state === 'error', disabled: disabled, state: state }, content)),
        children,
        !readOnly && helpText
            && (React.createElement(FormHelperText_1.FormHelperText, { disabled: disabled, error: state === 'error', state: state }, helpText))));
};
exports.InputStateHelpTextProvider = InputStateHelpTextProvider;
exports.default = exports.InputStateHelpTextProvider;
//# sourceMappingURL=InputStateHelpTextProvider.js.map