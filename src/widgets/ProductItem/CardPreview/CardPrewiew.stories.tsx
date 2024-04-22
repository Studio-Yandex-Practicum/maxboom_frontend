import { Meta, StoryObj } from '@storybook/react'

import image1 from '@/assets/images/product/1-260x260.webp'
import { CardPreview } from '@/widgets/ProductItem/CardPreview/CardPreview'

const meta = {
  title: 'widgets/CardPreview',
  component: CardPreview,
  tags: ['autodocs']
} satisfies Meta<typeof CardPreview>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    code: 999,
    images: [{ image: image1 }],
    slug: '/test',
    quantity: 999,
    brand: 'MaxBoom',
    price: 999,
    id: 12345
  }
}
