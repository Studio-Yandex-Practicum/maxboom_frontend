import type { Meta, StoryObj } from '@storybook/react'
import { MakeOrder } from './MakeOrder'

const meta = {
  title: 'widgets/MakeOrder',
  component: MakeOrder,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof MakeOrder>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    amount: 1,
    productsSum: 1232,
    total: 12332,
    productsSumWithoutDiscount: 123,
    currency: 'RUB'
  }
}
