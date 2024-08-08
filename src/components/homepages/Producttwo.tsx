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
    { img: images, price: "683", title: "Zipper Tote" },
    { img: images, price: "683", title: "Zipper Tote" },
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const [dragging, setDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleDragStart = (index) => (event) => {
    setDragging(true);
    setStartPosition(
      event.type.includes("mouse") ? event.pageX : event.touches[0].clientX
    );
  };

  const handleDragMove = (event) => {
    if (!dragging) return;
    const currentPosition = event.type.includes("mouse")
      ? event.pageX
      : event.touches[0].clientX;
    setCurrentTranslate(currentPosition - startPosition + prevTranslate);
  };

  const handleDragEnd = () => {
    setDragging(false);
    setPrevTranslate(currentTranslate);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () =>
      setPrevTranslate((prev) =>
        Math.max(
          prev - window.innerWidth,
          -((Information.length - 1) * window.innerWidth)
        )
      ),
    onSwipedRight: () =>
      setPrevTranslate((prev) => Math.min(prev + window.innerWidth, 0)),
  });

  return (
    <div className="flex flex-col p-5">
      <h1>What to Wear Now</h1>
      {isMobile ? (
        <div className="relative max-w-lg overflow-hidden" {...swipeHandlers}>
          <div
            className="flex space-x-5 transition-transform"
            style={{
              transform: `translateX(${currentTranslate}px)`,
              transition: dragging ? "none" : "transform 0.3s ease",
            }}
          >
            {Information.map((item, index) => (
              <div
                key={index}
                className="product-item mt-[70px] flex-shrink-0 h-72 flex flex-col items-center"
                onTouchStart={handleDragStart(index)}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
                onMouseDown={handleDragStart(index)}
                onMouseMove={handleDragMove}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
                style={{
                  transform: `translateX(${currentTranslate}px)`,
                  transition: dragging ? "none" : "transform 0.3s ease",
                }}
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
      ) : (
        <div className="flex justify-center">
          {Information.map((item, index) => (
            <div
              key={index}
              className="product-item mt-[70px] flex-shrink-0 h-72 flex flex-col items-center"
              onMouseDown={handleDragStart(index)}
              onMouseMove={handleDragMove}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              style={{
                transform: `translateX(${currentTranslate}px)`,
                transition: dragging ? "none" : "transform 0.3s ease",
              }}
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
      )}
    </div>
  );
}
