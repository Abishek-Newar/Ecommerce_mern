import Navbar from "./Components/Navbar";
import Main from "./model/Main"
import {BrowserRouter, Route, Router, Routes} from "react-router-dom"
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import ProductView from "./pages/ProductView";
import Footer from "./Components/footer";
function App() {
  
  return (
    <>
       <RecoilRoot>
        <Navbar />
       <BrowserRouter>
       <Routes>
        <Route path="/"  element={<Main />}/>
        <Route path="/view" element={<ProductView/>} />
       </Routes>
       </BrowserRouter>
       <Footer />
       </RecoilRoot>
    </>
  )
}

export default App
