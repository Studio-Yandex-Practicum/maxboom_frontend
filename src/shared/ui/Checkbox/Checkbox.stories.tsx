/* eslint-disable */
// TODO: https://github.com/Studio-Yandex-Practicum/maxboom_frontend/issues/263
import { Formik, Form } from 'formik'
import { Meta, StoryObj } from '@storybook/react'
import Checkbox, { CheckboxProps } from './Checkbox'
import { ECheckboxTheme, ECheckboxSize } from '@/shared/model/types/common'

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
    type: 'radio',
    label: 'Text',
    theme: ECheckboxTheme.PRIMARY,
    size: ECheckboxSize.M
  }
}
