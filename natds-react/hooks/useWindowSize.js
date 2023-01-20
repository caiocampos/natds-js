"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWindowSize = void 0;
var react_1 = require("react");
var useWindowSize = function () {
    var _a = (0, react_1.useState)({
        width: window.innerWidth,
        height: window.innerHeight
    }), windowSize = _a[0], setWindowSize = _a[1];
    (0, react_1.useEffect)(function () {
        var timer;
        var handler = function () {
            clearTimeout(timer);
            timer = setTimeout(function () { return setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            }); }, 500);
        };
        window.addEventListener('resize', handler);
        return function () {
            window.removeEventListener('resize', handler);
        };
    }, []);
    return windowSize;
};
exports.useWindowSize = useWindowSize;
exports.default = exports.useWindowSize;
//# sourceMappingURL=useWindowSize.js.map