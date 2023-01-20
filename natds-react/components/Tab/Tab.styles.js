"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_jss_1 = require("react-jss");
var setAlignTabs = function () { return function (_a) {
    var align = _a.align;
    if (align === 'right') {
        return 'flex-end';
    }
    if (align === 'center') {
        return 'center';
    }
    return 'flex-start';
}; };
var styles = (0, react_jss_1.createUseStyles)(function (theme) { return ({
    wrapper: {
        position: 'relative'
    },
    container: {
        width: '100%',
        height: function (props) { return (props.icon === 'left' ? theme.size.medium : theme.size.largeX); },
        padding: 0,
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: setAlignTabs(),
        backgroundColor: function (props) { return (props.color ? theme.color.surface : 'transparent'); },
        boxShadow: function (props) { return (props.elevation ? theme.elevation.micro : theme.elevation.none); },
        overflow: 'hidden',
        overflowX: 'hidden',
        scrollBehavior: 'smooth',
        '& button': {
            flexDirection: function (props) { return (props.icon === 'left' ? 'row' : 'column'); }
        }
    },
    navigation: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        zIndex: 1,
        border: 0,
        cursor: 'pointer',
        '& > i': {
            color: theme.color.mediumEmphasis
        }
    },
    navigationPrev: {
        left: 0,
        background: "linear-gradient(to right, ".concat(theme.color.surface, ", transparent)")
    },
    navigationNext: {
        right: 0,
        background: "linear-gradient(to left, ".concat(theme.color.surface, ", transparent)")
    }
}); });
exports.default = styles;
//# sourceMappingURL=Tab.styles.js.map