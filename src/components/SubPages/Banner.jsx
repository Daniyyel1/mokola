import React, { useEffect, useState } from "react";

const Banner = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide >= data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  useEffect(() => {
    const interval = setInterval(()=>{
     setSlide((slide)=> (slide + 1) % data.length)
    }, 3000);
    return () => clearInterval(interval)

 
    
 }, []);


  const moveDot = idx =>{
    setSlide(idx)
}


  return (
    <div className="carousel mt-[120px] w-full relative max-[430px]:mt-[70px]">
      {data.map((item, idx) => {
        return (
          <div key={idx} className="overflow-hidden relative">
            <div className="">
              <img
                src={item.img}
                alt="images"
                key={idx}
                className={`w-full h-[450px] object-center transition-all duration-500 ${
                  slide === idx ? "" : "opacity-0 absolute "
                }`}
              />
            </div>
            <div className="absolute bottom-[30px] shadow-2xl mt-30 flex items-center justify-center w-full">
              <p className="capitalize text-[22px] font-[550] text-[#000] bg-[#fff] max-[390px]:text-[16px] max-[400px]:text-[17px] max-[430px]:text-[18px] w-full text-center">{item.desciption}</p>
            </div>
          </div>
        );
      })}

      <div className="">
        <span
          className=" absolute top-[50%] max-md:top-[40%] left-[1rem] text-[20px] text-[#fff] cursor-pointer border-2 border-[gray] h-[30px] w-[30px] rounded-[50%] bg-[gray] flex justify-center items-center"
          onClick={prevSlide}
        >
          &#8592;
        </span>
        <span
          className=" absolute top-[50%] max-md:top-[40%] right-[1rem] text-[20px] text-[#fff] cursor-pointer border-2 border-[gray] h-[30px] w-[30px] rounded-[50%] bg-[gray] flex justify-center items-center"
          onClick={nextSlide}
        >
          {" "}
          &#8594;
        </span>
      </div>

      <div className=" absolute flex justify-center items-center gap-3 bottom-1 left-[45%] max-md:left-[30%]">
          {Array.from({ length: 6 }).map((item, idx) => {
            return (
              <div
                className={
                  slide === idx ? "h-[15px] w-[40px] bg-[gray] rounded-[7px] transition-all duration-300" : "bg-[#fff] h-[15px] w-[15px] rounded-[50%]"
                }
                onClick={() => {
                  moveDot(idx);
                }}
            
              ></div>
            );
          })}
        </div>
    </div>
  );
};

export default Banner;
