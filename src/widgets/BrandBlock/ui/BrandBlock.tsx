import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch } from '@/app/providers/StoreProvider/config/store'
import BrandCard from '@/entities/BrandCard'
import HeadingBlock from '@/entities/HeadingBlock'
import LinkButton from '@/entities/LinkButton'
import { TEXT_ALL_BRANDS, TEXT_OUR_BRANDS } from '@/shared/constants/constants'
import { useResize } from '@/shared/libs/hooks/useResize'
import Scroll from '@/shared/ui/Scroll/Scroll'

import { brandSelector } from '../selectors/selectors'
import { fetchBrands } from '../slice/brandSlice'
import type { Brand } from '../types/types'

import styles from './BrandBlock.module.scss'

/**
 * Компонент BrandBlock - это список брендов для главной страницы MainPage.
 */

const BrandBlock: FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const brands: Brand[] = useSelector(brandSelector)

  const { isScreenMd } = useResize()

  useEffect(() => {
    dispatch(fetchBrands())
  }, [])

  return (
    brands?.length !== 0 && (
      <section className={styles.brandBlock}>
        <HeadingBlock title={TEXT_OUR_BRANDS} isLink={true} subtitle={TEXT_ALL_BRANDS} link={'#'} />

        <Scroll withManualGrip={true}>
          {brands.map(card => (
            <li key={card.id}>
              <BrandCard card={card} />
            </li>
          ))}
          {!isScreenMd && <LinkButton link={'#'} text={TEXT_ALL_BRANDS} />}
        </Scroll>
      </section>
    )
  )
}

export default BrandBlock
