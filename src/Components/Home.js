import React from 'react'
import '../CSS/home.css'
import Description from './Description'
import Intro from './Intro'
import VideoDesc from './VideoDesc'
import Slider from './Slider'
import Feedbacks from './Feedbacks'

export default function Home() {
  return (
    <>
    <Intro/>
    <Description/>
    <VideoDesc/>
    <Slider/>
    <Feedbacks/>
    
    </>
  )
}
