import { Button } from "@radix-ui/themes"
import { useNavigate } from "react-router-dom"
interface BuyProps{
    product:string,
    price:number
}

export const navigate=useNavigate()
const BuyButton:React.FC<BuyProps>=({product,price})=>{

   

function handleCheckout()
{
    navigate(`product/checkout/${product}`)
}

return(
    <div>
        <Button onClick={handleCheckout}></Button>
    </div>
)
}

export default BuyButton