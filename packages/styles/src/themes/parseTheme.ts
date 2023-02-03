import hexToRgba from 'hex-to-rgba'
import { Theme } from '@naturacosmeticos/natds-themes'
import { ITheme } from './ITheme'
import { getFontSize } from '../tokens/typography'
import { getSpacing } from '../tokens/spacing'
import { getAvatarSizes } from '../tokens/avatarSizes'
import { getButtonSizes } from '../tokens/buttonSizes'
import { getElevation } from '../tokens/elevation'
import { getIconSizes } from '../tokens/iconSizes'
import { getSizes } from '../tokens/sizes'
import { getOpacity } from '../tokens/opacity'
import { getColorTokens } from '../tokens/colors/themeBound'
import { getRadius } from '../tokens/radius'
import getTypography from './typography'

export const parseTheme = (theme: Theme): ITheme => {
  const { color, opacity, asset } = theme

  const colorTokens = getColorTokens(theme)
  const sizes = getSizes(theme)
  const avatarSizes = getAvatarSizes(theme)
  const buttonSizes = getButtonSizes(theme)
  const iconSizes = getIconSizes(theme)
  const spacing = getSpacing(theme)
  const typography = getTypography(theme)
  const fontSize = getFontSize(theme)
  const elevation = getElevation(theme)
  const radius = getRadius(theme)

  return {
    asset,
    shape: {
      borderRadius: radius.medium,
      badgeBorderRadius: 100
    },
    sizes,
    avatarSizes,
    buttonSizes,
    color,
    iconSizes,

    /**
     * @since 0.22
     * @todo Adopt opacity tokens from theme and deprecate legacy opacity
     */
    opacity: getOpacity(theme),
    spacing: spacing.spacing,
    palette: {
      action: {
        /**
         * @since 0.24
         */
        active: hexToRgba(color.highlight, opacity.mediumHigh),
        disabled: hexToRgba(colorTokens.colorOnSecondary, 0.24)
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
    typography: {
      ...typography,
      ...fontSize
    },
    shadows: elevation,
    overrides: {
      MuiButton: {
        outlinedPrimary: {
          color: colorTokens.colorHighEmphasis
        },
        outlinedSecondary: {
          color: colorTokens.colorHighEmphasis,
          '&.Mui-disabled': {
            borderColor: `${colorTokens.colorHighlight}3D`
          }
        },
        sizeSmall: {
          ...buttonSizes.small,
          ...fontSize.subtitle2
        },
        root: {
          ...buttonSizes.medium,
          ...fontSize.subtitle2
        },
        sizeLarge: {
          ...buttonSizes.large,
          ...fontSize.subtitle2
        },
        text: {
          padding: null,
          '&.Mui-disabled': {
            color: `${colorTokens.colorHighlight}3D`,
            borderColor: `${colorTokens.colorHighlight}3D`
          }
        },
        contained: {
          '&.Mui-disabled': {
            color: `${colorTokens.colorHighlight}3D`,
            backgroundColor: `${colorTokens.colorHighlight}14`
          }
        },
        outlined: {
          padding: null,
          borderColor: `${colorTokens.colorHighlight}3D`,
          '&.Mui-disabled': {
            color: `${colorTokens.colorHighlight}3D`,
            borderColor: `${colorTokens.colorHighlight}3D`
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
            backgroundColor: hexToRgba(colorTokens.colorHighEmphasis, 0.04)
          },
          '&$selected': {
            backgroundColor: hexToRgba(colorTokens.colorPrimary, 0.16),
            '&:hover': {
              backgroundColor: hexToRgba(colorTokens.colorOnSecondary, 0.04)
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
            backgroundColor: hexToRgba(colorTokens.colorOnSecondary, 0.04)
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
          backgroundColor: hexToRgba(colorTokens.colorOnBackground, 0.12),
          color: colorTokens.colorOnBackground,
          fontSize: fontSize.subtitle2.fontSize,
          '& $avatar': {
            backgroundColor: hexToRgba(colorTokens.colorOnBackground, 0.24),
            color: colorTokens.colorOnBackground
          },
          '&$disabled': {
            opacity: 0.4
          }
        },
        clickable: {
          '&:hover': {
            backgroundColor: hexToRgba(colorTokens.colorOnBackground, 0.16)
          },
          '&:focus': {
            backgroundColor: hexToRgba(colorTokens.colorOnBackground, 0.16)
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
          borderColor: hexToRgba(colorTokens.colorOnBackground, 0.12),
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
          fontSize: `${sizes.standard}px`
        },
        iconSmall: {
          width: `${sizes.small}px`,
          height: `${sizes.small}px`,
          fontSize: `${sizes.small}px`,
          marginTop: '1px'
        },
        deleteIcon: {
          width: `${sizes.standard}px`,
          height: `${sizes.standard}px`,
          fontSize: `${sizes.standard}px`,
          color: hexToRgba(colorTokens.colorOnBackground, 0.8),
          '&:hover': {
            color: hexToRgba(colorTokens.colorOnBackground, 0.6)
          }
        },
        deleteIconSmall: {
          width: `${sizes.small}px`,
          height: `${sizes.small}px`,
          fontSize: `${sizes.small}px`
        },
        deleteIconColorPrimary: {
          color: hexToRgba(colorTokens.colorOnBackground, 0.8),
          '&:hover': {
            color: colorTokens.colorOnBackground
          }
        },
        deleteIconColorSecondary: {
          color: hexToRgba(colorTokens.colorOnBackground, 0.8),
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
          boxShadow: `${colorTokens.colorLowEmphasis} 0 0 0 1px`,
          color: colorTokens.colorHighEmphasis,
          width: '100%',
          "&[data-state='error']": {
            boxShadow: `${colorTokens.colorAlert} 0 0 0 1px`
          },
          "&[data-state='success']": {
            boxShadow: `${colorTokens.colorSuccess} 0 0 0 1px`
          },
          '&:hover': {
            boxShadow: `${colorTokens.colorMediumEmphasis} 0 0 0 1px`,
            '&.Mui-disabled': {
              boxShadow: `${colorTokens.colorLowEmphasis} 0 0 0 1px`
            }
          },
          '&.Mui-focused': {
            boxShadow: `${colorTokens.colorPrimary} 0 0 0 2px`
          },
          '&.MuiFilled:not(.Mui-focused)': {
            boxShadow: `${colorTokens.colorHighEmphasis} 0 0 0 1px`,
            '&:hover': {
              boxShadow: `${colorTokens.colorMediumEmphasis} 0 0 0 1px`
            }
          },
          '&.MuiInputBase-multiline': {
            padding: sizes?.none
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
          border: sizes?.none,
          boxSizing: 'border-box',
          lineHeight: `${sizes?.standard}px`,
          minHeight: sizes?.mediumX,
          padding: sizes?.small
        },
        inputMultiline: {
          padding: sizes?.small
        },
        inputTypeSearch: {
          '&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration':
            {
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
              borderColor: `${colorTokens.colorHighlight}3D`
            }
          }
        },
        groupedContainedSecondary: {
          '&:not(:last-child)': {
            borderColor: colorTokens.colorSecondaryDark,
            '&.Mui-disabled': {
              borderColor: `${colorTokens.colorHighlight}3D`
            }
          }
        },
        groupedContainedHorizontal: {
          '&:not(:last-child)': {
            borderRightColor: `${colorTokens.colorHighlight}1F`,
            '&.Mui-disabled': {
              borderColor: `${colorTokens.colorHighlight}3D`
            }
          }
        },
        groupedTextPrimary: {
          '&:not(:last-child).Mui-disabled': {
            borderColor: `${colorTokens.colorHighlight}3D`
          }
        },
        groupedTextSecondary: {
          '&:not(:last-child).Mui-disabled': {
            borderColor: `${colorTokens.colorHighlight}3D`
          }
        },
        groupedTextHorizontal: {
          '&:not(:last-child)': {
            borderRightColor: `${colorTokens.colorHighlight}1F`,
            '&.Mui-disabled': {
              borderColor: `${colorTokens.colorHighlight}3D`
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
        root: {
          width: 278,
          padding: spacing.spacingSmall,
          ...fontSize.body1
        },
        icon: {
          marginRight: spacing.spacingTiny
        },
        message: {
          padding: '5px 0'
        },
        standardSuccess: {
          color: colorTokens.colorHighEmphasis,
          backgroundColor: hexToRgba(colorTokens.colorSuccess, 0.16)
        },
        outlinedSuccess: {
          color: colorTokens.colorHighEmphasis
        },
        standardError: {
          color: colorTokens.colorHighEmphasis,
          backgroundColor: hexToRgba(colorTokens.colorAlert, 0.16)
        },
        outlinedError: {
          color: colorTokens.colorHighEmphasis
        },
        standardWarning: {
          color: colorTokens.colorHighEmphasis,
          backgroundColor: hexToRgba(colorTokens.colorWarning, 0.16),
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
          backgroundColor: hexToRgba(colorTokens.colorLink, 0.16),
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
        root: {
          ...fontSize.h6
        }
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
  }
}
