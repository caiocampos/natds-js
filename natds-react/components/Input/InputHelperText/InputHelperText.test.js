"use strict";
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
var react_1 = __importDefault(require("react"));
var renderWithTheme_1 = __importDefault(require("../../../helpers/renderWithTheme"));
var InputHelperText_1 = __importStar(require("./InputHelperText"));
describe('InputHelperText component', function () {
    it('should render correctly with helper text', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(InputHelperText_1.default, { helperText: "some helper text" })), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly with helper text and feedback error', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(InputHelperText_1.default, { helperText: "some helper text", feedback: "error" })), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly with helper text and feedback success', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(InputHelperText_1.default, { helperText: "some helper text", feedback: "success" })), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
});
describe('getIconName', function () {
    it('should return outlined-action-check when receive feedback success', function () {
        expect((0, InputHelperText_1.getIconName)('success')).toBe('outlined-action-check');
    });
    it('should return outlined-action-cancel when receive feedback error', function () {
        expect((0, InputHelperText_1.getIconName)('error')).toBe('outlined-action-cancel');
    });
});
describe('getIconColor', function () {
    it('should return `success` when receive feedback success', function () {
        expect((0, InputHelperText_1.getIconColor)('success')).toBe('success');
    });
    it('should return `alert` when receive feedback error', function () {
        expect((0, InputHelperText_1.getIconColor)('error')).toBe('alert');
    });
});
//# sourceMappingURL=InputHelperText.test.js.map