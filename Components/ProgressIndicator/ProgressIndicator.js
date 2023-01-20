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
exports.CircularProgress = exports.ProgressIndicator = void 0;
/* eslint-disable no-magic-numbers */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
var React = __importStar(require("react"));
var CircularProgress_1 = __importDefault(require("@material-ui/core/CircularProgress"));
var ProgressIndicator_styles_1 = require("./ProgressIndicator.styles");
/**
 * ```
 * import { ProgressIndicator } from "@naturacosmeticos/natds-web"
 * ```
 */
var ProgressIndicator = function (props) {
    var _a = props.showLayer, showLayer = _a === void 0 ? false : _a, _b = props.size, size = _b === void 0 ? 48 : _b, otherProps = __rest(props, ["showLayer", "size"]);
    var circularLayer = (0, ProgressIndicator_styles_1.useStyles)(props).circularLayer;
    return (React.createElement(React.Fragment, null, showLayer
        ? (React.createElement("div", { className: circularLayer },
            React.createElement(CircularProgress_1.default, __assign({}, otherProps, { size: size }))))
        : React.createElement(CircularProgress_1.default, __assign({}, otherProps, { size: size }))));
};
exports.ProgressIndicator = ProgressIndicator;
exports.ProgressIndicator.displayName = 'ProgressIndicator';
/**
 * @deprecated `CircularProgress` component will be deprecated soon.
 * Use `ProgressIndicator` instead
 */
exports.CircularProgress = exports.ProgressIndicator;
exports.default = { CircularProgress: exports.CircularProgress, ProgressIndicator: exports.ProgressIndicator };
//# sourceMappingURL=ProgressIndicator.js.map