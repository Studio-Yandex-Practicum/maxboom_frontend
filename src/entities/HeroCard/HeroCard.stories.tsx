import type { Meta, StoryObj } from '@storybook/react'
import { FC } from 'react'

import img from '@/assets/images/slider/slide4-940x370.webp'
import img_m from '@/assets/images/slider/slide4-m-530x530.webp'

import HeroCard, { THeroCardProps } from './HeroCard'
import styles from './HeroCard.module.scss'

const StorybookWrapper: FC<THeroCardProps> = ({ alt, title, subTitle, price, href, urlImg, urlImg_m }) => {
  return (
    <div className={styles.storybook}>
      <HeroCard
        urlImg={urlImg}
        urlImg_m={urlImg_m}
        alt={alt}
        title={title}
        subTitle={subTitle}
        price={price}
        href={href}
      />
    </div>
  )
}

const meta = {
  title: 'entities/HeroCard',
  component: StorybookWrapper,
  parameters: {
    layout: 'centered'
  },

  tags: ['autodocs']
} satisfies Meta<typeof StorybookWrapper>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    urlImg: img,
    urlImg_m: img_m,
    alt: 'Pacific blue',
    title: 'Pacific blue',
    subTitle: 'Iphone 12 Pro Max',
    price: 'от 70000 Р',
    href: 'jelektronika/telefony-i-smart-chasy/umnye-chasy'
  }
}
