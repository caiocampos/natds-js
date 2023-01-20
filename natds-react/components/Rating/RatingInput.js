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
exports.isRatingInput = void 0;
var react_1 = __importStar(require("react"));
var RatingBase_1 = __importDefault(require("./RatingBase"));
var Label_1 = require("../Label");
var Rating_styles_1 = require("./Rating.styles");
var isRatingInput = function (props) { return props.variant === 'input'; };
exports.isRatingInput = isRatingInput;
var RatingInput = function (_a) {
    var ariaLabelGroup = _a.ariaLabelGroup, testID = _a.testID, props = __rest(_a, ["ariaLabelGroup", "testID"]);
    var _b = (0, react_1.useState)(0), hover = _b[0], setHover = _b[1];
    var labelText = (0, Rating_styles_1.useLabelStyles)(props).labelText;
    var rating = (0, Rating_styles_1.useRatingStyles)(props).rating;
    var renderTimes = 5;
    var isActive = function (element) { return ((0, exports.isRatingInput)(props) && element + 1 <= props.rate) || element + 1 <= hover; };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: rating, "aria-label": ariaLabelGroup }, Array(renderTimes).fill(0).map(function (_, index) { return ((0, exports.isRatingInput)(props) && (react_1.default.createElement(RatingBase_1.default, { ariaLabel: props.ariaLabel, disabled: props.disabled, iconActive: isActive(index), iconFilled: isActive(index), isClickable: true, key: index.toString(), onClick: props.onClick, onMouseEnter: function () { return !props.disabled && setHover(index + 1); }, onMouseLeave: function () { return setHover(0); }, value: index + 1, size: props.size, testID: "".concat(testID, "-").concat(index + 1) }))); })),
        ((0, exports.isRatingInput)(props) && props.label) && (react_1.default.createElement(Label_1.Label, { label: props.label, className: labelText }))));
};
exports.default = RatingInput;
//# sourceMappingURL=RatingInput.js.map