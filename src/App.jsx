import {Route, Routes, useLocation} from "react-router-dom"  
import { useAuth0 } from "@auth0/auth0-react";
import './App.css'
import Home from "./views/home/home";
import Product from "./views/Products/Products";
import Profile from "./views/Myaccount/Myaccount";
import Us from "./views/Aboutus/us";
import Cart from "./views/cart/cart";
import NavBar from "./components/navBar/navBar";
import Landing from "./views/landing/landing";
import { Footer } from "./components/Footer/Footer";
import { CallbackPage } from "./components/Callback/callback";
import Loader from "./components/loader/loaer";

function App() {
  const {pathname} = useLocation();
  const { isLoading, user } = useAuth0();

  console.log(user);
  if (isLoading) {
    return (
      <div className="page-layout">
        <Loader />
      </div>
    );
  }
  return (
    <>
    {pathname !== "/" && <NavBar/>}
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/products" element={<Product/>}/>
                <Route path="/aboutus" element={<Us/>}/>
                <Route path="/myaccount" element={<Profile/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/callback" element={<CallbackPage/>} />
                <Route path="*" element={<Error/>}/>
            </Routes>
    {pathname !== "/" && <Footer/>}
    </>
  )
}

export default App
