import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Product {
  id: string;
  image: string;
  name: string;
  price: string;
}

interface ProducttwoProps {
  handleAddToCart: (
    productId: number,
    productName: string,
    productPrice: number,
    productImage: string
  ) => void;
  handleRemoveFromCart: (productId: number) => void;
}

const Producttwo: React.FC<ProducttwoProps> = ({
  handleAddToCart,
  handleRemoveFromCart,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const [cartItems, setCartItems] = useState<string[]>([]); 
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://ann1.pythonanywhere.com/products/products/"
        );
        const data = await response.json();
        setProducts(data.slice(0, 5));
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (id: string) => {
    navigate(`/aboutProduct/${id}`);
  };

  // Handle add/remove from cart toggle
  const toggleCart = (
    productId: string,
    productName: string,
    productPrice: number,
    productImage: string
  ) => {
    if (cartItems.includes(productId)) {
      handleRemoveFromCart(Number(productId));
      setCartItems(cartItems.filter((id) => id !== productId));
    } else {
      handleAddToCart(Number(productId), productName, productPrice, productImage);
      setCartItems([...cartItems, productId]);
    }
  };

  return (
    <div className="flex flex-col p-5 gap-[20px]">
      <h1 className="text-xl md:px-[300px] font-bold mb-4">What to Wear Now</h1>
      {isMobile ? (
        <div className="relative max-w-lg overflow-hidden">
          <div className="flex space-x-5 transition-transform">
            {products.map((item, index) => (
              <div
                key={index}
                className="product-item w-[300px] flex-shrink-0 h-72 flex flex-col"
                onClick={() => handleProductClick(item.id)}
              >
                <img className="h-56 w-52" src={item.image} alt={item.name} />
                <h2 className="text-lg font-medium mt-2">{item.name}</h2>
                <p className="text-sm text-gray-600">{item.price}$</p>
                <button
                  onClick={() =>
                    toggleCart(item.id, item.name, Number(item.price), item.image)
                  }
                  className="bg-[black] text-[white] rounded-[20px] p-[5px] "
                >
                  {cartItems.includes(item.id) ? "Remove" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex gap-10 justify-center">
          {products.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer product-item md:w-[234px] flex-shrink-0 h-82 flex flex-col"
            >
              <div className="flex items-end relative">
                <img
                  onClick={() => handleProductClick(item.id)}
                  className="h-56 p-[1rem] w-[100%] cursor-pointer duration-300 hover:scale-105 hover:shadow-[0px_15px_40px_rgba(63,10,255,0.5)] flex items-center"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <h2 className="text-base font-medium mt-2">{item.name}</h2>
                <div className="flex gap-[40px]">
                  <p className="text-lg text-gray-600">{item.price}$</p>
                  <button
                    onClick={() =>
                      toggleCart(item.id, item.name, Number(item.price), item.image)
                    }
                    className={`${
                      cartItems.includes(item.id) ? 'bg-[red]' : 'bg-[black]'
                    } text-[white] rounded-[20px] p-[5px]`}
                  >
                    {cartItems.includes(item.id) ? "Remove" : "Add to Cart"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Producttwo;
