"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_jss_1 = require("react-jss");
var styles = (0, react_jss_1.createUseStyles)({
    collapse: function (_a) {
        var _b = _a.open, open = _b === void 0 ? false : _b;
        return ({
            overflow: 'hidden',
            height: open ? 'auto' : 0,
            /**
             * NOTE: this is a trick for the transition to be visible
             * because if we use height as transition type, we would also
             * need to set height manually, instead we use max-height
             */
            maxHeight: open ? '100vh' : 0,
            transition: 'max-height 0.3s ease-in-out'
        });
    }
});
exports.default = styles;
//# sourceMappingURL=Collapse.styles.js.map