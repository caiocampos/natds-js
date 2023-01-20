"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Portal = void 0;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var Portal = function (_a) {
    var children = _a.children, container = _a.container;
    var _b = (0, react_1.useState)(), mountNode = _b[0], setMountNode = _b[1];
    (0, react_1.useEffect)(function () {
        var element = container || document.body;
        return setMountNode(element);
    }, [container]);
    return mountNode ? (0, react_dom_1.createPortal)(children, mountNode) : null;
};
exports.Portal = Portal;
exports.default = exports.Portal;
//# sourceMappingURL=Portal.js.map