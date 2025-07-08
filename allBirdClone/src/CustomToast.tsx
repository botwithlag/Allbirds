import {useState, type SetStateAction} from "react"


const CustomToast:React.FC=()=>{

const [open,setOpen]=useState<boolean>(false)



    return(
        <>
        <button className="h-10 w-10 bg-amber-400"onClick={()=>setOpen(!open)}>Click me</button>
          <FloatingDiv open={open} setOpen={setOpen}></FloatingDiv>
        </>
    )
}


const FloatingDiv:React.FC<{open:boolean,setOpen:React.Dispatch<React.SetStateAction<boolean>>}>=({open,setOpen})=>{
    setTimeout(()=>{
      setOpen(false)
    },1000)
    return(
        <>
        <div className=" flex-col  h-screen w-screen "> 
         {open?( <div className="fixed bottom-0 opacity-100 text-center visible h-[30px] w-[150px] border-2 rounded-xl transition-opacity duration-500 ease-in-out">hello</div>):(<div className="fixed opacity-0 invisible h-[30px] w-[150px] "></div>)}
           
            </div> 
        </>
    )
}

export default CustomToast