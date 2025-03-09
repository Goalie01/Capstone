import React, {useState} from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'

import Home from './Pages/Home'
import Body from './Pages/Body'
import Services from './Pages/Services'
import Footer from './Pages/Footer'
import Checkout from './Pages/Checkout'
import Menu from './Pages/Menu'
import Cards from './Pages/Cards'
import Cart from './Pages/Cart'






const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([])
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) =>{
      if (item.id === product.id)
        isPresent = true;
    })
    if (isPresent){
      setTimeout(() =>{
        setWarning(true);
        setTimeout(() => {
          setWarning(false);
        }, 2000);

        return;
      })
    }
    setCart([...cart, item]);
  }

  return (
    <>
   <Router>
    <Home/>
    <Body/>
    <Services/>
    <Footer/>  
      <Checkout/> 
     <Cart cart={cart}/>
    <Cards/>
    <Menu/>
    { warning &&
    <div className='warning'> Item is already added to your cart</div>}
    </Router>
    </>
  )
}

export default App
