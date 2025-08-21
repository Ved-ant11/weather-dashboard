import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import {
  WiThermometer,
  WiThermometerExterior,
  WiHumidity,
  WiBarometer,
  WiDaySunny,
  WiCloud,
  WiRain,
  WiSnow,
  WiThunderstorm,
  WiFog,
} from "react-icons/wi";

function getWeatherIcon(summary: string) {
  const desc = summary.toLowerCase();
  if (desc.includes("clear") || desc.includes("sun"))
    return <WiDaySunny size={32} className="md:size-[48px] text-yellow-400" />;
  if (desc.includes("cloud"))
    return <WiCloud size={32} className="md:size-[48px] text-gray-400" />;
  if (desc.includes("rain"))
    return <WiRain size={32} className="md:size-[48px] text-blue-400" />;
  if (desc.includes("snow"))
    return <WiSnow size={32} className="md:size-[48px] text-blue-200" />;
  if (desc.includes("storm") || desc.includes("thunder"))
    return (
      <WiThunderstorm size={32} className="md:size-[48px] text-indigo-600" />
    );
  if (desc.includes("fog") || desc.includes("mist"))
    return <WiFog size={32} className="md:size-[48px] text-gray-300" />;
  return <WiDaySunny size={32} className="md:size-[48px] text-yellow-400" />;
}

export const WeatherDisplay = () => {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.weather
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: "red" }}>Error: {error}</div>;
  if (!data || !data.main) return <div>No data yet. Search for a city!</div>;

  const summary = data.summery || "";

  return (
    <div className="bg-zinc-800 text-white p-4 md:p-6 rounded shadow-md w-full mt-4">
      <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2 md:gap-3">
        {getWeatherIcon(summary)}
        Weather in {data.name}
      </h2>

      <p className="mb-2 flex items-center gap-2 text-sm md:text-base">
        <WiThermometer size={20} className="md:size-[24px]" />
        Temperature: {data.main.temprature} {data.main.temprature_unit}
      </p>
      <p className="mb-2 flex items-center gap-2 text-sm md:text-base">
        <WiThermometerExterior size={20} className="md:size-[24px]" />
        Feels Like: {data.main.temprature_feels_like}{" "}
        {data.main.temprature_unit}
      </p>
      <p className="mb-2 flex items-center gap-2 text-sm md:text-base">
        <WiThermometer size={20} className="md:size-[24px]" />
        Min / Max: {data.main.temprature_min} {data.main.temprature_unit} /{" "}
        {data.main.temprature_max} {data.main.temprature_unit}
      </p>
      <p className="mb-2 flex items-center gap-2 text-sm md:text-base">
        <WiHumidity size={20} className="md:size-[24px]" />
        Humidity: {data.main.humidity} {data.main.humidity_unit}
      </p>
      <p className="mb-2 flex items-center gap-2 text-sm md:text-base">
        <WiBarometer size={20} className="md:size-[24px]" />
        Pressure: {data.main.pressure} {data.main.pressure_unit}
      </p>
      {summary && <p className="mb-2">Summary: {summary}</p>}
    </div>
  );
};
