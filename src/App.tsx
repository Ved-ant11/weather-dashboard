import { SearchBar } from "./components/SearchBar";
import { WeatherDisplay } from "./components/WeatherDisplay";
import './index.css';

function App() {
  return (
    <div className="bg-zinc-900 min-h-screen w-full flex flex-col">
      <header className="pt-6 pb-4">
        <h1 className="text-5xl font-bold text-white text-center">
          Weather <span className="text-cyan-600">Dashboard</span>
        </h1>
      </header>
      <div className="max-w-2xl mx-auto px-4">
        <p className="text-white text-center mb-6">
          Search for the current <span className="text-yellow-200">weather</span> in any city around the
          world.
        </p>
      </div>
      <div className="max-w-2xl mx-auto px-4">
        <p className="text-white text-center mb-6">
          Enter city name and country code (e.g. Delhi,IN) to get the weather
          details.
        </p>
      </div>
      <div className="max-w-2xl mx-auto px-4 mb-6">
        <SearchBar />
      </div>
      <div className="flex flex-col items-center justify-center flex-1 gap-4">
        <WeatherDisplay />
      </div>
      <footer className="text-center text-white py-4">
        <p>
          Made By{" "}
          <a
            href="https://github.com/Ved-ant11"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-600 hover:underline"
          >
            Vedant
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
