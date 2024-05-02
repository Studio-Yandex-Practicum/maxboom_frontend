import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

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
  const [user, setUser] = useState('Elon Musk')

  const handleLogOut = () => {
    setUser('')
  }

  return (
    <div style={{ width: '340px' }}>
      <SideBarMenu user={user} handleLogOut={handleLogOut} />
    </div>
  )
}

Default.args = {
  user: 'Elon Musk'
}
