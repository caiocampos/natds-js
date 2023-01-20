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
var react_1 = __importDefault(require("react"));
var Badge_1 = __importStar(require("./Badge"));
var renderWithTheme_1 = __importDefault(require("../../helpers/renderWithTheme"));
describe('Badge component', function () {
    describe('Pulse variant', function () {
        it('should render correctly', function () {
            var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(Badge_1.default, { variant: "pulse" })), styles = _a.styles, component = _a.component;
            expect([styles.toString(), component.container]).toMatchSnapshot();
        });
    });
    describe('Dot variant', function () {
        it('should render correctly', function () {
            var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(Badge_1.default, { variant: "dot" })), styles = _a.styles, component = _a.component;
            expect([styles.toString(), component.container]).toMatchSnapshot();
        });
    });
    describe('Standard variant', function () {
        it('should render correctly', function () {
            var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(Badge_1.default, { variant: "standard", value: 99 })), styles = _a.styles, component = _a.component;
            expect([styles.toString(), component.container]).toMatchSnapshot();
        });
        it('should display the limit with a plus sign when it is less or equal than the given value.', function () {
            var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(Badge_1.default, { variant: "standard", value: 99, limit: 99, testID: "ds-standard-badge" })), styles = _a.styles, component = _a.component;
            var element = component.getByTestId('ds-standard-badge');
            expect(element).toHaveTextContent(/^99\+$/);
            expect([styles.toString(), component.container]).toMatchSnapshot();
        });
    });
    describe('buildValue', function () {
        it('should only return the value when it is less than the limit', function () {
            expect((0, Badge_1.buildValue)({ value: 99, limit: 100, variant: 'standard' })).toBe(99);
        });
        it('should return the limit with a plus sign when the value is greater or equal than it', function () {
            expect((0, Badge_1.buildValue)({ value: 99, limit: 99, variant: 'standard' })).toBe('99+');
        });
    });
    describe('isBadgeStandard', function () {
        it('should return true when the variant is standard', function () {
            var props = { variant: 'standard' };
            expect((0, Badge_1.isBadgeStandard)(props)).toBe(true);
        });
        it('should return false when the variant is different than standard', function () {
            var props = { variant: 'dot' };
            expect((0, Badge_1.isBadgeStandard)(props)).toBe(false);
        });
    });
});
//# sourceMappingURL=Badge.test.js.map