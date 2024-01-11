import type { Meta, StoryObj } from '@storybook/react'
import ButtonDots from './ButtonDots'

const meta = {
  title: 'shared/ButtonDots',
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    removeProduct: (article: string) => {}
  }
}
