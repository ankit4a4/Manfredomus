import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './layout/Header'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './layout/Footer';
import History from './pages/History';
import Service from './pages/Service';

function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/services" element={<Service />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
