// TODO: https://github.com/Studio-Yandex-Practicum/maxboom_frontend/issues/263
// eslint-disable-next-line
import type { Meta, StoryObj } from '@storybook/react'
import HelpCategories from './HelpCategories'

const meta = {
  title: 'widgets/HelpCategories',
  component: HelpCategories,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof HelpCategories>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
