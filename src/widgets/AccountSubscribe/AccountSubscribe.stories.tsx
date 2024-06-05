import type { Meta, StoryObj } from '@storybook/react'

import { AccountSubscribe } from './AccountSubscribe'

const meta = {
  title: 'widgets/AccountSubscribe',
  component: AccountSubscribe,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof AccountSubscribe>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = () => {
  return (
    <div style={{ width: '300px', padding: '20px', backgroundColor: 'grey' }}>
      <AccountSubscribe />
    </div>
  )
}

Default.args = {}
