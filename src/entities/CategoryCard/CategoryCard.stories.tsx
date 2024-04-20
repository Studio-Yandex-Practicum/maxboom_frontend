import type { Meta, StoryObj } from '@storybook/react'

import card1 from '../../assets/images/categoryCards/img-categories-01-210x263.webp'
import { TCategory } from '../../models/CategoryModel'

import { CategoryCard } from './CategoryCard'

const meta = {
  title: 'entities/CategoryCard',
  component: CategoryCard
} as Meta<typeof CategoryCard>

export default meta
type Story = StoryObj<typeof meta>

interface CategoryCardArgs {
  category: TCategory
}

export const Default: Story = (args: CategoryCardArgs) => <CategoryCard category={args.category} />

Default.args = {
  category: {
    image: card1,
    name: 'FM-трансмиттеры',
    slug: 'fm-transmitters'
  }
}
