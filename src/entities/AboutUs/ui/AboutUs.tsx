import { FC } from 'react'

import styles from './AboutUs.module.scss'

interface IAboutUs {
  text: string
}

/**
 * Карточка из блока "О нас"
 * @param {Props} text - текст
 */

const AboutUs: FC<IAboutUs> = ({ text }) => {
  return <p className={styles.text}>{text}</p>
}

export default AboutUs
