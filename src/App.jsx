import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WeatherApp from "./components/weather-app/WeatherApp";
const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <WeatherApp />
    </QueryClientProvider>
  );
};

export default App;
