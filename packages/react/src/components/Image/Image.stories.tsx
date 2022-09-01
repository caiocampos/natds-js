import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Image, ImageProps } from '.'
import StoryContainer from '../../helpers/StoryContainer'

const componentStatus = `
- - -

**NOTE FOR UXs**: This component is available in the following variants:

  - ❌ Standard

With the following attribute statuses:

  - **Attributes:**
    - ❌ \`Types\`

- - -
`

export default {
  title: 'Components/Image',
  component: Image,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } }
  }
} as Meta

export const Playground: Story<ImageProps> = (args) => (
  <StoryContainer>
    <Image {...args} sourceImage="https://picsum.photos/256">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </Image>
  </StoryContainer>
)

export const Highlight: Story<ImageProps> = (args) => (
  <StoryContainer>
    <Image {...args} highlight sourceImage="https://picsum.photos/256">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </Image>
  </StoryContainer>
)

export const WithFallback: Story<ImageProps> = (args) => (
  <StoryContainer>
    <Image {...args} sourceImage="INVALID_URL" fallbackImage="https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-web@latest/dist/assets/product-empty-256x256.png">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </Image>
  </StoryContainer>
)
