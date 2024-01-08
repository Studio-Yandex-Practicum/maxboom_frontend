import { Routes } from '@/shared/config/routerConfig/routes'
import IconLink from '@/assets/icons/IconLink'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Link from '@/shared/ui/Link/Link'
import BrandCard from '@/shared/ui/BrandCard/BrandCard'
import { brandsData } from '@/mockData/brandData'
import { TEXT_OUR_BRANDS, TEXT_ALL_BRANDS } from '@/shared/constants/constants'
import styles from './BrandBlock.module.scss'

/**
 * Компонент списка брендов для главной страницы.
 */
const BrandBlock = () => {
  return (
    <section className={styles.brands}>
      <div className={styles.brands__header}>
        <Heading type={HeadingType.NORMAL}>{TEXT_OUR_BRANDS}</Heading>
        <Link to={Routes.BRANDS} className={styles.link__text}>
          {TEXT_ALL_BRANDS}
          {IconLink({ styles: styles.svg })}
        </Link>
      </div>
      <ul className={styles.brands__body}>
        {brandsData.map(card => (
          <BrandCard card={card} key={card.id} />
        ))}
      </ul>
    </section>
  )
}

export default BrandBlock
