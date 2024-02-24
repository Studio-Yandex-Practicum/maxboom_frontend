import { useState, type FC } from 'react'

import IconArrowDown from '@/assets/icons/IconArrowDown.svg'
import IconArrowUp from '@/assets/icons/IconArrowUp.svg'
import { Button, ButtonDesign, ButtonSize } from '@/shared/ui/Button/Button'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'

import styles from './RollUp.module.scss'

/**
 * Компонент разворачивающегося блока
 * @param {children} React.ReactNode - контент;
 */
export const RollUp: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isRolledOut, setIsRolledOut] = useState(false)

  const onButtonClickHandl = () => {
    setIsRolledOut(!isRolledOut)
  }

  return (
    <section className={styles.rollup}>
      <div
        className={`${styles.rollup__header} ${!isRolledOut && styles.rollup__header_rolledup}`}
        onClick={onButtonClickHandl}>
        <Heading className={styles.rollup__headertext} type={HeadingType.NORMAL}>
          Описание
        </Heading>
        <Button
          design={ButtonDesign.SQUARE}
          size={ButtonSize.M}
          type="button"
          className={styles.rollup__button}>
          {isRolledOut ? (
            <IconArrowUp className={styles.rollup__buttonicon} />
          ) : (
            <IconArrowDown className={styles.rollup__buttonicon} />
          )}
        </Button>
      </div>
      <div className={`${styles.rollup__rollupchild} ${!isRolledOut && styles.rollup__rollupchild_rolledup}`}>
        {isRolledOut && children}
      </div>
    </section>
  )
}
