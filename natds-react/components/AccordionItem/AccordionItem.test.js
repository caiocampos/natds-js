"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_event_1 = __importDefault(require("@testing-library/user-event"));
var react_1 = __importDefault(require("react"));
var _1 = __importDefault(require("."));
var renderWithTheme_1 = __importDefault(require("../../helpers/renderWithTheme"));
var onClickSpy = jest.fn();
describe('AccordionItem component', function () {
    it('should render component with regular style as default', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, { title: "Lorem", onClick: onClickSpy }, "Accordion Content")), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should calls onClick when header is clicked', function () {
        var component = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, { title: "Header title", onClick: onClickSpy }, "Accordion Content")).component;
        user_event_1.default.click(component.getByText(/header title/i));
        expect(onClickSpy).toHaveBeenCalled();
    });
    it('should disabled clicks when is disabled (regular)', function () {
        var styles = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, { title: "Header title", isDisabled: true, onClick: onClickSpy }, "Accordion Content")).styles;
        expect(styles.toString()).toContain('pointer-events: none');
    });
    it('should disabled clicks when is disabled (primary)', function () {
        var styles = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, { color: "primary", title: "Header title", isDisabled: true, onClick: onClickSpy }, "Accordion Content")).styles;
        expect(styles.toString()).toContain('pointer-events: none');
    });
    it('should toggle item when is active is true', function () {
        var component = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, { title: "Header title", isActive: true, onClick: onClickSpy }, "Accordion Content")).component;
        expect(component.getByTestId('icon-outlined-navigation-arrowtop')).toBeInTheDocument();
    });
    it('should render legend when is passed', function () {
        var component = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, { title: "Header title", legend: "Legend text", isActive: true, onClick: onClickSpy }, "Accordion Content")).component;
        expect(component.getByText(/legend text/i)).toBeInTheDocument();
    });
});
//# sourceMappingURL=AccordionItem.test.js.map