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
     * @deprecated `eloDarkColorTokens` are deprecated since v0.20 and will be removed at v1.0.
     * Please use `theme.elo.dark.color` from `natds-themes`.
     */
    eloDarkColorTokens
  }
} = tokens

const { color, opacity, asset } = themes.elo.dark

export const eloDark: ITheme = {
  asset,
  shape: {
    borderRadius: tokens.radius.medium,
    badgeBorderRadius: 100
  },
  sizes,
  avatarSizes,
  buttonSizes,
  color,
  iconSizes,

  /**
   * @since 0.22
   * @todo Adopt opacity tokens from theme
   */
  opacity: legacyOpacity,
  spacing: spacing.spacing,
  palette: {
    action: {
      /**
       * @since 0.24
       */
      active: hexToRgba(color.highlight, opacity.mediumHigh),
      disabled: hexToRgba(eloDarkColorTokens.colorOnSecondary, 0.24)
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
  typography: {
    ...typography,
    ...fontSize
  },
  shadows: elevation,
  overrides: {
    MuiButton: {
      outlinedPrimary: {
        color: eloDarkColorTokens.colorHighEmphasis
      },
      outlinedSecondary: {
        color: eloDarkColorTokens.colorHighEmphasis,
        '&.Mui-disabled': {
          borderColor: `${eloDarkColorTokens.colorHighlight}3D`
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
          color: `${eloDarkColorTokens.colorHighlight}3D`,
          borderColor: `${eloDarkColorTokens.colorHighlight}3D`
        }
      },
      contained: {
        '&.Mui-disabled': {
          color: `${eloDarkColorTokens.colorHighlight}3D`,
          backgroundColor: `${eloDarkColorTokens.colorHighlight}14`
        }
      },
      outlined: {
        padding: null,
        borderColor: `${eloDarkColorTokens.colorHighlight}3D`,
        '&.Mui-disabled': {
          color: `${eloDarkColorTokens.colorHighlight}3D`,
          borderColor: `${eloDarkColorTokens.colorHighlight}3D`
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
          backgroundColor: hexToRgba(
            eloDarkColorTokens.colorHighEmphasis,
            0.16
          )
        },
        '&$selected': {
          background: hexToRgba(eloDarkColorTokens.colorPrimary, 0.16),
          '&:hover': {
            backgroundColor: hexToRgba(
              eloDarkColorTokens.colorOnSecondary,
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
          backgroundColor: hexToRgba(
            eloDarkColorTokens.colorOnSecondary,
            0.04
          )
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
        backgroundColor: hexToRgba(eloDarkColorTokens.colorOnBackground, 0.12),
        color: eloDarkColorTokens.colorOnBackground,
        fontSize: fontSize.subtitle2.fontSize,
        '& $avatar': {
          backgroundColor: hexToRgba(
            eloDarkColorTokens.colorOnBackground,
            0.24
          ),
          color: eloDarkColorTokens.colorOnBackground
        },
        '&$disabled': {
          opacity: 0.4
        }
      },
      clickable: {
        '&:hover': {
          backgroundColor: hexToRgba(
            eloDarkColorTokens.colorOnBackground,
            0.16
          )
        },
        '&:focus': {
          backgroundColor: hexToRgba(
            eloDarkColorTokens.colorOnBackground,
            0.16
          )
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
        borderColor: hexToRgba(eloDarkColorTokens.colorOnBackground, 0.12),
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
        color: hexToRgba(eloDarkColorTokens.colorOnBackground, 0.8),
        '&:hover': {
          color: hexToRgba(eloDarkColorTokens.colorOnBackground, 0.6)
        }
      },
      deleteIconSmall: {
        width: `${sizes.small}px`,
        height: `${sizes.small}px`,
        fontSize: `${sizes.small}px`
      },
      deleteIconColorPrimary: {
        color: hexToRgba(eloDarkColorTokens.colorOnBackground, 0.8),
        '&:hover': {
          color: eloDarkColorTokens.colorOnBackground
        }
      },
      deleteIconColorSecondary: {
        color: hexToRgba(eloDarkColorTokens.colorOnBackground, 0.8),
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
        fontSize: fontSize.subtitle2.fontSize,
        borderRadius: '4px',
        boxShadow: `${eloDarkColorTokens.colorLowEmphasis} 0 0 0 1px`,
        color: eloDarkColorTokens.colorHighEmphasis,
        width: '100%',
        "&[data-state='error']": {
          boxShadow: `${eloDarkColorTokens.colorAlert} 0 0 0 1px`
        },
        "&[data-state='success']": {
          boxShadow: `${eloDarkColorTokens.colorSuccess} 0 0 0 1px`
        },
        '&:hover': {
          boxShadow: `${eloDarkColorTokens.colorMediumEmphasis} 0 0 0 1px`,
          '&.Mui-disabled': {
            boxShadow: `${eloDarkColorTokens.colorLowEmphasis} 0 0 0 1px`
          }
        },
        '&.Mui-focused': {
          boxShadow: `${eloDarkColorTokens.colorPrimary} 0 0 0 2px`
        },
        '&.MuiFilled:not(.Mui-focused)': {
          boxShadow: `${eloDarkColorTokens.colorHighEmphasis} 0 0 0 1px`,
          '&:hover': {
            boxShadow: `${eloDarkColorTokens.colorMediumEmphasis} 0 0 0 1px`
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
          color: eloDarkColorTokens.colorMediumEmphasis
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
        top: sizes.micro,
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
            borderColor: `${eloDarkColorTokens.colorHighlight}3D`
          }
        }
      },
      groupedContainedSecondary: {
        '&:not(:last-child)': {
          borderColor: eloDarkColorTokens.colorSecondaryDark,
          '&.Mui-disabled': {
            borderColor: `${eloDarkColorTokens.colorHighlight}3D`
          }
        }
      },
      groupedContainedHorizontal: {
        '&:not(:last-child)': {
          borderRightColor: `${eloDarkColorTokens.colorHighlight}1F`,
          '&.Mui-disabled': {
            borderColor: `${eloDarkColorTokens.colorHighlight}3D`
          }
        }
      },
      groupedTextPrimary: {
        '&:not(:last-child).Mui-disabled': {
          borderColor: `${eloDarkColorTokens.colorHighlight}3D`
        }
      },
      groupedTextSecondary: {
        '&:not(:last-child).Mui-disabled': {
          borderColor: `${eloDarkColorTokens.colorHighlight}3D`
        }
      },
      groupedTextHorizontal: {
        '&:not(:last-child)': {
          borderRightColor: `${eloDarkColorTokens.colorHighlight}1F`,
          '&.Mui-disabled': {
            borderColor: `${eloDarkColorTokens.colorHighlight}3D`
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
        color: eloDarkColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(eloDarkColorTokens.colorSuccess, 0.16)
      },
      outlinedSuccess: {
        color: eloDarkColorTokens.colorHighEmphasis
      },
      standardError: {
        color: eloDarkColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(eloDarkColorTokens.colorAlert, 0.16)
      },
      outlinedError: {
        color: eloDarkColorTokens.colorHighEmphasis
      },
      standardWarning: {
        color: eloDarkColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(eloDarkColorTokens.colorWarning, 0.16),
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
        backgroundColor: hexToRgba(eloDarkColorTokens.colorLink, 0.16),
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
