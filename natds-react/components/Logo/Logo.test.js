"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var renderWithTheme_1 = __importDefault(require("../../helpers/renderWithTheme"));
var Logo_1 = __importDefault(require("./Logo"));
describe('Logo component', function () {
    it('should render correctly with default props', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(Logo_1.default, null)), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly with medium size', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(Logo_1.default, { size: "medium" })), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly with custom color', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(Logo_1.default, { color: "primary" })), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly with secondary model', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(Logo_1.default, { model: "a" })), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
});
//# sourceMappingURL=Logo.test.js.map