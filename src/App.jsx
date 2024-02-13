import Header from "./Components/Header/Header";
import WeatherBoard from "./Components/Weather/WeatherBoard";
import "./index.css";
import { FavoriteProvider, WeatherProvider } from "./provider";
export default function App() {
  return (
    <WeatherProvider>
      <FavoriteProvider>
        <div>
          <Header />
          <main className="bg-no-repeat bg-cover h-screen grid place-items-center">
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      </FavoriteProvider>
    </WeatherProvider>
  );
}
