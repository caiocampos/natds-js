"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRatingStyles = exports.useLabelStyles = exports.useContainerStyles = exports.useBaseStyles = exports.getRatingColor = void 0;
var react_jss_1 = require("react-jss");
var getRatingColor = function (_a) {
    var color = _a.color;
    return function (_a) {
        var iconFilled = _a.iconFilled, iconActive = _a.iconActive, disabled = _a.disabled;
        return (iconFilled && iconActive && !disabled ? '#F8B546' : color.mediumEmphasis);
    };
};
exports.getRatingColor = getRatingColor;
exports.useBaseStyles = (0, react_jss_1.createUseStyles)(function (theme) { return ({
    ratingContainer: {
        display: 'flex'
    },
    ratingIcon: {
        backgroundColor: 'transparent',
        position: 'relative',
        '&:after': {
            backgroundColor: theme.color.highlight,
            borderRadius: '50%',
            content: '" "',
            height: '100%',
            left: 0,
            opacity: 0,
            position: 'absolute',
            top: 0,
            width: '100%'
        },
        '&:hover:not([disabled]):after': { opacity: theme.opacity.lower },
        '&:focus:not([disabled]):after': { opacity: theme.opacity.low },
        '& > i': {
            cursor: function (_a) {
                var disabled = _a.disabled, isClickable = _a.isClickable;
                return isClickable && !disabled && 'pointer';
            },
            color: ((0, exports.getRatingColor)(theme))
        }
    }
}); });
exports.useContainerStyles = (0, react_jss_1.createUseStyles)(function (theme) { return ({
    container: {
        display: 'flex',
        flexDirection: function (_a) {
            var variant = _a.variant;
            return (variant === 'input' ? 'column' : 'row');
        },
        alignItems: function (_a) {
            var variant = _a.variant;
            return variant === 'counter' && 'center';
        },
        '& > label': {
            marginTop: function (_a) {
                var variant = _a.variant;
                return variant === 'input' && theme.spacing.micro;
            },
            order: function (_a) {
                var variant = _a.variant, _b = _a.align, align = _b === void 0 ? 'left' : _b;
                return (align === 'left' && variant !== 'input' ? 2 : 1);
            }
        }
    }
}); });
exports.useLabelStyles = (0, react_jss_1.createUseStyles)(function (theme) { return ({
    labelText: {
        color: theme.color.mediumEmphasis,
        fontFamily: function (_a) {
            var variant = _a.variant;
            return variant !== 'read-only' && [theme.rating[variant].label.primary.fontFamily, theme.rating[variant].label.fallback.fontFamily];
        },
        fontSize: function (_a) {
            var variant = _a.variant;
            return variant !== 'read-only' && theme.rating[variant].label.fontSize;
        },
        fontWeight: function (_a) {
            var variant = _a.variant;
            return variant !== 'read-only' && theme.rating[variant].label.primary.fontWeight;
        },
        letterSpacing: function (_a) {
            var variant = _a.variant;
            return variant !== 'read-only' && theme.rating[variant].label.letterSpacing;
        },
        lineHeight: function (_a) {
            var variant = _a.variant;
            return variant !== 'read-only' && theme.rating[variant].label.lineHeight;
        }
    }
}); });
exports.useRatingStyles = (0, react_jss_1.createUseStyles)(function () { return ({
    rating: {
        order: function (_a) {
            var variant = _a.variant;
            return (variant !== 'input' && 2);
        },
        display: 'flex'
    }
}); });
//# sourceMappingURL=Rating.styles.js.map