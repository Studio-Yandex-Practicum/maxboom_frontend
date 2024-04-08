import type { Meta, StoryObj } from '@storybook/react'

import Breadcrumbs from './Breadcrumbs'

const meta = {
  title: 'shared/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Breadcrumbs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    links: [
      { heading: 'Главная', href: '/' },
      { heading: 'Браслеты', href: '/categories/' + 'bracelets' }
    ]
  }
}
