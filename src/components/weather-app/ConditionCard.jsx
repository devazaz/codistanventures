import React from "react";
import locationMarker from "../../../public/location-marker.svg";

const ConditionCard = ({ temp, condition, location }) => {
  return (
    <div className="bg-[#345f92]  rounded-[10px] w-full h-full ">
      <div className="text-white flex justify-center items-center pt-[50px] flex-wrap">
        <div className="flex justify-center items-center w-[90%]">
          <div className="mr-[5px]">
            <img src={locationMarker} />
          </div>
          <div>
            <div className=" text-base">{location?.region}</div>
          </div>
        </div>
        <div className="text-white text-base">{location?.name}</div>
      </div>

      <div className="text-white max-w-[100px] mx-auto">
        <div className="w-[90%] mx-auto my-[25px]">
          <img width="100%" src={condition?.icon} />
        </div>
        <div className="text-6xl ">{temp}&deg;C</div>
        <div className="text-center text-base">{condition?.text}</div>
      </div>
    </div>
  );
};

export default ConditionCard;
