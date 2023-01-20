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
exports.AppBar = void 0;
var React = __importStar(require("react"));
var AppBar_1 = __importDefault(require("@material-ui/core/AppBar"));
var AppBar_styles_1 = require("./AppBar.styles");
/**
 * By default, an `AppBar` does not include icons or any additional elements.<br />
 * You are free to add the components you want to assemble your `AppBar`.
 *
 * For more advanced usages, check [Material UI AppBar docs](https://material-ui.com/components/app-bar/).
 *
 * ## Importing
 *
 * ```
 * import { AppBar } from '@naturacosmeticos/natds-web';
 * ```
 *
 * @see https://material-ui.com/components/app-bar/
 *
 */
exports.AppBar = React.forwardRef(function (props, ref) {
    var customClasses = (0, AppBar_styles_1.useStyles)();
    var classes = props.classes, elevation = props.elevation;
    var getElevation = function () {
        var NO_ELEVATION = 0;
        var DEFAULT_ELEVATION = 2;
        if (!elevation && elevation !== NO_ELEVATION) {
            return DEFAULT_ELEVATION;
        }
        return elevation;
    };
    return (React.createElement(AppBar_1.default, __assign({}, props, { classes: __assign(__assign({}, customClasses), classes), elevation: getElevation(), ref: ref })));
});
exports.AppBar.displayName = 'AppBar';
exports.default = exports.AppBar;
//# sourceMappingURL=AppBar.js.map