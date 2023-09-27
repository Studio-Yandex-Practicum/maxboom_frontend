import React, { FC } from 'react'
import Link from '../ui/link'
import Slider from '../components/Slider/Slider'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Subscribe } from '../components'

const SliderPage: FC = () => {
  return (
    <>
      <Header />
      <Subscribe></Subscribe>
      <Slider />
      <Link to="/stories">Go stories</Link>
      <Footer />
    </>
  )
}

export default SliderPage
