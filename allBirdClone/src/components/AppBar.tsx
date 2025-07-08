import DrawerButton from "../NavBar/DrawerButton"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import ChangeLang from "../NavBar/ChangeLang"
import CartButton from "../NavBar/CartButton"
import { Text } from "@radix-ui/themes"
import ManualThemeSwitcher from "../NavBar/ThemeSwitch"
import { div } from "motion/react-client"
import Divider from "@mui/material/Divider"
import { useState } from "react"
import { useMotionValueEvent,useScroll } from "motion/react"
import * as motion from 'motion/react-client'
//add language button and change theme
const AppBar=()=>
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
  const [open,setOpen]=useState(false)
  const {t}=useTranslation()
 const navigate=useNavigate()
    function navigateToHome(){
      navigate('/')
    }
const headings:string[]=["MEN","WOMEN","SALE","SUSTAINABILITY","RERUN","STORES"]


    return(
      <>
       <motion.nav variants={{visible:{y:0},hidden:{y:"-100%"}}} animate={hide?"hidden":"visible"} transition={{duration:0.35,ease:"easeInOut"}} className="sticky opacity-100 top-0 z-100 shadow-lg  w-full rounded-xl bg-neutral-50 h-[48px] flex justify-between items-center font-medium text-[12px]">
        <div className="flex gap-4 justify-start ml-2">
         <div className="hidden md:block h-auto w-auto">
           <div className=" flex gap-4 mt-10"> <h1>MEN</h1>
          <h1>WOMEN</h1>
          <h1>SOCKS</h1>
          <h1>SALE</h1>
          </div>
         </div>
         <div className="block md:hidden mt-[40px]"><button onClick={()=>setOpen(!open)}>button</button></div>
          <ChangeLang/>
        </div>
           <h1 className=""><Text>allbirds</Text></h1>
           <div className="flex justify-start gap-2 mr-5">
             <div className="hidden md:block h-auto w-auto">
              <div className="  flex flex-row justify-end gap-4 mr-5 mt-3"> 
            <h1>SUSTAINABILITY</h1>
            <h1>RERUN</h1>
            <h1>STORES</h1>
             </div>
             </div>
             
            <h1 className="mt-3"><button onClick={navigateToHome}><Text>{t('Home')}</Text></button ></h1>
            <div> <h3><CartButton/></h3></div>
           </div>
        </motion.nav>

        {open?(<div className="md:hidden flex flex-col h-full w-full overflow-y-hidden  "> 
          {
            headings.map((heading)=>{
              return <div className="h-[100px] w-full text-2xl font-bold text-center">
            <h1>{heading}</h1>
            <Divider/>
          </div>
            })
          }
        </div>):(<div></div>
        )}
        </>
    )
}
export default AppBar