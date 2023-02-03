/* eslint-disable sort-keys */
import themes, { Theme } from '@naturacosmeticos/natds-themes'
import { IRadius } from './IRadius'

export const getRadius = (theme: Theme): IRadius => ({
  ...theme.borderRadius,
  circle: '50%'
})

const { borderRadius } = themes.natura.light

/**
 * @deprecated since 0.19.0.
 * Please use `borderRadius` directly from your theme
 */
export const radius: IRadius = {
  ...borderRadius,
  circle: '50%'
}
