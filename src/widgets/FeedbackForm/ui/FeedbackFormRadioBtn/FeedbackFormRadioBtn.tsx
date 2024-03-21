import { Field } from 'formik'
import { FC } from 'react'

import './FeedbackFormRadioBtn.scss'
import IconStar from '@/assets/icons/IconStar'

interface IFeedbackFormRadioBtnProps {
  groupName: string
}

/**
 * Компонент группы radio игеещт в виде звезд
 * @param groupName {string} - id элемента с именем группы
 */
export const FeedbackFormRadioBtn: FC<IFeedbackFormRadioBtnProps> = ({ groupName }) => {
  return (
    <div role="group" aria-labelledby={groupName} className="radiobtngruop">
      {[1, 2, 3, 4, 5].reverse().map(i => (
        <>
          <Field
            key={`${groupName}field${i}`}
            type="radio"
            name={groupName}
            id={`${groupName}${i}`}
            value={`${i}`}
            className="radiobtngruop__field"
          />
          <label key={`${groupName}${i}`} className="radiobtngruop__label" htmlFor={`${groupName}${i}`}>
            <IconStar />
          </label>
        </>
      ))}
    </div>
  )
}
