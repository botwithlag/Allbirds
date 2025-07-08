 import './App.css'
import Collections from './Collections.tsx';
//implement lazy loading
//rename Page component
import Loading from './components/Loading.tsx';
import { lazy,Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NewPage from './NewPage.tsx';
const LazyLanding=lazy(()=>import ("./LandingPage.tsx"))
const LazyPage= lazy(()=>import ("./Page.tsx"))
const LazyCheckOut= lazy(()=>import ("./Checkout/Checkout.tsx"))
const LazyCollection= lazy(()=>import ("./Collections.tsx"))


function App()
{// fix the Page.tsx 55::69 issue dependent on the initial prod to be not undefined
 // fix navigation base on handle rather than pid
 //fix the dependency in useProductInfo //create another usehookfor this remove the dependency between color and pid
    return(
        <>
      
        <Router>
        <Routes>
            <Route path="/" element={<Suspense fallback={<Loading/>}><LazyLanding/></Suspense>}/>
              <Route path="/product/:id/:productHandle/" element={
                  <Suspense fallback={<Loading/>}>
          <LazyPage/>
            </Suspense>}/>
          
             <Route path="/collections" element={ <Suspense fallback={<Loading/>}>
          <LazyCollection/>
            </Suspense>}></Route>
            <Route path='/checkout/' element={
              <Suspense fallback={<Loading/>}>
          <LazyCheckOut/>
            </Suspense>}/>
            <Route path='/ani' element={<NewPage/>}/>
         </Routes>

      </Router>
     
        </>
    )
}

export default App


