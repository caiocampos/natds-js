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
exports.biomeLight = void 0;
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
 * @deprecated `biomeLightColorTokens` are deprecated since v0.20 and will be removed at v1.0.
 * Please use `theme.biome.light.color` from `natds-themes`.
 */
biomeLightColorTokens = tokens_1.default.colorTokens.biomeLightColorTokens;
var _a = natds_themes_1.default.biome.light, color = _a.color, opacity = _a.opacity, asset = _a.asset;
exports.biomeLight = {
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
            disabled: (0, hex_to_rgba_1.default)(biomeLightColorTokens.colorHighlight, 0.24)
        },
        /**
         * @since 0.24
         */
        divider: biomeLightColorTokens.colorLowEmphasis,
        primary: {
            main: biomeLightColorTokens.colorPrimary,
            light: biomeLightColorTokens.colorPrimaryLight,
            dark: biomeLightColorTokens.colorPrimaryDark,
            contrastText: biomeLightColorTokens.colorOnPrimary
        },
        secondary: {
            main: biomeLightColorTokens.colorSecondary,
            light: biomeLightColorTokens.colorSecondaryLight,
            dark: biomeLightColorTokens.colorSecondaryDark,
            contrastText: biomeLightColorTokens.colorOnSecondary
        },
        error: {
            main: biomeLightColorTokens.colorAlert,
            contrastText: biomeLightColorTokens.colorOnAlert
        },
        success: {
            main: biomeLightColorTokens.colorSuccess,
            contrastText: biomeLightColorTokens.colorOnSuccess
        },
        background: {
            paper: biomeLightColorTokens.colorSurface,
            default: biomeLightColorTokens.colorBackground,
            paperContrastText: biomeLightColorTokens.colorOnSurface,
            defaultContrastText: biomeLightColorTokens.colorOnBackground
        },
        text: {
            primary: biomeLightColorTokens.colorHighEmphasis,
            secondary: biomeLightColorTokens.colorMediumEmphasis,
            disabled: biomeLightColorTokens.colorLowEmphasis,
            hint: biomeLightColorTokens.colorLowEmphasis
        },
        complementary: {
            highlight: biomeLightColorTokens.colorHighlight,
            link: biomeLightColorTokens.colorLink,
            linkContrastText: biomeLightColorTokens.colorOnLink,
            warning: biomeLightColorTokens.colorWarning,
            warningContrastText: biomeLightColorTokens.colorOnWarning
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
                color: biomeLightColorTokens.colorHighEmphasis
            },
            outlinedSecondary: {
                color: biomeLightColorTokens.colorHighEmphasis,
                '&.Mui-disabled': {
                    borderColor: "".concat(biomeLightColorTokens.colorHighlight, "3D")
                }
            },
            sizeSmall: __assign(__assign({}, buttonSizes_1.buttonSizes.small), typography_2.fontSize.subtitle2),
            root: __assign(__assign({}, buttonSizes_1.buttonSizes.medium), typography_2.fontSize.subtitle2),
            sizeLarge: __assign(__assign({}, buttonSizes_1.buttonSizes.large), typography_2.fontSize.subtitle2),
            text: {
                padding: null,
                '&.Mui-disabled': {
                    color: "".concat(biomeLightColorTokens.colorHighlight, "3D"),
                    borderColor: "".concat(biomeLightColorTokens.colorHighlight, "3D")
                }
            },
            contained: {
                '&.Mui-disabled': {
                    color: "".concat(biomeLightColorTokens.colorHighlight, "3D"),
                    backgroundColor: "".concat(biomeLightColorTokens.colorHighlight, "14")
                }
            },
            outlined: {
                padding: null,
                borderColor: "".concat(biomeLightColorTokens.colorHighlight, "3D"),
                '&.Mui-disabled': {
                    color: "".concat(biomeLightColorTokens.colorHighlight, "3D"),
                    borderColor: "".concat(biomeLightColorTokens.colorHighlight, "3D")
                }
            }
        },
        MuiAvatar: {
            colorDefault: {
                color: biomeLightColorTokens.colorHighEmphasis
            }
        },
        MuiIconButton: {
            root: {
                padding: '8px',
                color: biomeLightColorTokens.colorHighEmphasis
            },
            sizeSmall: {
                padding: '4px'
            }
        },
        MuiExpansionPanel: {
            root: {
                border: 'transparent 1px solid',
                '&$expanded': {
                    borderColor: biomeLightColorTokens.colorPrimary
                },
                '&$disabled': {
                    backgroundColor: biomeLightColorTokens.colorOnPrimary,
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
                    backgroundColor: (0, hex_to_rgba_1.default)(biomeLightColorTokens.colorOnSurface, 0.04)
                },
                '&$selected': {
                    backgroundColor: (0, hex_to_rgba_1.default)(biomeLightColorTokens.colorPrimary, 0.16),
                    '&:hover': {
                        backgroundColor: (0, hex_to_rgba_1.default)(biomeLightColorTokens.colorHighlight, 0.04)
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
                    backgroundColor: (0, hex_to_rgba_1.default)(biomeLightColorTokens.colorHighlight, 0.04)
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
                backgroundColor: (0, hex_to_rgba_1.default)(biomeLightColorTokens.colorHighlight, 0.12),
                color: biomeLightColorTokens.colorHighEmphasis,
                fontSize: typography_2.fontSize.subtitle2.fontSize,
                '& $avatar': {
                    backgroundColor: (0, hex_to_rgba_1.default)(biomeLightColorTokens.colorHighlight, 0.24),
                    color: biomeLightColorTokens.colorHighEmphasis
                },
                '&$disabled': {
                    opacity: 0.4
                }
            },
            clickableColorPrimary: {
                '&:hover': {
                    backgroundColor: biomeLightColorTokens.colorPrimary
                }
            },
            clickableColorSecondary: {
                '&:hover': {
                    backgroundColor: biomeLightColorTokens.colorSecondary
                }
            },
            outlined: {
                borderColor: (0, hex_to_rgba_1.default)(biomeLightColorTokens.colorHighlight, 0.12),
                color: biomeLightColorTokens.colorHighlight
            },
            outlinedPrimary: {
                color: biomeLightColorTokens.colorHighlight
            },
            outlinedSecondary: {
                color: biomeLightColorTokens.colorHighlight
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
                color: (0, hex_to_rgba_1.default)(biomeLightColorTokens.colorHighlight, 0.8),
                '&:hover': {
                    color: biomeLightColorTokens.colorHighlight
                }
            },
            deleteIconSmall: {
                width: "".concat(sizes_1.sizes.small, "px"),
                height: "".concat(sizes_1.sizes.small, "px"),
                fontSize: "".concat(sizes_1.sizes.small, "px")
            },
            deleteIconColorPrimary: {
                color: (0, hex_to_rgba_1.default)(biomeLightColorTokens.colorOnPrimary, 0.8),
                '&:hover': {
                    color: biomeLightColorTokens.colorOnPrimary
                }
            },
            deleteIconColorSecondary: {
                color: (0, hex_to_rgba_1.default)(biomeLightColorTokens.colorOnSecondary, 0.8),
                '&:hover': {
                    color: biomeLightColorTokens.colorOnSecondary
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
                boxShadow: "".concat(biomeLightColorTokens.colorLowEmphasis, " 0 0 0 1px"),
                color: biomeLightColorTokens.colorHighEmphasis,
                width: '100%',
                "&[data-state='error']": {
                    boxShadow: "".concat(biomeLightColorTokens.colorAlert, " 0 0 0 1px")
                },
                "&[data-state='success']": {
                    boxShadow: "".concat(biomeLightColorTokens.colorSuccess, " 0 0 0 1px")
                },
                '&:hover': {
                    boxShadow: "".concat(biomeLightColorTokens.colorMediumEmphasis, " 0 0 0 1px"),
                    '&.Mui-disabled': {
                        boxShadow: "".concat(biomeLightColorTokens.colorLowEmphasis, " 0 0 0 1px")
                    }
                },
                '&.Mui-focused': {
                    boxShadow: "".concat(biomeLightColorTokens.colorPrimary, " 0 0 0 2px")
                },
                '&.MuiFilled:not(.Mui-focused)': {
                    boxShadow: "".concat(biomeLightColorTokens.colorHighEmphasis, " 0 0 0 1px"),
                    '&:hover': {
                        boxShadow: "".concat(biomeLightColorTokens.colorMediumEmphasis, " 0 0 0 1px")
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
                    color: biomeLightColorTokens.colorMediumEmphasis
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
                    color: biomeLightColorTokens.colorMediumEmphasis
                },
                '&.Mui-error': {
                    color: biomeLightColorTokens.colorAlert
                }
            }
        },
        MuiSelect: {
            select: {
                '&:focus': {
                    backgroundColor: 'transparent'
                },
                '&.Mui-disabled': {
                    color: biomeLightColorTokens.colorLowEmphasis
                }
            },
            icon: {
                top: sizes_1.sizes.micro,
                color: biomeLightColorTokens.colorHighEmphasis
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
                    borderColor: biomeLightColorTokens.colorPrimaryDark,
                    '&.Mui-disabled': {
                        borderColor: "".concat(biomeLightColorTokens.colorHighlight, "3D")
                    }
                }
            },
            groupedContainedSecondary: {
                '&:not(:last-child)': {
                    borderColor: biomeLightColorTokens.colorSecondaryDark,
                    '&.Mui-disabled': {
                        borderColor: "".concat(biomeLightColorTokens.colorHighlight, "3D")
                    }
                }
            },
            groupedContainedHorizontal: {
                '&:not(:last-child)': {
                    borderRightColor: "".concat(biomeLightColorTokens.colorHighlight, "1F"),
                    '&.Mui-disabled': {
                        borderColor: "".concat(biomeLightColorTokens.colorHighlight, "3D")
                    }
                }
            },
            groupedTextPrimary: {
                '&:not(:last-child).Mui-disabled': {
                    borderColor: "".concat(biomeLightColorTokens.colorHighlight, "3D")
                }
            },
            groupedTextSecondary: {
                '&:not(:last-child).Mui-disabled': {
                    borderColor: "".concat(biomeLightColorTokens.colorHighlight, "3D")
                }
            },
            groupedTextHorizontal: {
                '&:not(:last-child)': {
                    borderRightColor: "".concat(biomeLightColorTokens.colorHighlight, "1F"),
                    '&.Mui-disabled': {
                        borderColor: "".concat(biomeLightColorTokens.colorHighlight, "3D")
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
                color: biomeLightColorTokens.colorHighEmphasis,
                backgroundColor: (0, hex_to_rgba_1.default)(biomeLightColorTokens.colorSuccess, 0.16)
            },
            outlinedSuccess: {
                color: biomeLightColorTokens.colorHighEmphasis
            },
            standardError: {
                color: biomeLightColorTokens.colorHighEmphasis,
                backgroundColor: (0, hex_to_rgba_1.default)(biomeLightColorTokens.colorAlert, 0.16)
            },
            outlinedError: {
                color: biomeLightColorTokens.colorHighEmphasis
            },
            standardWarning: {
                color: biomeLightColorTokens.colorHighEmphasis,
                backgroundColor: (0, hex_to_rgba_1.default)(biomeLightColorTokens.colorWarning, 0.16),
                '& .MuiAlert-icon': {
                    color: biomeLightColorTokens.colorWarning
                }
            },
            outlinedWarning: {
                color: biomeLightColorTokens.colorHighEmphasis,
                borderColor: biomeLightColorTokens.colorWarning,
                '& .MuiAlert-icon': {
                    color: biomeLightColorTokens.colorWarning
                }
            },
            filledWarning: {
                color: biomeLightColorTokens.colorOnWarning,
                backgroundColor: biomeLightColorTokens.colorWarning
            },
            standardInfo: {
                color: biomeLightColorTokens.colorHighEmphasis,
                backgroundColor: (0, hex_to_rgba_1.default)(biomeLightColorTokens.colorLink, 0.16),
                '& .MuiAlert-icon': {
                    color: biomeLightColorTokens.colorLink
                }
            },
            outlinedInfo: {
                color: biomeLightColorTokens.colorHighEmphasis,
                borderColor: biomeLightColorTokens.colorLink,
                '& .MuiAlert-icon': {
                    color: biomeLightColorTokens.colorLink
                }
            },
            filledInfo: {
                backgroundColor: biomeLightColorTokens.colorLink
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
//# sourceMappingURL=biome-light.js.map