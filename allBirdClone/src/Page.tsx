import { useState } from 'react'
import {useTranslation} from 'react-i18next'
import WordedCards from './components/WordedCards.tsx'
import useProductInfo from './hooks/useProductInfo.tsx'
import AppBar from "./components/AppBar.tsx"
import SelectSize from "./components/SelectSize.tsx"
import Carousel from './Page/Carousel.tsx'
import ProductInfoCard from './Page/ProductInfoCard.tsx'
import ColorSelect from './Page/ColorSelect.tsx'
import MiniAdbar from './components/MiniAdBar.tsx'
import RVComp from './components/RVComp.tsx'
import Footer from './Footer.tsx'
import {useParams} from 'react-router-dom'
import AddToCart from './Page/AddToCart.tsx'
import CustomerRating from './Page/CutomerRating.tsx'
import i18next from 'i18next'
import useRecentlyViewed from './hooks/useRecentlyViewed.tsx'
import CommentSection from './Page/CommentSection.tsx'
//create a const file


import gatherSimilarUsers from './redux/thunk/thunkfn.tsx'
import InfoSlates from './Page/InfoSlates.tsx'
import NewArrival from './components/NewArrival.tsx'
import HighlightsCard from './Page/HighlightsCard.tsx'
import { useScroll,useMotionValueEvent, px } from 'motion/react'
const Page=()=> {
   const [stick,setStick]=useState(false)
  const {t}=useTranslation()
  const {id}=useParams()
  const {productHandle}=useParams()
const [color,setColor]=useState<string>('')
 const {product,setProduct,allProdInfo}=useProductInfo(productHandle,id,i18next.language) //create a new param which accordingly changes the useproductInfo 
  const [size,setSize]=useState<string>("14")
  const {scrollY}=useScroll()

  useMotionValueEvent(scrollY,"change",(latest)=>{
  
   if(latest>80 && latest<800)
   {
       setStick(true)
       console.log(`I am sticky now ${latest}`)
   }
   
   if(latest>800){
    setStick(false)
    console.log(`I am not sticky now ${latest}`)
   }
      //lower 240
  })
  useRecentlyViewed(product)

const colorHeading=t("Classics")


gatherSimilarUsers("product")


//combine Header comp and try  sectional routing 
  return (
    
    <div > 
      <MiniAdbar></MiniAdbar>
      <AppBar></AppBar> 
      <div className='flex flex-col h-auto w-full relative '>
         <div  className="h-auto w-100% md:flex flex-1/2  ">
          <Carousel stick={stick} Images={product.images}></Carousel>
          <div  className="w-full md:w-1/2 flex-col h-auto  ">
            <ProductInfoCard title={product.fullName} description={product.description} price={product.price}></ProductInfoCard>
            <ColorSelect  color={color} heading={colorHeading} products={allProdInfo}></ColorSelect>
            <SelectSize setSize={setSize}  sizeObj={product.sizes}></SelectSize>    
            <div className='mt-5 flex  '>    
              <AddToCart handle={product.handle} img={product.images[0].src} price={product.price} ></AddToCart>
           </div>
          <div className="h-100 w-1/2"></div>
        
        </div>
        </div>
        <NewArrival/>
        <InfoSlates/>
        <HighlightsCard/>
       </div>
     
      <CustomerRating/>
      <CommentSection/>
      <WordedCards />
      <RVComp/>
      <Footer/>

    
       </div>
    
  )
}

/// issue faced cannot use cart state without prop drilling 

export default Page
