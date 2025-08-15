import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../app/store";
import { setCity, fetchWeather } from "../features/weather/weatherSlice";
import { addToHistory } from "../features/weather/weatherSlice";
import React from "react";

export const SearchBar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const city = useSelector((state: RootState) => state.weather.city);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      dispatch(fetchWeather(city));
      dispatch(addToHistory(city));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center gap-2 text-white bg-zinc-700 p-4 rounded gap-4 w-500 max-w-md hover:bg-zinc-600 transition-colors duration-300">
      <input
        type="text"
        placeholder="Enter city,countryCode (e.g. Delhi,IN)"
        value={city}
        onChange={(e) => dispatch(setCity(e.target.value))}
        className="flex-1 p-2 rounded bg-zinc-800 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent border border-transparent w-full max-w-md"
        required
        autoFocus
      />
      <button type="submit" className="bg-zinc-500 hover:bg-red-600 transition-colors duration-300 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500">Search</button>
    </form>
  );
};
