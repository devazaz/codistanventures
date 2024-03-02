import axios from "axios";
const headers = {
  "X-RapidAPI-Key": "a8e4bb4acamsh186edb9bcc597edp11268cjsn4c1f32da0bd2",
  "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
};
export const getWeatherData = async () => {
  const response =  axios.get(
    `https://weatherapi-com.p.rapidapi.com/current.json?q=53.1,-0.13`,
    { headers }
  );
  return response
};
