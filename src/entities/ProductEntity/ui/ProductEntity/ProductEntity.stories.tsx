import type { Meta, StoryObj } from '@storybook/react'
import { ProductEntity } from './ProductEntity'
import image1 from '@/assets/images/product/2-500x500.webp'

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
    src: image1,
    name: 'Переходник',
    article: '1229239192',
    price: 782,
    currency: '₽'
  }
}
