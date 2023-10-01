import { MdOutlineFavorite } from "react-icons/md";
const MovieDashCard = () => {
  return (
    <div className="movie-das-card-box">
      <img src="images/p1.png" alt="" />
      <div className="movie-title">Top Flight maverick...</div>
      <div className="mov-year">(2023)</div>
      <div className="lov-icon"><MdOutlineFavorite/></div>
    </div>
  );
};

export default MovieDashCard;
