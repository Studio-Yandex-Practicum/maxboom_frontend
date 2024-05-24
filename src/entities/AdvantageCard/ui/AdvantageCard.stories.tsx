import type { Meta, StoryObj } from '@storybook/react'

import { advantagesData } from '@/mockData/advantagesData'

import AdvantageCard from './AdvantageCard'

const meta = {
  title: 'entities/AdvantageCard',
  component: AdvantageCard,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof AdvantageCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = () => {
  const image = advantagesData[0].image
  const alt = advantagesData[0].alt
  const name = advantagesData[0].name

  return (
    <div style={{ width: '220px' }}>
      <AdvantageCard image={image} alt={alt} name={name} route="#" />
    </div>
  )
}

Default.args = {
  image: advantagesData[0].image,
  alt: advantagesData[0].alt,
  name: advantagesData[0].name,
  route: '#'
}
