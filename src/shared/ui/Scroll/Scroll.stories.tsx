import type { Meta, StoryObj } from '@storybook/react'
import { FC } from 'react'
import Scroll from './Scroll'
import styles from './Scroll.module.scss'

const StorybookWrapper: FC = () => {
  return (
    <Scroll className={styles.additional}>
      <div className={styles.extra}></div>
      <div className={styles.extra}></div>
      <div className={styles.extra}></div>
      <div className={styles.extra}></div>
      <div className={styles.extra}></div>
    </Scroll>
  )
}

const meta = {
  title: 'shared/Scroll',
  component: StorybookWrapper,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof StorybookWrapper>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <div></div>
  }
}
