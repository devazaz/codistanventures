import React from "react";

import arrow from "../../../public/arrow.svg";
import ProgressBar from "../progress/ProgressBar";

const WeatherCard = ({ img, name, value, unit, degree , prog , temp }) => {
  console.log('temp: ', temp);
  return (
    <div className=" flex justify-between  bg-[#325887] p-[10px] my-[10px] rounded-[10px] text-white min-h-[125px]">
      <div className="ww-[85%] flex flex-col justify-between">
        <div className="flex items-center">
          <div className="w-[20px]">
            <img src={img} />
          </div>
          <div className="ml-[12px]">{name}</div>
        </div>
        {degree && (
          <div className="w-[20px]">
            <img src={arrow} />
          </div>
        )}
        { !temp && <div className="flex text-[30px] items-baseline">
          {value} <span className="text-[20px]">{unit}</span>
        </div>}
        {
          temp &&<div>
             <div>{temp?.day?.maxtemp_c}<span className="text-[20px]">{unit}</span></div>
             <div>{temp?.day?.mintemp_c}<span className="text-[20px]">{unit}</span></div>
          </div>
        }
      </div>
      { prog && <ProgressBar progress={value} />}
    </div>
  );
};

export default WeatherCard;
