import type { Meta, StoryObj } from '@storybook/react'

import HeaderSearchModal from './HeaderSearchModal'

const meta = {
  title: 'features/HeaderSearchModal',
  component: HeaderSearchModal,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof HeaderSearchModal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = () => {
  return (
    <div style={{ width: '500px', height: '500px' }}>
      <HeaderSearchModal isSearchModalOpen={true} handleClose={() => {}} />
    </div>
  )
}

Default.args = {}
