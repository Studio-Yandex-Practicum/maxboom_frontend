import type { Meta, StoryObj } from '@storybook/react'

import SideBarMenu from './SideBarMenu'

const meta = {
  title: 'widgets/SideBarMenu',
  component: SideBarMenu,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof SideBarMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = () => {
  return (
    <div style={{ width: '340px' }}>
      <SideBarMenu />
    </div>
  )
}

Default.args = {}
