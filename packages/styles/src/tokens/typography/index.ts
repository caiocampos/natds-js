/* eslint-disable sort-keys */
import themes, { Theme } from '@naturacosmeticos/natds-themes'
import { IFont, IFontSize } from './IFont'

export const getFontSize = (theme: Theme): IFontSize => ({
  h1: theme.heading1 as IFont,
  h2: theme.heading2 as IFont,
  h3: theme.heading3 as IFont,
  h4: theme.heading4 as IFont,
  h5: theme.heading5 as IFont,
  h6: theme.heading6 as IFont,
  subtitle1: theme.subtitle1 as IFont,
  subtitle2: theme.subtitle2 as IFont,
  body1: theme.body1 as IFont,
  body2: theme.body2 as IFont,
  button: theme.button.label as unknown as IFont,
  caption: theme.caption as IFont,
  overline: theme.overline as IFont
})

const { light: staticTheme } = themes.natura

/**
 * @deprecated since 0.19. It will be removed at 1.0.
 * Please use typography tokens directly from the theme.
 */
export const fontSize = {
  h1: staticTheme.heading1 as IFont,
  h2: staticTheme.heading2 as IFont,
  h3: staticTheme.heading3 as IFont,
  h4: staticTheme.heading4 as IFont,
  h5: staticTheme.heading5 as IFont,
  h6: staticTheme.heading6 as IFont,
  subtitle1: staticTheme.subtitle1 as IFont,
  subtitle2: staticTheme.subtitle2 as IFont,
  body1: staticTheme.body1 as IFont,
  body2: staticTheme.body2 as IFont,
  button: staticTheme.button.label as unknown as IFont,
  caption: staticTheme.caption as IFont,
  overline: staticTheme.overline as IFont
}
