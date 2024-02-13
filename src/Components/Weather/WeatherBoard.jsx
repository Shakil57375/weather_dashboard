import AddToFavorite from "./AddToFavorite";
import WeatherCondition from "./WeatherCondition";
import WeatherHeadLine from "./WeatherHeadLine";

const WeatherBoard = () => {
  return (
    <div>
      <div className="container">
        <div className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
          <AddToFavorite />
          <div className="grid md:grid-cols-2 gap-10 md:gap-6">
            <WeatherHeadLine />
            <WeatherCondition />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherBoard;