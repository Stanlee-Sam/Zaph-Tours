import Home from "./components/Home page/Home"
import { BrowserRouter,Routes ,Route  } from "react-router-dom";
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    </Routes>
    </BrowserRouter>
    
    </>
  )
};

export default App;
