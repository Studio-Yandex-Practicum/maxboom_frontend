import { FC } from 'react'

import Paragraph from '@/shared/ui/Paragraph/Paragraph'

import styles from './AboutUs.module.scss'

interface IAboutUs {
  text: string
}

/**
 * Карточка из блока "О нас"
 * @param {Props} text - текст
 */

const AboutUs: FC<IAboutUs> = ({ text }) => {
  return <Paragraph className={styles.text}>{text}</Paragraph>
}

export default AboutUs
