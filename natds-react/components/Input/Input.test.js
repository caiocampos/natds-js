"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var _1 = __importDefault(require("."));
var renderWithTheme_1 = __importDefault(require("../../helpers/renderWithTheme"));
var defaultProps = {
    id: 'example_to_test'
};
describe('Input component', function () {
    it('should render correctly with default props', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, __assign({}, defaultProps))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
        expect(component.getByTestId('ds-input')).not.toBeDisabled();
        expect(component.getByTestId('ds-input')).not.toBeRequired();
    });
    it('should render correctly when type is multiline', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, __assign({}, defaultProps, { type: "multiline" }))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
        expect(component.getByTestId('ds-input-multiline')).not.toBeDisabled();
        expect(component.getByTestId('ds-input-multiline')).not.toBeRequired();
        expect(component.getByTestId('ds-input-multiline')).toHaveProperty('readOnly', false);
    });
});
//# sourceMappingURL=Input.test.js.map