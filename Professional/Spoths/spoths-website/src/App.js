import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Navbar,
  About,
  Spring,
  Summer,
  Autumn,
  Winter,
  Contact,
  Footer,
} from "./components/index";
import image from "./photo/spoths-flowers2.jpeg";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <div id="links">
            <Navbar />
          </div>
          <Routes>
            <Route exact path="" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/spring" element={<Spring />}></Route>
            <Route exact path="/summer" element={<Summer />}></Route>
            <Route exact path="/autumn" element={<Autumn />}></Route>
            <Route exact path="/winter" element={<Winter />}></Route>
            <Route exact path="/contact-us" element={<Contact />}></Route>
          </Routes>
          <div>
            <Footer />
          </div>
        </BrowserRouter>
        {/* <img id="main-image" src={image} alt="greenhouse flowers" /> */}
      </div>
    </>
  );
}

export default App;
