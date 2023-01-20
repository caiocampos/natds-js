"use strict";
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
/* eslint-disable @typescript-eslint/ban-ts-comment */
var react_1 = require("@testing-library/react");
var React = __importStar(require("react"));
var _1 = __importDefault(require("."));
var renderWithTheme_1 = __importDefault(require("../../helpers/renderWithTheme"));
var AvatarIcon_1 = __importStar(require("./AvatarIcon"));
var AvatarImage_1 = __importDefault(require("./AvatarImage"));
var AvatarLabel_1 = __importDefault(require("./AvatarLabel"));
describe('Avatar component', function () {
    it('should render correctly with default props', function () {
        // @ts-expect-error component without type
        var _a = (0, renderWithTheme_1.default)(React.createElement(_1.default, null)), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    it('should render correctly with different size', function () {
        // @ts-expect-error component without type
        var _a = (0, renderWithTheme_1.default)(React.createElement(_1.default, { size: "semi" })), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component.container]).toMatchSnapshot();
    });
    describe('Label variant', function () {
        it('should render correctly when the variant is type label', function () {
            var component = (0, renderWithTheme_1.default)(React.createElement(_1.default, { type: "label", label: "DS" }));
            var subcomponent = (0, renderWithTheme_1.default)(React.createElement(AvatarLabel_1.default, { type: "label", label: "DS" }));
            expect([component.styles.toString(), component.component.container]).toMatchSnapshot();
            expect([subcomponent.styles.toString(), subcomponent.component.container]).toMatchSnapshot();
        });
        it('should render correctly when the variant is type label with default label', function () {
            var _a = (0, renderWithTheme_1.default)(React.createElement(_1.default, { type: "label" })), styles = _a.styles, component = _a.component;
            expect(component.container).toHaveTextContent('NA');
            expect([styles.toString(), component.container]).toMatchSnapshot();
        });
    });
    describe('Icon variant', function () {
        it('should render correctly when the variant is type icon', function () {
            var component = (0, renderWithTheme_1.default)(React.createElement(_1.default, { type: "icon" }));
            var subcomponent = (0, renderWithTheme_1.default)(React.createElement(AvatarIcon_1.default, { type: "icon" }));
            expect([component.toString(), component.component.container]).toMatchSnapshot();
            expect([subcomponent.toString(), subcomponent.component.container]).toMatchSnapshot();
        });
        it('should render correctly when the variant is type icon with the given iconName', function () {
            var _a = (0, renderWithTheme_1.default)(React.createElement(_1.default, { type: "icon", name: "outlined-action-like" })), styles = _a.styles, component = _a.component;
            expect([styles.toString(), component.container]).toMatchSnapshot();
        });
    });
    describe('Image variant', function () {
        it('should render correctly with image variant', function () {
            var component = (0, renderWithTheme_1.default)(React.createElement(_1.default, { type: "image", src: "image.jpg", alt: "" }));
            var subcomponent = (0, renderWithTheme_1.default)(React.createElement(AvatarImage_1.default, { type: "image", src: "image.jpg", alt: "" }));
            expect([component.styles.toString(), component.component.container]).toMatchSnapshot();
            expect([subcomponent.styles.toString(), subcomponent.component.container]).toMatchSnapshot();
        });
        it('should fire onError when the image src is broken', function () {
            var onErrorMock = jest.fn();
            var _a = (0, renderWithTheme_1.default)(React.createElement(_1.default, { type: "image", src: "image.junk", alt: "image", onError: onErrorMock })), styles = _a.styles, component = _a.component;
            react_1.fireEvent.error(component.getByAltText('image'));
            expect([styles.toString(), component.container]).toMatchSnapshot();
            expect(onErrorMock).toHaveBeenCalled();
        });
    });
});
describe('convertIconSize', function () {
    it('should return the small size when the input is standard', function () {
        expect((0, AvatarIcon_1.convertIconSize)('standard')).toBe('small');
    });
});
//# sourceMappingURL=Avatar.test.js.map