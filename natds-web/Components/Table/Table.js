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
exports.Table = void 0;
/* eslint-disable complexity */
var React = __importStar(require("react"));
var Table_1 = __importDefault(require("@material-ui/core/Table"));
var natds_styles_1 = require("@naturacosmeticos/natds-styles");
var hex_to_rgba_1 = __importDefault(require("hex-to-rgba"));
var makeStyles_1 = __importDefault(require("@material-ui/core/styles/makeStyles"));
var useDefaultTheme_1 = __importDefault(require("../../hooks/useDefaultTheme"));
/**
 * For more advanced usages, check [Material UI Table docs](https://material-ui.com/pt/components/table/).
 *
 * ## Importing
 *
 * ```
 * import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from "@naturacosmeticos/natds-web";
 * ```
 *
 */
exports.Table = React.forwardRef(function (props, ref) {
    var _a = props.dividers, dividers = _a === void 0 ? true : _a, _b = props.rounded, rounded = _b === void 0 ? false : _b, _c = props.striped, striped = _c === void 0 ? true : _c, rest = __rest(props, ["dividers", "rounded", "striped"]);
    var rgbAlpha = 0.04;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var theme = (0, useDefaultTheme_1.default)();
    /**
     * @todo refactor(web): move Table styles to `natds-styles`, consider `dividers` prop
     */
    var useStyles = React.useMemo(function () { return (0, makeStyles_1.default)({
        root: {
            border: dividers ? 'none' : "1px solid ".concat(theme.palette.text.hint),
            borderCollapse: 'separate',
            borderRadius: !dividers && rounded ? "".concat(natds_styles_1.tokens.sizes.micro) : "".concat(theme.sizes.none),
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            '& thead > tr > th ': {
                backgroundColor: theme.palette.background.paper,
                borderBottom: dividers ? "1px solid ".concat(theme.palette.text.hint) : "".concat(natds_styles_1.tokens.sizes.none),
                borderRight: dividers ? "1px solid ".concat(theme.palette.text.hint) : "".concat(natds_styles_1.tokens.sizes.none),
                borderTop: dividers ? "1px solid ".concat(theme.palette.text.hint) : "".concat(natds_styles_1.tokens.sizes.none),
                fontSize: natds_styles_1.tokens.fontSize.subtitle2.fontSize,
                fontWeight: natds_styles_1.tokens.fontSize.subtitle2.fontWeight,
                padding: "".concat(natds_styles_1.tokens.spacing.spacingStandard, "px")
            },
            '& th:first-child': {
                borderLeft: dividers ? "1px solid ".concat(theme.palette.text.hint) : "".concat(natds_styles_1.tokens.sizes.none)
            },
            '& td': {
                borderBottom: dividers ? "1px solid ".concat(theme.palette.text.hint) : "".concat(natds_styles_1.tokens.sizes.none),
                borderRight: dividers ? "1px solid ".concat(theme.palette.text.hint) : "".concat(natds_styles_1.tokens.sizes.none),
                fontSize: natds_styles_1.tokens.fontSize.body2.fontSize,
                fontWeight: natds_styles_1.tokens.fontSize.body2.fontWeight,
                padding: "".concat(natds_styles_1.tokens.spacing.spacingStandard, "px")
            },
            '& td:first-child': {
                borderLeft: dividers ? "1px solid ".concat(theme.palette.text.hint) : "".concat(natds_styles_1.tokens.sizes.none)
            },
            '& tr': {
                backgroundColor: theme.palette.background.default,
                '&:nth-of-type(even)': {
                    /**
                     * @todo replace with solid color
                     */
                    backgroundColor: striped ? "".concat((0, hex_to_rgba_1.default)(theme.palette.complementary.highlight, rgbAlpha)) : theme.palette.background.default
                }
            },
            '& thead > tr:first-child': {
                '& > th:first-child': {
                    borderTopLeftRadius: rounded && "".concat(natds_styles_1.tokens.sizes.micro, "px")
                },
                '& > th:last-child': {
                    borderTopRightRadius: rounded && "".concat(natds_styles_1.tokens.sizes.micro, "px")
                }
            },
            '& tbody > tr:last-child': {
                '& > td:first-child': {
                    borderBottomLeftRadius: rounded && "".concat(natds_styles_1.tokens.sizes.micro, "px")
                },
                '& > td:last-child': {
                    borderBottomRightRadius: rounded && "".concat(natds_styles_1.tokens.sizes.micro, "px")
                }
            }
        }
    }); }, [theme,
        dividers,
        rounded,
        striped]);
    var classes = useStyles({ dividers: dividers, rounded: rounded, striped: striped });
    return React.createElement(Table_1.default, __assign({ classes: classes }, rest, { ref: ref }));
});
exports.Table.displayName = 'Table';
exports.default = exports.Table;
//# sourceMappingURL=Table.js.map