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
exports.FormControl = void 0;
var FormControl_1 = __importDefault(require("@material-ui/core/FormControl"));
var React = __importStar(require("react"));
var FormControl_styles_1 = require("./FormControl.styles");
/**
 * Provides context such as filled/focused/error/required for form inputs.
 *
 * Relying on the context provides high flexibility and ensures that the state always stays consistent across
 * the children of the `FormControl`. This context is used by the following components:
 *
 * * `FormLabel`
 * * `FormHelperText`
 * * `Input` (from Material UI)
 * * `InputLabel`
 *
 * ⚠️ Only one input can be used within a `FormControl`.
 *
 * ## Importing
 *
 * ```
 * import { FormControl } from "@naturacosmeticos/natds-web";
 * ```
 */
exports.FormControl = React.forwardRef(function (props, ref) {
    var classes = (0, FormControl_styles_1.useStyles)();
    return React.createElement(FormControl_1.default, __assign({}, props, { classes: classes, ref: ref }));
});
exports.FormControl.displayName = 'FormControl';
exports.default = exports.FormControl;
//# sourceMappingURL=FormControl.js.map