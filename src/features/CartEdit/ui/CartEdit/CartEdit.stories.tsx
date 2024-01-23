import type { Meta, StoryObj } from '@storybook/react'
import { CartEdit, TCartEditProps } from './CartEdit'
import image1 from '@/assets/images/product/2-500x500.webp'
import { FC } from 'react'

const CartEditWrapper: FC<TCartEditProps> = props => {
  return (
    <div style={{ width: '800px' }}>
      <CartEdit {...props} />
    </div>
  )
}

const meta = {
  title: 'features/CartEdit',
  component: CartEditWrapper,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof CartEditWrapper>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    product: {
      article: '1866887687',
      quantity: 1,
      src: image1,
      name: 'Переходник',
      price: 1634,
      currency: 'RUB'
    },
    decreaseQuantity: () => {},
    increaseQuantity: () => {},
    setQuantity: () => {},
    removeProduct: () => {}
  }
}
