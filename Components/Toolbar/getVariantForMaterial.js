Object.defineProperty(exports, "__esModule", { value: true });
exports.getVariantForMaterial = void 0;
var getVariantForMaterial = function (_a) {
    var variant = _a.variant;
    if (typeof variant === 'undefined' || variant === 'prominent') {
        return 'regular';
    }
    return variant;
};
exports.getVariantForMaterial = getVariantForMaterial;
//# sourceMappingURL=getVariantForMaterial.js.map