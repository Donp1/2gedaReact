import { useEffect, useState } from "react";
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
import EventThisWeekAll from "./EventThisWeekAll";

const Ticket = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWeekOpen, setIsWeekOpen] = useState(false);
  const handleWeekContainerClick = () => {
    setIsWeekOpen(true);
  };
  const handleWeekCloseContainerClick = () => {
    setIsWeekOpen(false);
  };

  const handleContainerClick = () => {
    setIsModalOpen(true);
  };
  const handleCloseContainerClick = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
              {isModalOpen && (
                <PromotedTicket
                  handleCloseContainerClick={handleCloseContainerClick}
                />
              )}
              {isWeekOpen && (
                <EventThisWeekAll
                  handleCloseContainerClick={handleWeekCloseContainerClick}
                />
              )}
              {!isModalOpen && !isWeekOpen && (
                <div>
                  <div className="head-line bus-dir">Tickets</div>
                  <TicketSearh />
                  <PopularTicket />
                  <PromoteTicket handleContainerClick={handleContainerClick} />
                  <EventCategory />
                  <EventThisWeek
                    handleWeekContainerClick={handleWeekContainerClick}
                  />
                </div>
              )}
            </div>
            <div className="middle-side-container">
              <img src="images/ads1.png" alt="" />
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
