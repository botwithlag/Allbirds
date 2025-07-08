import { borderRadius } from "@mui/system";
import AnimatedComponent from "./AnimatedComponent";



import * as motion from "motion/react-client"
import React from 'react'

function NewPage() {
    const ball={
    height:'100%',
    width:'100%',
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"

}


function changeheight()
{

}
  return (
    <div>
      <AnimatedComponent/>

      <div className="h-[100px] w-[400px]  ">
            <motion.div
      initial={{opacity:0,scale:0}}
    animate={{opacity:1,scale:1}}
    whileHover={{scale:0.8}}
    whileTap={{scale:0.8}}
    transition={{duration:0.4}}
    style={ball}
   />
      </div>
    </div>
  )
}

export default NewPage
