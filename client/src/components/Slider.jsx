import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import i1 from "./1.jpg"
import i2 from "./2.jpg"
import i3 from "./3.jpg"
import { sliderItems } from "../data";


const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (

    <div className=" w-full overflow-hidden h-1/2 flex relative items-center -mt-14" >

      <div className="arrow w-12 h-12 bg-white rounded-full flex justify-center items-center absolute left-4 cursor-pointer opacity-60 z-10" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined className="" />
      </div>
      <div>
        <div className={`flex flex-row -translate-x-[${slideIndex * 100}vw] transition delay-150 ease-linear`} >

          <div className=" w-screen text-white relative">
            <img src={i3} className="w-full " alt="chgvjh" />
            <div className="w-1/2 h-1/3 top-1/3 right-0  absolute text-center ">
              <h1 className="md:text-5xl text-2xl md:p-5 font-extrabold">Get up to 30% Off</h1>
              <h2 className="md:text-4xl font-extrabold ">New Arrivals</h2>
              <button className="border-2 md:p-2 md:mt-10 rounded-lg font-extrabold bg-black border-none text-white text-xs md:text-xl p-1 cursor-pointer">SHOP NOW</button></div>
          </div>
          <div className=" w-screen  relative text-white">
            <img src={i1} className="w-full " alt="chgvjh" />
            <div className="w-1/2 h-1/3 md:top-1/3 top-1/4 left-0 absolute text-center ">
              <h1 className="md:text-5xl text-2xl md:p-5 font-extrabold">Buy two get one free</h1>
              <h2 className="md:text-4xl font-extrabold">On sports wear</h2>
              <button className="border-2 md:p-2 md:mt-10 mt-5 rounded-lg font-extrabold p-1 text-xs md:text-xl bg-black border-none text-white cursor-pointer">SHOP NOW</button></div>
          </div>
          <div className=" w-screen  relative text-white">
            <img src={i2} className="w-full " alt="chgvjh" />
            <div className="w-1/2 h-1/3 top-1/4 left-0  absolute text-center ">
              <h1 className="md:text-5xl text-2xl md:p-5 font-extrabold">10% off on daily casuals</h1>
              <h2 className="md:text-4xl mt-2 font-extrabold">New Designs</h2>
              <button className="border-2 md:p-2 md:mt-10 rounded-lg font-extrabold bg-black text-xs md:text-xl p-1 border-none text-white cursor-pointer mt-5">SHOP NOW</button></div>
          </div>




        </div>
      </div>
      <div onClick={() => handleClick("right")} className="arrow w-12 h-12 bg-white rounded-full flex justify-center items-center absolute right-4 cursor-pointer opacity-60">
        <ArrowRightOutlined className="" />
      </div>
    </div >
  );
};

export default Slider;
