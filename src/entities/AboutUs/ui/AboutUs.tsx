import { FC } from 'react'

import Paragraph from '@/shared/ui/Paragraph/Paragraph'

import { IAboutUs } from '../model/types/types'

import styles from './AboutUs.module.scss'

/**
 * Карточка из блока "О нас"
 * @param {Props} text - текст
 */

const AboutUs: FC<IAboutUs> = ({ text }) => {
  return <Paragraph className={styles.text}>{text}</Paragraph>
}

export default AboutUs
