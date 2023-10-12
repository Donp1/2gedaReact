import MainLayout from "../../Layout/MainLayout";
import DashMessage from "../../components/Dashboard/DasMess";
import Follower from "../../components/Dashboard/Follower";
import EventCategory from "../../components/TicketComp/EventCategory";
import EventThisWeek from "../../components/TicketComp/EventThisWeek";
import PopularTicket from "../../components/TicketComp/PopularTicket";
import PromoteTicket from "../../components/TicketComp/PromoteTicket";
import TicketSearh from "../../components/TicketComp/TicketSearch";
import PromotedTicket from "./PromotedTicket";
import "./style.css";

const Ticket = () => {
  return (
    <>
      <div className="home-container">
        <MainLayout>
          <div className="main-containe bus-box-con">
            <div className="left-side-container buss-all-container">
              <div className="sell-manage-cont">
                <div className="btn-sell-pro">
                  <button className="sell-item-comm inc seell">
                    Sell tickets
                  </button>
                </div>
              </div>
              <PromotedTicket />
              {/* <div className="head-line bus-dir">Tickets</div>
              <TicketSearh />
              <PopularTicket />
              <PromoteTicket />
              <EventCategory />
              <EventThisWeek /> */}
            </div>
            <div className="middle-side-container">
              <img src="images/ads1.png" alt="" />
              <img src="images/ads2.png" alt="" />
              <img src="images/ads3.png" alt="" />
            </div>
            <div className="right-side-container">
              <div className="btn-sell-pro">
                <button className="sell-item-comm tic-sell">
                  Sell tickets
                </button>
              </div>
              <Follower />
              <div className="mess-bxx-conn">
                <DashMessage />
              </div>
            </div>
          </div>
        </MainLayout>
      </div>
    </>
  );
};

export default Ticket;
