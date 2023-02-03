/* eslint-disable sort-keys */
import themes, { Theme } from '@naturacosmeticos/natds-themes'
import { deprecatedSizes, getDeprecatedSizes } from './deprecatedSizes'
import { ISizes } from './ISizes'

export const getSizes = (theme: Theme): ISizes => {
  const { size } = theme
  return {
    ...getDeprecatedSizes(theme),
    ...size
  }
}

export const sizes : ISizes = {
  ...deprecatedSizes,
  ...themes.natura.light.size
}
