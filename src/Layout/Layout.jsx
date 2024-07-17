import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/IMG/logo.png";
import Footer from "../Components/Footer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
    import { logout } from "../Redux/Slices/AuthSlice";

function Layout({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedin);
  async function handleLogOut(e) {
    e.preventDefault();
    dispatch(logout());
  }
  return (
    <div>
      <nav className="flex items-center justify-around h-16 font-mono text=[#6b7280] border-none shadow-md">
        {/* For Logo */}
        <div
          className="flex items-center justify-center cursor-pointer"
          onClick={() => navigate("/")

          }
        >
          <p className="mr-3">Pizza App</p>
          <img src={Logo} width={30} alt="Pizzalogo" srcset="" />
        </div>
        <div className=" hidden md:block">
          <ul className=" flex gap-4">
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
          <ul>
            <li>
              {isLoggedIn ? (
                <Link onClick={handleLogOut}>Log Out</Link>
              ) : (
                <Link to={"/auth/login"}>Log in</Link>
              )}
            </li>
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
