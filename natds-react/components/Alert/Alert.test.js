"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@testing-library/react");
var react_2 = __importDefault(require("react"));
var _1 = __importDefault(require("."));
var renderWithTheme_1 = __importDefault(require("../../helpers/renderWithTheme"));
describe('Alert component', function () {
    it('should render component with info styles if color is not defined', function () {
        var _a = (0, renderWithTheme_1.default)(react_2.default.createElement(_1.default, { title: "Title" }, "Lorem, ipsum dolor sit amet consectetur adipisicing elit.")), styles = _a.styles, component = _a.component;
        expect(react_1.screen.getByTestId('icon-outlined-alert-info')).toBeInTheDocument();
        expect(react_1.screen.getByRole('heading')).toBeInTheDocument();
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render component without icon if showIcon is false', function () {
        (0, renderWithTheme_1.default)(react_2.default.createElement(_1.default, { title: "Title", showIcon: false }, "Lorem, ipsum dolor sit amet consectetur adipisicing elit."));
        expect(react_1.screen.queryByTestId('icon-outlined-alert-info')).not.toBeInTheDocument();
    });
    it('should render component without title if is not defined', function () {
        (0, renderWithTheme_1.default)(react_2.default.createElement(_1.default, null, "Lorem, ipsum dolor sit amet consectetur adipisicing elit."));
        expect(react_1.screen.queryByRole('heading')).not.toBeInTheDocument();
    });
});
describe('Alert colors', function () {
    it('should render component with success styles', function () {
        (0, renderWithTheme_1.default)(react_2.default.createElement(_1.default, { color: "success" }, "Lorem, ipsum dolor sit amet consectetur adipisicing elit."));
        expect(react_1.screen.getByTestId('icon-outlined-alert-check')).toBeInTheDocument();
    });
    it('should render component with error styles', function () {
        (0, renderWithTheme_1.default)(react_2.default.createElement(_1.default, { color: "error" }, "Lorem, ipsum dolor sit amet consectetur adipisicing elit."));
        expect(react_1.screen.getByTestId('icon-outlined-alert-cancel')).toBeInTheDocument();
    });
    it('should render component with warning styles', function () {
        (0, renderWithTheme_1.default)(react_2.default.createElement(_1.default, { color: "warning" }, "Lorem, ipsum dolor sit amet consectetur adipisicing elit."));
        expect(react_1.screen.getByTestId('icon-outlined-alert-warning')).toBeInTheDocument();
    });
});
describe('Alert border styles', function () {
    it('should render component without borders by default', function () {
        var styles = (0, renderWithTheme_1.default)(react_2.default.createElement(_1.default, { color: "success" }, "Lorem, ipsum dolor sit amet consectetur adipisicing elit.")).styles;
        expect(styles.toString()).toContain('border: none');
    });
    it('should render component with borders if type is outline', function () {
        var styles = (0, renderWithTheme_1.default)(react_2.default.createElement(_1.default, { color: "success", type: "outlined" }, "Lorem, ipsum dolor sit amet consectetur adipisicing elit.")).styles;
        expect(styles.toString()).toContain('border: solid 1px #37B24D;');
    });
});
describe('Alert custom', function () {
    it('should render component with custom styles if colors is custom', function () {
        var styles = (0, renderWithTheme_1.default)(react_2.default.createElement(_1.default, { color: "custom", customIcon: "outlined-default-mockup", customBackgroundColor: "#ff0000" }, "Lorem, ipsum dolor sit amet consectetur adipisicing elit.")).styles;
        expect(styles.toString()).toContain('background: #ff0000');
        expect(react_1.screen.getByTestId('icon-outlined-default-mockup')).toBeInTheDocument();
    });
    it('should render component with custom styles and without icon', function () {
        var styles = (0, renderWithTheme_1.default)(react_2.default.createElement(_1.default, { color: "custom", customBackgroundColor: "#ff0000" }, "Lorem, ipsum dolor sit amet consectetur adipisicing elit.")).styles;
        expect(styles.toString()).toContain('background: #ff0000');
        expect(react_1.screen.queryByTestId('icon-outlined-default-mockup')).not.toBeInTheDocument();
    });
});
//# sourceMappingURL=Alert.test.js.map