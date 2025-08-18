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
    return <WiDaySunny size={48} className="text-yellow-400" />;
  if (desc.includes("cloud"))
    return <WiCloud size={48} className="text-gray-400" />;
  if (desc.includes("rain"))
    return <WiRain size={48} className="text-blue-400" />;
  if (desc.includes("snow"))
    return <WiSnow size={48} className="text-blue-200" />;
  if (desc.includes("storm") || desc.includes("thunder"))
    return <WiThunderstorm size={48} className="text-indigo-600" />;
  if (desc.includes("fog") || desc.includes("mist"))
    return <WiFog size={48} className="text-gray-300" />;
  return <WiDaySunny size={48} className="text-yellow-400" />;
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
    <div className="bg-zinc-800 text-white p-6 rounded shadow-md max-w-md w-full">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
        {getWeatherIcon(summary)}
        Weather in {data.name}
      </h2>

      <p className="mb-2 flex items-center gap-2">
        <WiThermometer size={24} />
        Temperature: {data.main.temprature} {data.main.temprature_unit}
      </p>
      <p className="mb-2 flex items-center gap-2">
        <WiThermometerExterior size={24} />
        Feels Like: {data.main.temprature_feels_like}{" "}
        {data.main.temprature_unit}
      </p>
      <p className="mb-2 flex items-center gap-2">
        <WiThermometer size={24} />
        Min / Max: {data.main.temprature_min} {data.main.temprature_unit} /{" "}
        {data.main.temprature_max} {data.main.temprature_unit}
      </p>
      <p className="mb-2 flex items-center gap-2">
        <WiHumidity size={24} />
        Humidity: {data.main.humidity} {data.main.humidity_unit}
      </p>
      <p className="mb-2 flex items-center gap-2">
        <WiBarometer size={24} />
        Pressure: {data.main.pressure} {data.main.pressure_unit}
      </p>
            
      {summary && <p className="mb-2">Summary: {summary}</p>}
    </div>
  );
};
