import { useState } from 'react'
import { coreBaseData } from '@/mockData/coreBaseData'
import Logo from '@/shared/ui/logo/Logo'
import Link from '@/shared/ui/Link/Link'
import { Button } from '@/shared/ui/Button/Button'
import Modal from '@/shared/ui/Modal/Modal'
import Payments from '@/entities/Payments/Payments'
import SubscribeForm from '@/features/SubscribeForm/SubscribeForm'
import styles from './footer.module.scss'
import CallBack from '@/features/CallBack'

function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalClosing, setIsModalClosing] = useState(false)

  const changeModalState = () => {
    setIsModalOpen(!isModalOpen)
  }
  const onSubmitHandler = () => {}
  return (
    <>
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          onClose={changeModalState}
          isModalClosing={isModalClosing}
          setIsModalClosing={setIsModalClosing}>
          <CallBack setIsModalClosing={setIsModalClosing} />
        </Modal>
      )}
      <footer className={styles.footer}>
        <div className={styles.footer__container}>
          <div className={styles.footer__middle}>
            <div className={styles['footer__col-one']}>
              <Logo
                image={coreBaseData.footer.main_logo.image}
                title={coreBaseData.footer.main_logo.title}
                url={coreBaseData.footer.main_logo.url}
                width="114px"
                height="38px"
              />
              <p className={styles.footer__caption}>{coreBaseData.footer.company_info}</p>
            </div>
            <div className={styles['footer__col-two']}>
              <SubscribeForm type="footer" onSubmit={onSubmitHandler}></SubscribeForm>
            </div>
            <div className={styles['footer__col-three']}>
              <p className={styles['footer__support-text']}>Поддержка</p>
              <div className={styles.footer__wrapper}>
                <ul className={styles.footer__nav}>
                  <li className={styles.footer__phone}>
                    <Link
                      to={`tel:${coreBaseData.footer.support.phone_number}`}
                      className={styles.footer__link}>
                      {coreBaseData.footer.support.phone_number}
                    </Link>
                  </li>
                  <li className={styles.footer__item}>
                    <Button className={styles.footer__callback} onClick={changeModalState}>
                      {' '}
                      {coreBaseData.footer.support.callback}
                    </Button>
                  </li>
                </ul>
                <p className={styles.footer__hours}>{coreBaseData.footer.support_work_time}</p>
              </div>
            </div>
          </div>
          <div className={styles.footer__bottom}>
            <div className={styles['footer__bottom-wrapper']}>
              <p className={styles.footer__copyright}>
                Created by{' '}
                <Link to={'/'} className={styles['footer__copyright-link']}>
                  maxboom.ru
                </Link>
              </p>
              <Payments data={coreBaseData} />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
