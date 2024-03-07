import type { Meta, StoryObj } from '@storybook/react'
import { FC } from 'react'

import img1 from '@/assets/images/banner/banner.png'

import BannerCard, { TBannerCardProps } from './BannerCard'
import styles from './BannerCard.module.scss'

const StorybookWrapper: FC<TBannerCardProps> = ({ alt, title, subtitle, href, urlImg, urlImg_m }) => {
  return (
    <div className={styles.storybook}>
      <BannerCard
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
    urlImg: img1,
    urlImg_m: img1,
    alt: 'Mobil',
    title: 'DJI OSMO',
    subtitle: 'Mobile 4',
    href: 'jelektronika/telefony-i-smart-chasy/umnye-chasy'
  }
}
