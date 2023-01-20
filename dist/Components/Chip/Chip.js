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
exports.Chip = void 0;
var React = __importStar(require("react"));
var Chip_1 = __importDefault(require("@material-ui/core/Chip"));
var Icon_1 = require("../Icon");
/**
 * For more advanced usages, check [Material UI Chip docs](https://material-ui.com/components/chips/)
 *
 * ## Importing
 *
 * ```
 * import { Chip } from '@naturacosmeticos/natds-web';
 * ```
 *
 * @see https://material-ui.com/components/chips/
 */
exports.Chip = React.forwardRef(function (props, ref) {
    var deleteIcon = props.deleteIcon, onDelete = props.onDelete, size = props.size, otherProps = __rest(props, ["deleteIcon", "onDelete", "size"]);
    var iconFactory = function () {
        if (!React.isValidElement(deleteIcon)) {
            var iconSize = size === 'small' ? 'micro' : 'tiny';
            return React.createElement(Icon_1.Icon, { name: "filled-action-cancel", size: iconSize });
        }
        return deleteIcon;
    };
    /**
     * @see https://material-ui.com/guides/composition/#caveat-with-inlining
     */
    var validDeleteIcon = React.useMemo(iconFactory, [deleteIcon, size]);
    return (React.createElement(Chip_1.default, __assign({ deleteIcon: onDelete && validDeleteIcon, onDelete: onDelete, size: size }, otherProps, { ref: ref })));
});
exports.Chip.displayName = 'Chip';
exports.default = exports.Chip;
//# sourceMappingURL=Chip.js.map