import next from "../../../public/next.png";
import prev from "../../../public/prev.png";
import { useState } from "react";
const WeatherForecast = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides?.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides?.length) % slides?.length
    );
  };

  const displayedSlides = slides?.slice(currentSlide, currentSlide + 4);

  return (
    <div className=" bg-[#325887] p-[10px] flex items-center justify-between text-white rounded-[10px]">
      <button
        className="w-[10%] mr-auto"
        onClick={handlePrevSlide}
        disabled={currentSlide === 0}
      >
         <div className="mr-auto max-w-[10px]">
          <img src={prev} />
        </div>
      </button>
      <div className="flex items-center justify-between w-[80%] ">
        {displayedSlides?.map((slide, index) => (
          <div key={index} className="slide">
            <div>
              <div></div>
              <div className="max-w-[65px] mx-auto">
                <img src={slide?.day.condition?.icon} />
              </div>
              <div className="text-center">
                {slide?.day.maxtemp_c}° . <span className="text-white opacity-[40%]">{slide?.day.mintemp_c}°</span>
              </div>
              <div>{slide?.day.condition?.text}</div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="w-[10%] ml-auto"
        onClick={handleNextSlide}
        disabled={currentSlide === slides?.length - 4}
      >
        <div className="ml-auto max-w-[10px]">
          <img src={next} />
        </div>
      </button>
    </div>
  );
};

export default WeatherForecast;
