import { FavoriteContext } from "../context";
import { useLocalStorage } from "../hooks";

const FavoriteProvider = ({ children }) => {
  const [favorite, setFavorite] = useLocalStorage("favorites", []);
  const addToFavorites = (latitude, longitude, location) => {
    setFavorite(...favorite, {
      latitude: latitude,
      longitude: longitude,
      location: location,
    });
  };
  const removeFromFavorite = () => {
    const restFav = favorite.filter((fav) => fav.location !== location);
    setFavorite(restFav);
  };
  return (
    <FavoriteContext.Provider
      value={{ addToFavorites, removeFromFavorite, favorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
