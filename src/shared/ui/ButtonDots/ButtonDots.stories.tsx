import type { Meta, StoryObj } from '@storybook/react'
import ButtonDots from './ButtonDots'

const meta = {
  title: 'ButtonDots',
  component: ButtonDots,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof ButtonDots>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    article: '01929039',
    removeProduct: (article: string) => {
      console.log(`I will delete ${article} product`)
    }
  }
}
