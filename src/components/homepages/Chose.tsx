import SMart from "/public/img/Collection banner (1).png";
import SMarts from "/public/img/Collection banner (2).png";
import smartsdes from "/public/img/deskroptsz.png";
import martsdes from "/public/img/Collectionbanner-deskrop.png";

export default function Chose() {
  return (
    <div>
      <div className="md:flex-row flex flex-col my-[40px] justify-center gap-[20px] p-[20px] md:gap-[40px]">
        <img
          className="md:hidden cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-[0px_10px_20px_rgba(0,128,0,0.2)]"
          src={SMart}
          alt="Collection banner 1"
        />
        <img
          className="md:hidden cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-[0px_10px_30px_rgba(0,128,0,0.3)]"
          src={SMarts}
          alt="Collection banner 2"
        />
        <img
          className="hidden md:inline cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-[0px_15px_40px_rgba(63,10,255,0.5)]"
          src={smartsdes}
          alt="Desktop Collection banner 1"
        />
        <img
          className="hidden md:inline cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-[0px_15px_40px_rgba(63,10,255,0.5)]"
          src={martsdes}
          alt="Desktop Collection banner 2"
        />
      </div>
      <div className="w-full md:h-[400px] mt-[100px]  bg-neutral-100 p-[40px] flex flex-col text-center items-center">
        <h1 className="md:mt-[50px] text-[24px]">
          The Art of Fewer, Better Choices
        </h1>
        <p className="md:w-[700px] md:text-[18px] font-sans-serif text-[16px] mt-[30px]">
          Opting for quality over quantity means selecting timeless, durable,
          and responsibly made items. This approach simplifies our lives and
          fosters a deeper appreciation for our surroundings. Emphasizing
          longevity and responsible production resonates with a more sustainable
          and mindful lifestyle.
        </p>
      </div>
    </div>
  );
}
