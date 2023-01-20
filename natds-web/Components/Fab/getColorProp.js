var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getColorProp = void 0;
var colors_1 = __importDefault(require("./__fixtures__/colors"));
var getColorProp = function (_a) {
    var _b;
    var color = _a.color;
    if (typeof color === 'undefined') {
        return 'default';
    }
    var colorMapping = (_b = {},
        _b[colors_1.default.primary] = 'primary',
        _b[colors_1.default.secondary] = 'secondary',
        _b[colors_1.default.light] = 'default',
        _b);
    if (Object.keys(colorMapping).includes(color)) {
        return colorMapping[color];
    }
    return 'default';
};
exports.getColorProp = getColorProp;
//# sourceMappingURL=getColorProp.js.map