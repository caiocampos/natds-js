/* eslint-disable sort-keys */
import { Theme } from '@naturacosmeticos/natds-themes'
import { IAvatarSizes } from './IAvatarSizes'
import { getSizes, sizes } from '../sizes'

export const getAvatarSizes = (theme: Theme): IAvatarSizes => {
  const themeSizes = getSizes(theme)
  return {
    tiny: {
      fontSize: '.625rem',
      size: themeSizes.standard
    },
    small: {
      fontSize: '.875rem',
      size: themeSizes.semi
    },
    standard: {
      fontSize: '1rem',
      size: themeSizes.semiX
    },
    large: {
      fontSize: '1rem',
      size: themeSizes.medium
    },
    huge: {
      fontSize: '1.5rem',
      size: themeSizes.largeXX
    }
  }
}

/**
 * @todo move/refactor to natds-themes
 */
export const avatarSizes: IAvatarSizes = {
  tiny: {

    /**
     * @todo move/refactor to natds-themes
     */
    fontSize: '.625rem',
    size: sizes.standard
  },
  small: {

    /**
     * @todo move/refactor to natds-themes
     */
    fontSize: '.875rem',
    size: sizes.semi
  },
  standard: {

    /**
     * @todo move/refactor to natds-themes
     */
    fontSize: '1rem',
    size: sizes.semiX
  },
  large: {

    /**
     * @todo move/refactor to natds-themes
     */
    fontSize: '1rem',
    size: sizes.medium
  },
  huge: {

    /**
     * @todo move/refactor to natds-themes
     */
    fontSize: '1.5rem',
    size: sizes.largeXX
  }
}
