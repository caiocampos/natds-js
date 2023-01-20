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
exports.naturaDark = void 0;
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
var _a = natds_themes_1.default.natura.dark, color = _a.color, opacity = _a.opacity, asset = _a.asset;
var 
/**
 * @deprecated `naturaDarkColorTokens` are deprecated since v0.20 and will be removed at v1.0.
 * Please use `theme.natura.dark.color` from `natds-themes`.
 */
naturaDarkColorTokens = tokens_1.default.colorTokens.naturaDarkColorTokens;
exports.naturaDark = {
    asset: asset,
    shape: {
        borderRadius: tokens_1.default.radius.medium,
        badgeBorderRadius: 100
    },
    sizes: sizes_1.sizes,
    avatarSizes: avatarSizes_1.avatarSizes,
    buttonSizes: buttonSizes_1.buttonSizes,
    color: color,
    iconSizes: iconSizes_1.iconSizes,
    /**
     * @since 0.22
     * @todo Adopt opacity tokens from theme and deprecate legacy opacity
     */
    opacity: opacity_1.opacity,
    spacing: spacing_1.spacing.spacing,
    palette: {
        action: {
            /**
             * @since 0.24
             */
            active: (0, hex_to_rgba_1.default)(color.highlight, opacity.mediumHigh),
            disabled: (0, hex_to_rgba_1.default)(naturaDarkColorTokens.colorOnSecondary, 0.24)
        },
        /**
         * @since 0.24
         */
        divider: naturaDarkColorTokens.colorLowEmphasis,
        primary: {
            main: naturaDarkColorTokens.colorPrimary,
            light: naturaDarkColorTokens.colorPrimaryLight,
            dark: naturaDarkColorTokens.colorPrimaryDark,
            contrastText: naturaDarkColorTokens.colorOnPrimary
        },
        secondary: {
            main: naturaDarkColorTokens.colorSecondary,
            light: naturaDarkColorTokens.colorPrimaryLight,
            dark: naturaDarkColorTokens.colorPrimaryDark,
            contrastText: naturaDarkColorTokens.colorOnSecondary
        },
        error: {
            main: naturaDarkColorTokens.colorAlert,
            contrastText: naturaDarkColorTokens.colorOnAlert
        },
        success: {
            main: naturaDarkColorTokens.colorSuccess,
            contrastText: naturaDarkColorTokens.colorOnSuccess
        },
        background: {
            paper: naturaDarkColorTokens.colorSurface,
            default: naturaDarkColorTokens.colorBackground,
            paperContrastText: naturaDarkColorTokens.colorOnSurface,
            defaultContrastText: naturaDarkColorTokens.colorOnBackground
        },
        text: {
            primary: naturaDarkColorTokens.colorHighEmphasis,
            secondary: naturaDarkColorTokens.colorMediumEmphasis,
            disabled: naturaDarkColorTokens.colorLowEmphasis,
            hint: naturaDarkColorTokens.colorLowEmphasis
        },
        complementary: {
            highlight: naturaDarkColorTokens.colorHighlight,
            link: naturaDarkColorTokens.colorLink,
            linkContrastText: naturaDarkColorTokens.colorOnLink,
            warning: naturaDarkColorTokens.colorWarning,
            warningContrastText: naturaDarkColorTokens.colorOnSecondary
        }
    },
    typography: __assign(__assign({}, typography_1.typography), typography_2.fontSize),
    shadows: elevation_1.elevation,
    overrides: {
        MuiButton: {
            outlinedPrimary: {
                color: naturaDarkColorTokens.colorHighEmphasis
            },
            outlinedSecondary: {
                color: naturaDarkColorTokens.colorHighEmphasis,
                '&.Mui-disabled': {
                    borderColor: "".concat(naturaDarkColorTokens.colorHighlight, "3D")
                }
            },
            sizeSmall: __assign(__assign({}, buttonSizes_1.buttonSizes.small), typography_2.fontSize.subtitle2),
            root: __assign(__assign({}, buttonSizes_1.buttonSizes.medium), typography_2.fontSize.subtitle2),
            sizeLarge: __assign(__assign({}, buttonSizes_1.buttonSizes.large), typography_2.fontSize.subtitle2),
            text: {
                padding: null,
                '&.Mui-disabled': {
                    color: "".concat(naturaDarkColorTokens.colorHighlight, "3D"),
                    borderColor: "".concat(naturaDarkColorTokens.colorHighlight, "3D")
                }
            },
            contained: {
                '&.Mui-disabled': {
                    color: "".concat(naturaDarkColorTokens.colorHighlight, "3D"),
                    backgroundColor: "".concat(naturaDarkColorTokens.colorHighlight, "14")
                }
            },
            outlined: {
                padding: null,
                borderColor: "".concat(naturaDarkColorTokens.colorHighlight, "3D"),
                '&.Mui-disabled': {
                    color: "".concat(naturaDarkColorTokens.colorHighlight, "3D"),
                    borderColor: "".concat(naturaDarkColorTokens.colorHighlight, "3D")
                }
            }
        },
        MuiAvatar: {
            colorDefault: {
                color: naturaDarkColorTokens.colorHighEmphasis
            }
        },
        MuiIconButton: {
            root: {
                color: naturaDarkColorTokens.colorHighEmphasis,
                padding: '8px'
            },
            sizeSmall: {
                padding: '4px'
            }
        },
        MuiExpansionPanel: {
            root: {
                border: 'transparent 1px solid',
                '&$expanded': {
                    borderColor: naturaDarkColorTokens.colorPrimary
                },
                '&$disabled': {
                    backgroundColor: naturaDarkColorTokens.colorSurface,
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
                    backgroundColor: (0, hex_to_rgba_1.default)(naturaDarkColorTokens.colorHighEmphasis, 0.04)
                },
                '&$selected': {
                    backgroundColor: (0, hex_to_rgba_1.default)(naturaDarkColorTokens.colorPrimary, 0.16),
                    '&:hover': {
                        backgroundColor: (0, hex_to_rgba_1.default)(naturaDarkColorTokens.colorOnSecondary, 0.04)
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
                    backgroundColor: (0, hex_to_rgba_1.default)(naturaDarkColorTokens.colorOnSecondary, 0.04)
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
                backgroundColor: (0, hex_to_rgba_1.default)(naturaDarkColorTokens.colorOnBackground, 0.12),
                color: naturaDarkColorTokens.colorOnBackground,
                fontSize: typography_2.fontSize.subtitle2.fontSize,
                '& $avatar': {
                    backgroundColor: (0, hex_to_rgba_1.default)(naturaDarkColorTokens.colorOnBackground, 0.24),
                    color: naturaDarkColorTokens.colorOnBackground
                },
                '&$disabled': {
                    opacity: 0.4
                }
            },
            clickable: {
                '&:hover': {
                    backgroundColor: (0, hex_to_rgba_1.default)(naturaDarkColorTokens.colorOnBackground, 0.16)
                },
                '&:focus': {
                    backgroundColor: (0, hex_to_rgba_1.default)(naturaDarkColorTokens.colorOnBackground, 0.16)
                }
            },
            clickableColorPrimary: {
                '&:hover': {
                    backgroundColor: naturaDarkColorTokens.colorPrimaryDark
                }
            },
            clickableColorSecondary: {
                '&:hover': {
                    backgroundColor: naturaDarkColorTokens.colorPrimaryDark
                }
            },
            outlined: {
                borderColor: (0, hex_to_rgba_1.default)(naturaDarkColorTokens.colorOnBackground, 0.12),
                color: naturaDarkColorTokens.colorOnBackground
            },
            outlinedPrimary: {
                color: naturaDarkColorTokens.colorOnBackground,
                '& $avatar': {
                    backgroundColor: naturaDarkColorTokens.colorPrimary
                }
            },
            outlinedSecondary: {
                color: naturaDarkColorTokens.colorOnBackground,
                '& $avatar': {
                    backgroundColor: naturaDarkColorTokens.colorSecondary
                }
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
                color: (0, hex_to_rgba_1.default)(naturaDarkColorTokens.colorOnBackground, 0.8),
                '&:hover': {
                    color: (0, hex_to_rgba_1.default)(naturaDarkColorTokens.colorOnBackground, 0.6)
                }
            },
            deleteIconSmall: {
                width: "".concat(sizes_1.sizes.small, "px"),
                height: "".concat(sizes_1.sizes.small, "px"),
                fontSize: "".concat(sizes_1.sizes.small, "px")
            },
            deleteIconColorPrimary: {
                color: (0, hex_to_rgba_1.default)(naturaDarkColorTokens.colorOnBackground, 0.8),
                '&:hover': {
                    color: naturaDarkColorTokens.colorOnBackground
                }
            },
            deleteIconColorSecondary: {
                color: (0, hex_to_rgba_1.default)(naturaDarkColorTokens.colorOnBackground, 0.8),
                '&:hover': {
                    color: naturaDarkColorTokens.colorOnBackground
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
                boxShadow: "".concat(naturaDarkColorTokens.colorLowEmphasis, " 0 0 0 1px"),
                color: naturaDarkColorTokens.colorHighEmphasis,
                width: '100%',
                "&[data-state='error']": {
                    boxShadow: "".concat(naturaDarkColorTokens.colorAlert, " 0 0 0 1px")
                },
                "&[data-state='success']": {
                    boxShadow: "".concat(naturaDarkColorTokens.colorSuccess, " 0 0 0 1px")
                },
                '&:hover': {
                    boxShadow: "".concat(naturaDarkColorTokens.colorMediumEmphasis, " 0 0 0 1px"),
                    '&.Mui-disabled': {
                        boxShadow: "".concat(naturaDarkColorTokens.colorLowEmphasis, " 0 0 0 1px")
                    }
                },
                '&.Mui-focused': {
                    boxShadow: "".concat(naturaDarkColorTokens.colorPrimary, " 0 0 0 2px")
                },
                '&.MuiFilled:not(.Mui-focused)': {
                    boxShadow: "".concat(naturaDarkColorTokens.colorHighEmphasis, " 0 0 0 1px"),
                    '&:hover': {
                        boxShadow: "".concat(naturaDarkColorTokens.colorMediumEmphasis, " 0 0 0 1px")
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
                    color: naturaDarkColorTokens.colorMediumEmphasis
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
                    color: naturaDarkColorTokens.colorMediumEmphasis
                },
                '&.Mui-error': {
                    color: naturaDarkColorTokens.colorHighEmphasis
                }
            }
        },
        MuiFormHelperText: {
            root: {
                '&.Mui-error': {
                    color: naturaDarkColorTokens.colorMediumEmphasis
                }
            }
        },
        MuiSelect: {
            select: {
                '&:focus': {
                    backgroundColor: 'transparent'
                },
                '&.Mui-disabled': {
                    color: naturaDarkColorTokens.colorLowEmphasis
                }
            },
            icon: {
                top: sizes_1.sizes.micro,
                color: naturaDarkColorTokens.colorHighEmphasis
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
                    borderColor: naturaDarkColorTokens.colorPrimaryDark,
                    '&.Mui-disabled': {
                        borderColor: "".concat(naturaDarkColorTokens.colorHighlight, "3D")
                    }
                }
            },
            groupedContainedSecondary: {
                '&:not(:last-child)': {
                    borderColor: naturaDarkColorTokens.colorSecondaryDark,
                    '&.Mui-disabled': {
                        borderColor: "".concat(naturaDarkColorTokens.colorHighlight, "3D")
                    }
                }
            },
            groupedContainedHorizontal: {
                '&:not(:last-child)': {
                    borderRightColor: "".concat(naturaDarkColorTokens.colorHighlight, "1F"),
                    '&.Mui-disabled': {
                        borderColor: "".concat(naturaDarkColorTokens.colorHighlight, "3D")
                    }
                }
            },
            groupedTextPrimary: {
                '&:not(:last-child).Mui-disabled': {
                    borderColor: "".concat(naturaDarkColorTokens.colorHighlight, "3D")
                }
            },
            groupedTextSecondary: {
                '&:not(:last-child).Mui-disabled': {
                    borderColor: "".concat(naturaDarkColorTokens.colorHighlight, "3D")
                }
            },
            groupedTextHorizontal: {
                '&:not(:last-child)': {
                    borderRightColor: "".concat(naturaDarkColorTokens.colorHighlight, "1F"),
                    '&.Mui-disabled': {
                        borderColor: "".concat(naturaDarkColorTokens.colorHighlight, "3D")
                    }
                }
            }
        },
        MuiSvgIcon: {
            root: {
                fill: naturaDarkColorTokens.colorMediumEmphasis
            }
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
                color: naturaDarkColorTokens.colorHighEmphasis,
                backgroundColor: (0, hex_to_rgba_1.default)(naturaDarkColorTokens.colorSuccess, 0.16)
            },
            outlinedSuccess: {
                color: naturaDarkColorTokens.colorHighEmphasis
            },
            standardError: {
                color: naturaDarkColorTokens.colorHighEmphasis,
                backgroundColor: (0, hex_to_rgba_1.default)(naturaDarkColorTokens.colorAlert, 0.16)
            },
            outlinedError: {
                color: naturaDarkColorTokens.colorHighEmphasis
            },
            standardWarning: {
                color: naturaDarkColorTokens.colorHighEmphasis,
                backgroundColor: (0, hex_to_rgba_1.default)(naturaDarkColorTokens.colorWarning, 0.16),
                '& .MuiAlert-icon': {
                    color: naturaDarkColorTokens.colorWarning
                }
            },
            outlinedWarning: {
                color: naturaDarkColorTokens.colorHighEmphasis,
                borderColor: naturaDarkColorTokens.colorWarning,
                '& .MuiAlert-icon': {
                    color: naturaDarkColorTokens.colorWarning
                }
            },
            filledWarning: {
                color: naturaDarkColorTokens.colorOnWarning,
                backgroundColor: naturaDarkColorTokens.colorWarning
            },
            standardInfo: {
                color: naturaDarkColorTokens.colorHighEmphasis,
                backgroundColor: (0, hex_to_rgba_1.default)(naturaDarkColorTokens.colorLink, 0.16),
                '& .MuiAlert-icon': {
                    color: naturaDarkColorTokens.colorLink
                }
            },
            outlinedInfo: {
                color: naturaDarkColorTokens.colorHighEmphasis,
                borderColor: naturaDarkColorTokens.colorLink,
                '& .MuiAlert-icon': {
                    color: naturaDarkColorTokens.colorLink
                }
            },
            filledInfo: {
                backgroundColor: naturaDarkColorTokens.colorLink
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
//# sourceMappingURL=natura-dark.js.map