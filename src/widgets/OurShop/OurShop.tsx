import OurShopImage_1 from '../../assets/images/OurShop/OurShop_1.png'
import OurShopImage_2 from '../../assets/images/OurShop/OurShop_2.png'

import styles from './OurShop.module.scss'

const OurShop = () => {
  return (
    <div className={styles.OurShop}>
      <p className={styles.OurShop__subtitile}>Наши магазины</p>
      <div className={styles.OurShop__wrapper}>
        <div className={styles.OurShop__shop}>
          <div className={styles.OurShop__imgWrapper}>
            <span className={styles.OurShop__badge}>Основной магазин</span>
            <img className={styles.OurShop__img} src={OurShopImage_1} alt="Магазин" />
          </div>
          <p className={styles.OurShop__title}>Интернет-магазин maxboom.ru, г. Москва</p>
          <p className={styles.OurShop__time}>Будни, с 10.00 до 20.00</p>
          <p>+7 977 848-02-28</p>
        </div>
        <div className={styles.OurShop__shop}>
          <img className={styles.OurShop__img} src={OurShopImage_2} alt="Магазин" />
          <p className={styles.OurShop__title}>Наш магазин в Москве, ул. Арбат, 1, г. Москва</p>
          <p className={styles.OurShop__time}>обед с 14ч до 15ч </p>
          <p>8 800 234-56-78</p>
        </div>
      </div>
    </div>
  )
}

export default OurShop
