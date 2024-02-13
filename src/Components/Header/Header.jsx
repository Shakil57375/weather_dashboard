import Favorite from "./Favorite";
import Search from "./Search";
import Logo from "./Logo";
import FavoriteLocationsModal from "./FavoriteLocationsModal";

const Header = () => {
  return (
    <div>
      <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
        <nav className="container flex items-center justify-between py-6">
          <Logo />
          <div className="flex items-center gap-4 relative">
            <Search />
            <Favorite />
          </div>
        </nav>
		<FavoriteLocationsModal/>
      </header>
    </div>
  );
};

export default Header;
