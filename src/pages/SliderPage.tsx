import React, { FC } from 'react'
import Link from '../ui/link'
import Slider from '../components/Slider/Slider'

const SliderPage: FC = () => {
  return (
    <>
      <Slider />
      <Link to="/stories">Go stories</Link>
    </>
  )
}

export default SliderPage
