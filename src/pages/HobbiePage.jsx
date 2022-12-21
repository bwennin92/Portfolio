import React from 'react'
import { motion } from 'framer-motion'

const HobbiePage = () => {
  return (
    <div className = 'bg-black text-green-700 min-h-screen'>
        <h1>Hobbies</h1>
        <motion.div>
    <ul>
        <li>Playing Video Games</li>
        
        <li>Learning new code languages</li>
        <li>Hiking</li>
        <li>Going to the beach</li>
    </ul>
  </motion.div>
    
    
    
    </div> 
  )
}

export default HobbiePage