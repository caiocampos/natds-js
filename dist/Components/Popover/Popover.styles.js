Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var createStyles_1 = require("../../styles/createStyles");
var makeStyles_1 = require("../../styles/makeStyles");
var arrowBeforeSelector = '&::before';
var style = function (_a) {
    var _b, _c, _d, _e, _f;
    var _g, _h, _j, _k;
    var palette = _a.palette, sizes = _a.sizes;
    return (0, createStyles_1.createStyles)({
        arrow: (_b = {
                fontSize: sizes === null || sizes === void 0 ? void 0 : sizes.tiny,
                height: '3em',
                position: 'absolute',
                width: '3em'
            },
            _b[arrowBeforeSelector] = {
                borderStyle: 'solid',
                /**
                 * @see https://stackoverflow.com/questions/53768260/css-pseudo-selectors-with-material-ui
                 */
                content: '""',
                display: 'block',
                height: 0,
                margin: 'auto',
                width: 0
            },
            _b["[x-placement*='bottom'] &"] = (_c = {
                    height: '1em',
                    marginTop: '-0.9em',
                    width: '3em'
                },
                _c[arrowBeforeSelector] = {
                    borderColor: "transparent transparent ".concat((_g = palette === null || palette === void 0 ? void 0 : palette.background) === null || _g === void 0 ? void 0 : _g.paper, " transparent"),
                    borderWidth: '0 1em 1em 1em',
                    marginLeft: sizes === null || sizes === void 0 ? void 0 : sizes.micro
                },
                _c),
            _b["[x-placement*='top'] &"] = (_d = {
                    bottom: 0,
                    height: '1em',
                    marginBottom: '-0.9em',
                    width: '3em'
                },
                _d[arrowBeforeSelector] = {
                    borderColor: "".concat((_h = palette === null || palette === void 0 ? void 0 : palette.background) === null || _h === void 0 ? void 0 : _h.paper, " transparent transparent transparent"),
                    borderWidth: '1em 1em 0 1em',
                    marginLeft: sizes === null || sizes === void 0 ? void 0 : sizes.micro
                },
                _d),
            _b["[x-placement*='right'] &"] = (_e = {
                    height: '3em',
                    left: 0,
                    marginLeft: '-0.93em',
                    width: '1em'
                },
                _e[arrowBeforeSelector] = {
                    borderColor: "transparent ".concat((_j = palette === null || palette === void 0 ? void 0 : palette.background) === null || _j === void 0 ? void 0 : _j.paper, " transparent transparent"),
                    borderWidth: '1em 1em 1em 0',
                    marginTop: sizes === null || sizes === void 0 ? void 0 : sizes.micro
                },
                _e),
            _b["[x-placement*='left'] &"] = (_f = {
                    height: '3em',
                    marginRight: '-0.9em',
                    right: 0,
                    width: '1em'
                },
                _f[arrowBeforeSelector] = {
                    borderColor: "transparent transparent transparent ".concat((_k = palette === null || palette === void 0 ? void 0 : palette.background) === null || _k === void 0 ? void 0 : _k.paper),
                    borderWidth: '1em 0 1em 1em',
                    marginTop: sizes === null || sizes === void 0 ? void 0 : sizes.micro
                },
                _f),
            _b),
        actionLinkContainer: {
            display: 'inline-block',
            paddingTop: sizes === null || sizes === void 0 ? void 0 : sizes.tiny
        },
        container: {
            maxWidth: function (_a) {
                var maxWidth = _a.maxWidth;
                return maxWidth || (sizes === null || sizes === void 0 ? void 0 : sizes.veryHuge);
            },
            padding: sizes === null || sizes === void 0 ? void 0 : sizes.small
        },
        root: {
            zIndex: 1,
            "&[x-placement*='bottom']": {
                marginTop: sizes === null || sizes === void 0 ? void 0 : sizes.tiny
            },
            "&[x-placement*='top']": {
                marginBottom: sizes === null || sizes === void 0 ? void 0 : sizes.tiny
            },
            "&[x-placement*='right']": {
                marginLeft: sizes === null || sizes === void 0 ? void 0 : sizes.tiny
            },
            "&[x-placement*='left']": {
                marginRight: sizes === null || sizes === void 0 ? void 0 : sizes.tiny
            }
        }
    });
};
exports.useStyles = (0, makeStyles_1.makeStyles)(style, { name: 'NatDSPopover' });
exports.default = makeStyles_1.makeStyles;
//# sourceMappingURL=Popover.styles.js.map