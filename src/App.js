import './App.css';
import My3DScene from './components/My3DScene/My3DScene';
import Contact from './components/Contact/contact';
import AppBar from './components/AppBar/AppBar';
import React from 'react'
import FeaturesPage from './components/Features/Features';
import Testimonials from './components/Tetsimonials/Testimonials';
import PromotionsPage from './components/Promotions/Promotions';
import Footer from './components/Footer/Footer';
import './components/Globalcss.css';
function App() {
  return (
    <div className="App">
      <AppBar />
      <My3DScene id="home" />
      <FeaturesPage id="features"></FeaturesPage>
      <Testimonials id="testimonials"></Testimonials>
      <PromotionsPage id="promotions"></PromotionsPage>      
      <Contact id="contact"></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
