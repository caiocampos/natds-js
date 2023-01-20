"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ProgressIndicator_styles_1 = __importDefault(require("./ProgressIndicator.styles"));
var ProgressIndicator = react_1.default.forwardRef(function (_a, ref) {
    var ariaLabel = _a.ariaLabel, _b = _a.showBackdrop, showBackdrop = _b === void 0 ? false : _b, _c = _a.size, size = _c === void 0 ? 'medium' : _c, _d = _a.testID, testID = _d === void 0 ? 'ds-progress-indicator' : _d, _e = _a.className, className = _e === void 0 ? '' : _e;
    var _f = (0, ProgressIndicator_styles_1.default)({ size: size, showBackdrop: showBackdrop }), backdrop = _f.backdrop, loader = _f.loader;
    return (react_1.default.createElement("div", { ref: ref, className: backdrop, role: "progressbar", "aria-label": ariaLabel, "data-testid": testID },
        react_1.default.createElement("div", { className: "".concat(className, " ").concat(loader) },
            react_1.default.createElement("svg", { viewBox: "25 25 50 50" },
                react_1.default.createElement("circle", { cx: "50", cy: "50", r: "20" })))));
});
exports.default = ProgressIndicator;
//# sourceMappingURL=ProgressIndicator.js.map