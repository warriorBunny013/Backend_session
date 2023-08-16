
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload,faHeart } from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Product from "./components/product"
import Home from './components/home'
function App() {
  return (
   <>
   <BrowserRouter>
  
   {/* </Routes> */}
   <div>
             <div className=" flex justify-between p-5">
      <div className="flex gap-10">
        <div className="text-2xl text-orange-600 font-bold">eventbrite</div>
        <input className="rounded-full border px-5 py-3 w-[50vh]  text-[0.8rem] text-black" placeholder="Search Events"/>
      </div>
      <div className="flex gap-10 font-medium text-[0.9rem] capitalize">
        <div>find events</div>
        <div>Create events</div>
        <div>Help center</div>
        <div>Log In</div>
        <div>Sign Up</div>
      </div>
    </div>
            
        </div>
        <Routes>
    <Route path="/details" element={<Product/>}/>
    <Route path="/" element={<Home/>}/>
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
