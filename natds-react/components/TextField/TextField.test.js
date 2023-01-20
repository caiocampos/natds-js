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
/* eslint-disable max-lines-per-function */
var react_1 = __importDefault(require("react"));
var user_event_1 = __importDefault(require("@testing-library/user-event"));
var TextField_1 = __importDefault(require("./TextField"));
var renderWithTheme_1 = __importDefault(require("../../helpers/renderWithTheme"));
var Icon_1 = require("../Icon");
var defaultProps = {
    onBlur: function () { return ''; },
    onChange: function () { return ''; },
    onFocus: function () { return ''; },
    id: 'example_to_test'
};
describe('TextField component', function () {
    it('should render correctly with default props', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(TextField_1.default, __assign({}, defaultProps))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly when have a label', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(TextField_1.default, __assign({}, defaultProps, { label: "some label here" }))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly when size is medium', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(TextField_1.default, __assign({}, defaultProps, { size: "medium" }))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly when it has an error feedback', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(TextField_1.default, __assign({}, defaultProps, { feedback: "error" }))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly when it has a success feedback', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(TextField_1.default, __assign({}, defaultProps, { feedback: "success" }))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly when is required', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(TextField_1.default, __assign({}, defaultProps, { required: true }))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly when is disabled', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(TextField_1.default, __assign({}, defaultProps, { required: true }))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly when is read only', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(TextField_1.default, __assign({}, defaultProps, { required: true }))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly when it has a helper text', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(TextField_1.default, __assign({}, defaultProps, { required: true, helperText: "any helper text here" }))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly when it has an icon button action', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(TextField_1.default, __assign({}, defaultProps, { required: true, action: "icon", IconComponent: react_1.default.createElement(Icon_1.Icon, { name: "filled-action-love", color: "highEmphasis" }), ariaLabel: "any label", onClick: function () { return ''; } }))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly when it has an image action', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(TextField_1.default, __assign({}, defaultProps, { required: true, action: "image", src: "", alt: "" }))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly when it has multiline type', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(TextField_1.default, __assign({}, defaultProps, { required: true, type: "multiline" }))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly when it has password type', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(TextField_1.default, __assign({}, defaultProps, { required: true, type: "password" }))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
        expect(component.getByTestId('ds-input')).toHaveAttribute('type', 'password');
    });
    it('should call onChange when is typing', function () {
        var onChangeMock = jest.fn();
        var component = (0, renderWithTheme_1.default)(react_1.default.createElement(TextField_1.default, __assign({}, defaultProps, { onChange: onChangeMock }))).component;
        user_event_1.default.click(component.getByRole('textbox'));
        user_event_1.default.type(component.getByRole('textbox'), 'Hello World');
        expect(onChangeMock).toHaveBeenCalledTimes(11);
    });
    it('should call onFocus when is typing', function () {
        var onFocusMock = jest.fn();
        var component = (0, renderWithTheme_1.default)(react_1.default.createElement(TextField_1.default, __assign({}, defaultProps, { onFocus: onFocusMock }))).component;
        user_event_1.default.click(component.getByRole('textbox'));
        expect(component.getByRole('textbox')).toHaveFocus();
        expect(onFocusMock).toHaveBeenCalled();
    });
    it('should call onBlur when the element loses focus', function () {
        var onBlurMock = jest.fn();
        var component = (0, renderWithTheme_1.default)(react_1.default.createElement(TextField_1.default, __assign({}, defaultProps, { onBlur: onBlurMock }))).component;
        user_event_1.default.click(component.getByRole('textbox'));
        user_event_1.default.tab();
        expect(onBlurMock).toHaveBeenCalled();
    });
});
//# sourceMappingURL=TextField.test.js.map