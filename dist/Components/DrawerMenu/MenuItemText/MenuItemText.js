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
exports.MenuItemText = void 0;
// eslint-disable-next-line no-use-before-define
var React = __importStar(require("react"));
var Typography_1 = __importDefault(require("../../Typography"));
var Tag_1 = require("../../Tag");
var MenuItemText_styles_1 = require("./MenuItemText.styles");
var MenuItemText = function (props) {
    var badge = props.badge, name = props.name;
    var badgeComponent = (0, MenuItemText_styles_1.useStyles)().badgeComponent;
    return (React.createElement(React.Fragment, null,
        React.createElement(Typography_1.default, { variant: "body2", component: "span" }, name),
        badge && (React.createElement(Tag_1.Tag, { className: badgeComponent, color: "error" }, badge))));
};
exports.MenuItemText = MenuItemText;
exports.default = exports.MenuItemText;
//# sourceMappingURL=MenuItemText.js.map