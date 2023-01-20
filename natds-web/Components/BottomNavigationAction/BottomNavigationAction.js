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
exports.BottomNavigationAction = void 0;
var React = __importStar(require("react"));
var BottomNavigationAction_1 = __importDefault(require("@material-ui/core/BottomNavigationAction"));
var BottomNavigationAction_styles_1 = require("./BottomNavigationAction.styles");
/**
 * ## Importing
 *
 * ```
 * import { BottomNavigationAction } from '@naturacosmeticos/natds-web';
 * ```
 */
exports.BottomNavigationAction = React.forwardRef(function (props, ref) {
    var classes = (0, BottomNavigationAction_styles_1.useStyles)();
    return React.createElement(BottomNavigationAction_1.default, __assign({}, props, { classes: classes, ref: ref }));
});
exports.BottomNavigationAction.displayName = 'BottomNavigationAction';
exports.default = exports.BottomNavigationAction;
//# sourceMappingURL=BottomNavigationAction.js.map