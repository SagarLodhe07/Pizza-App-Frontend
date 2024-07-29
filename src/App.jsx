import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import SignUp from "./Pages/Auth/SignUp";
import Login from "./Pages/Auth/Login";
import NotFound from "./Pages/Auth/NotFound";
import AccessDenied from "./Pages/Auth/DeniedAccess";
import AddProduct from "./Pages/Admin/Addproduct";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart/Cart";
import Order from "./Pages/Order/Order";
import OrderSuccess from "./Pages/Order/OrderSuccess";
import RequireAuth from "./Pages/Auth/RequireAuth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/denied" element={<AccessDenied />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/auth/login" element={<Login />} />

        <Route element={<RequireAuth requiredRole ={'ADMIN'}/>}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/order/success" element={<OrderSuccess />} />
        </Route>



        <Route path="/admin/addproduct" element={<AddProduct />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
