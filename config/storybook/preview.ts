import type { Preview } from '@storybook/react'
import { StyleDecorator } from './decorators/StyleDecorator'
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [StyleDecorator]
}

export default preview
