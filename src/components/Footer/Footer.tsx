import React from 'react'
import Logo from '../logo/logo'
import styles from './footer.module.scss'
import visa from '../../images/footer/visa.svg'
import mastercard from '../../images/footer/mastercard.svg'
import mir from '../../images/footer/mir.svg'
import webmoney from '../../images/footer/webmoney.svg'
import io from '../../images/footer/io.svg'
import subscription from '../../images/footer/icon-subsc.svg'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <section className={`${styles.footer}`}>
      <div className={`${styles.footer__container}`}>
        <div className={`${styles.footer__middle}`}>
          <div className={`${styles['footer__col-one']}`}>
            <Logo width="114px" height="38px" />
            <p className={`${styles.footer__caption}`}>Интернет-магазин «Maxboom.ru», 2023</p>
          </div>
          <div className={`${styles['footer__col-two']}`}>
            <p className={`${styles.footer__label}`}>Подписаться на рассылку</p>

            <form className={`${styles.form}`}>
              <input
                name="search"
                type="text"
                placeholder="Эл.почта"
                className={`${styles.input}`}
                autoComplete="off"
              />
              <button className={`${styles.button}`}>
                Подписаться
                <img src={subscription} alt="" className={`${styles.button__img}`} />
              </button>
            </form>
          </div>
          <div className={`${styles['footer__col-three']}`}>
            <p className={`${styles['footer__support-text']}`}>Поддержка</p>
            <div className={`${styles.footer__wrapper}`}>
              <ul className={`${styles.footer__nav}`}>
                <li className={`${styles.footer__phone}`}>
                  <Link to={''} className={`${styles.footer__link}`}>
                    +7 977 848-02-28
                  </Link>
                </li>
                <li className={`${styles.footer__item}`}>
                  <Link to={''} className={`${styles.footer__link}`}>
                    Обратный звонок
                  </Link>
                </li>
              </ul>
              <p className={`${styles.footer__hours}`}>Будни, с 10:00 до 20:00</p>
            </div>
          </div>
        </div>
        <div className={`${styles.footer__bottom}`}>
          <div className={`${styles['footer__bottom-wrapper']}`}>
            <p className={`${styles.footer__copyright}`}>
              Created by{' '}
              <Link to={''} className={`${styles['footer__copyright-link']}`}>
                maxboom.ru
              </Link>
            </p>
            <ul className={`${styles.footer__payments}`}>
              <li className={`${styles['footer__payment-nav']}`}>
                <Link to={''} className={`${styles['footer__payment-item']}`}>
                  <img src={visa} alt="" className={`${styles['footer__payment-icon']}`} />
                </Link>
              </li>
              <li className={`${styles['footer__payment-nav']}`}>
                <Link to={''} className={`${styles['footer__payment-item']}`}>
                  <img src={mastercard} alt="" className={`${styles['footer__payment-icon']}`} />
                </Link>
              </li>
              <li className={`${styles['footer__payment-nav']}`}>
                <Link to={''} className={`${styles['footer__payment-item']}`}>
                  <img src={mir} alt="" className={`${styles['footer__payment-icon']}`} />
                </Link>
              </li>
              <li className={`${styles['footer__payment-nav']}`}>
                <Link to={''} className={`${styles['footer__payment-item']}`}>
                  <img src={webmoney} alt="" className={`${styles['footer__payment-icon']}`} />
                </Link>
              </li>
              <li className={`${styles['footer__payment-nav']}`}>
                <Link to={''} className={`${styles['footer__payment-item']}`}>
                  <img src={io} alt="" className={`${styles['footer__payment-icon']}`} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
