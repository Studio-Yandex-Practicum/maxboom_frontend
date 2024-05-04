import { type FC } from 'react'

import Link from '@/shared/ui/Link/Link'

import styles from './payments.module.scss'

type TPayments = {
  data: { footer: { additional_logos: Logo[] } }
}

type Logo = {
  image: string
  title: string
  url: string
}

/** платежная система
 * @param {string} image - путь к картинке
 * @param {string} title - название
 * @param {string} url - путь к сайту
 */
const Payments: FC<TPayments> = ({ data }) => {
  return (
    <ul className={styles.payments}>
      {data.footer.additional_logos.map(logo => (
        <li className={styles['payment-nav']} key={logo.url}>
          <Link to={logo.url} className={styles['payment-item']} target="_blank">
            <img className={styles['payment-icon']} src={logo.image} title={logo.url} alt={logo.url} />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Payments
