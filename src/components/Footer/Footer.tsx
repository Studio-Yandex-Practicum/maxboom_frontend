import Logo from '../logo/Logo'
import VisaIcon from '@/assets/images/footer/visa.svg'
import MastercardIcon from '@/assets/images/footer/mastercard.svg'
import MirIcon from '@/assets/images/footer/mir.svg'
import WebmoneyIcon from '@/assets/images/footer/webmoney.svg'
import UmoneyIcon from '@/assets/images/footer/io.svg'
import SubscribeForm from '../SubscribeForm/SubscribeForm'
import Link from '@/shared/ui/Link/Link'
import styles from './footer.module.scss'

function Footer() {
  const onSubmitHandler = () => {}
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__middle}>
          <div className={styles['footer__col-one']}>
            <Logo width="114px" height="38px" />
            <p className={styles.footer__caption}>Интернет-магазин «Maxboom.ru», 2023</p>
          </div>
          <div className={styles['footer__col-two']}>
            <SubscribeForm type="footer" onSubmit={onSubmitHandler}></SubscribeForm>
          </div>
          <div className={styles['footer__col-three']}>
            <p className={styles['footer__support-text']}>Поддержка</p>
            <div className={styles.footer__wrapper}>
              <ul className={styles.footer__nav}>
                <li className={styles.footer__phone}>
                  <Link to={''} className={styles.footer__link}>
                    +7 977 848-02-28
                  </Link>
                </li>
                <li className={styles.footer__item}>
                  <Link to={''} className={styles.footer__link}>
                    Обратный звонок
                  </Link>
                </li>
              </ul>
              <p className={styles.footer__hours}>Будни, с 10:00 до 20:00</p>
            </div>
          </div>
        </div>
        <div className={styles.footer__bottom}>
          <div className={styles['footer__bottom-wrapper']}>
            <p className={styles.footer__copyright}>
              Created by{' '}
              <Link to={''} className={styles['footer__copyright-link']}>
                maxboom.ru
              </Link>
            </p>
            <ul className={styles.footer__payments}>
              <li className={styles['footer__payment-nav']}>
                <Link to={''} className={styles['footer__payment-item']}>
                  <VisaIcon className={styles['footer__payment-icon']} />
                </Link>
              </li>
              <li className={styles['footer__payment-nav']}>
                <Link to={''} className={styles['footer__payment-item']}>
                  <MastercardIcon className={styles['footer__payment-icon']} />
                </Link>
              </li>
              <li className={styles['footer__payment-nav']}>
                <Link to={''} className={styles['footer__payment-item']}>
                  <MirIcon className={styles['footer__payment-icon']} />
                </Link>
              </li>
              <li className={styles['footer__payment-nav']}>
                <Link to={''} className={styles['footer__payment-item']}>
                  <WebmoneyIcon className={styles['footer__payment-icon']} />
                </Link>
              </li>
              <li className={styles['footer__payment-nav']}>
                <Link to={''} className={styles['footer__payment-item']}>
                  <UmoneyIcon className={styles['footer__payment-icon']} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
