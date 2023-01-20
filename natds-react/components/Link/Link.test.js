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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var _1 = __importDefault(require("."));
var renderWithTheme_1 = __importDefault(require("../../helpers/renderWithTheme"));
var Icon_1 = require("../Icon");
var defaultProps = {
    text: 'Link',
    href: 'https://'
};
describe('Link component', function () {
    it('should render correctly with default props', function () {
        var _a = (0, renderWithTheme_1.default)(React.createElement(_1.default, __assign({}, defaultProps))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly when the variant is regular', function () {
        var _a = (0, renderWithTheme_1.default)(React.createElement(_1.default, __assign({}, defaultProps, { variant: "regular" }))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly when the textColor is light', function () {
        var _a = (0, renderWithTheme_1.default)(React.createElement(_1.default, __assign({}, defaultProps, { textColor: "light" }))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly with IconComponent rendered to the left', function () {
        var _a = (0, renderWithTheme_1.default)(React.createElement(_1.default, __assign({}, defaultProps, { iconPosition: "left", IconComponent: React.createElement(Icon_1.Icon, { name: "filled-default-mockup" }) }))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly with IconComponent rendered to the right by default', function () {
        var _a = (0, renderWithTheme_1.default)(React.createElement(_1.default, __assign({}, defaultProps, { IconComponent: React.createElement(Icon_1.Icon, { name: "filled-default-mockup" }) }))), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
});
//# sourceMappingURL=Link.test.js.map