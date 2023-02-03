import themes, { Theme } from '@naturacosmeticos/natds-themes'
import { IOverlay } from './IOverlay'

export const getOverlay = (theme: Theme): IOverlay => ({
  solidBlack: theme.opacity.mediumHigh
})

/**
 * @deprecated `overlay` is deprecated since v0.20 and will be removed at v1.0.
 * Please use `mediumHigh` opacity token from your theme.
 */
export const overlay: IOverlay = {
  solidBlack: themes.natura.light.opacity.mediumHigh
}
