var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var createStyles_1 = __importDefault(require("../../styles/createStyles"));
var titleVariants_1 = require("./__fixtures__/titleVariants");
var makeStyles_1 = require("../../styles/makeStyles");
var style = function (_a) {
    var palette = _a.palette, sizes = _a.sizes;
    return (0, createStyles_1.default)({
        root: {
            position: 'relative'
        },
        introDetail: {
            display: 'block',
            paddingLeft: sizes === null || sizes === void 0 ? void 0 : sizes.standard
        },
        introTitle: {
            alignItems: 'center',
            display: 'flex',
            /**
             * @todo understand why we are using !important here
             */
            marginBottom: "".concat(sizes === null || sizes === void 0 ? void 0 : sizes.micro, "px !important"),
            paddingLeft: sizes === null || sizes === void 0 ? void 0 : sizes.standard,
            position: 'relative',
            '&::before': {
                borderLeft: function (_a) {
                    var _b;
                    var titleVariant = _a.titleVariant;
                    var width = sizes === null || sizes === void 0 ? void 0 : sizes.tiny;
                    if (typeof titleVariant === 'undefined' || !titleVariants_1.titleVariants.includes(titleVariant)) {
                        width = sizes === null || sizes === void 0 ? void 0 : sizes.micro;
                    }
                    return "".concat((_b = palette === null || palette === void 0 ? void 0 : palette.primary) === null || _b === void 0 ? void 0 : _b.main, " ").concat(width, "px solid");
                },
                borderRadius: "".concat(sizes === null || sizes === void 0 ? void 0 : sizes.none, " ").concat(sizes === null || sizes === void 0 ? void 0 : sizes.micro, "px ").concat(sizes === null || sizes === void 0 ? void 0 : sizes.micro, "px ").concat(sizes === null || sizes === void 0 ? void 0 : sizes.none),
                bottom: 0,
                content: '""',
                left: 0,
                position: 'absolute',
                top: 0
            },
            '& > .natds-icons': {
                marginRight: sizes === null || sizes === void 0 ? void 0 : sizes.tiny
            }
        }
    });
};
exports.useStyles = (0, makeStyles_1.makeStyles)(style, { name: 'NatDSIntro' });
exports.default = exports.useStyles;
//# sourceMappingURL=Intro.styles.js.map