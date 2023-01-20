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
exports.Rating = void 0;
// eslint-disable-next-line no-use-before-define
var React = __importStar(require("react"));
var Rating_1 = __importDefault(require("@material-ui/lab/Rating"));
var clsx_1 = __importDefault(require("clsx"));
var Icon_1 = require("../Icon");
var Rating_styles_1 = __importDefault(require("./Rating.styles"));
/**
 * ## Importing
 *
 * ```
 * import { Rating } from '@naturacosmeticos/natds-web';
 * ```
 */
exports.Rating = React.forwardRef(function (props, ref) {
    var className = props.className, size = props.size, rate = props.rate;
    var classes = (0, Rating_styles_1.default)({ size: size });
    var classNames = (0, clsx_1.default)([
        className,
        classes.root
    ]);
    return (React.createElement(Rating_1.default, { ref: ref, classes: { iconEmpty: classes.iconEmpty }, value: rate, max: 5, name: "rating", readOnly: true, icon: React.createElement(Icon_1.Icon, { className: classNames, name: "filled-action-rating" }) }));
});
exports.Rating.displayName = 'Rating';
exports.Rating.defaultProps = {
    size: 'small'
};
exports.default = exports.Rating;
//# sourceMappingURL=Rating.js.map