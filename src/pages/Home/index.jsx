import MainLayout from "../../Layout/MainLayout";
import DashMessage from "../../components/Dashboard/DasMess";
import FirstSide from "../../components/Dashboard/FirstSide";
import Follower from "../../components/Dashboard/Follower";
import PostComp from "../../components/Dashboard/PostComp";
import { FaPlus } from "react-icons/fa6";
import SelectCategory from "../../components/Dashboard/SelectCategory";
import "./style.css";
import Status from "../../components/Dashboard/Status";
import MusicDash from "../../components/Dashboard/MusicDas";
import SmallTicketCard from "../../components/Dashboard/smallTicket";
import ProductDash from "../../components/Dashboard/ProductDAs";
import MovieDashCard from "../../components/Dashboard/MovieDas";
import Stick from "../../components/Dashboard/Stick";
// import Slider from "react-slick";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";
const Home = () => {
 
  return (
    <div className="home-container">
      <MainLayout>
        <div className="main-containe">
          <div className="left-side-container">
            <FirstSide />
            <img src="images/jumia.png" alt="" className="ads-img" />
            <div className="status-row">
              <div className="life-satus">
                <div className="em-im">
                  <FaPlus />
                </div>
                <div className="status-text">Your lifestyle</div>
              </div>
              <Status />
              <Status />
              <Status />
              <Status />
              <Status />
              <Status />
              <Status />
              <Status />
              <Status />
              <Status />
              <Status />
              <Status />
            </div>
            <div className="select-what-display">
              <div className="anot-wid">
                <div className="dis-sel-name sel-act">All posts</div>
              </div>
              <div className="anot-wid">
                <div className="dis-sel-name ">Images</div>
              </div>
              <div className="anot-wid">
                <div className="dis-sel-name">Videos</div>
              </div>
              <div className="anot-wid">
                <div className="dis-sel-name">Products</div>
              </div>
              <div className="anot-wid">
                <div className="dis-sel-name">Voice note</div>
              </div>
              <div className="anot-wid">
                <div className="dis-sel-name">Location</div>
              </div>
              <div className="anot-wid">
                <div className="dis-sel-name">Music</div>
              </div>
              <div className="anot-wid">
                <div className="dis-sel-name">Files</div>
              </div>
            </div>
            <PostComp />
            
              <div className="music-das-row">
              <MusicDash />
              <MusicDash />
              <MusicDash />
              <MusicDash />
              <MusicDash />
              </div>
            <PostComp />
            <div className="ticket-das-row">
              <SmallTicketCard />
              <SmallTicketCard />
              <SmallTicketCard />
              <SmallTicketCard />
              <SmallTicketCard />
              <SmallTicketCard />
              <SmallTicketCard />
            </div>
            <PostComp />
            <div className="ticket-das-row">
              <ProductDash />
              <ProductDash />
              <ProductDash />
              <ProductDash />
              <ProductDash />
            </div>
            <PostComp />
            <div className="movie-das-row">
              <MovieDashCard />
              <MovieDashCard />
              <MovieDashCard />
              <MovieDashCard />
              <MovieDashCard />
            </div>
            <div className="you-may-know">
              <div className="post-ead">People you may know</div>
              <div className="may-know-box">
                <Stick />
                <Stick />
                <Stick />
                <Stick />
                <Stick />
              </div>
            </div>
          </div>
          <div className="middle-side-container">
            <img src="images/ads1.png" alt="" />
            <img src="images/ads2.png" alt="" />
            <img src="images/ads3.png" alt="" />
          </div>
          <div className="right-side-container">
            <SelectCategory />
            <Follower />
            <DashMessage />
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default Home;
