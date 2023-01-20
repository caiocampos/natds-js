"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSize = exports.convertSize = void 0;
var react_jss_1 = require("react-jss");
var convertSize = function (size) {
    var sizes = {
        small: 328,
        medium: 536,
        large: 816
    };
    return sizes[size];
};
exports.convertSize = convertSize;
var getSize = function () { return function (_a) {
    var size = _a.size, width = _a.width;
    return ((0, exports.convertSize)(size) > width ? '90vw' : (0, exports.convertSize)(size));
}; };
exports.getSize = getSize;
var styles = (0, react_jss_1.createUseStyles)(function (theme) { return ({
    dialog: {
        backgroundColor: theme.color.surface,
        borderRadius: theme.dialog.borderRadius,
        boxShadow: theme.elevation.hugeX,
        display: function (_a) {
            var open = _a.open;
            return (open ? 'flex' : 'none');
        },
        flexDirection: 'column',
        left: '50%',
        maxHeight: '70%',
        overflowY: 'auto',
        position: 'fixed',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: (0, exports.getSize)(),
        zIndex: 1300
    },
    overlay: {
        background: theme.color.highlight,
        display: function (_a) {
            var open = _a.open;
            return (!open && 'none');
        },
        height: '100%',
        left: 0,
        opacity: theme.opacity.mediumHigh,
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1299
    }
}); });
exports.default = styles;
//# sourceMappingURL=Dialog.styles.js.map