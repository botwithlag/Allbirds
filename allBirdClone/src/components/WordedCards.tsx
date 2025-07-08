
import data from '../Constants/cardContent';
import Divider from '@mui/material/Divider';
const WordedCards = () => {


  return (
    <div className='w-auto h-auto  justify-center m-5'>
      <h1 className='font-bold text-2xl mt-2 '>The AllBirds Approach</h1>
      <div className='flex flex-col md:flex-row  gap-4 w-auto h-auto m-4'>
          {
            data.map((item)=>{
              return (
                <div className='h-auto overflow-hidden w-full md:w-1/3'>
                  <h1 className='font-bold mb-3'>{item.heading}</h1>
                  <p className='text-[13px] text-balance'>{item.description}</p>
                </div>
              )
            })
          }
      </div>
       <Divider/>
    </div>
  )
}

export default WordedCards
