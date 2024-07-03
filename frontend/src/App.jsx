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
import AdminSignin from "./pages/AdminSignin";
import PurchaseComplete from "./Components/PurchaseComplete";
import LandingPage from "./pages/LandingPage";
import MenSection from "./pages/MenSection";
import WomenSection from "./pages/WomenSection";
import KidsSection from "./pages/KidsSection";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import Cart from "./pages/Cart";
function App() {
  
  
  return (
    <>
       <RecoilRoot>
       <BrowserRouter>
       <Routes>
        <Route path="/signin"  element={<Signin />}/>
        <Route path="/signup"  element={<Signup />}/>
        <Route path="/"  element={<LandingPage />}/>
        <Route path="/view" element={<ProductView/>} />
        <Route path="/adminSign" element={<AdminSignin />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/complete" element={<PurchaseComplete />} />
        <Route path="/men" element={<MenSection />} />
        <Route path="/women" element={<WomenSection />} />
        <Route path="/kids" element={<KidsSection />} />
        <Route path="/about" element={<Aboutus/>} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/cart" element={<Cart/>} />
       </Routes>
       </BrowserRouter>
       </RecoilRoot>
    </>
  )
}

export default App
