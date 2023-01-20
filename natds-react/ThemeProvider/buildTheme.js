"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var natds_themes_1 = __importDefault(require("@naturacosmeticos/natds-themes"));
var buildTheme = function (brand, mode) {
    if (brand === void 0) { brand = 'natura'; }
    if (mode === void 0) { mode = 'light'; }
    if (!natds_themes_1.default)
        throw new Error('Unable to load tokens dependency. Check the installation logs for errors');
    return natds_themes_1.default[brand][mode];
};
exports.default = buildTheme;
//# sourceMappingURL=buildTheme.js.map