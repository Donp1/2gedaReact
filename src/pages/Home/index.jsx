import MainLayout from "../../Layout/MainLayout";
import FirstSide from "../../components/Dashboard/FirstSide";
import "./style.css";
const Home = () => {
  return (
    <div className="home-container">
      <MainLayout>
        <div className="main-containe">
          <div className="left-side-container">
            <FirstSide />
            <img src="images/jumia.png" alt="" className="ads-img" />
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default Home;
