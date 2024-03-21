import { Field } from 'formik'
import { FC, Fragment } from 'react'

import './FeedbackFormRadioGroup.scss'
import IconStar from '@/assets/icons/IconStar'

interface IFeedbackFormRadioGroupProps {
  groupName: string
}

/**
 * Компонент группы radio игеещт в виде звезд
 * @param  {string} groupName имя группы
 */
export const FeedbackFormRadioGroup: FC<IFeedbackFormRadioGroupProps> = ({ groupName }) => {
  const starArray = [1, 2, 3, 4, 5].reverse()

  return (
    <div role="group" aria-labelledby={groupName} className="radiobtngruop">
      {starArray.map(i => (
        <Fragment key={`${groupName}-${i}`}>
          <Field
            type="radio"
            name={groupName}
            id={`${groupName}${i}`}
            value={`${i}`}
            className="radiobtngruop__field"
          />
          <label className="radiobtngruop__label" htmlFor={`${groupName}${i}`}>
            <IconStar />
          </label>
        </Fragment>
      ))}
    </div>
  )
}
