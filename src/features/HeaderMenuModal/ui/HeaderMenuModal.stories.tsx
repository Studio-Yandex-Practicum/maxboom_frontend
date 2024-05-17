import type { Meta, StoryObj } from '@storybook/react'

import HeaderMenuModal from './HeaderMenuModal'

const meta = {
  title: 'features/HeaderMenuModal',
  component: HeaderMenuModal,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof HeaderMenuModal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = () => {
  const phoneNumber = '+7-(495)-123-45-67'
  const categories = [
    {
      id: 0,
      name: 'Автозапчасти'
    },
    {
      id: 1,
      name: 'Гамбургеры'
    },
    {
      id: 2,
      name: 'Шампуни'
    },
    {
      id: 3,
      name: 'Надувные лодки'
    },
    {
      id: 4,
      name: 'И другие чудеса :)'
    }
  ]

  const counter = 5
  const total = 500

  return (
    <div style={{ width: '500px' }}>
      <HeaderMenuModal
        categories={categories}
        phoneNumber={phoneNumber}
        isMenuModalOpen={true}
        handleClose={() => {}}
        counter={counter}
        total={total}
      />
    </div>
  )
}

Default.args = { counter: 5, total: 500 }
