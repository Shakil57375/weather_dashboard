import Pages from "./Pages/Pages";
import { FavoriteProvider, WeatherProvider } from "./provider";
import LocationProvider from "./provider/LocationProvider";
export default function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavoriteProvider>
          <Pages />
        </FavoriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}
