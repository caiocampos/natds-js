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
var renderWithTheme_1 = __importDefault(require("../../../helpers/renderWithTheme"));
var Icon_1 = require("../../Icon");
var defaultProps = {
    onBlur: function () { return ''; },
    onChange: function () { return ''; },
    onFocus: function () { return ''; },
    id: 'example to test'
};
var iconProps = __assign(__assign({}, defaultProps), { action: 'icon', IconComponent: react_1.default.createElement(Icon_1.Icon, { name: "filled-action-rating", color: "highEmphasis" }), onClick: function () { return ''; }, ariaLabel: 'some rating icon button' });
var imageProps = __assign(__assign({}, defaultProps), { action: 'image', src: '', alt: '' });
describe('InputAction component', function () {
    it('should render an icon button when receive action icon', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, __assign({}, iconProps))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly when type is multiline', function () {
        var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(_1.default, __assign({}, imageProps))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
});
//# sourceMappingURL=InputAction.test.js.map