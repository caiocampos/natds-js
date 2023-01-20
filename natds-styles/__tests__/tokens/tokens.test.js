Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../index");
describe('Tokens', function () {
    test('It should match tokens snapshot', function () {
        expect(index_1.tokens).toMatchSnapshot('Tokens Snapshot');
    });
});
//# sourceMappingURL=tokens.test.js.map