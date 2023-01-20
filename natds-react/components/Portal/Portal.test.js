"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@testing-library/react");
var Portal_1 = require("./Portal");
describe('Portal', function () {
    beforeAll(function () {
        document.body.innerHTML = '<div id="container"></div>';
    });
    it('should render element into body as default', function () {
        var component = (0, react_2.render)(react_1.default.createElement(Portal_1.Portal, null,
            react_1.default.createElement("p", { "data-testid": "something" }, "something")));
        expect(component.baseElement).toMatchSnapshot();
        expect(document.body).toContainElement(component.getByTestId('something'));
    });
    it('should render element into the given container', function () {
        var component = (0, react_2.render)(react_1.default.createElement(Portal_1.Portal, { container: function () { return document.getElementById('container'); } },
            react_1.default.createElement("p", { "data-testid": "something" }, "something")));
        expect(component.baseElement).toMatchSnapshot();
        expect(document.getElementById('container')).toContainElement(component.getByTestId('something'));
    });
});
//# sourceMappingURL=Portal.test.js.map