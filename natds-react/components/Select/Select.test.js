"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@testing-library/react");
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
describe('Select component', function () {
    it('should render correctly with default props', function () {
        var component = (0, renderWithTheme_1.default)(react_2.default.createElement(_1.default, { label: "Label", name: "select", options: options, value: "", onChange: onChangeSpy })).component;
        expect(react_1.screen.getByText('Label')).toBeInTheDocument();
        expect(react_1.screen.getAllByRole('option')).toHaveLength(2);
        expect(component.container).toMatchSnapshot();
    });
    it('should render helper text', function () {
        (0, renderWithTheme_1.default)(react_2.default.createElement(_1.default, { label: "Label", name: "select", options: options, value: "", onChange: onChangeSpy, helperText: "Helper text" }));
        expect(react_1.screen.getByText('Helper text')).toBeInTheDocument();
    });
    it('should render placeholder', function () {
        (0, renderWithTheme_1.default)(react_2.default.createElement(_1.default, { label: "Label", name: "select", options: options, value: "", onChange: onChangeSpy, helperText: "Helper text", placeholder: "Placeholder" }));
        expect(react_1.screen.getByTestId('placeholder-option')).toBeInTheDocument();
    });
    it('should render element with custom style if feedback is success', function () {
        (0, renderWithTheme_1.default)(react_2.default.createElement(_1.default, { label: "Label", name: "select", options: options, value: "", onChange: onChangeSpy, helperText: "Helper text", feedback: "success" }));
        expect(react_1.screen.getByTestId('icon-outlined-action-check')).toBeInTheDocument();
    });
    it('should render element with custom style if feedback is error', function () {
        (0, renderWithTheme_1.default)(react_2.default.createElement(_1.default, { label: "Label", name: "select", options: options, value: "", onChange: onChangeSpy, helperText: "Helper text", feedback: "error" }));
        expect(react_1.screen.getByTestId('icon-outlined-action-cancel')).toBeInTheDocument();
    });
});
//# sourceMappingURL=Select.test.js.map