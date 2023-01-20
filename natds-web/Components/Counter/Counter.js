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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Counter = void 0;
var React = __importStar(require("react"));
var Counter_styles_1 = require("./Counter.styles");
var Button_1 = require("../Button");
var ButtonGroup_1 = require("../ButtonGroup");
var InputLabel_1 = require("../InputLabel");
var InputCounter_1 = require("./InputCounter");
/**
 * ## Importing
 *
 * ```
 * import { Counter } from '@naturacosmeticos/natds-web';
 * ```
 */
var Counter = function (props) {
    var _a = props.value, value = _a === void 0 ? 0 : _a, onChange = props.onChange, onDecrement = props.onDecrement, onIncrement = props.onIncrement, _b = props.size, size = _b === void 0 ? 'small' : _b, label = props.label, _c = props.readOnly, readOnly = _c === void 0 ? false : _c, _d = props.maxValue, maxValue = _d === void 0 ? 99 : _d, _e = props.minValue, minValue = _e === void 0 ? 0 : _e;
    var _f = (0, Counter_styles_1.useStyles)(props), button = _f.button, input = _f.input, group = _f.group;
    var maxReached = value >= maxValue;
    var minReached = value <= minValue;
    return (React.createElement("div", null,
        label && React.createElement(InputLabel_1.InputLabel, null, label),
        React.createElement(ButtonGroup_1.ButtonGroup, { color: "default", disableElevation: true, size: size, orientation: "horizontal", disabled: readOnly, className: group },
            React.createElement(Button_1.Button, { id: "decrement-button", disabled: minReached, variant: "outlined", onClick: onDecrement, className: button }, "-"),
            React.createElement(InputCounter_1.InputCounter, { value: value, className: input, onChange: onChange }),
            React.createElement(Button_1.Button, { id: "increment-button", disabled: maxReached, variant: "outlined", onClick: onIncrement, className: button }, "+"))));
};
exports.Counter = Counter;
exports.Counter.displayName = 'Counter';
exports.default = exports.Counter;
//# sourceMappingURL=Counter.js.map