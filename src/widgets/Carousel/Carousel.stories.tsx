import { Story, Meta } from '@storybook/react'
import Carousel, { CarouselProps } from './Carousel'
import { ECardView } from '@/shared/model/types/common'
import { PRODUCT_PHOTOS } from '@/mockData/productsPageOptions'

export default {
  title: 'shared/Carousel',
  component: Carousel
} as Meta

const Template: Story<CarouselProps> = args => <Carousel {...args} />

export const Grid = Template.bind({})
Grid.args = {
  photos: PRODUCT_PHOTOS,
  layout: ECardView.GRID
}

export const Compact = Template.bind({})
Compact.args = {
  photos: PRODUCT_PHOTOS,
  layout: ECardView.COMPACT
}
