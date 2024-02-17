import { useState } from 'react'

import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import { Input, InputSize, InputTheme } from '@/shared/ui/Input/Input'

import styles from './CartCouponApply.module.scss'

const states = {
  CERTIFICATE: 'CERTIFICATE',
  COUPON: 'COUPON'
}

/**
 * Компонент нужен для применения купона или сертификата на скидку.
 */

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
        <Heading type={HeadingType.SMALL}>{title}</Heading>
        <Button className={styles.button_change} onClick={changeCouponToCertificate}>
          {buttonText}
        </Button>
      </div>
      <form className={styles.form}>
        <Input
          placeholder={placeholder}
          theme={InputTheme.LIGHT}
          customSize={InputSize.S}
          className={styles.input}
        />
        <Button theme={ButtonTheme.SECONDARY} size={ButtonSize.XS} className={styles.button}>
          Применить
        </Button>
      </form>
    </div>
  )
}
