/* eslint-disable max-lines */
/* eslint-disable no-magic-numbers */
/* eslint-disable sort-keys */

/**
 * @todo refactor(styles): replace magic numbers by tokens (including opacity, padding and sizing)
 */

import hexToRgba from 'hex-to-rgba'
import themes from '@naturacosmeticos/natds-themes'
import tokens from '../../tokens'
import { ITheme } from '../ITheme'
import { typography } from './typography'
import { fontSize } from '../../tokens/typography'
import { spacing } from '../../tokens/spacing'
import { avatarSizes } from '../../tokens/avatarSizes'
import { buttonSizes } from '../../tokens/buttonSizes'
import { elevation } from '../../tokens/elevation'
import { iconSizes } from '../../tokens/iconSizes'
import { sizes } from '../../tokens/sizes'
import { opacity as legacyOpacity } from '../../tokens/opacity'

const {
  colorTokens: {
    /**
     * @deprecated `eloLightColorTokens` are deprecated since v0.20 and will be removed at v1.0.
     * Please use `theme.elo.light.color` from `natds-themes`.
     */
    eloLightColorTokens
  }
} = tokens

const { color, opacity, asset } = themes.elo.light

export const eloLight: ITheme = {
  asset,
  shape: {
    borderRadius: tokens.radius.medium,
    badgeBorderRadius: 100
  },
  avatarSizes,
  buttonSizes,
  color,
  iconSizes,

  /**
   * @since 0.22
   * @todo Adopt opacity tokens from theme
   */
  opacity: legacyOpacity,
  sizes,
  spacing: spacing.spacing,
  palette: {
    action: {
      /**
       * @since 0.24
       */
      active: hexToRgba(color.highlight, opacity.mediumHigh),
      disabled: hexToRgba(eloLightColorTokens.colorHighlight, 0.24)
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
  typography: {
    ...typography,
    ...fontSize
  },
  shadows: elevation,
  overrides: {
    MuiButton: {
      outlinedPrimary: {
        color: eloLightColorTokens.colorHighEmphasis
      },
      outlinedSecondary: {
        color: eloLightColorTokens.colorHighEmphasis,
        '&.Mui-disabled': {
          borderColor: `${eloLightColorTokens.colorHighlight}3D`
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
          color: `${eloLightColorTokens.colorHighlight}3D`,
          borderColor: `${eloLightColorTokens.colorHighlight}3D`
        }
      },
      contained: {
        '&.Mui-disabled': {
          color: `${eloLightColorTokens.colorHighlight}3D`,
          backgroundColor: `${eloLightColorTokens.colorHighlight}14`
        }
      },
      outlined: {
        padding: null,
        borderColor: `${eloLightColorTokens.colorHighlight}3D`,
        '&.Mui-disabled': {
          color: `${eloLightColorTokens.colorHighlight}3D`,
          borderColor: `${eloLightColorTokens.colorHighlight}3D`
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
          backgroundColor: hexToRgba(
            eloLightColorTokens.colorOnSecondary,
            0.04
          )
        },
        '&$selected': {
          backgroundColor: hexToRgba(eloLightColorTokens.colorPrimary, 0.16),
          '&:hover': {
            backgroundColor: hexToRgba(
              eloLightColorTokens.colorHighlight,
              0.04
            )
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
          backgroundColor: hexToRgba(eloLightColorTokens.colorHighlight, 0.04)
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
        backgroundColor: hexToRgba(eloLightColorTokens.colorHighlight, 0.12),
        color: eloLightColorTokens.colorHighEmphasis,
        fontSize: fontSize.subtitle2.fontSize,
        '& $avatar': {
          backgroundColor: hexToRgba(eloLightColorTokens.colorHighlight, 0.24),
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
        borderColor: hexToRgba(eloLightColorTokens.colorHighlight, 0.12),
        color: eloLightColorTokens.colorHighlight
      },
      outlinedPrimary: {
        color: eloLightColorTokens.colorHighlight
      },
      outlinedSecondary: {
        color: eloLightColorTokens.colorHighlight
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
        color: hexToRgba(eloLightColorTokens.colorHighlight, 0.8),
        '&:hover': {
          color: eloLightColorTokens.colorHighlight
        }
      },
      deleteIconSmall: {
        width: `${sizes.small}px`,
        height: `${sizes.small}px`,
        fontSize: `${sizes.small}px`
      },
      deleteIconColorPrimary: {
        color: hexToRgba(eloLightColorTokens.colorOnPrimary, 0.8),
        '&:hover': {
          color: eloLightColorTokens.colorOnPrimary
        }
      },
      deleteIconColorSecondary: {
        color: hexToRgba(eloLightColorTokens.colorOnSecondary, 0.8),
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
        fontSize: fontSize.subtitle2.fontSize,
        borderRadius: '4px',
        boxShadow: `${eloLightColorTokens.colorLowEmphasis} 0 0 0 1px`,
        color: eloLightColorTokens.colorHighEmphasis,
        width: '100%',
        "&[data-state='error']": {
          boxShadow: `${eloLightColorTokens.colorAlert} 0 0 0 1px`
        },
        "&[data-state='success']": {
          boxShadow: `${eloLightColorTokens.colorSuccess} 0 0 0 1px`
        },
        '&:hover': {
          boxShadow: `${eloLightColorTokens.colorMediumEmphasis} 0 0 0 1px`,
          '&.Mui-disabled': {
            boxShadow: `${eloLightColorTokens.colorLowEmphasis} 0 0 0 1px`
          }
        },
        '&.Mui-focused': {
          boxShadow: `${eloLightColorTokens.colorPrimary} 0 0 0 2px`
        },
        '&.MuiFilled:not(.Mui-focused)': {
          boxShadow: `${eloLightColorTokens.colorHighEmphasis} 0 0 0 1px`,
          '&:hover': {
            boxShadow: `${eloLightColorTokens.colorMediumEmphasis} 0 0 0 1px`
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
          color: eloLightColorTokens.colorMediumEmphasis
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
            borderColor: `${eloLightColorTokens.colorHighlight}3D`
          }
        }
      },
      groupedContainedSecondary: {
        '&:not(:last-child)': {
          borderColor: eloLightColorTokens.colorSecondaryDark,
          '&.Mui-disabled': {
            borderColor: `${eloLightColorTokens.colorHighlight}3D`
          }
        }
      },
      groupedContainedHorizontal: {
        '&:not(:last-child)': {
          borderRightColor: `${eloLightColorTokens.colorHighlight}1F`,
          '&.Mui-disabled': {
            borderColor: `${eloLightColorTokens.colorHighlight}3D`
          }
        }
      },
      groupedTextPrimary: {
        '&:not(:last-child).Mui-disabled': {
          borderColor: `${eloLightColorTokens.colorHighlight}3D`
        }
      },
      groupedTextSecondary: {
        '&:not(:last-child).Mui-disabled': {
          borderColor: `${eloLightColorTokens.colorHighlight}3D`
        }
      },
      groupedTextHorizontal: {
        '&:not(:last-child)': {
          borderRightColor: `${eloLightColorTokens.colorHighlight}1F`,
          '&.Mui-disabled': {
            borderColor: `${eloLightColorTokens.colorHighlight}3D`
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
        top: sizes.micro,
        color: eloLightColorTokens.colorHighEmphasis
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
        color: eloLightColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(eloLightColorTokens.colorSuccess, 0.16)
      },
      outlinedSuccess: {
        color: eloLightColorTokens.colorHighEmphasis
      },
      standardError: {
        color: eloLightColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(eloLightColorTokens.colorAlert, 0.16)
      },
      outlinedError: {
        color: eloLightColorTokens.colorHighEmphasis
      },
      standardWarning: {
        color: eloLightColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(eloLightColorTokens.colorWarning, 0.16),
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
        backgroundColor: hexToRgba(eloLightColorTokens.colorLink, 0.16),
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
