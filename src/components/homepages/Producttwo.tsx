import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

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
  const [dragging, setDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
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
    navigate(`/product/${id}`);
  };

  const handleDragStart = (
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    setDragging(true);
    if (event.type === "mousedown") {
      setStartPosition((event as React.MouseEvent).pageX);
    } else {
      setStartPosition((event as React.TouchEvent).touches[0].clientX);
    }
  };

  const handleDragMove = (
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    if (!dragging) return;

    let currentPosition = 0;
    if (event.type === "mousemove") {
      currentPosition = (event as React.MouseEvent).pageX;
    } else {
      currentPosition = (event as React.TouchEvent).touches[0].clientX;
    }
    setCurrentTranslate(currentPosition - startPosition + prevTranslate);
  };

  const handleDragEnd = () => {
    setDragging(false);
    const width = window.innerWidth;
    const currentSlide = Math.round(prevTranslate / -width);
    setPrevTranslate(-currentSlide * width);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () =>
      setPrevTranslate((prev) =>
        Math.max(
          prev - window.innerWidth,
          -((products.length - 1) * window.innerWidth)
        )
      ),
    onSwipedRight: () =>
      setPrevTranslate((prev) => Math.min(prev + window.innerWidth, 0)),
  });

  return (
    <div className="flex flex-col p-5 gap-[20px]">
      <h1 className="text-xl md:px-[300px] font-bold mb-4">What to Wear Now</h1>
      {isMobile ? (
        <div className="relative max-w-lg overflow-hidden" {...swipeHandlers}>
          <div
            className="flex space-x-5 transition-transform"
            style={{
              transform: `translateX(${currentTranslate}px)`,
              transition: dragging ? "none" : "transform 0.3s ease",
            }}
          >
            {products.map((item, index) => (
              <div
                key={index}
                className="product-item w-[300px] flex-shrink-0 h-72 flex flex-col"
                onClick={() => handleProductClick(item.id)}
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
                onMouseDown={handleDragStart}
                onMouseMove={handleDragMove}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
              >
                <img className="h-56 w-52" src={item.image} alt={item.name} />
                <h2 className="text-lg font-medium mt-2">{item.name}</h2>
                <p className="text-sm text-gray-600">{item.price}$</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex gap-10 justify-center">
          {products.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer product-item duration-300 hover:scale-105 hover:shadow-[0px_15px_40px_rgba(63,10,255,0.5)] md:w-[234px] flex-shrink-0 h-82 flex flex-col"
            >
              <div className="flex items-end relative">
                <img
                  onClick={() => handleProductClick(item.id)}
                  className="h-56 w-[100%] flex items-center"
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
                      onClick={() =>
                        handleAddToCart(
                          Number(item.id),
                          item.name,
                          Number(item.price),
                          item.image
                        )
                      }
                      className="text-2xl"
                    >
                      +
                    </p>
                    <p
                      onClick={() => handleRemoveFromCart(Number(item.id))}
                      className="text-2xl"
                    >
                      -
                    </p>
                  </div>
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
