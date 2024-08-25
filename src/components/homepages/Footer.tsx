import image1 from "/public/img/image (1).png";
import imag21 from "/public/img/image (2).png";
import imag31 from "/public/img/image (3).png";
import imag312 from "/public/img/image.png";
export default function footer() {
  return (
    <div className="flex mt-[30px] gap-[20px] flex-col">
      <div className=" flex  items-center justify-center  gap-[20px]">
        <img className="md:w-[215px] h-[215px]" src={image1} alt="" />
        <img className="md:w-[215px] h-[215px]" src={imag21} alt="" />
        <img className="md:w-[215px]  h-[215px]" src={imag31} alt="" />
        <img className="md:w-[215px] h-[215px]" src={imag312} alt="" />
      </div>

      <div className="w-[100%] bg-slate-200">
        <div className="p-[50px] flex gap-[30px] justify-evenly ">
          <div className="  flex gap-[30px]">
            <div>
              <h1>+1(844)326-6000</h1>
              <h1>Email Us</h1>
              <h1>Mon-Fri 9am-3pm PT</h1>
            </div>
            <div>
              <h1>COMPANY</h1>
              <h1>Sustainability</h1>
              <h1>Discover Revive</h1>
              <h1>Careers</h1>
              <h1>Terms</h1>
            </div>
          </div>
          <div>
            <h1>Get the latest new from us</h1>
            <input
              className="h-[30px] p-[20px]"
              type="text"
              placeholder="Enter your email address"
              name=""
              id=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
