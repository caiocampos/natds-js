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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawerMenuItem = void 0;
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable complexity */
var React = __importStar(require("react"));
var ListSubheader_1 = __importDefault(require("../../ListSubheader"));
var Typography_1 = __importDefault(require("../../Typography"));
var ListItem_1 = __importDefault(require("../../ListItem"));
var ListItemIcon_1 = __importDefault(require("../../ListItemIcon"));
var Icon_1 = require("../../Icon");
var ListItemText_1 = __importDefault(require("../../ListItemText"));
var MenuItemText_1 = require("../MenuItemText");
var DrawerMenuItem_styles_1 = __importDefault(require("./DrawerMenuItem.styles"));
exports.DrawerMenuItem = React.forwardRef(function (props, ref) {
    var onSelect = props.onSelect, name = props.name, icon = props.icon, selected = props.selected, section = props.section, href = props.href, onClickLink = props.onClickLink;
    var _a = (0, DrawerMenuItem_styles_1.default)(), listItem = _a.listItem, iconItem = _a.iconItem, subheader = _a.subheader, linkItem = _a.linkItem;
    if (section) {
        return (React.createElement(ListSubheader_1.default, { className: subheader },
            React.createElement(Typography_1.default, { variant: "caption", component: "span" }, section)));
    }
    var handleClick = function (event) { return onSelect && onSelect(event, name); };
    var onClick = onSelect ? { onClick: handleClick } : {};
    return (React.createElement(ListItem_1.default, __assign({}, onClick, { className: listItem, selected: selected, 
        // @ts-ignore
        component: "li", button: true, ref: ref }), href
        ? (React.createElement("a", { href: href, className: linkItem, onClick: onClickLink },
            icon && React.createElement(ListItemIcon_1.default, { className: iconItem },
                React.createElement(Icon_1.Icon, { name: icon, size: "tiny" })),
            name))
        : (React.createElement(React.Fragment, null,
            icon && React.createElement(ListItemIcon_1.default, { className: iconItem },
                React.createElement(Icon_1.Icon, { name: icon, size: "tiny" })),
            React.createElement(ListItemText_1.default, null,
                React.createElement(MenuItemText_1.MenuItemText, __assign({}, props)))))));
});
exports.DrawerMenuItem.displayName = 'DrawerMenuItem';
exports.default = exports.DrawerMenuItem;
//# sourceMappingURL=DrawerMenuItem.js.map