import type { Meta, StoryObj } from '@storybook/react'

import HeaderAccount from './HeaderAccount'

const meta = {
  title: 'entities/HeaderAccount',
  component: HeaderAccount,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof HeaderAccount>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = () => {
  const counter = 50
  const total = '2568 p'

  return (
    <div style={{ width: '500px' }}>
      <HeaderAccount isMenuModalOpen={true} handleClose={() => {}} counter={counter} total={total} />
    </div>
  )
}

Default.args = {
  counter: 50,
  total: '2568 p'
}
