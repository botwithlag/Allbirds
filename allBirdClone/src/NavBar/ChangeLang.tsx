import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { useTranslation } from "react-i18next"
import { changeLanguage } from "i18next"
import { Button } from "@radix-ui/themes"
const ChangeLang:React.FC=({})=>{

    const languages=["de","en","fr"]

   const{t}=useTranslation()
    return(
        <> 
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button className="size-[100px] ">
                {t('selectLanguage')} 
                
                </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
            	<DropdownMenu.Content>
                   {
                    languages.map((ln)=>{
                        return (<DropdownMenu.Item><button className="bg-white w-[70px] shadow-2xl rounded-2xl h-[30px] text-black mb-2 border-gray-200 border-2 text-center font-bold text-[15px]" onClick={()=>{changeLanguage(ln);console.log("hello")}}>{ln}</button></DropdownMenu.Item>)
                    })
                   }

                </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        
        </>
    )
}

export default ChangeLang