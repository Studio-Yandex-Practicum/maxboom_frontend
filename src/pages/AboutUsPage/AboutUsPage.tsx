import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { AppDispatch } from '@/app/providers/StoreProvider/config/store'
import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import AboutUs from '@/entities/AboutUs'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Subheading from '@/shared/ui/Subheading/Subheading'

import styles from './AboutUsPage.module.scss'
import { getAboutUsSelector } from './model/selectors/selectors'
import { getAboutUs } from './model/services/getAboutUs'

const AboutUsPage = () => {
  const dispatch = useDispatch<AppDispatch>()
  const aboutUs = useSelector(getAboutUsSelector)

  useEffect(() => {
    dispatch(getAboutUs())
  }, [dispatch])

  return (
    <WrapperForMainContent>
      {aboutUs?.map((item, index) => (
        <Heading key={index} type={HeadingType.MAIN} className={styles.title}>
          {item.headline}
        </Heading>
      ))}

      <Subheading>
        <Link to={'/'} className={styles.link}>
          Главная
        </Link>{' '}
        / О нас
      </Subheading>

      {aboutUs?.map((item, index) => <AboutUs key={index} text={item.text} />)}
    </WrapperForMainContent>
  )
}

export default AboutUsPage
