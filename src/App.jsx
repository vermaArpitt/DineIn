import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import PlaceOrder from './Pages/Place Order/PlaceOrder';

function App() {
  return (
    <div className = "app">
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element = {<Cart/>}/>
      <Route path = '/order' element = {<PlaceOrder/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
