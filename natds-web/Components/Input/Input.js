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
exports.Input = void 0;
var React = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var Input_1 = __importDefault(require("@material-ui/core/Input"));
var clsx_1 = __importDefault(require("clsx"));
var styles = (0, core_1.makeStyles)(function (theme) { return (0, core_1.createStyles)({
    input: {
        height: function (_a) {
            var size = _a.size;
            return size && theme.sizes[size];
        },
        '& .MuiInputBase-input': {
            minHeight: function (_a) {
                var size = _a.size;
                return size && theme.sizes[size];
            }
        }
    }
}); });
exports.Input = React.forwardRef(function (props, ref) {
    var className = props.className, disabled = props.disabled, hasIcon = props.hasIcon, multiline = props.multiline, rows = props.rows, _a = props.size, size = _a === void 0 ? 'mediumX' : _a, state = props.state, otherProps = __rest(props, ["className", "disabled", "hasIcon", "multiline", "rows", "size", "state"]);
    var input = styles(props).input;
    return (React.createElement(Input_1.default, __assign({}, otherProps, { className: (0, clsx_1.default)(className, input), "data-state": state, disabled: disabled, multiline: multiline, ref: ref, rows: rows, style: { marginTop: 0 } })));
});
exports.Input.displayName = 'Input';
exports.default = exports.Input;
//# sourceMappingURL=Input.js.map