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
exports.Drawer = void 0;
// eslint-disable-next-line no-use-before-define
var React = __importStar(require("react"));
var Drawer_1 = __importDefault(require("@material-ui/core/Drawer"));
/**
 * Navigation drawers provide access to destinations in your app or website.
 *
 * For more advanced usages, check [Material UI Drawer docs](https://material-ui.com/components/drawer)
 *
 * ## Importing
 *
 * ```
 * import { Drawer } from "@naturacosmeticos/natds-web";
 * ```
 *
 * @see https://zeroheight.com/28db352be/p/339f2a-navigation-drawer/b/51a722
 * @todo Check whether Drawer component should be renamed to NavigationDrawer
 */
exports.Drawer = React.forwardRef(function (props, ref) { return React.createElement(Drawer_1.default, __assign({}, props, { ref: ref })); });
exports.Drawer.displayName = 'Drawer';
exports.default = exports.Drawer;
//# sourceMappingURL=Drawer.js.map