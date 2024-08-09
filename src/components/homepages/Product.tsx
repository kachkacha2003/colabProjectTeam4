import React from "react";
import Imas from "/public/img/Collection banner.png";
import Cas from "/public/img/Collectionsbanner (3).png";

export default function Product() {
  return (
    <div className="p-[10px] md:px-[280px] my-[20px]">
      <h1 className="md:text-[20px] md:w-[570px]">
        Elevate your lifestyle with a more intelligent, superior wardrobe. Our
        range is crafted sustainably with longevity in mind.
      </h1>
      <div className="my-[40px] md:gap-[30px] flex flex-col md:flex-row items-center justify-center gap-[20px]">
        <img
          className="md:h-[523px] md:w-[432px] hover:scale-105 transition-transform duration-300 hover:shadow-[0px_15px_40px_rgba(230,240,97,0.5)]"
          src={Imas}
          alt="Collection Banner 1"
        />
        <img
          className="md:h-[523px] md:w-[432px] hover:scale-105 transition-transform duration-300 hover:shadow-[0px_15px_40px_rgba(230,240,97,0.5)]"
          src={Cas}
          alt="Collection Banner 2"
        />
        <img
          className="md:h-[523px] md:w-[432px] hover:scale-105 transition-transform duration-300 hover:shadow-[0px_15px_40px_rgba(63,10,255,0.5)]"
          src={Imas}
          alt="Collection Banner 3"
        />
      </div>
    </div>
  );
}
