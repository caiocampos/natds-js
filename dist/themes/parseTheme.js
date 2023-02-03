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
exports.parseTheme = void 0;
/* eslint-disable max-lines */
var hex_to_rgba_1 = __importDefault(require("hex-to-rgba"));
var typography_1 = require("../tokens/typography");
var spacing_1 = require("../tokens/spacing");
var avatarSizes_1 = require("../tokens/avatarSizes");
var buttonSizes_1 = require("../tokens/buttonSizes");
var elevation_1 = require("../tokens/elevation");
var iconSizes_1 = require("../tokens/iconSizes");
var sizes_1 = require("../tokens/sizes");
var opacity_1 = require("../tokens/opacity");
var themeBound_1 = require("../tokens/colors/themeBound");
var radius_1 = require("../tokens/radius");
var typography_2 = __importDefault(require("./typography"));
var parseTheme = function (theme) {
    var color = theme.color, opacity = theme.opacity, asset = theme.asset;
    var colorTokens = (0, themeBound_1.getColorTokens)(theme);
    var sizes = (0, sizes_1.getSizes)(theme);
    var avatarSizes = (0, avatarSizes_1.getAvatarSizes)(theme);
    var buttonSizes = (0, buttonSizes_1.getButtonSizes)(theme);
    var iconSizes = (0, iconSizes_1.getIconSizes)(theme);
    var spacing = (0, spacing_1.getSpacing)(theme);
    var typography = (0, typography_2.default)(theme);
    var fontSize = (0, typography_1.getFontSize)(theme);
    var elevation = (0, elevation_1.getElevation)(theme);
    var radius = (0, radius_1.getRadius)(theme);
    return {
        asset: asset,
        shape: {
            borderRadius: radius.medium,
            badgeBorderRadius: 100
        },
        sizes: sizes,
        avatarSizes: avatarSizes,
        buttonSizes: buttonSizes,
        color: color,
        iconSizes: iconSizes,
        /**
         * @since 0.22
         * @todo Adopt opacity tokens from theme and deprecate legacy opacity
         */
        opacity: (0, opacity_1.getOpacity)(theme),
        spacing: spacing.spacing,
        palette: {
            action: {
                /**
                 * @since 0.24
                 */
                active: (0, hex_to_rgba_1.default)(color.highlight, opacity.mediumHigh),
                disabled: (0, hex_to_rgba_1.default)(colorTokens.colorOnSecondary, 0.24)
            },
            /**
             * @since 0.24
             */
            divider: colorTokens.colorLowEmphasis,
            primary: {
                main: colorTokens.colorPrimary,
                light: colorTokens.colorPrimaryLight,
                dark: colorTokens.colorPrimaryDark,
                contrastText: colorTokens.colorOnPrimary
            },
            secondary: {
                main: colorTokens.colorSecondary,
                light: colorTokens.colorPrimaryLight,
                dark: colorTokens.colorPrimaryDark,
                contrastText: colorTokens.colorOnSecondary
            },
            error: {
                main: colorTokens.colorAlert,
                contrastText: colorTokens.colorOnAlert
            },
            success: {
                main: colorTokens.colorSuccess,
                contrastText: colorTokens.colorOnSuccess
            },
            background: {
                paper: colorTokens.colorSurface,
                default: colorTokens.colorBackground,
                paperContrastText: colorTokens.colorOnSurface,
                defaultContrastText: colorTokens.colorOnBackground
            },
            text: {
                primary: colorTokens.colorHighEmphasis,
                secondary: colorTokens.colorMediumEmphasis,
                disabled: colorTokens.colorLowEmphasis,
                hint: colorTokens.colorLowEmphasis
            },
            complementary: {
                highlight: colorTokens.colorHighlight,
                link: colorTokens.colorLink,
                linkContrastText: colorTokens.colorOnLink,
                warning: colorTokens.colorWarning,
                warningContrastText: colorTokens.colorOnSecondary
            }
        },
        typography: __assign(__assign({}, typography), fontSize),
        shadows: elevation,
        overrides: {
            MuiButton: {
                outlinedPrimary: {
                    color: colorTokens.colorHighEmphasis
                },
                outlinedSecondary: {
                    color: colorTokens.colorHighEmphasis,
                    '&.Mui-disabled': {
                        borderColor: "".concat(colorTokens.colorHighlight, "3D")
                    }
                },
                sizeSmall: __assign(__assign({}, buttonSizes.small), fontSize.subtitle2),
                root: __assign(__assign({}, buttonSizes.medium), fontSize.subtitle2),
                sizeLarge: __assign(__assign({}, buttonSizes.large), fontSize.subtitle2),
                text: {
                    padding: null,
                    '&.Mui-disabled': {
                        color: "".concat(colorTokens.colorHighlight, "3D"),
                        borderColor: "".concat(colorTokens.colorHighlight, "3D")
                    }
                },
                contained: {
                    '&.Mui-disabled': {
                        color: "".concat(colorTokens.colorHighlight, "3D"),
                        backgroundColor: "".concat(colorTokens.colorHighlight, "14")
                    }
                },
                outlined: {
                    padding: null,
                    borderColor: "".concat(colorTokens.colorHighlight, "3D"),
                    '&.Mui-disabled': {
                        color: "".concat(colorTokens.colorHighlight, "3D"),
                        borderColor: "".concat(colorTokens.colorHighlight, "3D")
                    }
                }
            },
            MuiAvatar: {
                colorDefault: {
                    color: colorTokens.colorHighEmphasis
                }
            },
            MuiIconButton: {
                root: {
                    color: colorTokens.colorHighEmphasis,
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
                        borderColor: colorTokens.colorPrimary
                    },
                    '&$disabled': {
                        backgroundColor: colorTokens.colorSurface,
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
                        backgroundColor: (0, hex_to_rgba_1.default)(colorTokens.colorHighEmphasis, 0.04)
                    },
                    '&$selected': {
                        backgroundColor: (0, hex_to_rgba_1.default)(colorTokens.colorPrimary, 0.16),
                        '&:hover': {
                            backgroundColor: (0, hex_to_rgba_1.default)(colorTokens.colorOnSecondary, 0.04)
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
                        backgroundColor: (0, hex_to_rgba_1.default)(colorTokens.colorOnSecondary, 0.04)
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
                    backgroundColor: (0, hex_to_rgba_1.default)(colorTokens.colorOnBackground, 0.12),
                    color: colorTokens.colorOnBackground,
                    fontSize: fontSize.subtitle2.fontSize,
                    '& $avatar': {
                        backgroundColor: (0, hex_to_rgba_1.default)(colorTokens.colorOnBackground, 0.24),
                        color: colorTokens.colorOnBackground
                    },
                    '&$disabled': {
                        opacity: 0.4
                    }
                },
                clickable: {
                    '&:hover': {
                        backgroundColor: (0, hex_to_rgba_1.default)(colorTokens.colorOnBackground, 0.16)
                    },
                    '&:focus': {
                        backgroundColor: (0, hex_to_rgba_1.default)(colorTokens.colorOnBackground, 0.16)
                    }
                },
                clickableColorPrimary: {
                    '&:hover': {
                        backgroundColor: colorTokens.colorPrimaryDark
                    }
                },
                clickableColorSecondary: {
                    '&:hover': {
                        backgroundColor: colorTokens.colorPrimaryDark
                    }
                },
                outlined: {
                    borderColor: (0, hex_to_rgba_1.default)(colorTokens.colorOnBackground, 0.12),
                    color: colorTokens.colorOnBackground
                },
                outlinedPrimary: {
                    color: colorTokens.colorOnBackground,
                    '& $avatar': {
                        backgroundColor: colorTokens.colorPrimary
                    }
                },
                outlinedSecondary: {
                    color: colorTokens.colorOnBackground,
                    '& $avatar': {
                        backgroundColor: colorTokens.colorSecondary
                    }
                },
                icon: {
                    fontSize: "".concat(sizes.standard, "px")
                },
                iconSmall: {
                    width: "".concat(sizes.small, "px"),
                    height: "".concat(sizes.small, "px"),
                    fontSize: "".concat(sizes.small, "px"),
                    marginTop: '1px'
                },
                deleteIcon: {
                    width: "".concat(sizes.standard, "px"),
                    height: "".concat(sizes.standard, "px"),
                    fontSize: "".concat(sizes.standard, "px"),
                    color: (0, hex_to_rgba_1.default)(colorTokens.colorOnBackground, 0.8),
                    '&:hover': {
                        color: (0, hex_to_rgba_1.default)(colorTokens.colorOnBackground, 0.6)
                    }
                },
                deleteIconSmall: {
                    width: "".concat(sizes.small, "px"),
                    height: "".concat(sizes.small, "px"),
                    fontSize: "".concat(sizes.small, "px")
                },
                deleteIconColorPrimary: {
                    color: (0, hex_to_rgba_1.default)(colorTokens.colorOnBackground, 0.8),
                    '&:hover': {
                        color: colorTokens.colorOnBackground
                    }
                },
                deleteIconColorSecondary: {
                    color: (0, hex_to_rgba_1.default)(colorTokens.colorOnBackground, 0.8),
                    '&:hover': {
                        color: colorTokens.colorOnBackground
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
                    fontSize: fontSize.subtitle2.fontSize,
                    borderRadius: '4px',
                    boxShadow: "".concat(colorTokens.colorLowEmphasis, " 0 0 0 1px"),
                    color: colorTokens.colorHighEmphasis,
                    width: '100%',
                    "&[data-state='error']": {
                        boxShadow: "".concat(colorTokens.colorAlert, " 0 0 0 1px")
                    },
                    "&[data-state='success']": {
                        boxShadow: "".concat(colorTokens.colorSuccess, " 0 0 0 1px")
                    },
                    '&:hover': {
                        boxShadow: "".concat(colorTokens.colorMediumEmphasis, " 0 0 0 1px"),
                        '&.Mui-disabled': {
                            boxShadow: "".concat(colorTokens.colorLowEmphasis, " 0 0 0 1px")
                        }
                    },
                    '&.Mui-focused': {
                        boxShadow: "".concat(colorTokens.colorPrimary, " 0 0 0 2px")
                    },
                    '&.MuiFilled:not(.Mui-focused)': {
                        boxShadow: "".concat(colorTokens.colorHighEmphasis, " 0 0 0 1px"),
                        '&:hover': {
                            boxShadow: "".concat(colorTokens.colorMediumEmphasis, " 0 0 0 1px")
                        }
                    },
                    '&.MuiInputBase-multiline': {
                        padding: sizes === null || sizes === void 0 ? void 0 : sizes.none
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
                    paddingRight: sizes.medium
                },
                input: {
                    '&.Mui-disabled:not(::placeholder)': {
                        opacity: 0.24
                    },
                    '&::placeholder': {
                        color: colorTokens.colorMediumEmphasis
                    },
                    '&.MuiInput-inputTypeSearch': {
                        paddingRight: sizes.large
                    },
                    border: sizes === null || sizes === void 0 ? void 0 : sizes.none,
                    boxSizing: 'border-box',
                    lineHeight: "".concat(sizes === null || sizes === void 0 ? void 0 : sizes.standard, "px"),
                    minHeight: sizes === null || sizes === void 0 ? void 0 : sizes.mediumX,
                    padding: sizes === null || sizes === void 0 ? void 0 : sizes.small
                },
                inputMultiline: {
                    padding: sizes === null || sizes === void 0 ? void 0 : sizes.small
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
                    marginRight: spacing.spacingTiny
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
                    fontSize: fontSize.subtitle2.fontSize,
                    '&.Mui-focused': {
                        fontSize: fontSize.subtitle2.fontSize,
                        color: colorTokens.colorMediumEmphasis
                    },
                    '&.Mui-error': {
                        color: colorTokens.colorHighEmphasis
                    }
                }
            },
            MuiFormHelperText: {
                root: {
                    '&.Mui-error': {
                        color: colorTokens.colorMediumEmphasis
                    }
                }
            },
            MuiSelect: {
                select: {
                    '&:focus': {
                        backgroundColor: 'transparent'
                    },
                    '&.Mui-disabled': {
                        color: colorTokens.colorLowEmphasis
                    }
                },
                icon: {
                    top: sizes.micro,
                    color: colorTokens.colorHighEmphasis
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
                        borderColor: colorTokens.colorPrimaryDark,
                        '&.Mui-disabled': {
                            borderColor: "".concat(colorTokens.colorHighlight, "3D")
                        }
                    }
                },
                groupedContainedSecondary: {
                    '&:not(:last-child)': {
                        borderColor: colorTokens.colorSecondaryDark,
                        '&.Mui-disabled': {
                            borderColor: "".concat(colorTokens.colorHighlight, "3D")
                        }
                    }
                },
                groupedContainedHorizontal: {
                    '&:not(:last-child)': {
                        borderRightColor: "".concat(colorTokens.colorHighlight, "1F"),
                        '&.Mui-disabled': {
                            borderColor: "".concat(colorTokens.colorHighlight, "3D")
                        }
                    }
                },
                groupedTextPrimary: {
                    '&:not(:last-child).Mui-disabled': {
                        borderColor: "".concat(colorTokens.colorHighlight, "3D")
                    }
                },
                groupedTextSecondary: {
                    '&:not(:last-child).Mui-disabled': {
                        borderColor: "".concat(colorTokens.colorHighlight, "3D")
                    }
                },
                groupedTextHorizontal: {
                    '&:not(:last-child)': {
                        borderRightColor: "".concat(colorTokens.colorHighlight, "1F"),
                        '&.Mui-disabled': {
                            borderColor: "".concat(colorTokens.colorHighlight, "3D")
                        }
                    }
                }
            },
            MuiSvgIcon: {
                root: {
                    fill: colorTokens.colorMediumEmphasis
                }
            },
            MuiAlert: {
                root: __assign({ width: 278, padding: spacing.spacingSmall }, fontSize.body1),
                icon: {
                    marginRight: spacing.spacingTiny
                },
                message: {
                    padding: '5px 0'
                },
                standardSuccess: {
                    color: colorTokens.colorHighEmphasis,
                    backgroundColor: (0, hex_to_rgba_1.default)(colorTokens.colorSuccess, 0.16)
                },
                outlinedSuccess: {
                    color: colorTokens.colorHighEmphasis
                },
                standardError: {
                    color: colorTokens.colorHighEmphasis,
                    backgroundColor: (0, hex_to_rgba_1.default)(colorTokens.colorAlert, 0.16)
                },
                outlinedError: {
                    color: colorTokens.colorHighEmphasis
                },
                standardWarning: {
                    color: colorTokens.colorHighEmphasis,
                    backgroundColor: (0, hex_to_rgba_1.default)(colorTokens.colorWarning, 0.16),
                    '& .MuiAlert-icon': {
                        color: colorTokens.colorWarning
                    }
                },
                outlinedWarning: {
                    color: colorTokens.colorHighEmphasis,
                    borderColor: colorTokens.colorWarning,
                    '& .MuiAlert-icon': {
                        color: colorTokens.colorWarning
                    }
                },
                filledWarning: {
                    color: colorTokens.colorOnWarning,
                    backgroundColor: colorTokens.colorWarning
                },
                standardInfo: {
                    color: colorTokens.colorHighEmphasis,
                    backgroundColor: (0, hex_to_rgba_1.default)(colorTokens.colorLink, 0.16),
                    '& .MuiAlert-icon': {
                        color: colorTokens.colorLink
                    }
                },
                outlinedInfo: {
                    color: colorTokens.colorHighEmphasis,
                    borderColor: colorTokens.colorLink,
                    '& .MuiAlert-icon': {
                        color: colorTokens.colorLink
                    }
                },
                filledInfo: {
                    backgroundColor: colorTokens.colorLink
                }
            },
            MuiAlertTitle: {
                root: __assign({}, fontSize.h6)
            },
            MuiTableSortLabel: {
                icon: {
                    marginLeft: spacing.spacing
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
};
exports.parseTheme = parseTheme;
exports.default = exports.parseTheme;
//# sourceMappingURL=parseTheme.js.map