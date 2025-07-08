import * as motion from 'motion/react-client'

const Loading:React.FC=()=>{
return(
    <div className="flex justify-center items-center h-screen w-full">
     <div className='h-[40px] w-[40px] '>
     <motion.div
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
      }}
     transition={{
        times:[0,0.2,0.5,0.7,1],
        ease:'easeInOut',
        duration:1,
        repeat:Infinity,
       repeatDelay:1
     }}
     style={{
        height:"100%",
        width:"100%",
        backgroundColor:"gray"
     }}
    />
     </div>
   
    </div>
)
}

export default Loading