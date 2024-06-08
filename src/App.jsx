import Home from "./components/Home page/Home"
import { BrowserRouter,Routes ,Route  } from "react-router-dom";
import Destination from "./components/Destinations page/desination";
import Trips from "./components/Trips type page/trips";
import Nav from "./components/Home page/Navbar/nav";
import Footer from "./components/Home page/Footer/footer";
import Contact from "./components/Contact Us page/contact";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/destination" element={<Destination/>} />
    <Route path="/trips" element={<Trips/>} />
    <Route path="/contact" element={<Contact/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  )
};

export default App;
