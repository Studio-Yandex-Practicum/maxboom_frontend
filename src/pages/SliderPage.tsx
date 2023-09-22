import React, { FC } from 'react'
import Link from '../ui/link'
import Slider from '../components/Slider/Slider'
import Header from '../components/header/header'
import Footer from '../components/Footer/Footer'

const SliderPage: FC = () => {
  return (
    <>
      <Header />
      <Slider />
      <Link to="/stories">Go stories</Link>
      <Footer />
    </>
  )
}

export default SliderPage
