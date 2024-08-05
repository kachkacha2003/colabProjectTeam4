import React, { useState } from "react";
import Burger from "/public/img/List.png";
import Logo from "/public/img/Logo.png";
import Search from "/public/img/MagnifyingGlass.png";
import Heart from "/public/img/Heart.png";
import Bag from "/public/img/Bag.png";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex bg-white justify-between p-[15px] relative font-styrene">
      <img
        className="cursor-pointer"
        src={Burger}
        alt="Menu"
        onClick={toggleSidebar}
      />
      <div>
        <img className="cursor-pointer" src={Logo} alt="Logo" />
      </div>
      <div className="flex gap-[10px] items-center">
        <img className="cursor-pointer" src={Search} alt="Search" />
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
              Close
            </button>
            <nav>
              <ul className="text-slate-950 my-[20px] text-[18px] font-[400px] p-[15px] flex flex-col gap-[20px]">
                <li>
                  <a
                    className="  hover:text-[20px] cursor-pointer"
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className=" hover:text-[20px]] cursor-pointer"
                    href="#about"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className=" hover:text-[20px] cursor-pointer"
                    href="#services"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    className=" hover:text-[20px] cursor-pointer"
                    href="#contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
