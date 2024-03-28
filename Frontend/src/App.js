import "./App.css";
import {
  BrowserRouter,
  Route,
  // Route,
  Routes,
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import LandingPage from "./Screens/LandingPage/LandingPage";
import Footer from "./Components/Footer/Footer";
import CategoriesPage from "./Screens/CategoriesPage/CategoriesPage";
import ProductsPage from "./Screens/ProductsPage/ProductsPage";
import Checkout from "./Screens/Checkout/Checkout";
import CheckoutPayment from "./Screens/CheckoutPayment/CheckoutPayment";
import AboutUs from "./Screens/AboutUs/AboutUs";
import EditProfile from "./Screens/EditProfile/EditProfile";
import Login from "./Screens/Login/Login";
import SignUp from "./Screens/SignUp/SignUp";
import ChangePassword from "./Screens/ChangePassword/ChangePassword";
import UserProfile from "./Screens/UserProfile/UserProfile";
import OrderDetails from "./Screens/OrderDetails/OrderDetails";
import ProductDetails from "./Screens/ProductDetails/ProductDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout-payment" element={<CheckoutPayment />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/view-order-details" element={<OrderDetails />} />
          <Route path="/product-details" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
