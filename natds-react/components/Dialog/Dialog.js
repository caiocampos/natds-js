"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Dialog_styles_1 = __importDefault(require("./Dialog.styles"));
var useWindowSize_1 = require("../../hooks/useWindowSize");
var Portal_1 = require("../Portal");
var Dialog = react_1.default.forwardRef(function (_a, ref) {
    var ariaDescribedBy = _a.ariaDescribedBy, ariaLabelledBy = _a.ariaLabelledBy, children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, container = _a.container, onEscapeKeyDown = _a.onEscapeKeyDown, role = _a.role, _c = _a.open, open = _c === void 0 ? false : _c, _d = _a.size, size = _d === void 0 ? 'medium' : _d, testID = _a.testID;
    var width = (0, useWindowSize_1.useWindowSize)().width;
    var _e = (0, Dialog_styles_1.default)({ open: open, size: size, width: width }), dialog = _e.dialog, overlay = _e.overlay;
    var handleOnKeyDown = function (e) {
        document.addEventListener('keydown', function (event) {
            if (onEscapeKeyDown && event.key && event.key === 'Escape') {
                onEscapeKeyDown(e);
            }
        });
    };
    return (react_1.default.createElement(react_1.default.Fragment, null, open && (react_1.default.createElement(Portal_1.Portal, { container: container },
        react_1.default.createElement("div", { "aria-describedby": ariaDescribedBy, "aria-labelledby": ariaLabelledBy, "aria-modal": true, className: "".concat(className, " ").concat(dialog), "data-testid": testID, onKeyDown: handleOnKeyDown, role: role, tabIndex: 0, ref: ref }, children),
        react_1.default.createElement("div", { className: overlay })))));
});
exports.default = Dialog;
//# sourceMappingURL=Dialog.js.map