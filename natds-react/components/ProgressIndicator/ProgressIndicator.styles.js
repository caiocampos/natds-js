"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
var react_jss_1 = require("react-jss");
var styles = (0, react_jss_1.createUseStyles)(function (theme) { return ({
    backdrop: {
        height: function (_a) {
            var size = _a.size;
            return theme.size[size];
        },
        width: function (_a) {
            var size = _a.size;
            return theme.size[size];
        },
        backgroundColor: function (_a) {
            var showBackdrop = _a.showBackdrop;
            return showBackdrop && theme.color.surface;
        },
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.size.micro
    },
    loader: {
        height: function (_a) {
            var size = _a.size;
            return theme.size[size];
        },
        width: function (_a) {
            var size = _a.size;
            return theme.size[size];
        },
        '& svg': {
            animation: '$rotate 2.7s linear infinite',
            '& circle': {
                fill: 'none',
                strokeWidth: theme.size.micro,
                animation: '$spin 1.7s linear infinite',
                strokeLinecap: 'round',
                stroke: theme.color.primary
            }
        }
    },
    '@keyframes spin': {
        '0%': {
            strokeDasharray: '1,200',
            strokeDashoffset: 0
        },
        '50%': {
            strokeDasharray: '100,200',
            strokeDashoffset: -35
        },
        '100%': {
            strokeDasharray: '100,200',
            strokeDashoffset: -124
        }
    },
    '@keyframes rotate': {
        '0%': {
            transform: 'rotate(0deg)'
        },
        '50%': {
            transform: 'rotate(360deg)'
        },
        '100%': {
            transform: 'rotate(720deg)'
        }
    }
}); });
exports.default = styles;
//# sourceMappingURL=ProgressIndicator.styles.js.map