"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_jss_1 = require("react-jss");
var toggleColorEmphasis = function (theme) { return function (_a) {
    var isActive = _a.isActive, isDisabled = _a.isDisabled;
    if (isActive) {
        return theme.color.highEmphasis;
    }
    if (isDisabled) {
        return theme.color.lowEmphasis;
    }
    return theme.color.mediumEmphasis;
}; };
var styles = (0, react_jss_1.createUseStyles)(function (theme) { return ({
    wrapper: {
        minWidth: theme.size.largeX,
        height: '100%',
        padding: "0 ".concat(theme.spacing.small, "px"),
        borderBottom: function (props) { return props.isActive && "2px solid ".concat(theme.color.primary); },
        pointerEvents: 'none',
        '& > div': {
            height: '100%'
        },
        '&:hover': {
            background: "".concat(theme.color.highlight, "29")
        }
    },
    tabButton: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme.spacing.tiny,
        border: 'none',
        textTransform: 'uppercase',
        background: 'none',
        cursor: function (props) { return (props.isDisabled ? 'not-allowed' : 'pointer'); },
        pointerEvents: function (props) { return (props.isDisabled ? 'none' : 'auto'); },
        color: toggleColorEmphasis(theme),
        '& i': {
            color: toggleColorEmphasis(theme)
        }
    }
}); });
exports.default = styles;
//# sourceMappingURL=TabItem.styles.js.map