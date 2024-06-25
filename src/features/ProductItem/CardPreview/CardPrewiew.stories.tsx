import { Meta, StoryObj } from '@storybook/react'

import image1 from '@/assets/images/product/1-260x260.webp'
import { CardPreview } from '@/features/ProductItem/CardPreview/CardPreview'

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
    id: 12345,
    name: '3W Clinic Vitamin C Foam Cleansing Пенка для умывания с витамином С',
    description:
      'Пенка для умывания с витамином С мягко осветляет и улучшает общий тон кожи, устраняет красноту, отбеливает нежелательную пигментацию и пост-акне, увлажняет и тонизирует.\n\nПенка деликатно очищает кожу от всех видов загрязнений, остатков макияжа, излишков кожного сала и пыли.\n\nВитамин С - обладает выраженным антиоксидантным действием, эффективно защищая кожу от повреждений ультрафиолетовым излучением, инициируют выработку собственного коллагена, способствуют повышению эластичности, упругости и увлажненности кожи.',
    label_hit: false,
    label_popular: false
  }
}
