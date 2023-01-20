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
exports.eloLight = void 0;
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
 * @deprecated `eloLightColorTokens` are deprecated since v0.20 and will be removed at v1.0.
 * Please use `theme.elo.light.color` from `natds-themes`.
 */
eloLightColorTokens = tokens_1.default.colorTokens.eloLightColorTokens;
var _a = natds_themes_1.default.elo.light, color = _a.color, opacity = _a.opacity, asset = _a.asset;
exports.eloLight = {
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
            disabled: (0, hex_to_rgba_1.default)(eloLightColorTokens.colorHighlight, 0.24)
        },
        /**
         * @since 0.24
         */
        divider: eloLightColorTokens.colorLowEmphasis,
        primary: {
            main: eloLightColorTokens.colorPrimary,
            light: eloLightColorTokens.colorPrimaryLight,
            dark: eloLightColorTokens.colorPrimaryDark,
            contrastText: eloLightColorTokens.colorOnPrimary
        },
        secondary: {
            main: eloLightColorTokens.colorSecondary,
            light: eloLightColorTokens.colorSecondaryLight,
            dark: eloLightColorTokens.colorSecondaryDark,
            contrastText: eloLightColorTokens.colorOnSecondary
        },
        error: {
            main: eloLightColorTokens.colorAlert,
            contrastText: eloLightColorTokens.colorOnAlert
        },
        success: {
            main: eloLightColorTokens.colorSuccess,
            contrastText: eloLightColorTokens.colorOnSuccess
        },
        background: {
            paper: eloLightColorTokens.colorSurface,
            default: eloLightColorTokens.colorBackground,
            paperContrastText: eloLightColorTokens.colorOnSurface,
            defaultContrastText: eloLightColorTokens.colorOnBackground
        },
        text: {
            primary: eloLightColorTokens.colorHighEmphasis,
            secondary: eloLightColorTokens.colorMediumEmphasis,
            disabled: eloLightColorTokens.colorLowEmphasis,
            hint: eloLightColorTokens.colorLowEmphasis
        },
        complementary: {
            highlight: eloLightColorTokens.colorHighlight,
            link: eloLightColorTokens.colorLink,
            linkContrastText: eloLightColorTokens.colorOnLink,
            warning: eloLightColorTokens.colorWarning,
            warningContrastText: eloLightColorTokens.colorOnWarning
        }
    },
    typography: __assign(__assign({}, typography_1.typography), typography_2.fontSize),
    shadows: elevation_1.elevation,
    overrides: {
        MuiButton: {
            outlinedPrimary: {
                color: eloLightColorTokens.colorHighEmphasis
            },
            outlinedSecondary: {
                color: eloLightColorTokens.colorHighEmphasis,
                '&.Mui-disabled': {
                    borderColor: "".concat(eloLightColorTokens.colorHighlight, "3D")
                }
            },
            sizeSmall: __assign(__assign({}, buttonSizes_1.buttonSizes.small), typography_2.fontSize.subtitle2),
            root: __assign(__assign({}, buttonSizes_1.buttonSizes.medium), typography_2.fontSize.subtitle2),
            sizeLarge: __assign(__assign({}, buttonSizes_1.buttonSizes.large), typography_2.fontSize.subtitle2),
            text: {
                padding: null,
                '&.Mui-disabled': {
                    color: "".concat(eloLightColorTokens.colorHighlight, "3D"),
                    borderColor: "".concat(eloLightColorTokens.colorHighlight, "3D")
                }
            },
            contained: {
                '&.Mui-disabled': {
                    color: "".concat(eloLightColorTokens.colorHighlight, "3D"),
                    backgroundColor: "".concat(eloLightColorTokens.colorHighlight, "14")
                }
            },
            outlined: {
                padding: null,
                borderColor: "".concat(eloLightColorTokens.colorHighlight, "3D"),
                '&.Mui-disabled': {
                    color: "".concat(eloLightColorTokens.colorHighlight, "3D"),
                    borderColor: "".concat(eloLightColorTokens.colorHighlight, "3D")
                }
            }
        },
        MuiAvatar: {
            colorDefault: {
                color: eloLightColorTokens.colorHighEmphasis
            }
        },
        MuiIconButton: {
            root: {
                padding: '8px',
                color: eloLightColorTokens.colorHighEmphasis
            },
            sizeSmall: {
                padding: '4px'
            }
        },
        MuiExpansionPanel: {
            root: {
                border: 'transparent 1px solid',
                '&$expanded': {
                    borderColor: eloLightColorTokens.colorPrimary
                },
                '&$disabled': {
                    backgroundColor: eloLightColorTokens.colorOnPrimary,
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
                    backgroundColor: (0, hex_to_rgba_1.default)(eloLightColorTokens.colorOnSecondary, 0.04)
                },
                '&$selected': {
                    backgroundColor: (0, hex_to_rgba_1.default)(eloLightColorTokens.colorPrimary, 0.16),
                    '&:hover': {
                        backgroundColor: (0, hex_to_rgba_1.default)(eloLightColorTokens.colorHighlight, 0.04)
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
                    backgroundColor: (0, hex_to_rgba_1.default)(eloLightColorTokens.colorHighlight, 0.04)
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
                backgroundColor: (0, hex_to_rgba_1.default)(eloLightColorTokens.colorHighlight, 0.12),
                color: eloLightColorTokens.colorHighEmphasis,
                fontSize: typography_2.fontSize.subtitle2.fontSize,
                '& $avatar': {
                    backgroundColor: (0, hex_to_rgba_1.default)(eloLightColorTokens.colorHighlight, 0.24),
                    color: eloLightColorTokens.colorHighEmphasis
                },
                '&$disabled': {
                    opacity: 0.4
                }
            },
            clickableColorPrimary: {
                '&:hover': {
                    backgroundColor: eloLightColorTokens.colorPrimary
                }
            },
            clickableColorSecondary: {
                '&:hover': {
                    backgroundColor: eloLightColorTokens.colorSecondary
                }
            },
            outlined: {
                borderColor: (0, hex_to_rgba_1.default)(eloLightColorTokens.colorHighlight, 0.12),
                color: eloLightColorTokens.colorHighlight
            },
            outlinedPrimary: {
                color: eloLightColorTokens.colorHighlight
            },
            outlinedSecondary: {
                color: eloLightColorTokens.colorHighlight
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
                color: (0, hex_to_rgba_1.default)(eloLightColorTokens.colorHighlight, 0.8),
                '&:hover': {
                    color: eloLightColorTokens.colorHighlight
                }
            },
            deleteIconSmall: {
                width: "".concat(sizes_1.sizes.small, "px"),
                height: "".concat(sizes_1.sizes.small, "px"),
                fontSize: "".concat(sizes_1.sizes.small, "px")
            },
            deleteIconColorPrimary: {
                color: (0, hex_to_rgba_1.default)(eloLightColorTokens.colorOnPrimary, 0.8),
                '&:hover': {
                    color: eloLightColorTokens.colorOnPrimary
                }
            },
            deleteIconColorSecondary: {
                color: (0, hex_to_rgba_1.default)(eloLightColorTokens.colorOnSecondary, 0.8),
                '&:hover': {
                    color: eloLightColorTokens.colorOnSecondary
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
                boxShadow: "".concat(eloLightColorTokens.colorLowEmphasis, " 0 0 0 1px"),
                color: eloLightColorTokens.colorHighEmphasis,
                width: '100%',
                "&[data-state='error']": {
                    boxShadow: "".concat(eloLightColorTokens.colorAlert, " 0 0 0 1px")
                },
                "&[data-state='success']": {
                    boxShadow: "".concat(eloLightColorTokens.colorSuccess, " 0 0 0 1px")
                },
                '&:hover': {
                    boxShadow: "".concat(eloLightColorTokens.colorMediumEmphasis, " 0 0 0 1px"),
                    '&.Mui-disabled': {
                        boxShadow: "".concat(eloLightColorTokens.colorLowEmphasis, " 0 0 0 1px")
                    }
                },
                '&.Mui-focused': {
                    boxShadow: "".concat(eloLightColorTokens.colorPrimary, " 0 0 0 2px")
                },
                '&.MuiFilled:not(.Mui-focused)': {
                    boxShadow: "".concat(eloLightColorTokens.colorHighEmphasis, " 0 0 0 1px"),
                    '&:hover': {
                        boxShadow: "".concat(eloLightColorTokens.colorMediumEmphasis, " 0 0 0 1px")
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
                    color: eloLightColorTokens.colorMediumEmphasis
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
                    color: eloLightColorTokens.colorMediumEmphasis
                },
                '&.Mui-error': {
                    color: eloLightColorTokens.colorAlert
                }
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
                    borderColor: eloLightColorTokens.colorPrimaryDark,
                    '&.Mui-disabled': {
                        borderColor: "".concat(eloLightColorTokens.colorHighlight, "3D")
                    }
                }
            },
            groupedContainedSecondary: {
                '&:not(:last-child)': {
                    borderColor: eloLightColorTokens.colorSecondaryDark,
                    '&.Mui-disabled': {
                        borderColor: "".concat(eloLightColorTokens.colorHighlight, "3D")
                    }
                }
            },
            groupedContainedHorizontal: {
                '&:not(:last-child)': {
                    borderRightColor: "".concat(eloLightColorTokens.colorHighlight, "1F"),
                    '&.Mui-disabled': {
                        borderColor: "".concat(eloLightColorTokens.colorHighlight, "3D")
                    }
                }
            },
            groupedTextPrimary: {
                '&:not(:last-child).Mui-disabled': {
                    borderColor: "".concat(eloLightColorTokens.colorHighlight, "3D")
                }
            },
            groupedTextSecondary: {
                '&:not(:last-child).Mui-disabled': {
                    borderColor: "".concat(eloLightColorTokens.colorHighlight, "3D")
                }
            },
            groupedTextHorizontal: {
                '&:not(:last-child)': {
                    borderRightColor: "".concat(eloLightColorTokens.colorHighlight, "1F"),
                    '&.Mui-disabled': {
                        borderColor: "".concat(eloLightColorTokens.colorHighlight, "3D")
                    }
                }
            }
        },
        MuiSelect: {
            select: {
                '&:focus': {
                    backgroundColor: 'transparent'
                },
                '&.Mui-disabled': {
                    color: eloLightColorTokens.colorLowEmphasis
                }
            },
            icon: {
                top: sizes_1.sizes.micro,
                color: eloLightColorTokens.colorHighEmphasis
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
                color: eloLightColorTokens.colorHighEmphasis,
                backgroundColor: (0, hex_to_rgba_1.default)(eloLightColorTokens.colorSuccess, 0.16)
            },
            outlinedSuccess: {
                color: eloLightColorTokens.colorHighEmphasis
            },
            standardError: {
                color: eloLightColorTokens.colorHighEmphasis,
                backgroundColor: (0, hex_to_rgba_1.default)(eloLightColorTokens.colorAlert, 0.16)
            },
            outlinedError: {
                color: eloLightColorTokens.colorHighEmphasis
            },
            standardWarning: {
                color: eloLightColorTokens.colorHighEmphasis,
                backgroundColor: (0, hex_to_rgba_1.default)(eloLightColorTokens.colorWarning, 0.16),
                '& .MuiAlert-icon': {
                    color: eloLightColorTokens.colorWarning
                }
            },
            outlinedWarning: {
                color: eloLightColorTokens.colorHighEmphasis,
                borderColor: eloLightColorTokens.colorWarning,
                '& .MuiAlert-icon': {
                    color: eloLightColorTokens.colorWarning
                }
            },
            filledWarning: {
                color: eloLightColorTokens.colorOnWarning,
                backgroundColor: eloLightColorTokens.colorWarning
            },
            standardInfo: {
                color: eloLightColorTokens.colorHighEmphasis,
                backgroundColor: (0, hex_to_rgba_1.default)(eloLightColorTokens.colorLink, 0.16),
                '& .MuiAlert-icon': {
                    color: eloLightColorTokens.colorLink
                }
            },
            outlinedInfo: {
                color: eloLightColorTokens.colorHighEmphasis,
                borderColor: eloLightColorTokens.colorLink,
                '& .MuiAlert-icon': {
                    color: eloLightColorTokens.colorLink
                }
            },
            filledInfo: {
                backgroundColor: eloLightColorTokens.colorLink
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
//# sourceMappingURL=elo-light.js.map