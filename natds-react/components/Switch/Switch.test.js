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
var user_event_1 = __importDefault(require("@testing-library/user-event"));
var react_2 = require("@testing-library/react");
var _1 = __importDefault(require("."));
var renderWithTheme_1 = __importDefault(require("../../helpers/renderWithTheme"));
var switchProps = {
    onChange: jest.fn(),
    value: 'test'
};
describe('Switch component', function () {
    it('should render correctly when disabled is false and checked is false', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, __assign({}, switchProps))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly when disabled is false and checked is true', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, __assign({}, switchProps, { checked: true }))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly when disabled is true and checked is false', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, __assign({}, switchProps, { disabled: true }))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly when disabled is true and checked is true', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, __assign({}, switchProps, { disabled: true, checked: true }))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should call onChange when click on the switch', function () {
        var onChangeMock = jest.fn();
        var getByTestId = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, __assign({}, switchProps, { onChange: onChangeMock, testID: "switch-test" }))).component.getByTestId;
        var switchComponent = getByTestId('switch-test');
        user_event_1.default.click(switchComponent);
        expect(onChangeMock).toHaveBeenCalled();
    });
    it('should not call onChange when click on the disabled switch', function () {
        var onChangeMock = jest.fn();
        var getByTestId = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, __assign({}, switchProps, { onChange: onChangeMock, testID: "switch-test", disabled: true }))).component.getByTestId;
        var switchComponent = getByTestId('switch-test');
        user_event_1.default.click(switchComponent);
        expect(switchComponent).toBeDisabled();
        expect(onChangeMock).not.toHaveBeenCalled();
    });
    it('should blur the switch component when mouse leave', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, __assign({}, switchProps, { testID: "switch-test" }))).component, getByTestId = _a.getByTestId, container = _a.container;
        var switchComponent = getByTestId('switch-test');
        switchComponent.focus();
        expect(switchComponent).toHaveFocus();
        var labelElement = container.querySelector('label');
        react_2.fireEvent.mouseLeave(labelElement);
        expect(switchComponent).not.toHaveFocus();
    });
});
//# sourceMappingURL=Switch.test.js.map