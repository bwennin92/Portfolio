import React from 'react'
import { motion } from 'framer-motion'

const AboutPage = (props) => {
  return (
    <motion.div>
    <div>{props.children}</div>
    </motion.div>
  )
}

export default AboutPage