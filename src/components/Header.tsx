import { useState } from "react";
import Burger from "/public/img/List.png";
import Logo from "/public/img/Logo.png";
import Search from "/public/img/MagnifyingGlass.png";
import Heart from "/public/img/Heart.png";
import Bag from "/public/img/Bag.png";
import x from "/public/img/black-x-mark-transparent-png-1.png";
import { useNavigate } from "react-router";

interface CartItem {
  productId: number;
  productName: string;
  productPrice: number;
  productImage: string;
  quantity: number;
}

interface HeaderProps {
  cart: CartItem[];
}

function Header({ cart }: HeaderProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [issearch, setissearch] = useState(false);
  const [show, setshow] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggsearch = () => {
    setissearch(!issearch);
  };

  const clickfunc = () => {
    setshow(!show);
  };

  const navigate = useNavigate();

  const toLogin = () => {
    navigate("/login");
  };

  const toSignUp = () => {
    navigate("/register");
  };

  const toHome = () => {
    navigate("/home");
  };

  return (
    <div className="relative sticky top-0 z-[1000]">
      <div className="flex bg-white justify-between p-[15px] relative font-styrene">
        <img
          className="cursor-pointer md:hidden"
          src={Burger}
          alt="Menu"
          onClick={toggleSidebar}
        />
        <div className="flex gap-[50px]">
          <img
            onClick={toHome}
            className="cursor-pointer"
            src={Logo}
            alt="Logo"
          />
          <nav className="hidden md:flex items-center gap-[40px] text-slate-950">
            <a className="font-semibold hover:text-red-400 cursor-pointer">
              Shop
            </a>
            <a className="font-semibold hover:text-red-400 cursor-pointer">
              New Arrivals
            </a>
            <a className="font-semibold hover:text-red-400 cursor-pointer">
              Sales
            </a>
            <a className="font-semibold hover:text-red-400 cursor-pointer">
              Journal
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
            onClick={toLogin}
            className="hidden md:inline font-semibold hover:text-red-400 cursor-pointer"
          >
            Log in
          </a>
          <a
            onClick={toSignUp}
            className="hidden md:inline font-semibold hover:text-red-400 cursor-pointer"
          >
            Sign up
          </a>
          <div className="flex gap-[3px] items-center">
            <img src={Heart} alt="Favorites" />
            <p>0</p>
          </div>
          <div onClick={clickfunc} className="relative flex flex-col relative">
            <div className="flex cursor-pointer gap-[3px] items-center">
              <img src={Bag} alt="Cart" />
              <p>{cart.reduce((total, item) => total + item.quantity, 0)}</p>
            </div>

            {show && (
              <div className="absolute top-[50px] right-[0px] w-[250px] bg-gray-200 p-[20px] bg-white z-50">
                {cart.length > 0 ? (
                  cart.map((item) => (
                    <div key={item.productId} className="flex mb-4 gap-4">
                      <img
                        src={item.productImage}
                        alt={item.productName}
                        className="w-12 h-12 object-cover"
                      />
                      <div>
                        <p className="text-sm">{item.productName}</p>
                        <p className="text-sm">{item.productPrice}$</p>
                        <p className="text-sm">
                          Quantity: {item.quantity}
                        </p>{" "}
                        {/* Display quantity */}
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Your cart is empty</p>
                )}
              </div>
            )}
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
                    <a className="hover:text-[20px] cursor-pointer">Log in</a>
                  </li>
                  <li>
                    <a
                      onClick={toSignUp}
                      className="hover:text-[20px] cursor-pointer"
                    >
                      Sign up
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-[20px] cursor-pointer">Shop</a>
                  </li>
                  <li>
                    <a className="hover:text-[20px] cursor-pointer">
                      New Arrivals
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-[20px] cursor-pointer">Sales</a>
                  </li>
                  <li>
                    <a className="hover:text-[20px] cursor-pointer">Journal</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>

      {issearch && (
        <div className="p-[20px] h-[80px] bg-white flex items-center gap-[10px]">
          <img className="w-[20px]" src={Search} alt="" />
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
