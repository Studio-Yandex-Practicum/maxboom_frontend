import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import AboutUs from '@/entities/AboutUs'
import { useAppDispatch } from '@/shared/libs/hooks/store'
import Breadcrumbs from '@/shared/ui/Breadcrumbs/Breadcrumbs'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import WrapperForMainContent from '@/shared/ui/WrapperForMainContent/WrapperForMainContent'

import styles from './AboutUsPage.module.scss'
import { getAboutUsSelector } from './model/selectors/selectors'
import { getAboutUs } from './model/services/getAboutUs'

const links = [
  { heading: 'Главная', href: '/' },
  { heading: 'О нас', href: '' }
]

const AboutUsPage = () => {
  const dispatch = useAppDispatch()
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
