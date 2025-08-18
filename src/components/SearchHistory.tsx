import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { type AppDispatch, type RootState } from "../app/store";
import { setCity, fetchWeather, clearHistory } from "../features/weather/weatherSlice";

export const SearchHistory: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const history = useSelector((state: RootState) => state.weather.history);

  if (history.length === 0) return null;

  return (
    <div className="bg-zinc-900 rounded-lg p-4 mt-4 w-full max-w-md shadow-lg mb-5">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-white font-semibold">Recent Searches</h3>
        <button
          className="text-sm text-red-500 hover:underline"
          onClick={() => dispatch(clearHistory())}
        >
          Clear
        </button>
      </div>
      <div className="flex flex-wrap gap-2 overflow-x-auto">
        {history.map((city) => (
          <button
            key={city}
            onClick={() => {
              dispatch(setCity(city));
              dispatch(fetchWeather(city));
            }}
            className="bg-blue-600 hover:bg-blue-500 rounded-full px-3 py-1 text-white text-sm transition"
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
};