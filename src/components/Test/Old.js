import React from 'react'
import {motion} from "framer-motion"


const Old = () => {

  // animate={{opacity:1, y: "100%"}} mean animaion start from up 
  // animate={{opacity:1, y: "-100%"}} mean animation start from down 
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity:1, y: "100%"}} 
    exit={{opacity:0, y: 0 }}
    >
      Old
      </motion.div>
  )
}

export default Old