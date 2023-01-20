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
exports.Snackbar = void 0;
var React = __importStar(require("react"));
var Snackbar_1 = __importDefault(require("@material-ui/core/Snackbar"));
/**
 * Snackbars provide brief messages about app processes at some edge of the screen.
 *
 * For more advanced usages, check [Material UI Snackbar docs](https://material-ui.com/components/snackbars/)
 *
 * ## Importing
 *
 * ```
 * import { Snackbar } from "@naturacosmeticos/natds-web";
 * ```
 *
 * @see https://zeroheight.com/28db352be/v/latest/p/60e557-snackbar/b/51a722
 * @see https://material-ui.com/components/snackbars/
 */
exports.Snackbar = React.forwardRef(function (props, ref) { return React.createElement(Snackbar_1.default, __assign({}, props, { ref: ref })); });
exports.Snackbar.displayName = 'Snackbar';
exports.default = exports.Snackbar;
//# sourceMappingURL=Snackbar.js.map