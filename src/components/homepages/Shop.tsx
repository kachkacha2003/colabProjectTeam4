import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Define the product type
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface ShopProps {
  handleAddToCart: (
    productId: number,
    productName: string,
    productPrice: number,
    productImage: string
  ) => void;
  handleRemoveFromCart: (productId: number) => void;
}

const Shop: React.FC<ShopProps> = ({
  handleAddToCart,
  handleRemoveFromCart,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://ann1.pythonanywhere.com/products/products/"
        );
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="p-[100px]">
      <h1 className="text-[30px]">products</h1>
      <div className=" grid grid-cols-1  grid-cols-3  lg:grid-cols-4 gap-10 ">
        {products.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer h-[420px] p-[20px] m-[30px]  product-item duration-300 hover:scale-105 hover:shadow-[0px_15px_40px_rgba(63,10,255,0.5)] md:w-[234px] flex-shrink-0  flex flex-col"
          >
            <div className="flex items-end relative">
              <img
                onClick={() => handleProductClick(item.id)}
                className="h-[200px] w-[100%] flex items-center"
                src={item.image}
                alt={item.name}
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <h2 className="text-base font-medium mt-2">{item.name}</h2>
              <div className="flex gap-[40px]">
                <p className="text-lg text-gray-600">{item.price}$</p>
                <div className="flex cursor-pointer gap-[20px]">
                  <p
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="text-2xl"
                  >
                    -
                  </p>
                  <p
                    onClick={() =>
                      handleAddToCart(
                        item.id,
                        item.name,
                        item.price,
                        item.image
                      )
                    }
                    className="text-2xl"
                  >
                    +
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
