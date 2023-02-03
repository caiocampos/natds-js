/* eslint-disable sort-keys */
import { Theme } from '@naturacosmeticos/natds-themes'
import { ISpacing } from './ISpacing'
import { getSizes, sizes } from '../sizes'

export const getSpacing = (theme: Theme): ISpacing => {
  const themeSizes = getSizes(theme)
  return {
    spacing: themeSizes.tiny,
    spacingNone: themeSizes.none,
    spacingMicro: themeSizes.micro,
    spacingTiny: themeSizes.tiny,
    spacingSmall: themeSizes.small,
    spacingStandard: themeSizes.standard,
    spacingSemi: themeSizes.semi,
    spacingLarge: themeSizes.medium,
    spacingHuge: themeSizes.large,
    spacingHugeX: themeSizes.hugeX,
    spacingHugeXX: themeSizes.hugeXX,
    spacingHugeXXX: themeSizes.hugeXXX,
    spacingVeryHuge: themeSizes.veryHuge
  }
}

export const spacing: ISpacing = {
  spacing: sizes.tiny,
  spacingNone: sizes.none,
  spacingMicro: sizes.micro,
  spacingTiny: sizes.tiny,
  spacingSmall: sizes.small,
  spacingStandard: sizes.standard,
  spacingSemi: sizes.semi,
  spacingLarge: sizes.medium,
  spacingHuge: sizes.large,
  spacingHugeX: sizes.hugeX,
  spacingHugeXX: sizes.hugeXX,
  spacingHugeXXX: sizes.hugeXXX,
  spacingVeryHuge: sizes.veryHuge
}
