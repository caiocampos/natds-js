Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var styles_1 = require("@material-ui/core/styles");
var useSpacingFromStyleProp_1 = require("../../hooks/useSpacingFromStyleProp");
exports.useStyles = (0, styles_1.makeStyles)(function (theme) { return (0, styles_1.createStyles)({
    root: function (props) { return ({
        marginBottom: (0, useSpacingFromStyleProp_1.getSpacingFromStyleProp)({
            props: props,
            stylePropName: 'marginBottom',
            theme: theme
        }),
        marginLeft: (0, useSpacingFromStyleProp_1.getSpacingFromStyleProp)({
            props: props,
            stylePropName: 'marginLeft',
            theme: theme
        }),
        marginRight: (0, useSpacingFromStyleProp_1.getSpacingFromStyleProp)({
            props: props,
            stylePropName: 'marginRight',
            theme: theme
        }),
        marginTop: (0, useSpacingFromStyleProp_1.getSpacingFromStyleProp)({
            props: props,
            stylePropName: 'marginTop',
            theme: theme
        }),
        paddingBottom: (0, useSpacingFromStyleProp_1.getSpacingFromStyleProp)({
            props: props,
            stylePropName: 'paddingBottom',
            theme: theme
        }),
        paddingLeft: (0, useSpacingFromStyleProp_1.getSpacingFromStyleProp)({
            props: props,
            stylePropName: 'paddingLeft',
            theme: theme
        }),
        paddingRight: (0, useSpacingFromStyleProp_1.getSpacingFromStyleProp)({
            props: props,
            stylePropName: 'paddingRight',
            theme: theme
        }),
        paddingTop: (0, useSpacingFromStyleProp_1.getSpacingFromStyleProp)({
            props: props,
            stylePropName: 'paddingTop',
            theme: theme
        })
    }); }
}); }, { name: 'NatDSSpacing' });
//# sourceMappingURL=Spacing.styles.js.map