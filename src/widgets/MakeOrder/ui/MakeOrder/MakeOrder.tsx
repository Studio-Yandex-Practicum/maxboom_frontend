import { Link } from 'react-router-dom'
import styles from './MakeOrder.module.scss'
import { TOrder } from '@/utils/types'

export const MakeOrder: React.FC<TOrder> = (props: TOrder) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>О заказе</h4>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td>
              Товары <mark className={styles.mark}>{props.amount}</mark>
            </td>
            <td className={styles.right}>{`${props.productsSum} ${props.currency}`}</td>
          </tr>
          <tr>
            <td>Сумма</td>
            <td className={styles.right}>{`${props.productsSumWithoutDiscount} ${props.currency}`}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th className={styles.total}>Итого</th>
            <th className={styles.right}>{`${props.total} ${props.currency}`}</th>
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
