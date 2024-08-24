export default function Home() {
  return (
    <div className="bg-cover bg-center h-screen flex flex-col justify-center relative">
      <div className="absolute inset-0 bg-[url('/public/img/content.png')] md:bg-[url('/public/img/desktop1.png')] bg-cover bg-center h-full w-full"></div>
      <div className="relative mt-52 p-5 flex flex-col gap-5 w-80 items-baseline justify-center md:p-[40px] md:w-auto z-10">
        <h1 className="text-zinc-50 text-2xl md:mt-[100px] md:text-4xl">
          Elevate Your Style <br /> Timeless Fashion, Sustainable <br /> Choices
        </h1>
        <button className=" hover:scale-105 cursor-pointer text-sm p-2 bg-white md:p-3 md:w-[130px]">
          Shop Now
        </button>
      </div>
    </div>
  );
}
