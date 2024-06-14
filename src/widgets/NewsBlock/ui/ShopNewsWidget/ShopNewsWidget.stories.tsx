import type { Meta, StoryObj } from '@storybook/react'
import { FC } from 'react'

import ShopNewsWidget from './ShopNewsWidget'
import styles from './ShopNewsWidget.module.scss'

const StorybookWrapper: FC = () => {
  return (
    <div className={styles.storybook}>
      <ShopNewsWidget />
    </div>
  )
}

const meta = {
  title: 'widgets/ShopNewsWidget',
  component: StorybookWrapper,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof StorybookWrapper>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
