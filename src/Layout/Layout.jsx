import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/IMG/logo.png";
import Cartsvg from "../assets/IMG/cart.svg";
import Footer from "../Components/Footer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../Redux/Slices/AuthSlice";
import { useEffect } from "react";
import { getCartDetails } from "../Redux/Slices/cartSlice";

function Layout({ children }) {
  const { cartsData } = useSelector((state) => state.cart);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedin = useSelector((state) => state.auth.isLoggedin);
  async function handleLogOut(e) {
    e.preventDefault();
    dispatch(logout());
  }

  async function fetchCart() {
    const response = await dispatch(getCartDetails());
    if (response?.payload?.isUnauthorized) {
      dispatch(logout());
    }
  }
  useEffect(() => {
    fetchCart();
  }, []);
  return (
    <div>
      <nav className="flex items-center justify-around h-16 font-mono text=[#6b7280] border-none shadow-md">
        {/* For Logo */}
        <div
          className="flex items-center justify-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <p className="mr-3">Pizza App</p>
          <img src={Logo} width={30} alt="Pizzalogo" srcset="" />
        </div>
        <div className="hidden md:block">
          <ul className=" flex gap-5">
            <li className="hover:text-[#FF9110]">
              {" "}
              <p>Menu </p>
            </li>

            <li className="hover:text-[#FF9110]">
              {" "}
              <p>Services </p>
            </li>
            <li className="hover:text-[#FF9110]">
              {" "}
              <p>Contact Us </p>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-4">
            <li className="hover:text-[#ff9110]">
              {isLoggedin ? (
                <Link onClick={handleLogOut}>Log Out</Link>
              ) : (
                <Link to={"/auth/login"}>Log in</Link>
              )}
            </li>
            {isLoggedin && (
              <Link to={"/cart"}>
                <li>
                  <img src={Cartsvg} className="w-6 h-6 inline" />
                  <p className="text-sm ml-2 text-gray-700 inline">
                    {cartsData?.items?.length}
                  </p>
                </li>
              </Link>
            )}
          </ul>
        </div>
      </nav>

      {children}
      {/* Footer Section */}

      <Footer />
    </div>
  );
}
export default Layout;
