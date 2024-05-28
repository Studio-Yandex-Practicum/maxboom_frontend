import type { Meta, StoryObj } from '@storybook/react'

import IconHand from '@/assets/images/img-hand.png.png'

import HeadingBlock from './HeadingBlock'

const meta = {
  title: 'entities/HeadingBlock',
  component: HeadingBlock,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof HeadingBlock>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = () => {
  const title = 'Новости'
  const subtitle = 'Все новости'
  const link = '#'

  return (
    <div style={{ width: '700px' }}>
      <HeadingBlock
        title={title}
        isIcon={true}
        image={IconHand}
        isLink={true}
        subtitle={subtitle}
        link={link}
      />
    </div>
  )
}

Default.args = {
  title: 'Новости',
  subtitle: 'Все новости',
  link: '#'
}
