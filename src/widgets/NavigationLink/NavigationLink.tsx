import Link from '@/shared/ui/Link/Link'

import styles from './NavigationLink.module.scss'

export type NavigationLinkProps = {
  label: string
  to: string
}

/**
 * Компонент ссылки-навигатора по страницам сайта для хедера страницы
 * @param {string} label - текст ссылки
 * @param {string} to - адрес для перехода
 */
const NavigationLink = ({ label, to }: NavigationLinkProps) => {
  return (
    <li className={styles.li}>
      <Link to={to} className={styles.link}>
        {label}
      </Link>
    </li>
  )
}

export default NavigationLink
