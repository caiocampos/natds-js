"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_jss_1 = require("react-jss");
var styles = (0, react_jss_1.createUseStyles)(function (theme) { return ({
    container: {
        marginRight: function (_a) {
            var action = _a.action;
            return action === 'icon' && theme.spacing.tiny;
        }
    },
    wrapper: {
        borderBottomRightRadius: 3,
        borderTopRightRadius: 3,
        display: 'flex',
        alignItems: 'center',
        height: function (_a) {
            var size = _a.size;
            return size && theme.size[size];
        },
        overflow: 'hidden'
    },
    image: {
        maxWidth: theme.size.large,
        objectFit: 'cover'
    }
}); });
exports.default = styles;
//# sourceMappingURL=InputAction.styles.js.map