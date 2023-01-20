"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Ripple_1 = __importDefault(require("../Ripple"));
var ListItem_styles_1 = __importDefault(require("./ListItem.styles"));
var ListItem = react_1.default.forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.interaction, interaction = _c === void 0 ? 'none' : _c, onClick = _a.onClick, _d = _a.selected, selected = _d === void 0 ? false : _d, SeparatorComponent = _a.SeparatorComponent, testID = _a.testID;
    var listItem = (0, ListItem_styles_1.default)({ selected: selected, interaction: interaction }).listItem;
    return (react_1.default.createElement(Ripple_1.default, { disabled: interaction !== 'action', fullWidth: true },
        react_1.default.createElement("li", { className: "".concat(className, " ").concat(listItem), onClick: onClick, "data-testid": testID, ref: ref, tabIndex: 0 }, children),
        SeparatorComponent));
});
exports.default = ListItem;
//# sourceMappingURL=ListItem.js.map