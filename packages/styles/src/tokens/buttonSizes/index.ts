/* eslint-disable sort-keys */
import { Theme } from '@naturacosmeticos/natds-themes'
import { IButtonSizes } from './IButtonSizes'
import { getSizes, sizes } from '../sizes'

export const getButtonSizes = (theme: Theme): IButtonSizes => {
  const themeSizes = getSizes(theme)
  return {
    small: {
      paddingTop: themeSizes.none,
      paddingRight: themeSizes.tiny,
      paddingBottom: themeSizes.none,
      paddingLeft: themeSizes.tiny,
      height: themeSizes.semi
    },
    medium: {
      height: themeSizes.semiX,
      paddingTop: themeSizes.none,
      paddingRight: themeSizes.small - themeSizes.micro,
      paddingBottom: themeSizes.none,
      paddingLeft: themeSizes.small - themeSizes.micro
    },
    large: {
      paddingTop: themeSizes.none,
      paddingRight: themeSizes.small,
      paddingBottom: themeSizes.none,
      paddingLeft: themeSizes.small,
      height: themeSizes.medium
    }
  }
}

/**
 * Button size tokens are used by MuiButton override, for properties `root`, `sizeLarge`, `sizeSmall`
 */
export const buttonSizes: IButtonSizes = {
  small: {
    paddingTop: sizes.none,
    paddingRight: sizes.tiny,
    paddingBottom: sizes.none,
    paddingLeft: sizes.tiny,
    height: sizes.semi
  },
  medium: {

    /**
     * @todo remove warning: 'semiX' should probably not be assigned to 'height'
     */
    height: sizes.semiX,
    paddingTop: sizes.none,
    paddingRight: sizes.small - sizes.micro,
    paddingBottom: sizes.none,
    paddingLeft: sizes.small - sizes.micro
  },
  large: {
    paddingTop: sizes.none,
    paddingRight: sizes.small,
    paddingBottom: sizes.none,
    paddingLeft: sizes.small,
    height: sizes.medium
  }
}
