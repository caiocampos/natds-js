"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var _1 = __importDefault(require("."));
var renderWithTheme_1 = __importDefault(require("../../helpers/renderWithTheme"));
var Icon_1 = require("../Icon");
var tagProps = {
    children: 'Design System'
};
describe('Tag component', function () {
    it('should render correctly with default props', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, __assign({}, tagProps))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly with border left', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, __assign({}, tagProps, { position: "left" }))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly with border right', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, __assign({}, tagProps, { position: "right" }))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly with standard size', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, __assign({}, tagProps, { size: "standard", testID: "standard-size" }))), styles = _a.styles, getByTestId = _a.component.getByTestId;
        var component = getByTestId('standard-size');
        expect(component).toHaveStyle({ height: '24px' });
        expect([styles.toString(), component]).toMatchSnapshot();
    });
    it('should render correctly with different color', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, __assign({}, tagProps, { color: "success", testID: "success-color" }))), styles = _a.styles, getByTestId = _a.component.getByTestId;
        var component = getByTestId('success-color');
        expect(component).toHaveStyle({ 'background-color': '#569a32' });
        expect([styles.toString(), component]).toMatchSnapshot();
    });
    it('should render correctly icon inside the component', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, { testID: "icon-render", IconComponent: react_1.default.createElement(Icon_1.Icon, { name: "outlined-default-mockup", color: "highEmphasis", size: "small" }) }, "Design System")), styles = _a.styles, getByTestId = _a.component.getByTestId;
        var component = getByTestId('icon-render');
        var element = getByTestId('icon-outlined-default-mockup');
        expect(element).toBeTruthy();
        expect([styles.toString(), component]).toMatchSnapshot();
    });
});
//# sourceMappingURL=Tag.test.js.map