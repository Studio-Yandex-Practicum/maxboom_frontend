import type { Meta, StoryObj } from '@storybook/react'

import FormBuyGiftCertificate from './FormBuyGiftCertificate'

const meta = {
  title: 'widgets/FormBuyGiftCertificate',
  component: FormBuyGiftCertificate,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof FormBuyGiftCertificate>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
