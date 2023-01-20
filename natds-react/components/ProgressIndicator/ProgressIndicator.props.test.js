"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var renderWithTheme_1 = __importDefault(require("../../helpers/renderWithTheme"));
var ProgressIndicator_1 = __importDefault(require("./ProgressIndicator"));
describe('Progress Indicator', function () {
    it('should render correctly with default props', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(ProgressIndicator_1.default, { ariaLabel: "ds-progress-indicator" })), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly with the given size', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(ProgressIndicator_1.default, { size: "standard", ariaLabel: "ds-progress-indicator" })), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly a layer behind the component', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(ProgressIndicator_1.default, { showBackdrop: true, ariaLabel: "ds-progress-indicator" })), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
});
//# sourceMappingURL=ProgressIndicator.props.test.js.map