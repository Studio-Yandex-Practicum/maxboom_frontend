import type { FC } from 'react'
import { Link } from 'react-router-dom'

import YMap from '@/assets/icons/YMap.svg'
import FormQuestion from '@/features/FormQuestion/ui/FormQuestion'
import Breadcrumbs from '@/shared/ui/Breadcrumbs/Breadcrumbs'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import WrapperForMainContent from '@/shared/ui/WrapperForMainContent/WrapperForMainContent'
import Map from '@/widgets/Map/Map'

import styles from './ContactsPage.module.scss'

const links = [
  { heading: 'Главная', href: '/' },
  { heading: 'Контакты', href: '' }
]

const ContactsPage: FC = () => {
  return (
    <WrapperForMainContent>
      <section className={styles.contacts}>
        <div className={styles.contacts__titleBox}>
          <Heading type={HeadingType.MAIN}>Контакты</Heading>
          <Breadcrumbs links={links} />
        </div>
        <Map />
        <div className={styles.contacts__info}>
          <div className={styles.contacts__block}>
            <Heading type={HeadingType.SMALL}>Основной магазин</Heading>
            <ul>
              <li className={styles.contacts__text}>Телефон</li>
              <li>
                <Link to="tel:+79778480228">+7 977 848-02-28</Link>
              </li>
              <li>Будни, с 10.00 до 20.00</li>
            </ul>
            <ul>
              <li className={styles.contacts__text}>Электронная почта</li>
              <Link to="mailto:Maxboomofficial@yandex.ru" className={styles.contacts__mall}>
                Maxboomofficial@yandex.ru
              </Link>
            </ul>
            <ul>
              <li className={styles.contacts__text}>Адрес магазина</li>
              <YMap />
              <Link
                target="_blank"
                to="https://yandex.ru/maps/22/kaliningrad/?ll=20.499113%2C54.718681&pt=20.499113%2C54.718681&z=17"
                className={styles.contacts__city}>
                г. Москва
              </Link>
            </ul>
          </div>
          <div className={styles.contacts__block}>
            <Heading type={HeadingType.SMALL}>Наши реквизиты</Heading>
            <div>
              <Paragraph>Банковские и юридические реквизиты</Paragraph>
            </div>
            <ul>
              <li className={styles.contacts__text}>Наименование</li>
              <li>Maxboom.ru</li>
            </ul>
          </div>
          <div className={styles.contacts__blockAdress}>
            <div className={styles.contacts__adress}>
              <ul>
                <li className={styles.contacts__text}>ОГРН</li>
                <li>123456789</li>
              </ul>
              <ul>
                <li className={styles.contacts__text}>Адрес</li>
                <li>104329, Москва г, Талалихина</li>
                <li>ул, дом № 1, корпус 3, оф.8</li>
              </ul>
            </div>
            <div>
              <ul className={styles.contacts__adressPhone}>
                <li className={styles.contacts__text}>Телефон</li>
                <li>
                  <Link to="tel:+79778480228">+7 977 848-02-28</Link>
                </li>
              </ul>
            </div>
          </div>
          <FormQuestion />
        </div>
      </section>
    </WrapperForMainContent>
  )
}

export default ContactsPage
