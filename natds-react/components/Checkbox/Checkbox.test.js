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
var react_2 = require("@testing-library/react");
var renderWithTheme_1 = __importDefault(require("../../helpers/renderWithTheme"));
var Checkbox_1 = __importDefault(require("./Checkbox"));
var defaultProps = {
    onChange: function () { return ''; },
    id: 'any',
    value: 'any value'
};
describe('Checkbox component', function () {
    it('should render correctly with default props', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(Checkbox_1.default, __assign({}, defaultProps))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly when is checked', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(Checkbox_1.default, __assign({}, defaultProps, { checked: true }))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly when is indeterminate', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(Checkbox_1.default, __assign({}, defaultProps, { indeterminate: true }))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly when is disabled', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(Checkbox_1.default, __assign({}, defaultProps, { disabled: true }))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly with label', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(Checkbox_1.default, __assign({}, defaultProps, { label: "something" }))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should call onChange', function () {
        var onChangeMock = jest.fn();
        var component = (0, renderWithTheme_1.default)(react_1.default.createElement(Checkbox_1.default, __assign({}, defaultProps, { onChange: onChangeMock }))).component;
        react_2.fireEvent.click(component.getByTestId('ds-checkbox-any'));
        expect(onChangeMock).toHaveBeenCalledTimes(1);
    });
});
//# sourceMappingURL=Checkbox.test.js.map