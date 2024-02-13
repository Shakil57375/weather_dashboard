import { useContext } from "react";
import { FavoriteContext, WeatherContext } from "../context";
import { useLocalStorage } from "../hooks";

const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const addToFavorites = (latitude, longitude, location) => {
    setFavorites([...favorites, {
      latitude: latitude,
      longitude: longitude,
      location: location,
    }]);
  };
  const removeFromFavorite = (location) => {
    const restFav = favorites.filter((fav) => fav.location !== location);
    setFavorites(restFav);
  };  
  return (
    <FavoriteContext.Provider
      value={{ addToFavorites, removeFromFavorite, favorites }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
