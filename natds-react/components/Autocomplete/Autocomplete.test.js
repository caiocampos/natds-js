"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@testing-library/react");
var user_event_1 = __importDefault(require("@testing-library/user-event"));
var react_2 = __importDefault(require("react"));
var _1 = __importDefault(require("."));
var renderWithTheme_1 = __importDefault(require("../../helpers/renderWithTheme"));
var options = [{
        value: '1',
        label: 'Option 1'
    },
    {
        value: '2',
        label: 'Option 2'
    }];
var onChangeSpy = jest.fn;
describe('Autocomplete component', function () {
    it('should render correctly with default props', function () {
        var _a = (0, renderWithTheme_1.default)(react_2.default.createElement(_1.default, { options: options })), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render helper text', function () {
        var _a;
        var component = (0, renderWithTheme_1.default)(react_2.default.createElement(_1.default, { label: "Label", name: "select", options: options, value: "", onChange: onChangeSpy, helperText: "Helper text" })).component;
        var autoComplete = component.getByTestId('input-search');
        user_event_1.default.click(autoComplete);
        expect(react_1.screen.getByText('Label')).toBeInTheDocument();
        expect(react_1.screen.getByText('Helper text')).toBeInTheDocument();
        expect(react_1.screen.getAllByRole('option')).toHaveLength(2);
        var option = component.getByTestId('ul-options');
        (_a = option.parentElement) === null || _a === void 0 ? void 0 : _a.click();
        expect(option).not.toBeInTheDocument();
    });
    it('should click in select li', function () {
        var component = (0, renderWithTheme_1.default)(react_2.default.createElement(_1.default, { label: "Label", options: options, value: "", onChange: onChangeSpy })).component;
        var autoComplete = component.getByTestId('input-search');
        user_event_1.default.click(autoComplete);
        var lioption = component.getByTestId('li-options-1');
        user_event_1.default.click(lioption);
        expect(lioption).not.toBeInTheDocument();
    });
    it('should open toggleMenu in onKeydown', function () {
        var component = (0, renderWithTheme_1.default)(react_2.default.createElement(_1.default, { label: "Label", name: "select", options: options, value: "", onChange: onChangeSpy, helperText: "Helper text" })).component;
        var autoComplete = component.getByTestId('input-search');
        (0, react_1.act)(function () {
            autoComplete.focus();
            react_1.fireEvent.keyDown(autoComplete, {
                key: 'a',
                code: 'keyA',
                keyCode: 65,
                charCode: 65
            });
        });
        expect(react_1.screen.getAllByRole('option')).toHaveLength(2);
    });
    it('should render placeholder', function () {
        (0, renderWithTheme_1.default)(react_2.default.createElement(_1.default, { label: "Label", name: "Autocomplete", options: options, value: "", onChange: onChangeSpy, helperText: "Helper text", placeholder: "Placeholder" }));
        expect(react_1.screen.getByTestId('input-search')).toBeInTheDocument();
    });
    it('should render correctly when the variant is contained and disabled is true', function () {
        var _a = (0, renderWithTheme_1.default)(react_2.default.createElement(_1.default, { disabled: true })), styles = _a.styles, component = _a.component;
        expect(component.getByTestId('input-search')).toBeDisabled();
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly when the variant is contained and feedback is success', function () {
        var _a = (0, renderWithTheme_1.default)(react_2.default.createElement(_1.default, { feedback: "success" })), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly when the variant is contained and feedback is error', function () {
        var _a = (0, renderWithTheme_1.default)(react_2.default.createElement(_1.default, { feedback: "error" })), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
});
//# sourceMappingURL=Autocomplete.test.js.map