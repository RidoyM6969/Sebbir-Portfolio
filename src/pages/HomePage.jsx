import React from 'react'
import Banner from '../components/home/Banner'
import Experince from '../components/home/Experince'
import Testimonial from '../components/home/Testimonial'
import Educational from '../components/home/Educational'

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Experince />
      <Educational/>
      <Testimonial />
    </div>
  )
}

export default HomePage
