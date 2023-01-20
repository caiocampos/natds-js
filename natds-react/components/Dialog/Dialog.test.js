"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable max-lines-per-function */
var react_1 = __importDefault(require("react"));
var react_2 = require("@testing-library/react");
var renderWithTheme_1 = __importDefault(require("../../helpers/renderWithTheme"));
var Button_1 = require("../Button");
var _1 = require(".");
var DialogBody_1 = require("./DialogBody");
var DialogHeader_1 = require("./DialogHeader");
var DialogFooter_1 = require("./DialogFooter");
jest.mock('../Portal/Portal');
describe('Dialog', function () {
    test('should render correctly with DialogBody and DialogFooter', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.Dialog, { role: "alertdialog", ariaDescribedBy: "description", open: true },
            react_1.default.createElement(DialogBody_1.DialogBody, null,
                react_1.default.createElement("p", { id: "description" }, "something on the body")),
            react_1.default.createElement(DialogFooter_1.DialogFooter, { primaryButton: react_1.default.createElement(Button_1.Button, { onClick: function () { return ''; } }, "button") }))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    test('should render correctly with DialogHeader, DialogBody and DialogFooter', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.Dialog, { role: "dialog", ariaLabelledBy: "title", ariaDescribedBy: "description", open: true },
            react_1.default.createElement(DialogHeader_1.DialogHeader, { title: "Example", id: "title" }),
            react_1.default.createElement(DialogBody_1.DialogBody, null,
                react_1.default.createElement("p", { id: "description" }, "something on the body")),
            react_1.default.createElement(DialogFooter_1.DialogFooter, { primaryButton: react_1.default.createElement(Button_1.Button, { onClick: function () { return ''; } }, "button") }))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    test('should render correctly the divider at DialogBody', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.Dialog, { role: "dialog", ariaLabelledBy: "title", ariaDescribedBy: "description", open: true },
            react_1.default.createElement(DialogHeader_1.DialogHeader, { title: "Example", id: "title" }),
            react_1.default.createElement(DialogBody_1.DialogBody, { showDivider: true },
                react_1.default.createElement("p", { id: "description" }, "something on the body")),
            react_1.default.createElement(DialogFooter_1.DialogFooter, { primaryButton: react_1.default.createElement(Button_1.Button, { onClick: function () { return ''; } }, "button") }))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    test('should render correctly with the given size', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.Dialog, { role: "dialog", ariaLabelledBy: "title", ariaDescribedBy: "description", size: "large", open: true },
            react_1.default.createElement(DialogHeader_1.DialogHeader, { title: "Example", id: "title" }),
            react_1.default.createElement(DialogBody_1.DialogBody, { showDivider: true },
                react_1.default.createElement("p", { id: "description" }, "something on the body")),
            react_1.default.createElement(DialogFooter_1.DialogFooter, { primaryButton: react_1.default.createElement(Button_1.Button, { onClick: function () { return ''; } }, "button") }))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    test('should render correctly when window is smaller than component width', function () {
        (0, react_2.act)(function () {
            global.innerWidth = 320;
            global.innerHeight = 664;
            (0, react_2.fireEvent)(window, new Event('resize'));
        });
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.Dialog, { role: "dialog", ariaLabelledBy: "title", ariaDescribedBy: "description", size: "large", open: true },
            react_1.default.createElement(DialogHeader_1.DialogHeader, { title: "Example", id: "title" }),
            react_1.default.createElement(DialogBody_1.DialogBody, { showDivider: true },
                react_1.default.createElement("p", { id: "description" }, "something on the body")),
            react_1.default.createElement(DialogFooter_1.DialogFooter, { primaryButton: react_1.default.createElement(Button_1.Button, { onClick: function () { return ''; } }, "button") }))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    test('should not render component when is not open', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.Dialog, { role: "dialog", testID: "ds-dialog" }, " something ")), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    test('should call handleOnKeyDown if Escape is pressed', function () {
        var onEscapeKeyDownMock = jest.fn();
        var component = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.Dialog, { role: "dialog", onEscapeKeyDown: onEscapeKeyDownMock, open: true, testID: "ds-dialog" }, "something")).component;
        var dialog = component.getByTestId('ds-dialog');
        (0, react_2.act)(function () {
            dialog.focus();
            react_2.fireEvent.keyDown(dialog, {
                key: 'Escape',
                code: 'Escape',
                keyCode: 27,
                charCode: 27
            });
        });
        expect(onEscapeKeyDownMock).toHaveBeenCalled();
    });
    test('should not call handleOnKeyDown if a key other than Escape was pressed', function () {
        var onEscapeKeyDownMock = jest.fn();
        var component = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.Dialog, { role: "dialog", onEscapeKeyDown: onEscapeKeyDownMock, open: true, testID: "ds-dialog" }, "something")).component;
        var dialog = component.getByTestId('ds-dialog');
        (0, react_2.act)(function () {
            dialog.focus();
            react_2.fireEvent.keyDown(dialog, {
                key: 'Meta',
                code: 'Meta',
                keyCode: 91,
                charCode: 91
            });
        });
        expect(onEscapeKeyDownMock).not.toHaveBeenCalled();
    });
});
//# sourceMappingURL=Dialog.test.js.map