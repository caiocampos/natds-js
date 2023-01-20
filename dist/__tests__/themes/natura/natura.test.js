Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../../index");
describe('Natura Theme', function () {
    var _a = index_1.themes.natura, light = _a.light, dark = _a.dark;
    test('it should match Natura Light theme snapshot', function () {
        expect(light).toMatchSnapshot('Natura Light Theme');
    });
    test('it should match Natura Dark theme snapshot', function () {
        expect(dark).toMatchSnapshot('Natura Dark Theme');
    });
});
//# sourceMappingURL=natura.test.js.map