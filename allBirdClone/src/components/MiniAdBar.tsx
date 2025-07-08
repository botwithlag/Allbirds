
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {useMotionValueEvent, useScroll} from 'motion/react'
import * as motion from 'motion/react-client'
const MiniAdbar=()=>
{
const [hide,setHide]=useState(false)

const { scrollY } = useScroll()

useMotionValueEvent(scrollY,"change",(latest)=>{
    console.log(`latest ${latest}`)
    console.log(scrollY.getPrevious())
    let diff=latest-scrollY.getPrevious()
    
    if(latest>scrollY.getPrevious()){
        setHide(true)
    }
    else{
        setHide(false)
        console.log(diff)
        console.log(hide)
    }
})


    const {t}=useTranslation()
    return(
       <motion.nav  className=" shadow-lg  w-full z-100 rounded-xl h-7   bg-blue-400 flex justify-center  ">
           <h1 className="">{t("flat_50_off")}</h1>
        </motion.nav>
    )
}
export default MiniAdbar;