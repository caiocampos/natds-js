"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var _1 = __importDefault(require("."));
var renderWithTheme_1 = __importDefault(require("../../helpers/renderWithTheme"));
describe('MenuItem component', function () {
    it('should render correctly with default props', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, null, "Menu Item")), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly with submenu type props', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, { type: "submenu" }, "Menu Item")), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly with title type props', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, { type: "title" }, "Menu Item")), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly with disabled props', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, { disabled: true }, "Menu Item")), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly with selected props', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, { selected: true }, "Menu Item")), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly with activated props', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, { activated: true }, "Menu Item")), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
});
//# sourceMappingURL=MenuItem.test.js.map