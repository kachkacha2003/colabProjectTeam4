import { useState } from "react";
import Burger from "/public/img/List.png";
import Logo from "/public/img/Logo.png";
import Search from "/public/img/MagnifyingGlass.png";
import Heart from "/public/img/Heart.png";
import Bag from "/public/img/Bag.png";
import x from "/public/img/black-x-mark-transparent-png-1.png";

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
    <div>
      <div className="flex bg-white justify-between p-[15px] relative font-styrene">
        <img
          className="cursor-pointer md:hidden"
          src={Burger}
          alt="Menu"
          onClick={toggleSidebar}
        />
        <div className="flex gap-[50px]">
          <img className="cursor-pointer " src={Logo} alt="Logo" />
          <nav className="hidden md:flex items-center gap-[40px] text-slate-950">
            <a
              className="font-semibold hover:text-red-400 cursor-pointer"
              href=""
            >
              Shop
            </a>
            <a
              className="font-semibold hover:text-red-400 cursor-pointer"
              href="#about"
            >
              New Arrivals
            </a>
            <a
              className="font-semibold hover:text-red-400 cursor-pointer"
              href="#services"
            >
              Sales
            </a>
            <a
              className="font-semibold hover:text-red-400 cursor-pointer"
              href="#contact"
            >
              Journel
            </a>
          </nav>
        </div>

        <div className="flex gap-[10px] md:gap-[20px] items-center">
          <img
            className="cursor-pointer"
            onClick={toggsearch}
            src={Search}
            alt="Search"
          />
          <a
            className="hidden md:inline font-semibold hover:text-red-400 cursor-pointer"
            href="#services"
          >
            Log in
          </a>
          <a
            className="hidden md:inline font-semibold hover:text-red-400 cursor-pointer"
            href="#contact"
          >
            Sign up
          </a>
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
                    <a
                      className="hover:text-[20px] cursor-pointer"
                      href="#login"
                    >
                      Log in
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-[20px] cursor-pointer"
                      href="#signup"
                    >
                      Sign up
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-[20px] cursor-pointer" href="">
                      Shop
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-[20px] cursor-pointer"
                      href="#about"
                    >
                      New Arrivals
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-[20px] cursor-pointer"
                      href="#services"
                    >
                      Sales
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-[20px] cursor-pointer"
                      href="#contact"
                    >
                      Journel
                    </a>
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
