import { Meta, StoryObj } from '@storybook/react'

import DistributionForm from './DistributionForm'

const meta = {
  title: 'widgets/DistributionForm',
  component: DistributionForm,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof DistributionForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
