"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_jss_1 = require("react-jss");
var styles = (0, react_jss_1.createUseStyles)({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 16,
        maxWidth: 400,
        flexDirection: 'row'
    }
});
var StoryContainer = function (_a) {
    var children = _a.children;
    var classes = styles();
    return (react_1.default.createElement("div", { className: classes.container }, children));
};
exports.default = StoryContainer;
//# sourceMappingURL=StoryContainer.js.map