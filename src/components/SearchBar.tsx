import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../app/store";
import {
  setCity,
  fetchWeather,
  addToHistory,
} from "../features/weather/weatherSlice";
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
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row items-center gap-2 w-full mb-4"
    >
      <input
        type="text"
        placeholder="Enter city,countryCode (e.g. Delhi,IN)"
        value={city}
        onChange={(e) => dispatch(setCity(e.target.value))}
        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base text-white placeholder-gray-400 transition-colors duration-300"
        required
        autoFocus
      />
      <button
        type="submit"
        className="w-full md:w-auto bg-zinc-500 hover:bg-red-600 transition-colors duration-300 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm md:text-base"
      >
        Search
      </button>
    </form>
  );
};
