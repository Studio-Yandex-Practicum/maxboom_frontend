import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch } from '@/app/providers/StoreProvider/config/store'
import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import AboutUs from '@/entities/AboutUs'
import Breadcrumbs from '@/shared/ui/Breadcrumbs/Breadcrumbs'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'

import styles from './AboutUsPage.module.scss'
import { getAboutUsSelector } from './model/selectors/selectors'
import { getAboutUs } from './model/services/getAboutUs'

const links = [
  { heading: 'Главная', href: '/' },
  { heading: 'О нас', href: '' }
]

const AboutUsPage = () => {
  const dispatch = useDispatch<AppDispatch>()
  const aboutUs = useSelector(getAboutUsSelector)

  useEffect(() => {
    dispatch(getAboutUs())
  }, [dispatch])

  return (
    <WrapperForMainContent>
      <section className={styles.aboutUs}>
        <div className={styles.aboutUs__titleBox}>
          {aboutUs?.map((item, index) => (
            <Heading key={index} type={HeadingType.MAIN}>
              {item.headline}
            </Heading>
          ))}
          <Breadcrumbs links={links} />
        </div>
        {aboutUs?.map((item, index) => <AboutUs key={index} text={item.text} />)}
      </section>
    </WrapperForMainContent>
  )
}

export default AboutUsPage
