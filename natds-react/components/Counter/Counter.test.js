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
var react_2 = require("@testing-library/react");
var Counter_1 = __importDefault(require("./Counter"));
var renderWithTheme_1 = __importDefault(require("../../helpers/renderWithTheme"));
var defaultProps = {
    onIncrement: function () { return ''; },
    onDecrement: function () { return ''; }
};
describe('Counter', function () {
    it('should render correctly with default props', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(Counter_1.default, __assign({}, defaultProps))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly with label', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(Counter_1.default, __assign({}, defaultProps, { label: "label" }))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should call onIncrement when maxValue is not reached', function () {
        var onIncrementMock = jest.fn();
        var component = (0, renderWithTheme_1.default)(react_1.default.createElement(Counter_1.default, __assign({}, defaultProps, { onIncrement: onIncrementMock }))).component;
        react_2.fireEvent.click(component.getByTestId('onIncrement-btn'));
        expect(onIncrementMock).toHaveBeenCalledTimes(1);
    });
    it('should call onDecrement when minValue is not reached', function () {
        var onDecrementMock = jest.fn();
        var component = (0, renderWithTheme_1.default)(react_1.default.createElement(Counter_1.default, __assign({}, defaultProps, { onDecrement: onDecrementMock, value: 1 }))).component;
        react_2.fireEvent.click(component.getByTestId('onDecrement-btn'));
        expect(onDecrementMock).toHaveBeenCalledTimes(1);
    });
    it('should disabled onIncrement when maxValue is reached', function () {
        var onIncrementMock = jest.fn();
        var component = (0, renderWithTheme_1.default)(react_1.default.createElement(Counter_1.default, __assign({}, defaultProps, { value: 99, onIncrement: onIncrementMock }))).component;
        react_2.fireEvent.click(component.getByTestId('onIncrement-btn'));
        expect(component.getByTestId('onIncrement-btn')).toBeDisabled();
        expect(onIncrementMock).not.toHaveBeenCalled();
    });
    it('should disabled onDecrement when minValue is reached', function () {
        var onDecrementMock = jest.fn();
        var component = (0, renderWithTheme_1.default)(react_1.default.createElement(Counter_1.default, __assign({}, defaultProps, { onDecrement: onDecrementMock }))).component;
        react_2.fireEvent.click(component.getByTestId('onDecrement-btn'));
        expect(component.getByTestId('onDecrement-btn')).toBeDisabled();
        expect(onDecrementMock).not.toHaveBeenCalled();
    });
    it('should render correctly when is disabled', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(Counter_1.default, __assign({}, defaultProps, { disabled: true }))), styles = _a.styles, component = _a.component;
        expect(component.getByTestId('onDecrement-btn')).toBeDisabled();
        expect(component.getByTestId('onIncrement-btn')).toBeDisabled();
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
});
//# sourceMappingURL=Counter.test.js.map