import { Meta, StoryObj } from '@storybook/react'
import { Formik, Form } from 'formik'
import Checkbox, { CheckboxProps, CheckboxTheme, CheckboxSize } from './Checkbox'

export default {
  title: 'shared/Checkbox',
  component: Checkbox,
  decorators: [
    Story => (
      <Formik initialValues={{ myChoice: false }} onSubmit={values => console.log(values)}>
        <Form>
          <Story />
        </Form>
      </Formik>
    )
  ],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    checked: { control: 'boolean' }
  }
} as Meta<CheckboxProps>

const Template: StoryObj<CheckboxProps> = {
  render: args => <Checkbox {...args} />
}

export const Primary = {
  ...Template,
  args: {
    name: 'Text',
    value: 'Text',
    label: 'Text',
    theme: CheckboxTheme.PRIMARY,
    size: CheckboxSize.M
  }
}
