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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordReveal = void 0;
var React = __importStar(require("react"));
var VisibilityOutlined_1 = __importDefault(require("@material-ui/icons/VisibilityOutlined"));
var VisibilityOffOutlined_1 = __importDefault(require("@material-ui/icons/VisibilityOffOutlined"));
var PasswordReveal_styles_1 = require("./PasswordReveal.styles");
exports.PasswordReveal = React.forwardRef(function (props, ref) {
    var _a = props.hidePasswordIcon, hidePasswordIcon = _a === void 0 ? VisibilityOffOutlined_1.default : _a, onTogglePasswordReveal = props.onTogglePasswordReveal, showing = props.showing, _b = props.showPasswordIcon, showPasswordIcon = _b === void 0 ? VisibilityOutlined_1.default : _b;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var Component = showing ? hidePasswordIcon : showPasswordIcon;
    var root = (0, PasswordReveal_styles_1.useStyles)().root;
    return (React.createElement(Component, { className: root, onClick: function () { return onTogglePasswordReveal(!showing); }, ref: ref }));
});
exports.PasswordReveal.displayName = 'PasswordReveal';
exports.default = exports.PasswordReveal;
//# sourceMappingURL=PasswordReveal.js.map