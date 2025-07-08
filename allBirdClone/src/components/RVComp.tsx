import { useAppSelector } from "../redux/hooks"

import { useTranslation } from "react-i18next"
const RVComp:React.FC=()=>{
const {t}=useTranslation()
const recentlyViewedItems=useAppSelector((state)=>state.RV.list)
console.log(recentlyViewedItems)
return(
    <>
    <div className="flex flex-row w-full mt-2 ml-5 mb-2 ">
        <div className="flex-col">
            {recentlyViewedItems.length>0?(<h1 className="mr-2">{t('RecentlyViewed')}</h1>):(<h1></h1>)}
           
        <div className=" flex flex-row  gap-2">
        {
            recentlyViewedItems.map((item,index)=>{
                if(recentlyViewedItems.length==0)
                {
                    return <div></div>
                }
                return <div key={index} className="relative mt-5 ml-5 rounded overflow-hidden bg-gray-100 shadow-lg h-40 w-40 sm:h-40 "> 
                     <img className=" object-cover w-full h-full" src={item.images[0].src} alt={item.images[0].alt}></img>
                    </div>
            })
        }
       </div>
       </div>
    </div>
    </>
)
}
export default RVComp;