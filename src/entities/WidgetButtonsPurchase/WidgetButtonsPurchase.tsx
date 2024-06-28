import classNames from 'classnames'
import { FC } from 'react'

import IconCart from '@/assets/icons/IconCart.svg'
import WB from '@/assets/icons/WB.svg'
import { ECardView } from '@/shared/model/types/common'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'

import styles from './WidgetButtonsPurchase.module.scss'

type TWidgetButtonsPurchase = {
  isInCart: boolean
  handleAddToCart: VoidFunction
  layout: ECardView
  wb_urls?: string
}

/**
 * Компонент (виджет) группы кнопок для добавления в корзину и открытия поп-апа с подробной информацией о товаре.
 * @param {boolean} isInCart - добавлен ли товар в корзину;
 * @param {function} handleAddToCart - функция добавления товара в корзину;
 * @param {string} layout - текущий вид отображения карточки товара;
 * @param {string} wb_urls ссылка на страницу с товаром на WB
 */
export const WidgetButtonsPurchase: FC<TWidgetButtonsPurchase> = ({
  isInCart,
  handleAddToCart,
  layout,
  wb_urls
}) => {
  const size = layout === ECardView.COMPACT ? ButtonSize.S : ButtonSize.XS

  const buyWBHandle = () => {
    window.open(wb_urls, '_blank')
  }

  return (
    <div className={styles.customButtonsContainer}>
      <Button
        className={styles.customButton}
        theme={isInCart ? ButtonTheme.SUCCESS : ButtonTheme.PRIMARY}
        size={size}
        onClick={handleAddToCart}>
        <IconCart className={styles.customButton__iconCart} />
        {isInCart ? 'Перейти в корзину' : 'Купить'}
      </Button>
      {wb_urls && (
        <Button
          className={classNames(styles.customButton, styles.customButton_eye)}
          theme={ButtonTheme.OUTLINED}
          size={size}
          onClick={buyWBHandle}>
          <WB />
        </Button>
      )}
    </div>
  )
}
