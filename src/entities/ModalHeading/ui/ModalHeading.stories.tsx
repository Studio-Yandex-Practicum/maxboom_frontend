import type { Meta, StoryObj } from '@storybook/react'

import ModalHeading from './ModalHeading'

const meta = {
  title: 'entities/ModalHeading',
  component: ModalHeading,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof ModalHeading>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = () => {
  return (
    <div style={{ width: '500px' }}>
      <ModalHeading title="Title" handleClose={() => {}} />
    </div>
  )
}

Default.args = {}
