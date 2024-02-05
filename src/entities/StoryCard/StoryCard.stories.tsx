import type { Meta, StoryObj } from '@storybook/react'
import StoryCard from './StoryCard'
import Img1 from '@/assets/images/stories/img-stories-01.png'

const meta = {
  title: 'entities/StoryCard',
  component: StoryCard,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof StoryCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    pictures: [Img1],
    link: 'https://gealit.ru/api/catalogue/3w-clinic--krem-dlya-glaz-s-ekstraktom-chernogo-zhemchuga-black-pearl-eye-cream-whitening-40-ml-410158271/'
  }
}
