import React from "react";
import Imas from "/public/img/Collection banner.png";
export default function Product() {
  return (
    <div className="p-[10px] my-[20px]">
      <h1>
        Elevate your lifestyle with a more intelligent, superior wardrobe. Our
        range is crafted sustainably with longevity in mind.
      </h1>
      <div className="my-[40px] flex flex-col gap-[20px]">
        <img src={Imas} alt="" />
        <img src={Imas} alt="" />
        <img src={Imas} alt="" />
      </div>
    </div>
  );
}
