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
exports.Popover = void 0;
// eslint-disable-next-line no-use-before-define
var React = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var Card_1 = require("../Card");
var Typography_1 = __importDefault(require("../Typography"));
var ActionLink_1 = require("./ActionLink");
var Popover_styles_1 = require("./Popover.styles");
/**
 * ## Importing
 *
 * ```
 * import { Popover } from "@naturacosmeticos/natds-web";
 * ```
 *
 */
exports.Popover = React.forwardRef(function (props, ref) {
    var actionLink = props.actionLink, children = props.children, _a = props.component, Component = _a === void 0 ? core_1.Popper : _a, _b = props.direction, direction = _b === void 0 ? 'bottom' : _b, maxWidth = props.maxWidth, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    modifiers = props.modifiers, open = props.open, rest = __rest(props, ["actionLink", "children", "component", "direction", "maxWidth", "modifiers", "open"]);
    var _c = React.useState(null), arrowRef = _c[0], setArrowRef = _c[1];
    var _d = (0, Popover_styles_1.useStyles)({
        children: children,
        direction: direction,
        maxWidth: maxWidth,
        open: open
    }), actionLinkContainer = _d.actionLinkContainer, arrow = _d.arrow, container = _d.container, root = _d.root;
    return (React.createElement(Component, __assign({ className: root, modifiers: {
            arrow: {
                element: arrowRef,
                enabled: true
            },
            flip: {
                enabled: true
            },
            preventOverflow: {
                boundariesElement: 'scrollParent',
                enabled: true
            }
        }, open: open, placement: direction, ref: ref }, rest),
        React.createElement("span", { "aria-hidden": true, className: arrow, ref: setArrowRef }),
        React.createElement(Card_1.Card, { elevation: 12, className: container },
            React.createElement(Typography_1.default, { variant: "body2" }, children),
            actionLink && React.createElement(ActionLink_1.ActionLink, __assign({}, actionLink, { className: actionLinkContainer })))));
});
exports.Popover.displayName = 'Popover';
exports.default = exports.Popover;
//# sourceMappingURL=Popover.js.map