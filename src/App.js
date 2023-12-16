import React, { useState } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu";
import Events from "./components/Events/Events";
import Cart from "./components/Cart/Cart";
// import CartProvider from "./store/CartProvider";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";



function App() {
  const [loginIsShown, setLoginIsShown] = useState(false);
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  const showLoginHandler = () => {
    setLoginIsShown(true);
  }

  const hideLoginHandler = () => {
    setLoginIsShown(false);
  }




  return (
    <>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      {loginIsShown && <Login onClose={hideLoginHandler} />}
      <Header
        onShowCart={showCartHandler}
        onShowLogin={showLoginHandler} />
      <Home onShowCart={showCartHandler}/>
      <Menu />
      <Events />
      <AboutUs />
      <Footer onShowCart={showCartHandler} />
    </>
  );
}

export default App;


