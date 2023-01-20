"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@testing-library/react");
var TabItem_1 = __importDefault(require("../TabItem"));
var _1 = __importDefault(require("."));
var renderWithTheme_1 = __importDefault(require("../../helpers/renderWithTheme"));
var onClick = jest.fn();
describe('Tab component', function () {
    it('should render correctly with default props', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, null,
            react_1.default.createElement(TabItem_1.default, { onClick: onClick }, "Tab 1"),
            react_1.default.createElement(TabItem_1.default, { onClick: onClick }, "Tab 2"),
            react_1.default.createElement(TabItem_1.default, { onClick: onClick }, "Tab 3"))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly with align center', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, { align: "center" },
            react_1.default.createElement(TabItem_1.default, { onClick: onClick }, "Tab 1"),
            react_1.default.createElement(TabItem_1.default, { onClick: onClick }, "Tab 2"),
            react_1.default.createElement(TabItem_1.default, { onClick: onClick }, "Tab 3"))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly with align right', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, { align: "center" },
            react_1.default.createElement(TabItem_1.default, { onClick: onClick }, "Tab 1"),
            react_1.default.createElement(TabItem_1.default, { onClick: onClick }, "Tab 2"),
            react_1.default.createElement(TabItem_1.default, { onClick: onClick }, "Tab 3"))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly with elevation is false', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, { elevation: false },
            react_1.default.createElement(TabItem_1.default, { onClick: onClick }, "Tab 1"),
            react_1.default.createElement(TabItem_1.default, { onClick: onClick }, "Tab 2"),
            react_1.default.createElement(TabItem_1.default, { onClick: onClick }, "Tab 3"))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly with color is false', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, { color: false },
            react_1.default.createElement(TabItem_1.default, { onClick: onClick }, "Tab 1"),
            react_1.default.createElement(TabItem_1.default, { onClick: onClick }, "Tab 2"),
            react_1.default.createElement(TabItem_1.default, { onClick: onClick }, "Tab 3"))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly with position is scrollable', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, { position: "scrollable" },
            react_1.default.createElement(TabItem_1.default, { onClick: onClick }, "Tab 1"),
            react_1.default.createElement(TabItem_1.default, { onClick: onClick }, "Tab 2"),
            react_1.default.createElement(TabItem_1.default, { onClick: onClick }, "Tab 3"))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render navigation buttons when position is scrollable', function () {
        (0, renderWithTheme_1.default)(react_1.default.createElement("div", { style: { width: '200px' } },
            react_1.default.createElement(_1.default, { position: "scrollable" },
                react_1.default.createElement(TabItem_1.default, { onClick: onClick, isActive: true }, "Tab 1"),
                react_1.default.createElement(TabItem_1.default, { onClick: onClick }, "Tab 2"),
                react_1.default.createElement(TabItem_1.default, { onClick: onClick }, "Tab 3"),
                react_1.default.createElement(TabItem_1.default, { onClick: onClick }, "Tab 4"),
                react_1.default.createElement(TabItem_1.default, { onClick: onClick }, "Tab 5"))));
        var btnPrev = react_2.screen.getByTestId('btn-prev');
        var btnNext = react_2.screen.getByTestId('btn-next');
        expect(btnPrev).toBeInTheDocument();
        expect(btnNext).toBeInTheDocument();
    });
});
//# sourceMappingURL=Tab.test.js.map