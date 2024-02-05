import { Link } from 'react-router-dom'

import { TOrder } from '@/shared/model/types/common'

import styles from './MakeOrder.module.scss'

/**
 * Компонент Сделать Заказ: тут представлены суммы за заказ , а также кнопки быстрого и обычного заказа
 * @param {number} amount -кол-во всех продуктов в заказе;
 * @param {number} productsSum- стоимость всех товаров;
 * @param {number} total -окончательная стомость товаров , с учетом скидкок;
 * @param {number} productsSumWithoutDiscount -стоимость всех товаров в заказе без учета скидки;
 * @param {string} currency - валюта, в которой обозначена стоимость товаров;
 */

export const MakeOrder: React.FC<TOrder> = ({
  amount,
  productsSum,
  total,
  productsSumWithoutDiscount,
  currency
}: TOrder) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>О заказе</h4>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td>
              Товары <mark className={styles.mark}>{amount}</mark>
            </td>
            <td className={styles.right}>{`${productsSum} ${currency}`}</td>
          </tr>
          <tr>
            <td>Сумма</td>
            <td className={styles.right}>{`${productsSumWithoutDiscount} ${currency}`}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th className={styles.total}>Итого</th>
            <th className={styles.right}>{`${total} ${currency}`}</th>
          </tr>
        </tfoot>
      </table>

      <Link to={'#'} className={styles.link_order}>
        Оформление заказа
      </Link>

      <div className={styles.line}></div>

      <button className={styles.quick_order}>Быстрый заказ</button>

      <p className={styles.paragraph}>Наш менеджер перезвонит вам и оформит заказ за вас</p>
    </div>
  )
}
