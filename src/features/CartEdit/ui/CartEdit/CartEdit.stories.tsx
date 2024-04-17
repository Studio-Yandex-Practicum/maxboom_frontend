import type { Meta, StoryObj } from '@storybook/react'
import { FC } from 'react'

import image1 from '@/assets/images/product/2-500x500.webp'

import { CartEdit, TCartEditProps } from './CartEdit'

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
    cartId: 85,
    amount: 2,
    product: {
      id: 1,
      category: 'техника',
      brand: 'Tefal',
      images: [
        {
          image: image1
        }
      ],
      price: '1000',
      name: 'Tefal Iron',
      slug: '1hfjnfjkf',
      description: 'Functional',
      code: 108290,
      wb_urls: 'jnfne'
    }
  }
}
