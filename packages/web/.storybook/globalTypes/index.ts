export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'naturaLight',
    toolbar: {
      showName: true,
      items: [
        { right: '🌑', title: 'Avon Dark', value: 'avonDark' },
        { right: '☀️', title: 'Avon Light', value: 'avonLight' },
        { right: '🌑', title: 'Natura Dark', value: 'naturaDark' },
        { right: '☀️', title: 'Natura Light', value: 'naturaLight' },
        { right: '🌑', title: 'The Body Shop Dark', value: 'theBodyShopDark' },
        { right: '☀️', title: 'The Body Shop Light', value: 'theBodyShopLight' },
        { right: '🌑', title: 'Aesop Dark', value: 'aesopDark' },
        { right: '☀️', title: 'Aesop Light', value: 'aesopLight' }
      ]
    }
  }
}

export default globalTypes
