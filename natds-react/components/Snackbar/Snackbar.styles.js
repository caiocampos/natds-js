"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getColor = exports.getPositionAnimation = exports.getPosition = void 0;
var react_jss_1 = require("react-jss");
var getPosition = function (pos) { return ({
    topLeft: {
        top: '8px',
        bottom: 'unset',
        left: '8px',
        right: 'unset'
    },
    topRight: {
        top: '8px',
        bottom: 'unset',
        left: 'unset',
        right: '8px '
    },
    topCenter: {
        top: '8px',
        bottom: 'unset',
        left: 'calc(50% - 164px)',
        right: '8px '
    },
    bottomLeft: {
        top: 'unset',
        bottom: '8px',
        left: '8px',
        right: 'unset'
    },
    bottomRight: {
        top: 'unset',
        bottom: '8px',
        left: 'unset',
        right: '8px'
    },
    bottomCenter: {
        top: 'unset',
        bottom: '8px',
        left: 'calc(50% - 164px)',
        right: 'unset'
    }
})[pos]; };
exports.getPosition = getPosition;
var getPositionAnimation = function (posAnimation, time, animation) {
    var animeFN = function (animeP) { return ({
        topLeft: "$openSnackL 0.6s, $closeSnackL 0.6s ".concat((time - 0.5), "s"),
        topCenter: "$openSnackT 0.6s, $closeSnackT 0.6s ".concat((time - 0.5), "s"),
        topRight: "$openSnackR 0.6s, $closeSnackR 0.6s ".concat((time - 0.5), "s"),
        bottomLeft: "$openSnackL 0.6s, $closeSnackL 0.6s ".concat((time - 0.5), "s"),
        bottomCenter: "$openSnackB 0.6s, $closeSnackB 0.6s ".concat((time - 0.5), "s"),
        bottomRight: "$openSnackR 0.6s, $closeSnackR 0.6s ".concat((time - 0.5), "s")
    })[animeP]; };
    if (animation) {
        return animeFN(posAnimation);
    }
    return '';
};
exports.getPositionAnimation = getPositionAnimation;
var getColor = function (theme) { return function (feedback) { return ({
    default: theme.color.highEmphasis,
    success: theme.color.success,
    error: theme.color.alert,
    warning: theme.color.warning,
    info: theme.color.link
})[feedback]; }; };
exports.getColor = getColor;
var styles = (0, react_jss_1.createUseStyles)(function (theme) { return ({
    snackbarContainer: {
        fontFamily: theme.snackbar.content.fallback.fontFamily,
        fontSize: theme.snackbar.content.fontSize,
        fontWeight: theme.snackbar.content.fallback.fontWeight,
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'nowrap',
        whiteSpace: 'nowrap',
        position: 'fixed',
        width: '328px',
        minHeight: '56px',
        backgroundColor: function (_a) {
            var feedback = _a.feedback;
            return (0, exports.getColor)(theme)(feedback);
        },
        borderRadius: theme.textField.borderRadius,
        right: function (_a) {
            var _b;
            var position = _a.position;
            return (_b = (0, exports.getPosition)(position)) === null || _b === void 0 ? void 0 : _b.right;
        },
        top: function (_a) {
            var _b;
            var position = _a.position;
            return (_b = (0, exports.getPosition)(position)) === null || _b === void 0 ? void 0 : _b.top;
        },
        bottom: function (_a) {
            var _b;
            var position = _a.position;
            return (_b = (0, exports.getPosition)(position)) === null || _b === void 0 ? void 0 : _b.bottom;
        },
        left: function (_a) {
            var _b;
            var position = _a.position;
            return (_b = (0, exports.getPosition)(position)) === null || _b === void 0 ? void 0 : _b.left;
        },
        color: theme.color.surface,
        zIndex: 1000
    },
    wrapper: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: function (_a) {
            var directionButton = _a.directionButton;
            return "".concat(directionButton === 'blockButton' ? 'column' : 'row');
        },
        padding: "".concat(theme.spacing.small, "px"),
        boxSizing: 'border-box',
        overflow: 'hidden',
        gap: '16px'
    },
    wrapperRow: {
        display: 'flex',
        alignItems: 'start',
        width: '100%',
        gap: '8px'
    },
    wrapperColumm: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        gap: '8px'
    },
    wrapperAction: {
        display: 'flex',
        justifyContent: 'end',
        width: function (_a) {
            var directionButton = _a.directionButton;
            return "".concat(directionButton === 'blockButton' ? '100%' : 'auto');
        },
        gap: '8px',
        color: theme.color.surface
    },
    bodyText: {
        display: 'flex',
        whiteSpace: 'normal',
        boxSizing: 'border-box',
        flexWrap: 'wrap',
        wordBreak: 'break-all',
        // color: ({ feedback }: snackbarStyleProps) => getColorText(theme)(feedback)
        color: function (_a) {
            var feedback = _a.feedback;
            return (feedback === 'warning' ? theme.color.highEmphasis : theme.color.surface);
        }
    },
    wrapperIcon: {
        display: 'flex',
        boxSizing: 'border-box'
    },
    show: {
        animation: function (_a) {
            var position = _a.position, timer = _a.timer, animation = _a.animation;
            return (0, exports.getPositionAnimation)(position, timer, animation);
        },
        animationFillMode: 'forwards',
        visibility: 'visible'
    },
    close: {
        animationFillMode: 'forwards',
        visibility: 'hidden'
    },
    '@keyframes openSnackR': {
        from: {
            right: '-328px'
        },
        to: {
            right: '8px'
        }
    },
    '@keyframes openSnackL': {
        from: {
            left: '-328px'
        },
        to: {
            left: '8px'
        }
    },
    '@keyframes openSnackB': {
        from: {
            bottom: '-56px'
        },
        to: {
            bottom: '8px'
        }
    },
    '@keyframes openSnackT': {
        from: {
            top: '-56px'
        },
        to: {
            top: '8px'
        }
    },
    '@keyframes closeSnackR': {
        from: {
            right: '8px'
        },
        to: {
            right: '-328px'
        }
    },
    '@keyframes closeSnackL': {
        from: {
            left: '8px'
        },
        to: {
            left: '-328px'
        }
    },
    '@keyframes closeSnackB': {
        from: {
            bottom: '8px'
        },
        to: {
            bottom: '-224px'
        }
    },
    '@keyframes closeSnackT': {
        from: {
            top: '8px'
        },
        to: {
            top: '-224px'
        }
    }
}); });
exports.default = styles;
//# sourceMappingURL=Snackbar.styles.js.map