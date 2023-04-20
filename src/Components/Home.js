import React from 'react'
import '../CSS/home.css'
import Description from './Description'
import Intro from './Intro'
import NavbarMain from './NavbarMain'
import VideoDesc from './VideoDesc'
import Slider from './Slider'
import Feedbacks from './Feedbacks'
import Footer from './Footer'

export default function Home() {
  return (
    <>
    <NavbarMain/>
    <Intro/>
    <Description/>
    <VideoDesc/>
    <Slider/>
    <Feedbacks/>
    <Footer/>
    </>
  )
}
