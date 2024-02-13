import Header from "./Components/Header/Header";
import WeatherBoard from "./Components/Weather/WeatherBoard";
import "./index.css";
export default function App() {
  return (
    <div>
      <Header />
      <main className="bg-no-repeat bg-cover h-screen grid place-items-center">
        <section>
          <WeatherBoard/>
        </section>
      </main>
    </div>
  );
}
