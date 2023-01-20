Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../../index");
describe('Aesop Theme', function () {
    var _a = index_1.themes.aesop, dark = _a.dark, light = _a.light;
    test('it should match Aesop Light theme snapshot', function () {
        expect(light).toMatchSnapshot('Aesop Light Theme');
    });
    test('it should match Aesop Dark theme snapshot', function () {
        expect(dark).toMatchSnapshot('Aesop Dark Theme');
    });
});
//# sourceMappingURL=aesop.test.js.map