import React from 'react'
import {motion} from 'framer-motion'

const Extra = () => {
  return (
    <motion.div 
    initial ={{ width:0 }}
    animate={{ width: "100%" }}
    exit={{ x: window.innerWidth }}
    >
        okay testing
    </motion.div>
  )
}

export default Extra