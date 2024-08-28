import { useState } from "react";
import Burger from "/public/img/List.png";
import Logo from "/public/img/Logo.png";
import Search from "/public/img/MagnifyingGlass.png";
import Heart from "/public/img/Heart.png";
import Bag from "/public/img/Bag.png";
import x from "/public/img/black-x-mark-transparent-png-1.png";
import { Link} from "react-router-dom";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [issearch, setissearch] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const toggsearch = () => {
    setissearch(!issearch);
  };


  return (
    <div className="sticky top-0 z-[1000] ">
      <div className="flex bg-white justify-between p-[15px] relative font-styrene">
        <img
          className="cursor-pointer md:hidden"
          src={Burger}
          alt="Menu"
          onClick={toggleSidebar}
        />
        <div className="flex gap-[50px]">
       <Link to="/home" >
       <img  className="cursor-pointer " src={Logo} alt="Logo" />
       
       </Link>  
          <nav className="hidden md:flex items-center gap-[40px] text-slate-950">
            <Link
              className="font-semibold hover:text-red-400 cursor-pointer"
              // to="/Shop"
               to="/#"
            >
              Shop
            </Link>
            <Link
              className="font-semibold hover:text-red-400 cursor-pointer"
              // to="New Arrivals"
               to="/#"
            >
              New Arrivals
            </Link>
            <Link
              className="font-semibold hover:text-red-400 cursor-pointer"
              // to="/Sales"
               to="/#"
            >
              Sales
            </Link>
            <Link
              className="font-semibold hover:text-red-400 cursor-pointer"
              // to="/Journel"
              to="/#"
            >
              Journel
            </Link>
          </nav>
        </div>

        <div className="flex gap-[10px] md:gap-[20px] items-center">
          <img
            className="cursor-pointer"
            onClick={toggsearch}
            src={Search}
            alt="Search"
          />
          <Link
          // onClick={toLogin}
          to="/login"
            className="hidden md:inline font-semibold hover:text-red-400 cursor-pointer"
          >
            Log in
          </Link>
          <Link
          // onClick={toSignUp}
          to="/register"
            className="hidden md:inline font-semibold hover:text-red-400 cursor-pointer"
      
          >
            Sign up
          </Link>
          <div className="flex gap-[3px] items-center">
            <img src={Heart} alt="Favorites" />
            <p>0</p>
          </div>
          <div className="flex gap-[3px] items-center">
            <img src={Bag} alt="Cart" />
            <p>0</p>
          </div>
        </div>

        {isSidebarOpen && (
          <div className="absolute top-0 left-0 w-[55%] h-[100vh] bg-gray-200 shadow-lg z-50">
            <div>
              <button className="p-[15px]" onClick={toggleSidebar}>
                X
              </button>
              <nav>
                <ul className="text-slate-950 my-[20px] text-[18px] font-[400px] p-[15px] flex flex-col gap-[20px]">
                  <li>
                    <Link
                      className="hover:text-[20px] cursor-pointer"
                      to="/login"
                    >
                      Log in
                    </Link>
                  </li>
                  <li>
                    <Link
           
                      className="hover:text-[20px] cursor-pointer"
                      to="/register"
                    >
                      Sign up
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-[20px] cursor-pointer" to="/shop">
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-[20px] cursor-pointer"
                      to="/newArrivals"
                    >
                      New Arrivals
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-[20px] cursor-pointer"
                      to="/sales"
                    >
                      Sales
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-[20px] cursor-pointer"
                      to="/journel"
                    >
                      Journel
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
      {issearch && (
        <div className="p-[20px] h-[80px] bg-white flex items-center gap-[10px]">
          <img className="w-[20px] " src={Search} alt="" />
          <input
            className="w-[95%] rounded-[20px] p-[10px] bg-slate-300"
            placeholder="search..."
            type="text"
          />
          <img onClick={toggsearch} className="w-[20px]" src={x} alt="" />
        </div>
      )}
    </div>
  );
}

export default Header;
