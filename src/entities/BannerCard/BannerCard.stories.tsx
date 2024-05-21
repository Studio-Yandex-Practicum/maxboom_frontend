import type { Meta, StoryObj } from '@storybook/react'
import { FC } from 'react'

import img1 from '@/assets/images/banner/banner.png'
import img2 from '@/assets/images/banner/banner_small.png'

import BannerCard, { TBannerCard } from './BannerCard'
import styles from './BannerCard.module.scss'

const StorybookWrapper: FC<TBannerCard> = ({ id, alt, title, subtitle, href, urlImg, urlImg_m }) => {
  return (
    <div className={styles.storybook}>
      <BannerCard
        id={id}
        urlImg={urlImg}
        urlImg_m={urlImg_m}
        alt={alt}
        title={title}
        subtitle={subtitle}
        href={href}
      />
    </div>
  )
}

const meta = {
  title: 'entities/BannerCard',
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
    id: 100,
    urlImg: img1,
    urlImg_m: img2,
    alt: 'Mobil',
    title: 'DJI OSMO',
    subtitle: 'Mobile 4',
    href: 'jelektronika/telefony-i-smart-chasy/umnye-chasy'
  }
}
