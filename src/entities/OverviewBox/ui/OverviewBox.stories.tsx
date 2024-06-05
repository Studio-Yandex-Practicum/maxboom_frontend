import type { Meta, StoryObj } from '@storybook/react'

import OverviewBox from './OverviewBox'

const meta = {
  title: 'entities/OverviewBox',
  component: OverviewBox,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof OverviewBox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = () => {
  const title = 'Заголовок карточки'
  const pageRoute = '#'
  const pageRouteText = 'Весь список'
  const subtitle = 'Вы ничего не покупали!'
  const itemRoute = '#'
  const itemRouteText = 'смотрим конкретный товар'

  return (
    <div style={{ width: '700px' }}>
      <OverviewBox
        title={title}
        pageRoute={pageRoute}
        pageRouteText={pageRouteText}
        subtitle={subtitle}
        itemRoute={itemRoute}
        itemRouteText={itemRouteText}
      />
    </div>
  )
}

Default.args = {
  title: 'Заголовок карточки',
  pageRoute: '#',
  pageRouteText: 'Весь список',
  subtitle: 'Вы ничего не покупали!',
  itemRoute: '#',
  itemRouteText: 'смотрим конкретный товар'
}
