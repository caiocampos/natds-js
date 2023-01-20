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
var React = __importStar(require("react"));
var _1 = __importDefault(require("."));
var renderWithTheme_1 = __importDefault(require("../../helpers/renderWithTheme"));
var Icon_1 = require("./Icon");
describe('Icon component', function () {
    it('should render correctly with default props', function () {
        var _a = (0, renderWithTheme_1.default)(React.createElement(_1.default, { name: "outlined-default-mockup" })), styles = _a.styles, getByTestId = _a.component.getByTestId;
        var component = getByTestId(/mockup/);
        expect(component).toHaveStyle({ fontSize: 24, color: '#000000' });
        expect([styles.toString(), component]).toMatchSnapshot();
    });
    it('should render correctly with `medium` size', function () {
        var _a = (0, renderWithTheme_1.default)(React.createElement(_1.default, { name: "outlined-default-mockup", size: "medium" })), styles = _a.styles, getByTestId = _a.component.getByTestId;
        var component = getByTestId(/mockup/);
        expect(component).toHaveStyle({ fontSize: 48 });
        expect([styles.toString(), component]).toMatchSnapshot();
    });
    it('should render correctly with `primary` color', function () {
        var _a = (0, renderWithTheme_1.default)(React.createElement(_1.default, { name: "outlined-default-mockup", color: "primary" })), styles = _a.styles, getByTestId = _a.component.getByTestId;
        var component = getByTestId(/mockup/);
        expect(component).toHaveStyle({ color: '#f4ab34' });
        expect([styles.toString(), component]).toMatchSnapshot();
    });
});
describe('CheckIcon', function () {
    it('should return the default icon name', function () {
        var checkedIcon = (0, Icon_1.checkIcon)('unexpected-icon-name');
        expect(checkedIcon).toBe('outlined-default-mockup');
    });
    it('should return the given icon name', function () {
        var iconChecked = (0, Icon_1.checkIcon)('outlined-social-contact');
        expect(iconChecked).toBe('outlined-social-contact');
    });
});
//# sourceMappingURL=Icon.test.js.map