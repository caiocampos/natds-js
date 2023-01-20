Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../../index");
describe('The Body Shop Theme', function () {
    var _a = index_1.themes.theBodyShop, light = _a.light, dark = _a.dark;
    test('it should match The Body Shop Light theme snapshot', function () {
        expect(light).toMatchSnapshot('The Body Shop Light Theme');
    });
    test('it should match The Body Shop Dark theme snapshot', function () {
        expect(dark).toMatchSnapshot('The Body Shop Dark Theme');
    });
});
//# sourceMappingURL=theBodyShop.test.js.map