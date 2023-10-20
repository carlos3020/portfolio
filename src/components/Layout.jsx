import React from 'react'
import { Link } from 'react-router-dom'
import transition from './Transition'
import Avatar from '../components/Avatar.jsx'
import heroImg from '../assets/Programming.png'

// framer motion

import { motion } from 'framer-motion'

import { fadeIn } from '../../variants'
import Hero from './Hero'


const Layout = () => {
  return (
    <Hero />
  )
}


export default transition(Layout);