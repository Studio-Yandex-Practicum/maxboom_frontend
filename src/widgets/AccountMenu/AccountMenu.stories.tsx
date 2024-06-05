import type { Meta, StoryObj } from '@storybook/react'

import { AccountMenu } from './AccountMenu'

const meta = {
  title: 'widgets/AccountMenu',
  component: AccountMenu,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof AccountMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = () => {
  return (
    <div style={{ width: '500px', padding: '20px', backgroundColor: 'grey' }}>
      <AccountMenu />
    </div>
  )
}

Default.args = {}
