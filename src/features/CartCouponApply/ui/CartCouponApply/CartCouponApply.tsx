import { useState } from 'react'
import styles from './CartCouponApply.module.scss'

const states = {
  CERTIFICATE: 'CERTIFICATE',
  COUPON: 'COUPON'
}

export const CartCouponApply: React.FC = () => {
  const [value, setValue] = useState(states.CERTIFICATE)

  function changeCouponToCertificate() {
    if (value === states.CERTIFICATE) {
      setValue(states.COUPON)
    } else {
      setValue(states.CERTIFICATE)
    }
  }

  const title = value === states.CERTIFICATE ? 'Сертификат' : 'Купон'
  const buttonText = value === states.CERTIFICATE ? 'Ввести купон' : 'Ввести сертификат'
  const placeholder = value === states.CERTIFICATE ? 'Ввести код сертификата' : 'Ввести код купона'

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h4 className={styles.title}>{title}</h4>
        <button className={styles.button_change} onClick={changeCouponToCertificate}>
          {buttonText}
        </button>
      </div>
      <form className={styles.form}>
        <input type="text" name="coupon" placeholder={placeholder} className={styles.input}></input>
        <button className={styles.button}>Применить</button>
      </form>
    </div>
  )
}
