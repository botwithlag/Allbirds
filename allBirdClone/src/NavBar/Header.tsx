import MiniAdbar from "../components/MiniAdBar"
import AppBar from  "../components/AppBar"

const Header:React.FC=()=>{
    return(
        <div className="fixed top w-full h-[50px] z-20 ">
         <MiniAdbar></MiniAdbar>
         <AppBar></AppBar>
        </div>
    )
}

export default Header