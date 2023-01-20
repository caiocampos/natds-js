Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../../index");
describe('Avon Theme', function () {
    var _a = index_1.themes.avon, dark = _a.dark, light = _a.light;
    test('it should match Avon Light theme snapshot', function () {
        expect(light).toMatchSnapshot('Avon Light Theme');
    });
    test('it should match Avon Dark theme snapshot', function () {
        expect(dark).toMatchSnapshot('Avon Dark Theme');
    });
});
//# sourceMappingURL=avon.test.js.map