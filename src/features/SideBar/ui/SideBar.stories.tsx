import type { Meta, StoryObj } from '@storybook/react'

import SideBar from './SideBar'

const meta = {
  title: 'features/SideBar',
  component: SideBar,
  tags: ['autodocs'],
  args: {}
} satisfies Meta<typeof SideBar>

export default meta

type Story = StoryObj<typeof SideBar>

export const Default: Story = () => {
  return (
    <div style={{ width: '340px' }}>
      <SideBar isVisible={true} title="Мои данные">
        <ul style={{ padding: '10px' }}>
          <li style={{ paddingBottom: '10px' }}>
            <a
              style={{ textDecoration: 'none', color: '#343434', fontSize: '15px' }}
              href="https://maxboom.ru/">
              Текст
            </a>
          </li>
          <li style={{ paddingBottom: '10px' }}>
            <a
              style={{ textDecoration: 'none', color: '#343434', fontSize: '15px' }}
              href="https://maxboom.ru/">
              Текст
            </a>
          </li>
          <li style={{ paddingBottom: '10px' }}>
            <a
              style={{ textDecoration: 'none', color: '#343434', fontSize: '15px' }}
              href="https://maxboom.ru/">
              Текст
            </a>
          </li>
        </ul>
      </SideBar>
    </div>
  )
}

Default.args = {}
