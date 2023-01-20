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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildDrawerMenuItems = void 0;
// eslint-disable-next-line no-use-before-define
var React = __importStar(require("react"));
var DrawerMenuSection_1 = require("../DrawerMenuSection");
var DrawerMenuItem_1 = require("../DrawerMenuItem");
var BuildDrawerMenuItems = function (props, key) {
    if (props.list) {
        return React.createElement(DrawerMenuSection_1.DrawerMenuSection, __assign({ key: key }, props));
    }
    return React.createElement(DrawerMenuItem_1.DrawerMenuItem, __assign({ key: key }, props));
};
exports.BuildDrawerMenuItems = BuildDrawerMenuItems;
exports.BuildDrawerMenuItems.displayName = 'BuildDrawerMenuItems';
exports.default = exports.BuildDrawerMenuItems;
//# sourceMappingURL=BuildDrawerMenuItems.js.map