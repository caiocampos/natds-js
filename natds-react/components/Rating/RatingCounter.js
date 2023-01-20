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
exports.isRatingCounter = void 0;
var react_1 = __importDefault(require("react"));
var RatingBase_1 = __importDefault(require("./RatingBase"));
var Label_1 = require("../Label");
var Rating_styles_1 = require("./Rating.styles");
var isRatingCounter = function (props) { return props.variant === 'counter'; };
exports.isRatingCounter = isRatingCounter;
var RatingCounter = function (_a) {
    var ariaLabelGroup = _a.ariaLabelGroup, testID = _a.testID, props = __rest(_a, ["ariaLabelGroup", "testID"]);
    var labelText = (0, Rating_styles_1.useLabelStyles)(props).labelText;
    var rating = (0, Rating_styles_1.useRatingStyles)(props).rating;
    var renderTimes = 1;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: rating, "aria-label": ariaLabelGroup }, Array(renderTimes).fill(0).map(function (_, index) { return ((0, exports.isRatingCounter)(props) && (react_1.default.createElement(RatingBase_1.default, { ariaLabel: props.ariaLabel, key: index.toString(), value: index + 1, size: props.size, testID: "".concat(testID, "-").concat(index + 1) }))); })),
        ((0, exports.isRatingCounter)(props) && props.label) && (react_1.default.createElement(Label_1.Label, { label: props.label, className: labelText }))));
};
exports.default = RatingCounter;
//# sourceMappingURL=RatingCounter.js.map