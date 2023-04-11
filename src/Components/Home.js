import React from 'react'
import '../CSS/home.css'
import Description from './Description'
import Intro from './Intro'
import NavbarMain from './NavbarMain'
import VideoDesc from './VideoDesc'

export default function Home() {
  return (
    <>
    <NavbarMain/>
    <Intro/>
    <Description/>
    <VideoDesc/>
    </>
  )
}
