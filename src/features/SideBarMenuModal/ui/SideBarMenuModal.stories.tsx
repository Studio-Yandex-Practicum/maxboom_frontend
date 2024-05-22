import type { Meta, StoryObj } from '@storybook/react'

import SideBarMenuModal from './SideBarMenuModal'

const meta = {
  title: 'features/SideBarMenuModal',
  component: SideBarMenuModal,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof SideBarMenuModal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <SideBarMenuModal />
    </div>
  )
}

Default.args = {}
