import React from 'react'
import * as motion from 'motion/react-client'
function AnimatedComponent() {
const box={
    width:100,
    height:100,
    backgroundColor:"red",
    borderRadius:5,
}
  return (
    <div className=''>
        <motion.div 
        style={box}
        initial={{rotate:0}}
        animate={{rotate:360,transition:{duration:2}}}/>
    </div>
  )
}

export default AnimatedComponent
