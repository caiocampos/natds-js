"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@testing-library/react");
var react_2 = __importDefault(require("react"));
var _1 = __importDefault(require("."));
var renderWithTheme_1 = __importDefault(require("../../helpers/renderWithTheme"));
var onClickSpy = jest.fn();
describe('TabItem component', function () {
    beforeEach(function () { return jest.clearAllMocks(); });
    it('should render correctly with default props', function () {
        var _a = (0, renderWithTheme_1.default)(react_2.default.createElement(_1.default, { onClick: onClickSpy }, "Tab Item")), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should calls onClick when component is clicked', function () {
        (0, renderWithTheme_1.default)(react_2.default.createElement(_1.default, { onClick: onClickSpy }, "Tab Item"));
        react_1.fireEvent.click(react_1.screen.getByRole('button'));
        expect(onClickSpy).toHaveBeenCalled();
    });
    it("shouldn't call onClick when component is clicked but disabled", function () {
        (0, renderWithTheme_1.default)(react_2.default.createElement(_1.default, { onClick: onClickSpy, isDisabled: true }, "Tab Item"));
        react_1.fireEvent.click(react_1.screen.getByRole('button'));
        expect(onClickSpy).not.toHaveBeenCalled();
    });
    it('should render tab with border bottom when is active', function () {
        var styles = (0, renderWithTheme_1.default)(react_2.default.createElement(_1.default, { onClick: onClickSpy, isActive: true }, "Tab Item")).styles;
        expect(styles).toContain('border-bottom');
    });
});
//# sourceMappingURL=TabItem.test.js.map