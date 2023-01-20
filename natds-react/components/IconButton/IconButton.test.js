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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_1 = require("@testing-library/react");
var renderWithTheme_1 = __importDefault(require("../../helpers/renderWithTheme"));
var _1 = __importDefault(require("."));
var Icon_1 = __importDefault(require("../Icon"));
var renderIconButton = function (props) {
    var _a = props.iconSize, iconSize = _a === void 0 ? 'standard' : _a, _b = props.iconColor, iconColor = _b === void 0 ? 'highEmphasis' : _b, rest = __rest(props, ["iconSize", "iconColor"]);
    return (React.createElement(_1.default, __assign({ IconComponent: React.createElement(Icon_1.default, { size: iconSize, name: "outlined-default-mockup", color: iconColor }), onClick: function () { return ({}); }, ariaLabel: "" }, rest)));
};
describe('Icon Button component', function () {
    it('should render correctly with default props', function () {
        var _a = (0, renderWithTheme_1.default)(renderIconButton({})), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should call onClick', function () {
        var onClickMock = jest.fn();
        var getByTestId = (0, renderWithTheme_1.default)(renderIconButton({ testID: 'btn-test', onClick: onClickMock })).component.getByTestId;
        react_1.fireEvent.click(getByTestId('btn-test'));
        expect(onClickMock).toHaveBeenCalled();
    });
    it('should render correctly when is disabled', function () {
        var _a = (0, renderWithTheme_1.default)(renderIconButton({ iconColor: 'mediumEmphasis', disabled: true })), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly when the backgroundStyle is float', function () {
        var _a = (0, renderWithTheme_1.default)(renderIconButton({ backgroundStyle: 'float' })), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly when the backgroundStyle is float and is disabled', function () {
        var _a = (0, renderWithTheme_1.default)(renderIconButton({ backgroundStyle: 'float', disabled: true, iconColor: 'mediumEmphasis' })), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly when the backgroundStyle is overlay', function () {
        var _a = (0, renderWithTheme_1.default)(renderIconButton({ backgroundStyle: 'overlay' })), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly when the backgroundStyle is overlay and is disabled', function () {
        var _a = (0, renderWithTheme_1.default)(renderIconButton({ backgroundStyle: 'overlay', disabled: true, iconColor: 'lowEmphasis' })), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly when the size is semiX', function () {
        var _a = (0, renderWithTheme_1.default)(renderIconButton({ size: 'semiX', iconSize: 'semi' })), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly when the size is medium', function () {
        var _a = (0, renderWithTheme_1.default)(renderIconButton({ size: 'medium', iconSize: 'semiX' })), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly when the color is primary', function () {
        var _a = (0, renderWithTheme_1.default)(renderIconButton({ iconColor: 'primary' })), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly when the color is surface', function () {
        var _a = (0, renderWithTheme_1.default)(renderIconButton({ iconColor: 'surface' })), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
});
//# sourceMappingURL=IconButton.test.js.map