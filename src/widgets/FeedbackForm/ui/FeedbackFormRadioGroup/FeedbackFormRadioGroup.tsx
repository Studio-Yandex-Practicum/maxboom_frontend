import { Field } from 'formik'
import { FC, Fragment } from 'react'

import IconStar from '@/assets/icons/IconStar'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import Span from '@/shared/ui/Span/Span'

import styles from './FeedbackFormRadioGroup.module.scss'
interface IFeedbackFormRadioGroupProps {
  groupName: string
  title: string
}

const starArray = [5, 4, 3, 2, 1]

/**
 * Компонент группы radio игеещт в виде звезд
 *
 * @param  {string} groupName имя группы
 * @param  {string} title отображаемый заголовок группы
 */
export const FeedbackFormRadioGroup: FC<IFeedbackFormRadioGroupProps> = ({ groupName, title }) => {
  return (
    <div id={groupName} className={styles.radiobtngruop}>
      <Paragraph className={styles.radiobtngruop__formlabel}>
        <Span>*</Span>
        {` ${title}`}
      </Paragraph>
      <div role="group" aria-labelledby={groupName} className={styles.radiobtngruop__group}>
        {starArray.map(i => (
          <Fragment key={`${groupName}-${i}`}>
            <Field
              type="radio"
              name={groupName}
              id={`${groupName}${i}`}
              value={`${i}`}
              className={styles.radiobtngruop__field}
            />
            <label className={styles.radiobtngruop__label} htmlFor={`${groupName}${i}`}>
              <IconStar />
            </label>
          </Fragment>
        ))}
      </div>
    </div>
  )
}
