"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var renderWithTheme_1 = __importDefault(require("../../helpers/renderWithTheme"));
var Card_1 = __importDefault(require("./Card"));
describe('Card component', function () {
    it('should render correctly with default props', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(Card_1.default, null, "some content")), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should not apply box-shadow style', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(Card_1.default, { elevation: false }, "some content")), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should not apply border-radius style', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(Card_1.default, { radius: false }, "some content")), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
});
//# sourceMappingURL=Card.test.js.map