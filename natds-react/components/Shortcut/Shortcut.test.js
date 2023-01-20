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
var dom_1 = require("@testing-library/dom");
var react_1 = __importDefault(require("react"));
var _1 = __importDefault(require("."));
var renderWithTheme_1 = __importDefault(require("../../helpers/renderWithTheme"));
var Badge_1 = __importDefault(require("../Badge"));
var defaultProps = {
    id: 'shortcut-id',
    onClick: function () { return ({}); },
    IconComponent: react_1.default.createElement("div", null)
};
describe('Shortcut component', function () {
    it('should render correctly with default props', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, __assign({}, defaultProps))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly with label', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, __assign({}, defaultProps, { label: "Shortcut label" }))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly with badge', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, __assign({}, defaultProps, { label: "Shortcut label", BadgeComponent: react_1.default.createElement(Badge_1.default, { variant: "standard", value: 99, limit: 99 }) }))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly when is disabled', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, __assign({}, defaultProps, { disabled: true }))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should call onClick function', function () {
        var onClickMock = jest.fn();
        var getByRole = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, __assign({}, defaultProps, { onClick: onClickMock, label: "shortcut", id: "shortcut" }))).component.getByRole;
        dom_1.fireEvent.click(getByRole('button', { name: 'shortcut' }));
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
    it('should NOT call onClick when is disabled', function () {
        var onClickMock = jest.fn();
        var getByRole = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, __assign({}, defaultProps, { onClick: onClickMock, disabled: true, label: "shortcut", id: "shortcut" }))).component.getByRole;
        dom_1.fireEvent.click(getByRole('button', { name: 'shortcut' }));
        expect(onClickMock).not.toHaveBeenCalledTimes(1);
    });
});
//# sourceMappingURL=Shortcut.test.js.map