import { SearchBar } from "./components/SearchBar";
import { WeatherDisplay } from "./components/WeatherDisplay";
import { SearchHistory } from "./components/SearchHistory";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-zinc-900">
      <header className="pt-6 pb-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Weather <span className="text-cyan-600">Dashboard</span>
        </h1>
        <p className="text-white mt-2 text-base md:text-lg">
          Search for the current{" "}
          <span className="text-yellow-200">weather</span> in any city around
          the world.
        </p>
        <p className="text-white mt-2 text-base md:text-lg">
          Enter city name and country code (e.g.{" "}
          <span className="font-semibold">Delhi,IN</span>)
        </p>
      </header>
      <main className="flex-1 flex flex-col items-center px-2">
        <div className="w-full max-w-xl">
          <SearchBar />
          <SearchHistory />
          <WeatherDisplay />
        </div>
      </main>
      <footer className="text-center text-white py-4 text-sm md:text-base">
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
