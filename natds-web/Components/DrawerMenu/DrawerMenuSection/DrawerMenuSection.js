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
exports.DrawerMenuSection = void 0;
/* eslint-disable sort-keys */
// eslint-disable-next-line no-use-before-define
var React = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var ListItem_1 = __importDefault(require("../../ListItem"));
var ListItemIcon_1 = __importDefault(require("../../ListItemIcon"));
var Icon_1 = require("../../Icon");
var ListItemText_1 = __importDefault(require("../../ListItemText"));
var Collapse_1 = __importDefault(require("../../Collapse"));
var List_1 = __importDefault(require("../../List"));
var BuildDrawerMenuItems_1 = __importDefault(require("../BuildDrawerMenuItems/BuildDrawerMenuItems"));
var MenuItemText_1 = require("../MenuItemText");
var ICON_ARROW_DOWN = 'outlined-navigation-arrowbottom';
var ICON_ARROW_UP = 'outlined-navigation-arrowtop';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
exports.DrawerMenuSection = React.forwardRef(function (props, ref) {
    var onToggle = props.onToggle, icon = props.icon, name = props.name, list = props.list, unmountOnExit = props.unmountOnExit;
    var _a = React.useState(props.opened), opened = _a[0], toggleSubmenu = _a[1];
    var useSublistStyles = (0, core_1.makeStyles)(function (theme) {
        var _a, _b, _c, _d;
        return (0, core_1.createStyles)({
            padding: {
                borderLeft: "".concat((_b = (_a = theme.palette) === null || _a === void 0 ? void 0 : _a.action) === null || _b === void 0 ? void 0 : _b.hover, " 1px solid"),
                margin: "0 0 0 ".concat((_c = theme.sizes) === null || _c === void 0 ? void 0 : _c.semiX, "px"),
                padding: "0 0 0 ".concat((_d = theme.sizes) === null || _d === void 0 ? void 0 : _d.tiny, "px")
            }
        });
    });
    var useListSectionItemStyles = (0, core_1.makeStyles)(function (theme) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        return (0, core_1.createStyles)({
            root: {
                borderRadius: (_a = theme.shape) === null || _a === void 0 ? void 0 : _a.borderRadius,
                cursor: 'pointer',
                marginBottom: (_b = theme.sizes) === null || _b === void 0 ? void 0 : _b.micro,
                padding: (_c = theme.sizes) === null || _c === void 0 ? void 0 : _c.tiny,
                '&:hover': {
                    backgroundColor: (_e = (_d = theme.palette) === null || _d === void 0 ? void 0 : _d.action) === null || _e === void 0 ? void 0 : _e.hover
                },
                '&$selected': {
                    backgroundColor: "".concat((_g = (_f = theme.palette) === null || _f === void 0 ? void 0 : _f.action) === null || _g === void 0 ? void 0 : _g.hover),
                    '&:hover': {
                        backgroundColor: (_j = (_h = theme.palette) === null || _h === void 0 ? void 0 : _h.action) === null || _j === void 0 ? void 0 : _j.hover
                    }
                }
            },
            selected: {}
        });
    });
    var useListItemIconStyles = (0, core_1.makeStyles)(function (theme) {
        var _a;
        return (0, core_1.createStyles)({
            root: {
                marginRight: (_a = theme.sizes) === null || _a === void 0 ? void 0 : _a.standard,
                marginTop: 0,
                minWidth: 'auto'
            }
        });
    });
    var classes = useSublistStyles();
    var classesItem = useListSectionItemStyles();
    var classesIcon = useListItemIconStyles();
    var listIconName = opened ? ICON_ARROW_UP : ICON_ARROW_DOWN;
    var handleClick = function (event) {
        toggleSubmenu(!opened);
        /**
         * @todo refactor(web): convert expression to if block, add test
         */
        // eslint-disable-next-line no-unused-expressions
        onToggle && onToggle(event, !opened, name);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(ListItem_1.default, { onClick: handleClick, classes: classesItem, selected: opened, component: "li", button: true, ref: ref },
            icon && React.createElement(ListItemIcon_1.default, { classes: classesIcon },
                React.createElement(Icon_1.Icon, { name: icon, size: "tiny" })),
            React.createElement(ListItemText_1.default, null,
                React.createElement(MenuItemText_1.MenuItemText, __assign({}, props))),
            React.createElement(Icon_1.Icon, { name: listIconName, size: "tiny" })),
        React.createElement(Collapse_1.default, { in: opened, timeout: "auto", unmountOnExit: unmountOnExit, component: "li" }, list && (React.createElement(List_1.default, { classes: classes, dense: true }, list.map(function (drawerMenuSectionProps, index) { return (React.createElement(BuildDrawerMenuItems_1.default, __assign({}, drawerMenuSectionProps, { key: index }))); }))))));
});
exports.DrawerMenuSection.displayName = 'DrawerMenuSection';
exports.default = exports.DrawerMenuSection;
//# sourceMappingURL=DrawerMenuSection.js.map