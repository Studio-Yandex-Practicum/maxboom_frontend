import type { Meta, StoryObj } from '@storybook/react'

import image1 from '@/assets/images/product/2-500x500.webp'

import { ProductEntity } from './ProductEntity'

const meta = {
  title: 'entities/ProductEntity',
  component: ProductEntity,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof ProductEntity>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
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
