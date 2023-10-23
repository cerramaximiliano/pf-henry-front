import { Route, Routes, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import CardDetail from "./components/CardDetail/CardDetail";
import Home from "./views/Home/Home";
import Product from "./views/Products/Products";
import Profile from "./views/AddProduct/AddProduct";
import Us from "./views/Aboutus/us";
import NavBar from "./components/navBar/navBar";
import NavBarAdmin from "./components/Admin/navBarAdmin/navBarAdmin";
import Admin from './views/Admin/Admin';
import Landing from "./views/Landing/Landing";
import { Footer } from "./components/Footer/Footer";
import { CallbackPage } from "./components/Callback/callback";
import Loader from "./components/Loader/Loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postUser } from "./redux/users/usersActions";
import Error from "./views/error/error";
import MyAccount from "./views/MyAccount/MyAccount";
function App() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { isLoading, user, isAuthenticated } = useAuth0();

  const { user_detail } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(postUser(user))
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
      {pathname !== "/" && (user_detail.role === 'ADMIN' ? <NavBarAdmin /> : <NavBar />)}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={
          user_detail.role === 'ADMIN' ? <Admin /> : <Product />
        } />
        <Route path="/aboutus" element={<Us />} />
        <Route path="/addproduct" element={<Profile />} />
        <Route path="/callback" element={<CallbackPage />} />
        <Route path="/myaccount/:id" element={<MyAccount/>} />
        <Route path="/Detail/:id" element={<CardDetail />} />
      </Routes>
      {pathname !== "/" && <Footer />}
    </>
  );

}

export default App;