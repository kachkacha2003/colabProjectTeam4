import React from "react";
import Imas from "/public/img/Collection banner.png";
export default function Product() {
  return (
    <div className="p-[10px] md:p-[30px] my-[20px]">
      <h1 className="md:text-[20px] md:w-[570px]">
        Elevate your lifestyle with a more intelligent, superior wardrobe. Our
        range is crafted sustainably with longevity in mind.
      </h1>
      <div className="my-[40px] flex flex-col md:flex-row items-center justify-center gap-[20px]">
        <img
          className="md:h-[523px] md:w-[432px] hover:scale-105 "
          src={Imas}
          alt=""
        />
        <img
          className="md:h-[523px] md:w-[432px] hover:scale-105 "
          src={Imas}
          alt=""
        />
        <img
          className="md:h-[523px] md:w-[432px] hover:scale-105 "
          src={Imas}
          alt=""
        />
      </div>
    </div>
  );
}
