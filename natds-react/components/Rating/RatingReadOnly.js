"use strict";
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
exports.isRatingInput = exports.isRatingReadOnly = void 0;
var react_1 = __importDefault(require("react"));
var RatingBase_1 = __importDefault(require("./RatingBase"));
var Rating_styles_1 = require("./Rating.styles");
var isRatingReadOnly = function (props) { return props.variant === 'read-only'; };
exports.isRatingReadOnly = isRatingReadOnly;
var isRatingInput = function (props) { return props.variant === 'input'; };
exports.isRatingInput = isRatingInput;
var RatingReadOnly = function (_a) {
    var ariaLabelGroup = _a.ariaLabelGroup, testID = _a.testID, props = __rest(_a, ["ariaLabelGroup", "testID"]);
    var rating = (0, Rating_styles_1.useRatingStyles)(props).rating;
    var renderTimes = 5;
    var isFilled = function (element) { return ((0, exports.isRatingReadOnly)(props) && element + 1 <= props.rate) || (0, exports.isRatingReadOnly)(props); };
    var isActive = function (element) { return (0, exports.isRatingReadOnly)(props) && element + 1 <= props.rate; };
    return (react_1.default.createElement("div", { className: rating, "aria-label": ariaLabelGroup }, Array(renderTimes).fill(0).map(function (_, index) { return ((0, exports.isRatingReadOnly)(props) && (react_1.default.createElement(RatingBase_1.default, { ariaLabel: props.ariaLabel, iconActive: isActive(index), iconFilled: isFilled(index), key: index.toString(), value: index + 1, size: props.size, testID: "".concat(testID, "-").concat(index + 1) }))); })));
};
exports.default = RatingReadOnly;
//# sourceMappingURL=RatingReadOnly.js.map