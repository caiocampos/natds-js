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
exports.eloDark = void 0;
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
 * @deprecated `eloDarkColorTokens` are deprecated since v0.20 and will be removed at v1.0.
 * Please use `theme.elo.dark.color` from `natds-themes`.
 */
eloDarkColorTokens = tokens_1.default.colorTokens.eloDarkColorTokens;
var _a = natds_themes_1.default.elo.dark, color = _a.color, opacity = _a.opacity, asset = _a.asset;
exports.eloDark = {
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
     * @todo Adopt opacity tokens from theme
     */
    opacity: opacity_1.opacity,
    spacing: spacing_1.spacing.spacing,
    palette: {
        action: {
            /**
             * @since 0.24
             */
            active: (0, hex_to_rgba_1.default)(color.highlight, opacity.mediumHigh),
            disabled: (0, hex_to_rgba_1.default)(eloDarkColorTokens.colorOnSecondary, 0.24)
        },
        /**
         * @since 0.24
         */
        divider: eloDarkColorTokens.colorLowEmphasis,
        primary: {
            main: eloDarkColorTokens.colorPrimary,
            light: eloDarkColorTokens.colorPrimaryLight,
            dark: eloDarkColorTokens.colorPrimaryDark,
            contrastText: eloDarkColorTokens.colorOnPrimary
        },
        secondary: {
            main: eloDarkColorTokens.colorSecondary,
            light: eloDarkColorTokens.colorSecondaryLight,
            dark: eloDarkColorTokens.colorSecondaryDark,
            contrastText: eloDarkColorTokens.colorOnSecondaryLight
        },
        error: {
            main: eloDarkColorTokens.colorAlert,
            contrastText: eloDarkColorTokens.colorOnAlert
        },
        success: {
            main: eloDarkColorTokens.colorSuccess,
            contrastText: eloDarkColorTokens.colorOnSuccess
        },
        background: {
            paper: eloDarkColorTokens.colorSurface,
            default: eloDarkColorTokens.colorBackground,
            paperContrastText: eloDarkColorTokens.colorOnSurface,
            defaultContrastText: eloDarkColorTokens.colorOnBackground
        },
        text: {
            primary: eloDarkColorTokens.colorHighEmphasis,
            secondary: eloDarkColorTokens.colorMediumEmphasis,
            disabled: eloDarkColorTokens.colorLowEmphasis,
            hint: eloDarkColorTokens.colorLowEmphasis
        },
        complementary: {
            highlight: eloDarkColorTokens.colorHighlight,
            link: eloDarkColorTokens.colorLink,
            linkContrastText: eloDarkColorTokens.colorOnLink,
            warning: eloDarkColorTokens.colorWarning,
            warningContrastText: eloDarkColorTokens.colorOnSecondary
        }
    },
    typography: __assign(__assign({}, typography_1.typography), typography_2.fontSize),
    shadows: elevation_1.elevation,
    overrides: {
        MuiButton: {
            outlinedPrimary: {
                color: eloDarkColorTokens.colorHighEmphasis
            },
            outlinedSecondary: {
                color: eloDarkColorTokens.colorHighEmphasis,
                '&.Mui-disabled': {
                    borderColor: "".concat(eloDarkColorTokens.colorHighlight, "3D")
                }
            },
            sizeSmall: __assign(__assign({}, buttonSizes_1.buttonSizes.small), typography_2.fontSize.subtitle2),
            root: __assign(__assign({}, buttonSizes_1.buttonSizes.medium), typography_2.fontSize.subtitle2),
            sizeLarge: __assign(__assign({}, buttonSizes_1.buttonSizes.large), typography_2.fontSize.subtitle2),
            text: {
                padding: null,
                '&.Mui-disabled': {
                    color: "".concat(eloDarkColorTokens.colorHighlight, "3D"),
                    borderColor: "".concat(eloDarkColorTokens.colorHighlight, "3D")
                }
            },
            contained: {
                '&.Mui-disabled': {
                    color: "".concat(eloDarkColorTokens.colorHighlight, "3D"),
                    backgroundColor: "".concat(eloDarkColorTokens.colorHighlight, "14")
                }
            },
            outlined: {
                padding: null,
                borderColor: "".concat(eloDarkColorTokens.colorHighlight, "3D"),
                '&.Mui-disabled': {
                    color: "".concat(eloDarkColorTokens.colorHighlight, "3D"),
                    borderColor: "".concat(eloDarkColorTokens.colorHighlight, "3D")
                }
            }
        },
        MuiAvatar: {
            colorDefault: {
                color: eloDarkColorTokens.colorHighEmphasis
            }
        },
        MuiIconButton: {
            root: {
                color: eloDarkColorTokens.colorHighEmphasis,
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
                    borderColor: eloDarkColorTokens.colorPrimary
                },
                '&$disabled': {
                    backgroundColor: eloDarkColorTokens.colorSurface,
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
                    backgroundColor: (0, hex_to_rgba_1.default)(eloDarkColorTokens.colorHighEmphasis, 0.16)
                },
                '&$selected': {
                    background: (0, hex_to_rgba_1.default)(eloDarkColorTokens.colorPrimary, 0.16),
                    '&:hover': {
                        backgroundColor: (0, hex_to_rgba_1.default)(eloDarkColorTokens.colorOnSecondary, 0.04)
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
                    backgroundColor: (0, hex_to_rgba_1.default)(eloDarkColorTokens.colorOnSecondary, 0.04)
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
                backgroundColor: (0, hex_to_rgba_1.default)(eloDarkColorTokens.colorOnBackground, 0.12),
                color: eloDarkColorTokens.colorOnBackground,
                fontSize: typography_2.fontSize.subtitle2.fontSize,
                '& $avatar': {
                    backgroundColor: (0, hex_to_rgba_1.default)(eloDarkColorTokens.colorOnBackground, 0.24),
                    color: eloDarkColorTokens.colorOnBackground
                },
                '&$disabled': {
                    opacity: 0.4
                }
            },
            clickable: {
                '&:hover': {
                    backgroundColor: (0, hex_to_rgba_1.default)(eloDarkColorTokens.colorOnBackground, 0.16)
                },
                '&:focus': {
                    backgroundColor: (0, hex_to_rgba_1.default)(eloDarkColorTokens.colorOnBackground, 0.16)
                }
            },
            clickableColorPrimary: {
                '&:hover': {
                    backgroundColor: eloDarkColorTokens.colorPrimaryDark
                }
            },
            clickableColorSecondary: {
                '&:hover': {
                    backgroundColor: eloDarkColorTokens.colorPrimaryDark
                }
            },
            outlined: {
                borderColor: (0, hex_to_rgba_1.default)(eloDarkColorTokens.colorOnBackground, 0.12),
                color: eloDarkColorTokens.colorOnBackground
            },
            outlinedPrimary: {
                color: eloDarkColorTokens.colorOnBackground,
                '& $avatar': {
                    backgroundColor: eloDarkColorTokens.colorPrimary
                }
            },
            outlinedSecondary: {
                color: eloDarkColorTokens.colorOnBackground,
                '& $avatar': {
                    backgroundColor: eloDarkColorTokens.colorSecondary
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
                color: (0, hex_to_rgba_1.default)(eloDarkColorTokens.colorOnBackground, 0.8),
                '&:hover': {
                    color: (0, hex_to_rgba_1.default)(eloDarkColorTokens.colorOnBackground, 0.6)
                }
            },
            deleteIconSmall: {
                width: "".concat(sizes_1.sizes.small, "px"),
                height: "".concat(sizes_1.sizes.small, "px"),
                fontSize: "".concat(sizes_1.sizes.small, "px")
            },
            deleteIconColorPrimary: {
                color: (0, hex_to_rgba_1.default)(eloDarkColorTokens.colorOnBackground, 0.8),
                '&:hover': {
                    color: eloDarkColorTokens.colorOnBackground
                }
            },
            deleteIconColorSecondary: {
                color: (0, hex_to_rgba_1.default)(eloDarkColorTokens.colorOnBackground, 0.8),
                '&:hover': {
                    color: eloDarkColorTokens.colorOnBackground
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
                boxShadow: "".concat(eloDarkColorTokens.colorLowEmphasis, " 0 0 0 1px"),
                color: eloDarkColorTokens.colorHighEmphasis,
                width: '100%',
                "&[data-state='error']": {
                    boxShadow: "".concat(eloDarkColorTokens.colorAlert, " 0 0 0 1px")
                },
                "&[data-state='success']": {
                    boxShadow: "".concat(eloDarkColorTokens.colorSuccess, " 0 0 0 1px")
                },
                '&:hover': {
                    boxShadow: "".concat(eloDarkColorTokens.colorMediumEmphasis, " 0 0 0 1px"),
                    '&.Mui-disabled': {
                        boxShadow: "".concat(eloDarkColorTokens.colorLowEmphasis, " 0 0 0 1px")
                    }
                },
                '&.Mui-focused': {
                    boxShadow: "".concat(eloDarkColorTokens.colorPrimary, " 0 0 0 2px")
                },
                '&.MuiFilled:not(.Mui-focused)': {
                    boxShadow: "".concat(eloDarkColorTokens.colorHighEmphasis, " 0 0 0 1px"),
                    '&:hover': {
                        boxShadow: "".concat(eloDarkColorTokens.colorMediumEmphasis, " 0 0 0 1px")
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
                    color: eloDarkColorTokens.colorMediumEmphasis
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
                    color: eloDarkColorTokens.colorMediumEmphasis
                },
                '&.Mui-error': {
                    color: eloDarkColorTokens.colorHighEmphasis
                }
            }
        },
        MuiFormHelperText: {
            root: {
                '&.Mui-error': {
                    color: eloDarkColorTokens.colorMediumEmphasis
                }
            }
        },
        MuiSelect: {
            select: {
                '&:focus': {
                    backgroundColor: 'transparent'
                },
                '&.Mui-disabled': {
                    color: eloDarkColorTokens.colorLowEmphasis
                }
            },
            icon: {
                top: sizes_1.sizes.micro,
                color: eloDarkColorTokens.colorHighEmphasis
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
                    borderColor: eloDarkColorTokens.colorPrimaryDark,
                    '&.Mui-disabled': {
                        borderColor: "".concat(eloDarkColorTokens.colorHighlight, "3D")
                    }
                }
            },
            groupedContainedSecondary: {
                '&:not(:last-child)': {
                    borderColor: eloDarkColorTokens.colorSecondaryDark,
                    '&.Mui-disabled': {
                        borderColor: "".concat(eloDarkColorTokens.colorHighlight, "3D")
                    }
                }
            },
            groupedContainedHorizontal: {
                '&:not(:last-child)': {
                    borderRightColor: "".concat(eloDarkColorTokens.colorHighlight, "1F"),
                    '&.Mui-disabled': {
                        borderColor: "".concat(eloDarkColorTokens.colorHighlight, "3D")
                    }
                }
            },
            groupedTextPrimary: {
                '&:not(:last-child).Mui-disabled': {
                    borderColor: "".concat(eloDarkColorTokens.colorHighlight, "3D")
                }
            },
            groupedTextSecondary: {
                '&:not(:last-child).Mui-disabled': {
                    borderColor: "".concat(eloDarkColorTokens.colorHighlight, "3D")
                }
            },
            groupedTextHorizontal: {
                '&:not(:last-child)': {
                    borderRightColor: "".concat(eloDarkColorTokens.colorHighlight, "1F"),
                    '&.Mui-disabled': {
                        borderColor: "".concat(eloDarkColorTokens.colorHighlight, "3D")
                    }
                }
            }
        },
        MuiSvgIcon: {
            root: {
                fill: eloDarkColorTokens.colorMediumEmphasis
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
                color: eloDarkColorTokens.colorHighEmphasis,
                backgroundColor: (0, hex_to_rgba_1.default)(eloDarkColorTokens.colorSuccess, 0.16)
            },
            outlinedSuccess: {
                color: eloDarkColorTokens.colorHighEmphasis
            },
            standardError: {
                color: eloDarkColorTokens.colorHighEmphasis,
                backgroundColor: (0, hex_to_rgba_1.default)(eloDarkColorTokens.colorAlert, 0.16)
            },
            outlinedError: {
                color: eloDarkColorTokens.colorHighEmphasis
            },
            standardWarning: {
                color: eloDarkColorTokens.colorHighEmphasis,
                backgroundColor: (0, hex_to_rgba_1.default)(eloDarkColorTokens.colorWarning, 0.16),
                '& .MuiAlert-icon': {
                    color: eloDarkColorTokens.colorWarning
                }
            },
            outlinedWarning: {
                color: eloDarkColorTokens.colorHighEmphasis,
                borderColor: eloDarkColorTokens.colorWarning,
                '& .MuiAlert-icon': {
                    color: eloDarkColorTokens.colorWarning
                }
            },
            filledWarning: {
                color: eloDarkColorTokens.colorOnWarning,
                backgroundColor: eloDarkColorTokens.colorWarning
            },
            standardInfo: {
                color: eloDarkColorTokens.colorHighEmphasis,
                backgroundColor: (0, hex_to_rgba_1.default)(eloDarkColorTokens.colorLink, 0.16),
                '& .MuiAlert-icon': {
                    color: eloDarkColorTokens.colorLink
                }
            },
            outlinedInfo: {
                color: eloDarkColorTokens.colorHighEmphasis,
                borderColor: eloDarkColorTokens.colorLink,
                '& .MuiAlert-icon': {
                    color: eloDarkColorTokens.colorLink
                }
            },
            filledInfo: {
                backgroundColor: eloDarkColorTokens.colorLink
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
//# sourceMappingURL=elo-dark.js.map