Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../../index");
describe('Biome Theme', function () {
    var _a = index_1.themes.biome, light = _a.light, dark = _a.dark;
    test('it should match Biome Light theme snapshot', function () {
        expect(light).toMatchSnapshot('Biome Light Theme');
    });
    test('it should match Biome Dark theme snapshot', function () {
        expect(dark).toMatchSnapshot('Biome Dark Theme');
    });
});
//# sourceMappingURL=biome.test.js.map