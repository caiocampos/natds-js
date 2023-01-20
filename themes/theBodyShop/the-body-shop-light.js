/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/prefer-default-export */
/* eslint-disable max-lines */
/* eslint-disable no-magic-numbers */
/* eslint-disable sort-keys */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.theBodyShopLight = void 0;
/**
 * @todo refactor(styles): replace magic numbers by tokens (including opacity, padding and sizing)
 */
var hex_to_rgba_1 = __importDefault(require("hex-to-rgba"));
var natds_themes_1 = __importDefault(require("@naturacosmeticos/natds-themes"));
var tokens_1 = __importDefault(require("../../tokens"));
var typography_1 = require("./typography");
var typography_2 = require("../../tokens/typography");
var spacing_1 = require("../../tokens/spacing");
var avatarSizes_1 = require("../../tokens/avatarSizes");
var buttonSizes_1 = require("../../tokens/buttonSizes");
var elevation_1 = require("../../tokens/elevation");
var iconSizes_1 = require("../../tokens/iconSizes");
var sizes_1 = require("../../tokens/sizes");
var opacity_1 = require("../../tokens/opacity");
var 
/**
 * @deprecated `theBodyShopLightColorTokens` are deprecated since v0.20 and will be removed at v1.0.
 * Please use `theme.theBodyShop.light.color` from `natds-themes`.
 */
theBodyShopLightColorTokens = tokens_1.default.colorTokens.theBodyShopLightColorTokens;
var _a = natds_themes_1.default.theBodyShop.light, color = _a.color, opacity = _a.opacity, asset = _a.asset;
exports.theBodyShopLight = {
    asset: asset,
    shape: {
        borderRadius: tokens_1.default.radius.medium,
        badgeBorderRadius: 100
    },
    avatarSizes: avatarSizes_1.avatarSizes,
    buttonSizes: buttonSizes_1.buttonSizes,
    color: color,
    iconSizes: iconSizes_1.iconSizes,
    /**
     * @since 0.22
     * @todo Adopt opacity tokens from theme
     */
    opacity: opacity_1.opacity,
    sizes: sizes_1.sizes,
    spacing: spacing_1.spacing.spacing,
    palette: {
        action: {
            /**
             * @since 0.24
             */
            active: (0, hex_to_rgba_1.default)(color.highlight, opacity.mediumHigh),
            disabled: (0, hex_to_rgba_1.default)(theBodyShopLightColorTokens.colorHighlight, 0.24)
        },
        /**
         * @since 0.24
         */
        divider: theBodyShopLightColorTokens.colorLowEmphasis,
        primary: {
            main: theBodyShopLightColorTokens.colorPrimary,
            light: theBodyShopLightColorTokens.colorPrimaryLight,
            dark: theBodyShopLightColorTokens.colorPrimaryDark,
            contrastText: theBodyShopLightColorTokens.colorOnPrimary
        },
        secondary: {
            main: theBodyShopLightColorTokens.colorSecondary,
            light: theBodyShopLightColorTokens.colorSecondaryLight,
            dark: theBodyShopLightColorTokens.colorSecondaryDark,
            contrastText: theBodyShopLightColorTokens.colorOnSecondary
        },
        error: {
            main: theBodyShopLightColorTokens.colorAlert,
            contrastText: theBodyShopLightColorTokens.colorOnAlert
        },
        success: {
            main: theBodyShopLightColorTokens.colorSuccess,
            contrastText: theBodyShopLightColorTokens.colorOnSuccess
        },
        background: {
            paper: theBodyShopLightColorTokens.colorSurface,
            default: theBodyShopLightColorTokens.colorBackground,
            paperContrastText: theBodyShopLightColorTokens.colorOnSurface,
            defaultContrastText: theBodyShopLightColorTokens.colorOnBackground
        },
        text: {
            primary: theBodyShopLightColorTokens.colorHighEmphasis,
            secondary: theBodyShopLightColorTokens.colorMediumEmphasis,
            disabled: theBodyShopLightColorTokens.colorLowEmphasis,
            hint: theBodyShopLightColorTokens.colorLowEmphasis
        },
        complementary: {
            highlight: theBodyShopLightColorTokens.colorHighlight,
            link: theBodyShopLightColorTokens.colorLink,
            linkContrastText: theBodyShopLightColorTokens.colorOnLink,
            warning: theBodyShopLightColorTokens.colorWarning,
            warningContrastText: theBodyShopLightColorTokens.colorOnWarning
        }
    },
    /**
     * @todo fix(styles): TS2322 - type is not assignable to type 'ITypography'.
     */
    // @ts-ignore
    typography: __assign(__assign({}, typography_1.typography), typography_2.fontSize),
    shadows: elevation_1.elevation,
    overrides: {
        MuiButton: {
            outlinedPrimary: {
                color: theBodyShopLightColorTokens.colorHighEmphasis
            },
            outlinedSecondary: {
                color: theBodyShopLightColorTokens.colorHighEmphasis,
                '&.Mui-disabled': {
                    borderColor: "".concat(theBodyShopLightColorTokens.colorHighlight, "3D")
                }
            },
            sizeSmall: __assign(__assign({}, buttonSizes_1.buttonSizes.small), typography_2.fontSize.subtitle2),
            root: __assign(__assign({}, buttonSizes_1.buttonSizes.medium), typography_2.fontSize.subtitle2),
            sizeLarge: __assign(__assign({}, buttonSizes_1.buttonSizes.large), typography_2.fontSize.subtitle2),
            text: {
                padding: null,
                '&.Mui-disabled': {
                    color: "".concat(theBodyShopLightColorTokens.colorHighlight, "3D"),
                    borderColor: "".concat(theBodyShopLightColorTokens.colorHighlight, "3D")
                }
            },
            contained: {
                '&.Mui-disabled': {
                    color: "".concat(theBodyShopLightColorTokens.colorHighlight, "3D"),
                    backgroundColor: "".concat(theBodyShopLightColorTokens.colorHighlight, "14")
                }
            },
            outlined: {
                padding: null,
                borderColor: "".concat(theBodyShopLightColorTokens.colorHighlight, "3D"),
                '&.Mui-disabled': {
                    color: "".concat(theBodyShopLightColorTokens.colorHighlight, "3D"),
                    borderColor: "".concat(theBodyShopLightColorTokens.colorHighlight, "3D")
                }
            }
        },
        MuiAvatar: {
            colorDefault: {
                color: theBodyShopLightColorTokens.colorHighEmphasis
            }
        },
        MuiIconButton: {
            root: {
                padding: '8px',
                color: theBodyShopLightColorTokens.colorHighEmphasis
            },
            sizeSmall: {
                padding: '4px'
            }
        },
        MuiExpansionPanel: {
            root: {
                border: 'transparent 1px solid',
                '&$expanded': {
                    borderColor: theBodyShopLightColorTokens.colorPrimary
                },
                '&$disabled': {
                    backgroundColor: theBodyShopLightColorTokens.colorOnPrimary,
                    opacity: 0.32
                }
            }
        },
        MuiExpansionPanelSummary: {
            root: {
                alignItems: 'flex-start',
                marginTop: '8px',
                '&$disabled': {
                    opacity: 1
                }
            }
        },
        MuiToolbar: {
            root: {
                padding: '0 16px',
                '@media (min-width: 600px)': {
                    padding: '0 16px'
                }
            },
            gutters: {
                padding: '0 16px',
                '@media (min-width: 600px)': {
                    padding: '0 16px'
                }
            },
            regular: {
                minHeight: '56px',
                '@media (min-width: 600px)': {
                    minHeight: '56px'
                }
            },
            dense: {
                minHeight: '56px',
                '@media (min-width: 600px)': {
                    minHeight: '56px'
                }
            }
        },
        MuiListItem: {
            root: {
                cursor: 'pointer',
                '&:hover': {
                    backgroundColor: (0, hex_to_rgba_1.default)(theBodyShopLightColorTokens.colorOnSurface, 0.04)
                },
                '&$selected': {
                    backgroundColor: (0, hex_to_rgba_1.default)(theBodyShopLightColorTokens.colorPrimary, 0.16),
                    '&:hover': {
                        backgroundColor: (0, hex_to_rgba_1.default)(theBodyShopLightColorTokens.colorHighlight, 0.04)
                    },
                    '&:focus': {
                        outline: 'none'
                    }
                },
                '&.Mui-disabled': {
                    opacity: 0.32
                }
            },
            gutters: {
                '&:focus': {
                    outline: 'none'
                }
            },
            button: {
                '&:hover': {
                    backgroundColor: (0, hex_to_rgba_1.default)(theBodyShopLightColorTokens.colorHighlight, 0.04)
                }
            }
        },
        MuiBadge: {
            badge: {
                padding: '0 4px'
            }
        },
        MuiTab: {
            root: {
                '&$disabled': {
                    opacity: 0.24
                }
            },
            textColorInherit: {
                '&$disabled': {
                    opacity: 0.24
                }
            },
            wrapper: {
                '& > *:first-child': {
                    marginBottom: '2px !important'
                }
            }
        },
        MuiChip: {
            root: {
                backgroundColor: (0, hex_to_rgba_1.default)(theBodyShopLightColorTokens.colorHighlight, 0.12),
                color: theBodyShopLightColorTokens.colorHighEmphasis,
                fontSize: typography_2.fontSize.subtitle2.fontSize,
                '& $avatar': {
                    backgroundColor: (0, hex_to_rgba_1.default)(theBodyShopLightColorTokens.colorHighlight, 0.24),
                    color: theBodyShopLightColorTokens.colorHighEmphasis
                },
                '&$disabled': {
                    opacity: 0.4
                }
            },
            clickableColorPrimary: {
                '&:hover': {
                    backgroundColor: theBodyShopLightColorTokens.colorPrimary
                }
            },
            clickableColorSecondary: {
                '&:hover': {
                    backgroundColor: theBodyShopLightColorTokens.colorSecondary
                }
            },
            outlined: {
                borderColor: (0, hex_to_rgba_1.default)(theBodyShopLightColorTokens.colorHighlight, 0.12),
                color: theBodyShopLightColorTokens.colorHighlight
            },
            outlinedPrimary: {
                color: theBodyShopLightColorTokens.colorHighlight
            },
            outlinedSecondary: {
                color: theBodyShopLightColorTokens.colorHighlight
            },
            icon: {
                fontSize: "".concat(sizes_1.sizes.standard, "px")
            },
            iconSmall: {
                width: "".concat(sizes_1.sizes.small, "px"),
                height: "".concat(sizes_1.sizes.small, "px"),
                fontSize: "".concat(sizes_1.sizes.small, "px"),
                marginTop: '1px'
            },
            deleteIcon: {
                width: "".concat(sizes_1.sizes.standard, "px"),
                height: "".concat(sizes_1.sizes.standard, "px"),
                fontSize: "".concat(sizes_1.sizes.standard, "px"),
                color: (0, hex_to_rgba_1.default)(theBodyShopLightColorTokens.colorHighlight, 0.8),
                '&:hover': {
                    color: theBodyShopLightColorTokens.colorHighlight
                }
            },
            deleteIconSmall: {
                width: "".concat(sizes_1.sizes.small, "px"),
                height: "".concat(sizes_1.sizes.small, "px"),
                fontSize: "".concat(sizes_1.sizes.small, "px")
            },
            deleteIconColorPrimary: {
                color: (0, hex_to_rgba_1.default)(theBodyShopLightColorTokens.colorOnPrimary, 0.8),
                '&:hover': {
                    color: theBodyShopLightColorTokens.colorOnPrimary
                }
            },
            deleteIconColorSecondary: {
                color: (0, hex_to_rgba_1.default)(theBodyShopLightColorTokens.colorOnSecondary, 0.8),
                '&:hover': {
                    color: theBodyShopLightColorTokens.colorOnSecondary
                }
            }
        },
        MuiTextField: {
            '& .MuiInputLabel': {
                marginTop: '20px'
            }
        },
        MuiInputBase: {
            root: {
                fontSize: typography_2.fontSize.subtitle2.fontSize,
                borderRadius: '4px',
                boxShadow: "".concat(theBodyShopLightColorTokens.colorLowEmphasis, " 0 0 0 1px"),
                color: theBodyShopLightColorTokens.colorHighEmphasis,
                width: '100%',
                "&[data-state='error']": {
                    boxShadow: "".concat(theBodyShopLightColorTokens.colorAlert, " 0 0 0 1px")
                },
                "&[data-state='success']": {
                    boxShadow: "".concat(theBodyShopLightColorTokens.colorSuccess, " 0 0 0 1px")
                },
                '&:hover': {
                    boxShadow: "".concat(theBodyShopLightColorTokens.colorMediumEmphasis, " 0 0 0 1px"),
                    '&.Mui-disabled': {
                        boxShadow: "".concat(theBodyShopLightColorTokens.colorLowEmphasis, " 0 0 0 1px")
                    }
                },
                '&.Mui-focused': {
                    boxShadow: "".concat(theBodyShopLightColorTokens.colorPrimary, " 0 0 0 2px")
                },
                '&.MuiFilled:not(.Mui-focused)': {
                    boxShadow: "".concat(theBodyShopLightColorTokens.colorHighEmphasis, " 0 0 0 1px"),
                    '&:hover': {
                        boxShadow: "".concat(theBodyShopLightColorTokens.colorMediumEmphasis, " 0 0 0 1px")
                    }
                },
                '&.MuiInputBase-multiline': {
                    padding: sizes_1.sizes === null || sizes_1.sizes === void 0 ? void 0 : sizes_1.sizes.none
                },
                '&.MuiInput-underline:before': {
                    borderBottom: 'none'
                },
                '&.MuiInput-underline.Mui-disabled:before': {
                    borderBottomStyle: 'none'
                },
                '&.MuiInput-underline:hover:not(.Mui-disabled):before': {
                    borderBottom: 'none'
                },
                '&.MuiInput-underline:after': {
                    borderBottom: 'none'
                }
            },
            adornedEnd: {
                paddingRight: sizes_1.sizes.medium
            },
            input: {
                '&.Mui-disabled:not(::placeholder)': {
                    opacity: 0.24
                },
                '&::placeholder': {
                    color: theBodyShopLightColorTokens.colorMediumEmphasis
                },
                '&.MuiInput-inputTypeSearch': {
                    paddingRight: sizes_1.sizes.large
                },
                border: sizes_1.sizes === null || sizes_1.sizes === void 0 ? void 0 : sizes_1.sizes.none,
                boxSizing: 'border-box',
                lineHeight: "".concat(sizes_1.sizes === null || sizes_1.sizes === void 0 ? void 0 : sizes_1.sizes.standard, "px"),
                minHeight: sizes_1.sizes === null || sizes_1.sizes === void 0 ? void 0 : sizes_1.sizes.mediumX,
                padding: sizes_1.sizes === null || sizes_1.sizes === void 0 ? void 0 : sizes_1.sizes.small
            },
            inputMultiline: {
                padding: sizes_1.sizes === null || sizes_1.sizes === void 0 ? void 0 : sizes_1.sizes.small
            },
            inputTypeSearch: {
                '&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration': {
                    display: 'none'
                }
            }
        },
        MuiInputAdornment: {
            root: {
                position: 'absolute',
                right: '0'
            },
            positionEnd: {
                marginRight: spacing_1.spacing.spacingTiny
            }
        },
        MuiInputLabel: {
            formControl: {
                position: 'relative',
                transform: 'none',
                marginTop: '-4px'
            },
            shrink: {
                transform: 'none',
                marginTop: '-4px'
            }
        },
        MuiFormLabel: {
            root: {
                fontSize: typography_2.fontSize.subtitle2.fontSize,
                '&.Mui-focused': {
                    fontSize: typography_2.fontSize.subtitle2.fontSize,
                    color: theBodyShopLightColorTokens.colorMediumEmphasis
                },
                '&.Mui-error': {
                    color: theBodyShopLightColorTokens.colorAlert
                }
            }
        },
        MuiSelect: {
            select: {
                '&:focus': {
                    backgroundColor: 'transparent'
                },
                '&.Mui-disabled': {
                    color: theBodyShopLightColorTokens.colorLowEmphasis
                }
            },
            icon: {
                top: sizes_1.sizes.micro,
                color: theBodyShopLightColorTokens.colorHighEmphasis
            }
        },
        MuiButtonGroup: {
            groupedOutlinedHorizontal: {
                '&:not(:first-child)': {
                    marginLeft: 'none'
                }
            },
            groupedContainedPrimary: {
                '&:not(:last-child)': {
                    borderColor: theBodyShopLightColorTokens.colorPrimaryDark,
                    '&.Mui-disabled': {
                        borderColor: "".concat(theBodyShopLightColorTokens.colorHighlight, "3D")
                    }
                }
            },
            groupedContainedSecondary: {
                '&:not(:last-child)': {
                    borderColor: theBodyShopLightColorTokens.colorSecondaryDark,
                    '&.Mui-disabled': {
                        borderColor: "".concat(theBodyShopLightColorTokens.colorHighlight, "3D")
                    }
                }
            },
            groupedContainedHorizontal: {
                '&:not(:last-child)': {
                    borderRightColor: "".concat(theBodyShopLightColorTokens.colorHighlight, "1F"),
                    '&.Mui-disabled': {
                        borderColor: "".concat(theBodyShopLightColorTokens.colorHighlight, "3D")
                    }
                }
            },
            groupedTextPrimary: {
                '&:not(:last-child).Mui-disabled': {
                    borderColor: "".concat(theBodyShopLightColorTokens.colorHighlight, "3D")
                }
            },
            groupedTextSecondary: {
                '&:not(:last-child).Mui-disabled': {
                    borderColor: "".concat(theBodyShopLightColorTokens.colorHighlight, "3D")
                }
            },
            groupedTextHorizontal: {
                '&:not(:last-child)': {
                    borderRightColor: "".concat(theBodyShopLightColorTokens.colorHighlight, "1F"),
                    '&.Mui-disabled': {
                        borderColor: "".concat(theBodyShopLightColorTokens.colorHighlight, "3D")
                    }
                }
            }
        },
        MuiSvgIcon: {
            root: {}
        },
        MuiAlert: {
            root: __assign({ width: 278, padding: spacing_1.spacing.spacingSmall }, typography_2.fontSize.body1),
            icon: {
                marginRight: spacing_1.spacing.spacingTiny
            },
            message: {
                padding: '5px 0'
            },
            standardSuccess: {
                color: theBodyShopLightColorTokens.colorHighEmphasis,
                backgroundColor: (0, hex_to_rgba_1.default)(theBodyShopLightColorTokens.colorSuccess, 0.16)
            },
            outlinedSuccess: {
                color: theBodyShopLightColorTokens.colorHighEmphasis
            },
            standardError: {
                color: theBodyShopLightColorTokens.colorHighEmphasis,
                backgroundColor: (0, hex_to_rgba_1.default)(theBodyShopLightColorTokens.colorAlert, 0.16)
            },
            outlinedError: {
                color: theBodyShopLightColorTokens.colorHighEmphasis
            },
            standardWarning: {
                color: theBodyShopLightColorTokens.colorHighEmphasis,
                backgroundColor: (0, hex_to_rgba_1.default)(theBodyShopLightColorTokens.colorWarning, 0.16),
                '& .MuiAlert-icon': {
                    color: theBodyShopLightColorTokens.colorWarning
                }
            },
            outlinedWarning: {
                color: theBodyShopLightColorTokens.colorHighEmphasis,
                borderColor: theBodyShopLightColorTokens.colorWarning,
                '& .MuiAlert-icon': {
                    color: theBodyShopLightColorTokens.colorWarning
                }
            },
            filledWarning: {
                color: theBodyShopLightColorTokens.colorOnWarning,
                backgroundColor: theBodyShopLightColorTokens.colorWarning
            },
            standardInfo: {
                color: theBodyShopLightColorTokens.colorHighEmphasis,
                backgroundColor: (0, hex_to_rgba_1.default)(theBodyShopLightColorTokens.colorLink, 0.16),
                '& .MuiAlert-icon': {
                    color: theBodyShopLightColorTokens.colorLink
                }
            },
            outlinedInfo: {
                color: theBodyShopLightColorTokens.colorHighEmphasis,
                borderColor: theBodyShopLightColorTokens.colorLink,
                '& .MuiAlert-icon': {
                    color: theBodyShopLightColorTokens.colorLink
                }
            },
            filledInfo: {
                backgroundColor: theBodyShopLightColorTokens.colorLink
            }
        },
        MuiAlertTitle: {
            root: __assign({}, typography_2.fontSize.h6)
        },
        MuiTableSortLabel: {
            icon: {
                marginLeft: spacing_1.spacing.spacing
            }
        },
        MuiTablePagination: {
            root: {
                overflow: 'visible',
                '& .MuiSelect-icon': {
                    top: 0,
                    height: '100%'
                }
            },
            input: {
                flexShrink: 'initial'
            }
        }
    }
};
//# sourceMappingURL=the-body-shop-light.js.map