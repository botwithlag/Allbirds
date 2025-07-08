
import Banner from "../assets/banner2.jpg"

const TestamentBanner = () => {
  return (
    <div className='relative h-[350px] w-full flex justify-center items-center mb-4 mt-4'>
      <img src={Banner}  alt=""  className='object-cover h-full w-full'/>
      <div className="absolute inset-0 sm:p-4 h-full text-white font-normal text-center  w-full flex flex-col gap-5 items-center justify-center"><h1 className="text-[18px] md:text-[24px]">WE MAKE BETTER THINGS IN A BETTER WAY</h1><p className="text-[10px] md:text-[14px] w-full md:w-1/2">By looking to the world’s greatest innovator—Nature—we create shoes that deliver unrivaled comfort that you feel good in and feel good about.

</p></div>
    </div>
  )
}

export default TestamentBanner
