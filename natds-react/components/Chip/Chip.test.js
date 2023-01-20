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
describe('Chip component', function () {
    it('should render with neutral border as default', function () {
        var styles = (0, renderWithTheme_1.default)(react_2.default.createElement(_1.default, { labelText: "Chip label" })).styles;
        expect(styles.toString()).toContain('border-color: #bbbbbb');
    });
    it('should render with primary border when color is primary', function () {
        var styles = (0, renderWithTheme_1.default)(react_2.default.createElement(_1.default, { labelText: "Chip label", color: "primary" })).styles;
        expect(styles.toString()).toContain('border-color: #f4ab34');
    });
    it('should render with secondary border when color is secondary', function () {
        var styles = (0, renderWithTheme_1.default)(react_2.default.createElement(_1.default, { labelText: "Chip label", color: "secondary" })).styles;
        expect(styles.toString()).toContain('border-color: #ff6b0b');
    });
    it('should render Avatar left side', function () {
        (0, renderWithTheme_1.default)(react_2.default.createElement(_1.default, { labelText: "Chip label", leftAvatar: "placeholder.png" }));
        expect(react_1.screen.getByRole('img')).toBeInTheDocument();
    });
    it('should render Avatar right side', function () {
        (0, renderWithTheme_1.default)(react_2.default.createElement(_1.default, { labelText: "Chip label", rightAvatar: "placeholder.png" }));
        expect(react_1.screen.getByRole('img')).toBeInTheDocument();
    });
    it('should render leftIcon', function () {
        (0, renderWithTheme_1.default)(react_2.default.createElement(_1.default, { labelText: "Chip label", leftIcon: "outlined-default-mockup" }));
        expect(react_1.screen.getByTestId('icon-outlined-default-mockup')).toBeInTheDocument();
    });
    it('should render rightIcon', function () {
        (0, renderWithTheme_1.default)(react_2.default.createElement(_1.default, { labelText: "Chip label", rightIcon: "outlined-default-mockup" }));
        expect(react_1.screen.getByTestId('icon-outlined-default-mockup')).toBeInTheDocument();
    });
    it('should render icons both sides', function () {
        (0, renderWithTheme_1.default)(react_2.default.createElement(_1.default, { labelText: "Chip label", leftIcon: "outlined-default-mockup", rightIcon: "outlined-default-mockup" }));
        expect(react_1.screen.getAllByTestId('icon-outlined-default-mockup')).toHaveLength(2);
    });
    it('should calls onClick when chip is clicked', function () {
        var handleClick = jest.fn();
        (0, renderWithTheme_1.default)(react_2.default.createElement(_1.default, { labelText: "Chip label", onClick: handleClick }));
        user_event_1.default.click(react_1.screen.getByRole('button'));
        expect(handleClick).toBeCalled();
    });
});
//# sourceMappingURL=Chip.test.js.map