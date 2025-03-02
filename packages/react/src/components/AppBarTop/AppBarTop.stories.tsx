/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
import { Story, Meta } from '@storybook/react'
import { IconButton } from '../IconButton'
import { Icon } from '../Icon'
import { AppBarTop, AppBarProps } from '.'
import { Logo } from '../Logo'

const componentStatus = `
---

**NOTE FOR UX**: This component is available in the following variants:

  - ✅ \`base\`
  - ✅ \`standard\`

With the following attribute status:

  - **Color**
      - ✅ \`default\`
      - ✅ \`primary\`
      - ✅ \`inverse\`
      - ✅ \`none\`
  - ✅ **Elevation**
  - ✅ **Content Position** (available but with alternative composition)
  - ✅ **Content Type** (available but with alternative composition)
  - ✅ **Content Proeminent** (available but with alternative composition)
  - **Behaviour**
      - ✅  \`fixed\`
      - ✅  \`scroll\`
  - **Action**
      - ✅ \`left\` (available but with alternative composition)
      - ✅ \`right\` (available but with alternative composition)

---
`

export default {
  title: 'Components/AppBarTop',
  component: AppBarTop,
  parameters: {
    componentSubtitle: 'The App Bar Top displays information and actions relating to the current screen.',
    docs: { description: { component: componentStatus } }
  }
} as Meta

export const Playground: Story<AppBarProps> = (args) => <AppBarTop {...args} />
Playground.args = {
  children: 'App Bar - Top',
  // @ts-ignore
  style: { position: 'static' }
}

export const Color: Story<AppBarProps> = (args) => (
  <div style={{ display: 'flex', gap: 8, flexDirection: 'column' }}>
    <AppBarTop {...args} color="default">Default</AppBarTop>
    <AppBarTop {...args} color="primary">Primary</AppBarTop>
    <AppBarTop {...args} color="inverse">Inverse</AppBarTop>
    <AppBarTop {...args} color="none">None</AppBarTop>
  </div>
)

Color.args = {
  ...Playground.args
}

export const Elevation: Story<AppBarProps> = (args) => (
  <div style={{ display: 'flex', gap: 8, flexDirection: 'column' }}>
    <AppBarTop {...args}>Elevation</AppBarTop>
    <AppBarTop {...args} elevation={false}>No Elevation</AppBarTop>
  </div>
)

Elevation.args = {
  ...Playground.args
}

export const WithLogo: Story<AppBarProps> = (args) => (
  <AppBarTop {...args}>
    <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
      <IconButton IconComponent={<Icon name="outlined-navigation-menu" color="highlight" />} ariaLabel="menu" onClick={() => ''} />
      <div style={{ flexGrow: 1, justifyContent: 'center', display: 'flex' }}>
        <Logo size="hugeX" />
      </div>
      <>
        <IconButton IconComponent={<Icon name="outlined-action-search" color="highlight" />} ariaLabel="search" onClick={() => ''} />
        <IconButton IconComponent={<Icon name="outlined-finance-bag" color="highlight" />} ariaLabel="profile" onClick={() => ''} />
      </>
    </div>
  </AppBarTop>
)
WithLogo.args = {
  ...Playground.args
}
