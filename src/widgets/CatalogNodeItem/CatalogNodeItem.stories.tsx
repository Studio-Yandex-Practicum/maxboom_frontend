// CatalogNodeItem.stories.tsx
import { Meta, StoryObj } from '@storybook/react'

import CatalogNodeItem from './CatalogNodeItem'

const meta = {
  title: 'widgets/CatalogNodeItem',
  component: CatalogNodeItem,
  parameters: {
    layout: 'centered'
  }
} as Meta<typeof CatalogNodeItem>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    slug: 'category-slug',
    name: 'Category Name'
  }
}

export const CustomCategory: Story = {
  args: {
    slug: 'custom-slug',
    name: 'Custom Category'
  }
}
