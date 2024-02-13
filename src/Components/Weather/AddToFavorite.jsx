import { useEffect, useState } from "react";
import heart from "../../assets/heart.svg";
import heartRed from "../../assets/heart-red.svg";
import { useContext } from "react";
import { FavoriteContext, WeatherContext } from "../../context";
const AddToFavorite = () => {
  const { addToFavorites, removeFromFavorite, favorites } =
    useContext(FavoriteContext);
  const { weatherData } = useContext(WeatherContext);
  console.log(weatherData);
  const [isFav, toggleFav] = useState(false);
  const { latitude, longitude, location } = weatherData;
  useEffect(() => {
    const found = favorites.find((fav) => fav.location === location);
    toggleFav(found);
  }, []);
  const handleFav = () => {
    const found = favorites.find((fav) => fav.location === location);
    if (!found) {
      addToFavorites(latitude, longitude, location);
    } else {
      removeFromFavorite(location);
    }
    toggleFav(!isFav);
  };
  return (
    <div>
      <div className="md:col-span-2">
        <div className="flex items-center justify-end space-x-6">
          <button
            className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
            onClick={handleFav}
          >
            <span>Add to Favorite</span>
            <img src={isFav ? heartRed : heart} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToFavorite;
