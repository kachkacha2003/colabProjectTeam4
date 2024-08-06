import React from "react";
import backgroundImage from "/public/img/content.png"; // Adjust the path as needed

export default function Home() {
  return (
    <div
      className="flex bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="mt-[200px] p-[20px] flex flex-col gap-[20px] w-[311px] items-baseline justify-center">
        <h1 className="text-zinc-50 text-[24px]">
          Elevate Your Style Timeless Fashion, Sustainable Choices
        </h1>
        <button className="cursor-pointer text-[14px] p-[10px] bg-white">
          Shop Now
        </button>
      </div>
    </div>
  );
}
