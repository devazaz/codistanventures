import React from "react";
import { getWeatherData } from "../../services/getWeatherData";
import { useQuery } from "@tanstack/react-query";
import ConditionCard from "./ConditionCard";
import WeatherCard from "./WeatherCard";
import { getForeCast } from "../../services/getForecast";
import WeatherForecast from "./WeatherForecast";

import tempratureSrc from "../../../public/temperature.svg";
import humiditySrc from "../../../public/humidity.svg";
import windspeedSrc from "../../../public/windspeed.svg";
import rainchancesSrc from "../../../public/rainchances.svg";
import uvindexSrc from "../../../public/uvindex.svg";
import winddirectionSrc from "../../../public/winddirection.svg";

const WeatherApp = () => {
  const weatherDataQuery = useQuery({
    queryKey: ["weatherData"],
    queryFn: getWeatherData,
    staleTime: Infinity,
  });

  const { data: weatherData, isSuccess: weatherDataSuccess } = weatherDataQuery;

  const foreCastQuery = useQuery({
    queryKey: ["weatherForeCast"],
    queryFn: getForeCast,
    staleTime: Infinity,
  });

  const { data: weatherForeCast, isSuccess: foreCastSuccess } = foreCastQuery;

  console.log("weatherForeCast: ", weatherForeCast);
  const { wind_dir, wind_degree, wind_kph, uv, humidity, temp_c, condition } =
    weatherDataSuccess && weatherData?.data.current;

  return (
    <div className=" px-[10%] bg-gradient-to-r h-[100vh] from-blue-400 to-blue-900 pt-[50px] ">
      <div className=" flex justify-between ">
        <div className="w-[25%] flex flex-col ">
          <ConditionCard
            temp={temp_c}
            condition={condition}
            location={weatherData?.data?.location}
          />
        </div>
        <div className="w-[73%]">
          <WeatherForecast
            slides={weatherForeCast?.data?.forecast?.forecastday}
          />
          <div className="flex flex-wrap justify-between">
            <div className="w-[30%]">
              <WeatherCard
                img={windspeedSrc}
                name="Wind Speed"
                value={wind_kph}
                unit="km/h"
                prog={true}
              />
            </div>
            <div className="w-[30%]">
              <WeatherCard
                img={winddirectionSrc}
                name="Wind Direction"
                value={wind_degree}
                degree={wind_dir}
                unit={wind_dir}
              />
            </div>
            <div className="w-[30%]">
              <WeatherCard
                img={humiditySrc}
                name="Humidity"
                value={humidity}
                unit="%"
                prog={true}
              />
            </div>

            <div className="w-[30%]">
              <WeatherCard
                img={uvindexSrc}
                name="UV Index"
                value={uv}
                unit="UV"
                prog={true}
              />
            </div>
            <div className="w-[30%]">
              <WeatherCard
                img={rainchancesSrc}
                name="Rain Chances"
                value={wind_kph}
                unit="%"
                prog={true}
              />
            </div>
            <div className="w-[30%]">
              <WeatherCard
                img={tempratureSrc}
                name="Temperature"
                value={wind_kph}
                unit={"°C"}
                temp = {weatherForeCast?.data?.forecast?.forecastday[0]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
