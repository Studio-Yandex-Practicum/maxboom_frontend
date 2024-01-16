import type { Meta, StoryObj } from '@storybook/react'
import { CartCouponApply } from './CartCouponApply'

const meta = {
  title: 'features/CartCouponApply',
  component: CartCouponApply,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof CartCouponApply>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}
