import Economy from "./components/Economy";
import Footer from "./components/Footer";
import Geography from "./components/Geography";
import Header from "./components/Header";
import History from "./components/History";
import Home from "./components/Home";
import {BrowserRouter,Routes,Route } from "react-router-dom"


import Culture from "./components/Culture";





function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/geography" element={<Geography/>}/>
        <Route path="/economy" element={<Economy/>}/>
        <Route path="/culture" element={<Culture/>}/>
        


      </Routes>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
