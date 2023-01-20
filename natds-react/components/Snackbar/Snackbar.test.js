"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@testing-library/react");
var Button_1 = __importDefault(require("../Button"));
var Snackbar_1 = __importDefault(require("./Snackbar"));
var renderWithTheme_1 = __importDefault(require("../../helpers/renderWithTheme"));
describe('Snackbar component', function () {
    it('should render correctly with default props', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(Snackbar_1.default, { timer: 5 })), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render title', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(Snackbar_1.default, { timer: 5, title: "Title" })), styles = _a.styles, component = _a.component;
        expect(react_2.screen.getByText('Title')).toBeInTheDocument();
        expect(react_2.screen.getByTestId('title-item')).toBeInTheDocument();
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render children', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(Snackbar_1.default, { timer: 5 }, " Texto children")), styles = _a.styles, component = _a.component;
        expect(react_2.screen.getByText('Texto children')).toBeInTheDocument();
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render with clicked in ref.current.show()', function () {
        var refN = react_1.default.createRef();
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(Snackbar_1.default, { animation: true, testID: "ref-test", ref: refN, timer: 5 }, " Texto children")), styles = _a.styles, component = _a.component;
        (0, react_2.act)(function () { var _a; return (_a = refN.current) === null || _a === void 0 ? void 0 : _a.show(); });
        expect(react_2.screen.getByTestId('ref-test')).toBeVisible();
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly with buttonComponent Prop', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(Snackbar_1.default, { timer: 5, buttonComponent: react_1.default.createElement(Button_1.default, { testID: "btn-include-component", onClick: function () { return ''; } }, "Click") },
            ' ',
            "Texto children")), styles = _a.styles, component = _a.component;
        expect(react_2.screen.getByTestId('btn-component')).toBeInTheDocument();
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly with icon Prop', function () {
        (0, renderWithTheme_1.default)(react_1.default.createElement(Snackbar_1.default, { timer: 5, icon: react_1.default.createElement(react_1.default.Fragment, null, "Icon teste"), buttonComponent: react_1.default.createElement(Button_1.default, { onClick: function () { return ''; } }, "Click") },
            ' ',
            "Texto children"));
        expect(react_2.screen.getByTestId('icon-item')).toBeInTheDocument();
    });
    it('should render correctly with feedback success', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(Snackbar_1.default, { testID: "bkg-color", timer: 5, feedback: "success" })), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly with feedback error', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(Snackbar_1.default, { timer: 5, feedback: "error" })), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly with feedback warning', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(Snackbar_1.default, { timer: 5, feedback: "warning" })), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly with feedback info', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(Snackbar_1.default, { timer: 5, feedback: "info" })), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly with feedback default', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(Snackbar_1.default, { timer: 5, feedback: "default" })), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly with position topLeft', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(Snackbar_1.default, { timer: 5, position: "topLeft" })), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly with position topRight', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(Snackbar_1.default, { timer: 5, position: "topRight" })), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly with position topCenter', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(Snackbar_1.default, { timer: 5, position: "topCenter" })), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly with position bottomLeft', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(Snackbar_1.default, { testID: "snackContainerLeft", timer: 5, position: "bottomLeft" })), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
        var contentDiv = react_2.screen.getByTestId('snackContainerLeft');
        var style = window.getComputedStyle(contentDiv);
        expect(style.top).toBe('');
        expect(style.bottom).toBe('8px');
        expect(style.left).toBe('8px');
        expect(style.right).toBe('');
    });
    it('should render correctly with position bottomRight', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(Snackbar_1.default, { testID: "snackContainerRight", timer: 5, position: "bottomRight" })), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
        var contentDiv = react_2.screen.getByTestId('snackContainerRight');
        var style = window.getComputedStyle(contentDiv);
        expect(style.top).toBe('');
        expect(style.bottom).toBe('8px');
        expect(style.left).toBe('');
        expect(style.right).toBe('8px');
    });
    it('should render correctly with position bottomCenter', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(Snackbar_1.default, { testID: "snackContainer", timer: 5, position: "bottomCenter" })), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
        var contentDiv = react_2.screen.getByTestId('snackContainer');
        var style = window.getComputedStyle(contentDiv);
        expect(style.bottom).toBe('8px');
        expect(style.top).toBe('');
        expect(style.right).toBe('');
    });
    it('should render correctly with actionButtom inlineButton', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(Snackbar_1.default, { timer: 5, directionButton: "inlineButton" })), styles = _a.styles, component = _a.component;
        expect(react_2.screen.getByTestId('btn-action-wrapper')).toBeInTheDocument();
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly with timer prop', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(Snackbar_1.default, null)), styles = _a.styles, component = _a.component;
        expect(component.container.querySelector('[data-timer="10"]')).toBeInTheDocument();
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
});
//# sourceMappingURL=Snackbar.test.js.map