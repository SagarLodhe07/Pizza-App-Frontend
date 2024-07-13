import Logo from "../assets/IMG/logo.png";
import Footer from "../Components/Footer";

function Layout({ children }) {
  return (
    <div>
      <nav className="flex items-center justify-around h-16 font-mono text=[#6b7280] border-none shadow-md">
       {/* For Logo */}
        <div className="flex items-center justify-center">
          <p className="mr-3">Pizza App</p>
          <img src={Logo} width={30} alt="Pizzalogo" srcset="" />
        </div>
        <div className=" hidden md:block">
          <ul className=" flex gap-4">
            <li className="hover:text-[#FF9110]">
              {" "}
              <p>Menu{" "}</p>
            </li>
            
            <li className="hover:text-[#FF9110]">
              {" "}
              <p>Services{" "}</p>
            </li>
            <li className="hover:text-[#FF9110]">
              {" "}
              <p>Contact Us{" "}</p>
            </li>
          </ul>
        </div>

      </nav>
      {children}
      {/* Footer Section */}

      <Footer/>
    </div>
  );
}
export default Layout;
