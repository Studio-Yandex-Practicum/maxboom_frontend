import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch } from '@/app/providers/StoreProvider/config/store'
import Payments from '@/entities/Payments/Payments'
import CallBack from '@/features/CallBack'
import SubscribeForm from '@/features/SubscribeForm/SubscribeForm'
import { Button } from '@/shared/ui/Button/Button'
import Link from '@/shared/ui/Link/Link'
import Logo from '@/shared/ui/logo/Logo'
import Modal from '@/shared/ui/Modal/Modal'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'

import styles from './footer.module.scss'
import { getCoreBaseFooterSelector } from './model/selectors/selectors'
import { getCoreBaseFooter } from './model/services/getCoreBaseFooter'

function Footer() {
  const dispatch = useDispatch<AppDispatch>()
  const coreBaseData = useSelector(getCoreBaseFooterSelector)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalClosing, setIsModalClosing] = useState(false)

  const changeModalState = () => {
    setIsModalOpen(!isModalOpen)
  }

  useEffect(() => {
    dispatch(getCoreBaseFooter())
  }, [])

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
              <Paragraph className={styles.footer__caption}>{coreBaseData.footer.company_info}</Paragraph>
            </div>
            <div className={styles['footer__col-two']}>
              <SubscribeForm type="footer" onSubmit={onSubmitHandler}></SubscribeForm>
            </div>
            <div className={styles['footer__col-three']}>
              <Paragraph className={styles['footer__support-text']}>Поддержка</Paragraph>
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
                <Paragraph className={styles.footer__hours}>
                  {coreBaseData.footer.support_work_time}
                </Paragraph>
              </div>
            </div>
          </div>
          <div className={styles.footer__bottom}>
            <div className={styles['footer__bottom-wrapper']}>
              <Paragraph className={styles.footer__copyright}>
                Created by{' '}
                <Link to={'/'} className={styles['footer__copyright-link']}>
                  maxboom.ru
                </Link>
              </Paragraph>
              <Payments data={coreBaseData} />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
