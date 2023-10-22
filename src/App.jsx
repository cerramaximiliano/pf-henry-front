import { Route, Routes, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import CardDetail from "./components/CardDetail/CardDetail";
import Home from "./views/home/home";
import Product from "./views/Products/Products";
import Profile from "./views/Myaccount/Myaccount";
import Us from "./views/Aboutus/us";
import NavBar from "./components/navBar/navBar";
import Landing from "./views/landing/landing";
import { Footer } from "./components/Footer/Footer";
import { CallbackPage } from "./components/Callback/callback";
import Loader from "./components/Loader/Loader";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { postUser } from "./redux/users/usersActions";

function App() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { isLoading, user, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      console.log(user);
      dispatch(postUser(user));
    }
  }, [user, dispatch]);

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  return (
    <>
      {pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/aboutus" element={<Us />} />
        <Route path="/myaccount" element={<Profile />} />
        <Route path="/callback" element={<CallbackPage />} />
        <Route path="/Detail/:id" element={<CardDetail />} />
      </Routes>
      {pathname !== "/" && <Footer />}
    </>
  );
}

export default App;
