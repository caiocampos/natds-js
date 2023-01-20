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
exports.Fab = exports.defaultProps = void 0;
var React = __importStar(require("react"));
var Fab_1 = __importDefault(require("@material-ui/core/Fab"));
var colors_1 = __importDefault(require("./__fixtures__/colors"));
var Fab_styles_1 = require("./Fab.styles");
var getColorProp_1 = require("./getColorProp");
exports.defaultProps = {
    color: colors_1.default.primary,
    disabled: false
};
exports.Fab = React.forwardRef(function (props, ref) {
    var color = props.color, 
    /**
     * @deprecated `disabled` property was deprecated since version 0.19 and will be removed at 1.0.
     * The FAB promotes action, and should not be displayed in a disabled state.
     * If you want to present a FAB that does not perform an action, you should also present an explanation to the user.
     */
    disabled = props.disabled, otherProps = __rest(props, ["color", "disabled"]);
    var classes = (0, Fab_styles_1.useStyles)();
    return (React.createElement(Fab_1.default, __assign({ classes: classes, color: (0, getColorProp_1.getColorProp)({ color: color }), disabled: disabled, ref: ref }, otherProps)));
});
exports.Fab.displayName = 'Fab';
exports.Fab.defaultProps = exports.defaultProps;
exports.default = exports.Fab;
//# sourceMappingURL=Fab.js.map