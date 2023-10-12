import MainLayout from "../../Layout/MainLayout";
import BusinessSearch from "../../components/BusinessDirectoryComp/BusinessSearch";
import Follower from "../../components/Dashboard/Follower";
import "./style.css";

const Ticket = () => {
  return (
    <>
      <div className="home-container">
        <MainLayout>
          <div className="main-containe bus-box-con">
            <div className="left-side-container buss-all-container">
              <div className="head-line bus-dir">Tickets</div>
              <BusinessSearch label={"Event"} />
              <div className="business-card-boxx"></div>
            </div>
            <div className="middle-side-container">
              <img src="images/ads1.png" alt="" />
              <img src="images/ads2.png" alt="" />
              <img src="images/ads3.png" alt="" />
            </div>
            <div className="right-side-container">
              <Follower />
            </div>
          </div>
        </MainLayout>
      </div>
    </>
  );
};

export default Ticket;
