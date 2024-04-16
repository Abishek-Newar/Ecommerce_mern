import Navbar from "./Components/Navbar";
import Main from "./model/Main"
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
function App() {
  
  return (
    <>
       <RecoilRoot>
        <Navbar />
       <Main />
       </RecoilRoot>
    </>
  )
}

export default App
