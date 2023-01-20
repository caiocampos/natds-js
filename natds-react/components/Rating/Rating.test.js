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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable max-lines-per-function */
var react_1 = __importDefault(require("react"));
var react_2 = require("@testing-library/react");
var user_event_1 = __importDefault(require("@testing-library/user-event"));
var RatingBase_1 = __importDefault(require("./RatingBase"));
var mock_theme_json_1 = __importDefault(require("../../ThemeProvider/mock-theme.json"));
var renderWithTheme_1 = __importDefault(require("../../helpers/renderWithTheme"));
var Rating_1 = __importDefault(require("./Rating"));
var Rating_styles_1 = require("./Rating.styles");
var ratingBaseProps = {
    ariaLabel: 'rating',
    onClick: function () { return ''; },
    size: 'semi'
};
var ratingCounterProps = {
    ariaLabel: '',
    size: 'semi',
    label: 'Placeholder',
    variant: 'counter'
};
var ratingInputProps = {
    ariaLabel: '',
    size: 'semi',
    label: 'Placeholder',
    variant: 'input',
    onClick: function () { return ''; },
    rate: 0
};
var ratingReadOnlyProps = {
    ariaLabel: '',
    rate: 0,
    size: 'semi',
    variant: 'read-only'
};
describe('Rating', function () {
    describe('Counter', function () {
        it('should render one time when variant is Counter', function () {
            var getAllByTestId = (0, renderWithTheme_1.default)(react_1.default.createElement(Rating_1.default, __assign({}, ratingCounterProps, { testID: "rating-counter" }))).component.getAllByTestId;
            expect(getAllByTestId(/rating-counter/).length).toBe(1);
        });
        it('should render correctly with given props', function () {
            var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(Rating_1.default, __assign({}, ratingCounterProps))), styles = _a.styles, component = _a.component;
            expect([styles.toString(), component.container]).toMatchSnapshot();
        });
        it('should render correctly when align is right', function () {
            var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(Rating_1.default, __assign({}, ratingCounterProps, { align: "right" }))), styles = _a.styles, component = _a.component;
            expect([styles.toString(), component.container]).toMatchSnapshot();
        });
        it('should NOT fire onclick', function () {
            var onClickMock = jest.fn();
            var getByTestId = (0, renderWithTheme_1.default)(
            // @ts-ignore
            react_1.default.createElement(Rating_1.default, __assign({}, ratingCounterProps, { testID: "rating", onClick: onClickMock }))).component.getByTestId;
            react_2.fireEvent.click(getByTestId('rating-1'));
            expect(onClickMock).not.toHaveBeenCalled();
        });
    });
    describe('Input', function () {
        it('should render five times when variant is Input', function () {
            var getAllByTestId = (0, renderWithTheme_1.default)(react_1.default.createElement(Rating_1.default, __assign({}, ratingInputProps, { testID: "rating-input" }))).component.getAllByTestId;
            expect(getAllByTestId(/rating-input/).length).toBe(5);
        });
        it('should render correctly with given props', function () {
            var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(Rating_1.default, __assign({}, ratingInputProps))), styles = _a.styles, component = _a.component;
            expect([styles.toString(), component.container]).toMatchSnapshot();
        });
        it('should render correctly when is disabled', function () {
            var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(Rating_1.default, __assign({}, ratingInputProps, { disabled: true }))), styles = _a.styles, component = _a.component;
            expect([styles.toString(), component.container]).toMatchSnapshot();
        });
        it('should render correctly with label', function () {
            var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(Rating_1.default, __assign({}, ratingInputProps, { label: "Placebolder" }))), styles = _a.styles, component = _a.component;
            expect([styles.toString(), component.container]).toMatchSnapshot();
        });
        it('should call onClick', function () {
            var onClickMock = jest.fn();
            var getByTestId = (0, renderWithTheme_1.default)(react_1.default.createElement(Rating_1.default, __assign({}, ratingInputProps, { testID: "rating", onClick: onClickMock }))).component.getByTestId;
            react_2.fireEvent.click(getByTestId('rating-1'));
            expect(onClickMock).toHaveBeenCalledTimes(1);
        });
        it('should change to active a rating star with mouseEnter', function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a, styles, _b, getByTestId, getAllByTestId, container;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = (0, renderWithTheme_1.default)(react_1.default.createElement(Rating_1.default, __assign({}, ratingInputProps, { testID: "rating" }))), styles = _a.styles, _b = _a.component, getByTestId = _b.getByTestId, getAllByTestId = _b.getAllByTestId, container = _b.container;
                        react_2.fireEvent.mouseEnter(getByTestId('rating-2'));
                        return [4 /*yield*/, (0, react_2.waitFor)(function () {
                                expect([styles.toString(), container]).toMatchSnapshot();
                                expect(getAllByTestId('icon-filled-action-rating').length).toBe(2);
                                expect(getAllByTestId('icon-outlined-action-rating').length).toBe(3);
                            })];
                    case 1:
                        _c.sent();
                        react_2.fireEvent.mouseLeave(getByTestId('rating-2'));
                        expect(getAllByTestId('icon-outlined-action-rating').length).toBe(5);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should move focus when press tab button and call onClick when press space key', function () { return __awaiter(void 0, void 0, void 0, function () {
            var onClickMock, getByTestId, rating1;
            return __generator(this, function (_a) {
                onClickMock = jest.fn();
                getByTestId = (0, renderWithTheme_1.default)(react_1.default.createElement(Rating_1.default, __assign({}, ratingInputProps, { testID: "rating", onClick: onClickMock }))).component.getByTestId;
                rating1 = getByTestId('rating-1');
                expect(rating1).not.toHaveFocus();
                user_event_1.default.tab();
                expect(rating1).toHaveFocus();
                user_event_1.default.type(getByTestId('rating-1'), '{space}');
                expect(onClickMock).toHaveBeenCalledTimes(1);
                return [2 /*return*/];
            });
        }); });
    });
    describe('Read-Only', function () {
        it('should render five times when variant is Read-Only', function () {
            var getAllByTestId = (0, renderWithTheme_1.default)(react_1.default.createElement(Rating_1.default, __assign({}, ratingInputProps, { testID: "rating-read-only" }))).component.getAllByTestId;
            expect(getAllByTestId(/rating-read-only/).length).toBe(5);
        });
        it('should render correctly with given props', function () {
            var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(Rating_1.default, __assign({}, ratingReadOnlyProps))), styles = _a.styles, component = _a.component;
            expect([styles.toString(), component.container]).toMatchSnapshot();
        });
        it('should render correctly with rate equal 3', function () {
            var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(Rating_1.default, __assign({}, ratingReadOnlyProps, { rate: 3 }))), styles = _a.styles, component = _a.component;
            expect([styles.toString(), component.container]).toMatchSnapshot();
        });
        it('should NOT fire onclick', function () {
            var onClickMock = jest.fn();
            var getByTestId = (0, renderWithTheme_1.default)(
            // @ts-ignore
            react_1.default.createElement(Rating_1.default, __assign({}, ratingReadOnlyProps, { testID: "rating", onClick: onClickMock }))).component.getByTestId;
            react_2.fireEvent.click(getByTestId('rating-1'));
            expect(onClickMock).not.toHaveBeenCalled();
        });
    });
});
describe('RatingBase', function () {
    describe('Component', function () {
        it('should render correctly with default props', function () {
            var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(RatingBase_1.default, __assign({}, ratingBaseProps))), styles = _a.styles, component = _a.component;
            expect([styles.toString(), component.container]).toMatchSnapshot();
        });
        it('should render correctly when is disabled', function () {
            var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(RatingBase_1.default, __assign({}, ratingBaseProps, { disabled: true }))), styles = _a.styles, component = _a.component;
            expect([styles.toString(), component.container]).toMatchSnapshot();
        });
        it('should render correctly when is not filled', function () {
            var _a = (0, renderWithTheme_1.default)(react_1.default.createElement(RatingBase_1.default, __assign({}, ratingBaseProps, { iconFilled: false }))), styles = _a.styles, component = _a.component;
            expect([styles.toString(), component.container]).toMatchSnapshot();
        });
        it('should call onClick when is clickable', function () {
            var onClickMock = jest.fn();
            var getByTestId = (0, renderWithTheme_1.default)(react_1.default.createElement(RatingBase_1.default, __assign({}, ratingBaseProps, { onClick: onClickMock, testID: "rating", isClickable: true }))).component.getByTestId;
            react_2.fireEvent.click(getByTestId('rating'));
            expect(onClickMock).toHaveBeenCalledTimes(1);
        });
        it('should NOT call onClick when is disabled', function () {
            var onClickMock = jest.fn();
            var getByTestId = (0, renderWithTheme_1.default)(react_1.default.createElement(RatingBase_1.default, __assign({}, ratingBaseProps, { onClick: onClickMock, testID: "rating", disabled: true }))).component.getByTestId;
            react_2.fireEvent.click(getByTestId('rating'));
            expect(onClickMock).not.toHaveBeenCalledTimes(1);
        });
        it('should call onMouseEnter and onMouseLeave', function () {
            var onMouseEnterMock = jest.fn();
            var onMouseLeaveMock = jest.fn();
            var getByTestId = (0, renderWithTheme_1.default)(react_1.default.createElement(RatingBase_1.default, __assign({}, ratingBaseProps, { onMouseEnter: onMouseEnterMock, onMouseLeave: onMouseLeaveMock, testID: "rating", isClickable: true }))).component.getByTestId;
            react_2.fireEvent.mouseEnter(getByTestId('rating'));
            expect(onMouseEnterMock).toHaveBeenCalledTimes(1);
            react_2.fireEvent.mouseLeave(getByTestId('rating'));
            expect(onMouseLeaveMock).toHaveBeenCalledTimes(1);
        });
    });
    describe('getRatingColor', function () {
        it('should return to hex color when icon is activated, filled and not disabled', function () {
            var result = (0, Rating_styles_1.getRatingColor)(mock_theme_json_1.default)({
                iconFilled: true,
                iconActive: true,
                disabled: false,
                // @ts-ignore
                ariaLabel: '',
                onClick: function () { return ''; },
                size: 'semi'
            });
            expect(result).toBe('#F8B546');
        });
        it('should return to mediumEmphasis color when icon is disabled', function () {
            var result = (0, Rating_styles_1.getRatingColor)(mock_theme_json_1.default)({
                iconFilled: true,
                iconActive: true,
                disabled: true,
                // @ts-ignore
                ariaLabel: '',
                onClick: function () { return ''; },
                size: 'semi'
            });
            expect(result).toBe('#777777');
        });
    });
});
//# sourceMappingURL=Rating.test.js.map