import { Story, Meta } from '@storybook/react'

import image1 from '@/assets/images/product/1-260x260.webp'
import image2 from '@/assets/images/product/1-500x500.webp'
import image3 from '@/assets/images/product/2-500x500.webp'
import image4 from '@/assets/images/product/3-500x500.webp'
import image5 from '@/assets/images/product/4-500x500.webp'
import { ECardView } from '@/shared/model/types/common'

import Carousel, { ICarouselProps } from './Carousel'

export default {
  title: 'shared/Carousel',
  component: Carousel
} as Meta

const Template: Story<ICarouselProps> = args => <Carousel {...args} />

export const Grid = Template.bind({})
Grid.args = {
  photos: [{ image: image1 }, { image: image2 }, { image: image3 }, { image: image4 }, { image: image5 }],
  layout: ECardView.GRID
}

export const Compact = Template.bind({})
Compact.args = {
  photos: [{ image: image1 }, { image: image2 }, { image: image3 }, { image: image4 }, { image: image5 }],
  layout: ECardView.COMPACT
}
