import favoriteIcon from "../../assets/heart.svg";
const Favorite = ({ onShow }) => {
  return (
    <div>
      <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
        <img src={favoriteIcon} alt="" />
        <span onClick={onShow}>Favorite Locations</span>
      </div>
    </div>
  );
};

export default Favorite;
