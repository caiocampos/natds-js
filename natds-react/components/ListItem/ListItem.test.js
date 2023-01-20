"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@testing-library/react");
var renderWithTheme_1 = __importDefault(require("../../helpers/renderWithTheme"));
var ListItem_1 = __importDefault(require("./ListItem"));
var Divider_1 = require("../Divider");
describe('ListItem component', function () {
    it('should render correctly', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(ListItem_1.default, { key: "some-item" }, "some item here")), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly with divider', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(ListItem_1.default, { key: "some-item", SeparatorComponent: react_1.default.createElement(Divider_1.Divider, null) }, "some item here")), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly when interaction is selectable and the list item is selected', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(ListItem_1.default, { key: "some-item", interaction: "selectable", selected: true }, "some item here")), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should call onClick', function () {
        var onClickMock = jest.fn();
        var getByTestId = (0, renderWithTheme_1.default)(react_1.default.createElement(ListItem_1.default, { interaction: "action", key: "some-item", onClick: onClickMock, testID: "list-item-test" }, "some item here")).component.getByTestId;
        react_2.fireEvent.click(getByTestId('list-item-test'));
        expect(onClickMock).toHaveBeenCalled();
    });
});
//# sourceMappingURL=ListItem.test.js.map