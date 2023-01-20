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
exports.SearchClear = void 0;
var React = __importStar(require("react"));
var ClearRounded_1 = __importDefault(require("@material-ui/icons/ClearRounded"));
var SearchClear_styles_1 = require("./SearchClear.styles");
var SearchClear = function (props) {
    var onClearSearch = props.onClearSearch, _a = props.searchIcon, Component = _a === void 0 ? ClearRounded_1.default : _a;
    var root = (0, SearchClear_styles_1.useStyles)().root;
    return (React.createElement(Component, { className: root, onClick: onClearSearch }));
};
exports.SearchClear = SearchClear;
exports.default = exports.SearchClear;
//# sourceMappingURL=SearchClear.js.map