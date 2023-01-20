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
exports.TableSortLabel = void 0;
var React = __importStar(require("react"));
var TableSortLabel_1 = __importDefault(require("@material-ui/core/TableSortLabel"));
var Icon_1 = require("../../Icon");
exports.TableSortLabel = React.forwardRef(function (props, ref) {
    var active = props.active, direction = props.direction, IconComponent = props.IconComponent, otherProps = __rest(props, ["active", "direction", "IconComponent"]);
    var DefaultIconComponent = function () {
        var defaultIconName = 'outlined-action-order';
        if (active && direction === 'desc') {
            defaultIconName = 'outlined-navigation-directionbottom';
        }
        if (active && direction === 'asc') {
            defaultIconName = 'outlined-navigation-directiontop';
        }
        return React.createElement(Icon_1.Icon, { name: defaultIconName, size: "micro" });
    };
    return (React.createElement(TableSortLabel_1.default, __assign({ active: active, direction: direction, IconComponent: IconComponent || DefaultIconComponent }, otherProps, { ref: ref })));
});
exports.TableSortLabel.displayName = 'TableSortLabel';
exports.default = exports.TableSortLabel;
//# sourceMappingURL=TableSortLabel.js.map