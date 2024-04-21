import Navbar from "./Components/Navbar";
import Main from "./Components/Main"
import {BrowserRouter, Route, Router, Routes, useNavigate} from "react-router-dom"
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import ProductView from "./pages/ProductView";
import Footer from "./Components/footer";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin"
import MainMode from "./model/MainMode";
import { useEffect } from "react";
import Admin from "./model/Admin";
function App() {
  
  
  return (
    <>
       <RecoilRoot>
       <BrowserRouter>
       <Routes>
        {/* <Route path="/"  element={<Signin />}/>
        <Route path="/signup"  element={<Signup />}/> */}
        <Route path="/"  element={<MainMode />}/>
        <Route path="/view" element={<ProductView/>} />
        <Route path="/admin" element={<Admin />} />
       </Routes>
       </BrowserRouter>
       </RecoilRoot>
    </>
  )
}

export default App
