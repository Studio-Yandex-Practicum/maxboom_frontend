import type { Meta, StoryObj } from '@storybook/react'

import img3 from '@/assets/images/slider/slide4-940x370.webp'

import Slider from './Slider'
import styles from './Slider.module.scss'

const meta = {
  title: 'shared/Slider',
  component: Slider,
  parameters: {
    layout: 'centered'
  },

  tags: ['autodocs']
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    children: [
      <img src={img3} alt="img" key={1} />,
      <img src={img3} alt="img" key={2} />,
      <img src={img3} alt="img" key={3} />
    ],
    className: styles.storybook
  }
}
