"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var _1 = __importDefault(require("."));
var renderWithTheme_1 = __importDefault(require("../../helpers/renderWithTheme"));
describe('Collapse component', function () {
    it('should render correctly with default props and opened', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, { open: true }, "something")), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly with default props and closed', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, { open: false }, "something")), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
});
//# sourceMappingURL=Collapse.test.js.map