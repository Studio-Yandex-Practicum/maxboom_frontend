import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

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
  const [user, setUser] = useState('Elon Musk')

  const handleLogOut = () => {
    setUser('')
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <SideBarMenuModal user={user} handleLogOut={handleLogOut} />
    </div>
  )
}

Default.args = {
  user: 'Elon Musk'
}
