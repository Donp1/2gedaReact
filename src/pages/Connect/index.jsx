import { useEffect, useState } from "react";
import MainLayout from "../../Layout/MainLayout";
import DashMessage from "../../components/Dashboard/DasMess";
import Follower from "../../components/Dashboard/Follower";
import "./style.css";
import ConnectSearch from "../../components/ConnectComp/ConnectSearch";
import SelectCategory from "../../components/Dashboard/SelectCategory";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Carousel from "react-bootstrap/Carousel";
import { GiShare } from "react-icons/gi";
import ProfileStick from "../../components/Commons/ProfileStick";
import SearchBusinessCard from "../../components/SearchComp/SearchBusinessCard";
import BusinessStick from "../../components/Commons/BusinessStick";
import ClamBuss from "../BussinessDirectory/ClamBuss";
import CarouselBox from "./CarouselBox";

const Data = [
  {
    text: "People nearby",
  },
  {
    text: "Businesses nearby",
  },
];

const Connect = () => {
  const [activeTab, setActiveTab] = useState("People nearby");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isBussinessOpen, setIsBussinessOpen] = useState(false);
  const [isClaimModalOpen, setIsClaimModalOpen] = useState(false);
  const [isClaimModalOpenOne, setIsClaimModalOpenOne] = useState(false);
  const [isClaimModalOpenTwo, setIsClaimModalOpenTwo] = useState(false);
  const [isClaimModalOpenThree, setIsClaimModalOpenThree] = useState(false);
  const [isClaimModalOpenDone, setIsClaimModalOpenDone] = useState(false);

  const people = [
    {
      image: "images/pic2.png",
      name: "Mercy Alake",
      username: "mercyalkkk",
      location: "Abeokuta, 56km From you",
      bio: "Adewalw wed addyjum Adewalw wed addyjum Adewal...",
    },
    {
      image: "images/pic3.png",
      name: "Mercy Alake",
      username: "mercyalkkk",
      location: "Abeokuta, 56km From you",
      bio: "Adewalw wed addyjum Adewalw wed addyjum Adewal...",
    },
    {
      image: "images/pic2.png",
      name: "Mercy Alake",
      username: "mercyalkkk",
      location: "Abeokuta, 56km From you",
      bio: "Adewalw wed addyjum Adewalw wed addyjum Adewal...",
    },
    {
      image: "images/pic3.png",
      name: "Mercy Alake",
      username: "mercyalkkk",
      location: "Abeokuta, 56km From you",
      bio: "Adewalw wed addyjum Adewalw wed addyjum Adewal...",
    },
    {
      image: "images/pic2.png",
      name: "Mercy Alake",
      username: "mercyalkkk",
      location: "Abeokuta, 56km From you",
      bio: "Adewalw wed addyjum Adewalw wed addyjum Adewal...",
    },
    {
      image: "images/pic3.png",
      name: "Mercy Alake",
      username: "mercyalkkk",
      location: "Abeokuta, 56km From you",
      bio: "Adewalw wed addyjum Adewalw wed addyjum Adewal...",
    },
    {
      image: "images/pic2.png",
      name: "Mercy Alake",
      username: "mercyalkkk",
      location: "Abeokuta, 56km From you",
      bio: "Adewalw wed addyjum Adewalw wed addyjum Adewal...",
    },
    {
      image: "images/pic3.png",
      name: "Mercy Alake",
      username: "mercyalkkk",
      location: "Abeokuta, 56km From you",
      bio: "Adewalw wed addyjum Adewalw wed addyjum Adewal...",
    },
    {
      image: "images/pic2.png",
      name: "Mercy Alake",
      username: "mercyalkkk",
      location: "Abeokuta, 56km From you",
      bio: "Adewalw wed addyjum Adewalw wed addyjum Adewal...",
    },
    {
      image: "images/pic3.png",
      name: "Mercy Alake",
      username: "mercyalkkk",
      location: "Abeokuta, 56km From you",
      bio: "Adewalw wed addyjum Adewalw wed addyjum Adewal...",
    },
    {
      image: "images/pic2.png",
      name: "Mercy Alake",
      username: "mercyalkkk",
      location: "Abeokuta, 56km From you",
      bio: "Adewalw wed addyjum Adewalw wed addyjum Adewal...",
    },
    {
      image: "images/pic3.png",
      name: "Mercy Alake",
      username: "mercyalkkk",
      location: "Abeokuta, 56km From you",
      bio: "Adewalw wed addyjum Adewalw wed addyjum Adewal...",
    },
  ];

  const handleClaimClickDone = (e) => {
    e.preventDefault();
    setIsClaimModalOpenDone(true);
  };
  const handleClaimClickCloseDone = () => {
    setIsClaimModalOpenDone(false);
    setIsClaimModalOpenThree(false);
    setIsClaimModalOpenTwo(false);
    setIsClaimModalOpenOne(false);
    setIsClaimModalOpen(false);
  };

  const handleClaimClickThree = (e) => {
    e.preventDefault();
    setIsClaimModalOpenThree(true);
  };
  const handleClaimClickCloseThree = () => {
    setIsClaimModalOpenThree(false);
  };
  const handleClaimClickTwo = (e) => {
    e.preventDefault();
    setIsClaimModalOpenTwo(true);
  };
  const handleClaimClickCloseTwo = () => {
    setIsClaimModalOpenTwo(false);
  };
  const handleClaimClickOne = (e) => {
    e.preventDefault();
    setIsClaimModalOpenOne(true);
  };
  const handleClaimClickCloseOne = () => {
    setIsClaimModalOpenOne(false);
  };
  const handleClaimClick = () => {
    setIsClaimModalOpen(true);
  };
  const handleClaimClickClose = () => {
    setIsClaimModalOpen(false);
  };

  const handleBussinessClose = () => {
    setIsBussinessOpen(false);
  };

  const handleBussinessClick = () => {
    setIsBussinessOpen(true);
  };

  const handleProfileClose = () => {
    setIsProfileOpen(false);
  };

  const handleProfileClick = () => {
    setIsProfileOpen(true);
  };

  const handleTabClick = (text) => {
    setActiveTab(text);
  };

  const moveRight = () => {
    setActiveIndex((prevIndex) => prevIndex + 1);
    if (activeIndex >= people?.length - 1) setActiveIndex(people?.length - 1);
    // alert(activeIndex);
  };
  const moveLeft = () => {
    setActiveIndex((prevIndex) => prevIndex - 1);
    if (activeIndex <= 0) setActiveIndex(0);
    // alert(activeIndex);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ClamBuss
        handleClaimClickDone={handleClaimClickDone}
        handleClaimClickCloseDone={handleClaimClickCloseDone}
        handleClaimClickThree={handleClaimClickThree}
        handleClaimClickCloseThree={handleClaimClickCloseThree}
        handleClaimClickTwo={handleClaimClickTwo}
        handleClaimClickCloseTwo={handleClaimClickCloseTwo}
        handleClaimClickOne={handleClaimClickOne}
        handleClaimClickCloseOne={handleClaimClickCloseOne}
        handleClaimClickClose={handleClaimClickClose}
        handleClaimClick={handleClaimClick}
        isClaimModalOpen={isClaimModalOpen}
        isClaimModalOpenOne={isClaimModalOpenOne}
        isClaimModalOpenTwo={isClaimModalOpenTwo}
        isClaimModalOpenThree={isClaimModalOpenThree}
        isClaimModalOpenDone={isClaimModalOpenDone}
      />
      <div className="home-container">
        <MainLayout>
          <div className="main-containe bus-box-con">
            <div className="left-side-container buss-all-container">
              {isProfileOpen && (
                <ProfileStick handleProfileClose={handleProfileClose} />
              )}
              {isBussinessOpen && (
                <BusinessStick handleBussinessClose={handleBussinessClose} />
              )}
              {!isProfileOpen && !isBussinessOpen && (
                <>
                  <div>
                    <div className="head-line bus-dir">Connect</div>
                    <ConnectSearch />
                    {/* <img src="images/jumia.png" alt="" className="ads-img" /> */}
                  </div>
                  <div className="select-what-display w-dis">
                    {Data.map((item, index) => (
                      <div
                        key={index}
                        className={`tab-item ${
                          item.text === activeTab
                            ? "sel-act connect-tab"
                            : "anot-wid add-bor  connect-tab"
                        }`}
                        onClick={() => handleTabClick(item.text)}
                      >
                        <div className="dis-sel-name conn-t-txt">
                          {item.text}
                        </div>
                      </div>
                    ))}
                  </div>
                  {activeTab === "People nearby" ? (
                    <div className="connect-profile-view-box">
                      <div className="cont-view-connect">
                        <div
                          className={`arrr-ctrl flex ${
                            activeIndex <= 0 && "disable"
                          }`}
                          onClick={moveLeft}
                        >
                          <AiOutlineLeft />
                        </div>
                        <CarouselBox
                          handleProfileClick={handleProfileClick}
                          people={people}
                          activeIndex={activeIndex}
                          setActiveIndex={setActiveIndex}
                        />
                        <div
                          className={`arrr-ctrl flex ${
                            activeIndex >= people?.length - 1 && "disable"
                          }`}
                          onClick={moveRight}
                        >
                          <AiOutlineRight />
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {activeTab === "Businesses nearby" ? (
                    <div className="csss">
                      <div className=" you-may-know-bo">
                        <div className="may-know-box">
                          <SearchBusinessCard
                            handleClaimClick={handleClaimClick}
                            handleBussinessClick={handleBussinessClick}
                          />
                          <SearchBusinessCard
                            handleClaimClick={handleClaimClick}
                            handleBussinessClick={handleBussinessClick}
                          />
                          <SearchBusinessCard
                            handleClaimClick={handleClaimClick}
                            handleBussinessClick={handleBussinessClick}
                          />
                          <SearchBusinessCard
                            handleClaimClick={handleClaimClick}
                            handleBussinessClick={handleBussinessClick}
                          />
                        </div>
                      </div>
                    </div>
                  ) : null}
                </>
              )}
            </div>

            <div className="middle-side-container mvmm">
              <img src="images/ads1.png" alt="" />
            </div>
            <div className="right-side-container">
              <SelectCategory />
              {/* <Follower />
              <div className="mess-bxx-conn">
                <DashMessage />
              </div> */}
            </div>
          </div>
        </MainLayout>
      </div>
    </>
  );
};

export default Connect;
