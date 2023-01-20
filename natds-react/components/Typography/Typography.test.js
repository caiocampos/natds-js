"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var _1 = __importDefault(require("."));
var renderWithTheme_1 = __importDefault(require("../../helpers/renderWithTheme"));
describe('Typography component', function () {
    it('should render the component as body1 when variant is not defined', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, null, "hello")), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
        expect(component.getByText(/hello/i)).toBeInTheDocument();
        expect(styles.includes('font-size: 16px;')).toBeTruthy();
    });
    describe('Heading variants', function () {
        it('should render the component as heading1', function () {
            var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, { variant: "heading1" }, "hello")), styles = _a.styles, component = _a.component;
            expect([styles.toString(), component.container]).toMatchSnapshot();
            expect(component.getByRole('heading')).toBeInTheDocument();
            expect(styles.includes('font-size: 96px;')).toBeTruthy();
        });
        it('should render the component as heading2', function () {
            var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, { variant: "heading2" }, "hello")), styles = _a.styles, component = _a.component;
            expect([styles.toString(), component.container]).toMatchSnapshot();
            expect(component.getByRole('heading')).toBeInTheDocument();
            expect(styles.includes('font-size: 60px;')).toBeTruthy();
        });
        it('should render the component as heading3', function () {
            var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, { variant: "heading3" }, "hello")), styles = _a.styles, component = _a.component;
            expect([styles.toString(), component.container]).toMatchSnapshot();
            expect(component.getByRole('heading')).toBeInTheDocument();
            expect(styles.includes('font-size: 48px;')).toBeTruthy();
        });
        it('should render the component as heading4', function () {
            var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, { variant: "heading4" }, "hello")), styles = _a.styles, component = _a.component;
            expect([styles.toString(), component.container]).toMatchSnapshot();
            expect(component.getByRole('heading')).toBeInTheDocument();
            expect(styles.includes('font-size: 34px;')).toBeTruthy();
        });
        it('should render the component as heading5', function () {
            var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, { variant: "heading5" }, "hello")), styles = _a.styles, component = _a.component;
            expect([styles.toString(), component.container]).toMatchSnapshot();
            expect(component.getByRole('heading')).toBeInTheDocument();
            expect(styles.includes('font-size: 24px;')).toBeTruthy();
        });
        it('should render the component as heading6', function () {
            var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, { variant: "heading6" }, "hello")), styles = _a.styles, component = _a.component;
            expect([styles.toString(), component.container]).toMatchSnapshot();
            expect(component.getByRole('heading')).toBeInTheDocument();
            expect(styles.includes('font-size: 20px;')).toBeTruthy();
        });
    });
    describe('Subtitle variants', function () {
        it('should render the component as subtitle1', function () {
            var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, { variant: "subtitle1" }, "hello")), styles = _a.styles, component = _a.component;
            expect([styles.toString(), component.container]).toMatchSnapshot();
            expect(component.getByText(/hello/i)).toBeInTheDocument();
            expect(styles.includes('font-size: 16px;')).toBeTruthy();
        });
        it('should render the component as subtitle2', function () {
            var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, { variant: "subtitle2" }, "hello")), styles = _a.styles, component = _a.component;
            expect([styles.toString(), component.container]).toMatchSnapshot();
            expect(component.getByText(/hello/i)).toBeInTheDocument();
            expect(styles.includes('font-size: 14px;')).toBeTruthy();
        });
    });
    describe('Body variants', function () {
        it('should render the component as body1', function () {
            var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, { variant: "body1" }, "hello")), styles = _a.styles, component = _a.component;
            expect([styles.toString(), component.container]).toMatchSnapshot();
            expect(component.getByText(/hello/i)).toBeInTheDocument();
            expect(styles.includes('font-size: 16px;')).toBeTruthy();
        });
        it('should render the component as body2', function () {
            var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, { variant: "body2" }, "hello")), styles = _a.styles, component = _a.component;
            expect([styles.toString(), component.container]).toMatchSnapshot();
            expect(component.getByText(/hello/i)).toBeInTheDocument();
            expect(styles.includes('font-size: 14px;')).toBeTruthy();
        });
    });
    describe('Caption variant', function () {
        it('should render the component as caption', function () {
            var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, { variant: "caption" }, "hello")), styles = _a.styles, component = _a.component;
            expect([styles.toString(), component.container]).toMatchSnapshot();
            expect(component.getByText(/hello/i)).toBeInTheDocument();
            expect(styles.includes('font-size: 12px;')).toBeTruthy();
        });
    });
    describe('Overline variant', function () {
        it('should render the component as overline', function () {
            var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, { variant: "overline" }, "hello")), styles = _a.styles, component = _a.component;
            expect([styles.toString(), component.container]).toMatchSnapshot();
            expect(component.getByText(/hello/i)).toBeInTheDocument();
            expect(styles.includes('font-size: 12px;')).toBeTruthy();
            expect(styles.includes('text-transform: uppercase;')).toBeTruthy();
        });
    });
});
//# sourceMappingURL=Typography.test.js.map