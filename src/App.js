
import { About } from './components/About';

import { Route, Routes } from 'react-router-dom';
import ServicePage from './components/Service';
import Header from './components/Header';
import ReviewPage from './components/Review';
import Footer from './components/Footer';
import Home from './components/Home';



function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/services" element={<ServicePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/reviews" element={<ReviewPage />}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
