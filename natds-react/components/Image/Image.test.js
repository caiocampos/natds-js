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
var react_1 = require("@testing-library/react");
var React = __importStar(require("react"));
var _1 = __importDefault(require("."));
var renderWithTheme_1 = __importDefault(require("../../helpers/renderWithTheme"));
describe('Image component', function () {
    it('should render correctly with default props', function () {
        var _a = (0, renderWithTheme_1.default)(React.createElement(_1.default, { sourceImage: "https://picsum.photos/256" })), styles = _a.styles, component = _a.component;
        expect([styles.toString(), component]).toMatchSnapshot();
    });
    it('should render with overlay when highlight is true', function () {
        var component = (0, renderWithTheme_1.default)(React.createElement(_1.default, { highlight: true, sourceImage: "https://picsum.photos/256" })).component;
        expect(component.getByTestId('image-overlay')).toBeInTheDocument();
    });
    it('should render fallback image when image is not loaded', function () {
        var component = (0, renderWithTheme_1.default)(React.createElement(_1.default, { highlight: true, sourceImage: "INVALID", fallbackImage: "FALLBACK_IMAGE" })).component;
        var image = component.getByRole('img');
        expect(image).toHaveAttribute('src', 'INVALID');
        react_1.fireEvent.error(image);
        expect(image).toHaveAttribute('src', 'FALLBACK_IMAGE');
    });
    it('should render INVALID when fallbackImage is not defined', function () {
        var component = (0, renderWithTheme_1.default)(React.createElement(_1.default, { highlight: true, sourceImage: "INVALID" })).component;
        var image = component.getByRole('img');
        expect(image).toHaveAttribute('src', 'INVALID');
        react_1.fireEvent.error(image);
        expect(image).toHaveAttribute('src', 'INVALID');
    });
});
//# sourceMappingURL=Image.test.js.map