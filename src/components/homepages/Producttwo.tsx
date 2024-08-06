import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import bag from "/public/img/s.png";
import sbag from "/public/img/product.png";
import images from "/public/img/image.png";

export default function Producttwo() {
  const Information = [
    { img: bag, price: "283", title: "Classic Easy Zipper Tote" },
    { img: sbag, price: "383", title: "Classic Easy Zipper Tote" },
    { img: images, price: "683", title: "Zipper Tote" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === Information.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [Information.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Information.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Information.length - 1 : prevIndex - 1
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="flex flex-col p-5">
      <h1>What to Wear Now</h1>
      <div {...handlers} className="relative max-w-lg overflow-hidden">
        <div
          className="flex space-x-5 transition-transform "
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {Information.map((item, index) => (
            <div
              key={index}
              className="product-item mt-[70px] flex-shrink-0 h-72 flex flex-col items-center"
            >
              <img
                className="h-[218px] w-[200px]"
                src={item.img}
                alt={item.title}
              />
              <h2>{item.title}</h2>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
