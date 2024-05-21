import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch } from '@/app/providers/StoreProvider/config/store'
import BrandCard from '@/entities/BrandCard'
import HeadingBlock from '@/entities/HeadingBlock'
import { Routes } from '@/shared/config/routerConfig/routes'
import { TEXT_ALL_BRANDS, TEXT_OUR_BRANDS } from '@/shared/constants/constants'
import Scroll from '@/shared/ui/Scroll/Scroll'

import { brandSelector } from '../selectors/selectors'
import { fetchBrands } from '../slice/brandSlice'
import { Brand } from '../types/types'

import styles from './BrandBlock.module.scss'

/**
 * Компонент BrandBlock - это список брендов для главной страницы MainPage.
 */

const BrandBlock: FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const brands: Brand[] = useSelector(brandSelector)

  useEffect(() => {
    dispatch(fetchBrands())
  }, [])

  return (
    brands?.length !== 0 && (
      <section className={styles.brandBlock}>
        <HeadingBlock title={TEXT_OUR_BRANDS} isLink={true} subtitle={TEXT_ALL_BRANDS} link={Routes.BRANDS} />

        <Scroll>
          {brands.map(card => (
            <li key={card.id}>
              <BrandCard card={card} />
            </li>
          ))}
        </Scroll>
      </section>
    )
  )
}

export default BrandBlock
