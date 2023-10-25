import { useEffect, useState } from "react";
import MainLayout from "../../Layout/MainLayout";
import DashMessage from "../../components/Dashboard/DasMess";
import Follower from "../../components/Dashboard/Follower";
import "./style.css";
import ConnectSearch from "../../components/ConnectComp/ConnectSearch";
import SelectCategory from "../../components/Dashboard/SelectCategory";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
// import Carousel from "react-bootstrap/Carousel";
import { GiShare } from "react-icons/gi";
import ProfileStick from "../../components/Commons/ProfileStick";
import SearchBusinessCard from "../../components/SearchComp/SearchBusinessCard";
import BusinessStick from "../../components/Commons/BusinessStick";
import ClamBuss from "../BussinessDirectory/ClamBuss";

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
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isBussinessOpen, setIsBussinessOpen] = useState(false);
  const [isClaimModalOpen, setIsClaimModalOpen] = useState(false);
  const [isClaimModalOpenOne, setIsClaimModalOpenOne] = useState(false);
  const [isClaimModalOpenTwo, setIsClaimModalOpenTwo] = useState(false);
  const [isClaimModalOpenThree, setIsClaimModalOpenThree] = useState(false);
  const [isClaimModalOpenDone, setIsClaimModalOpenDone] = useState(false);

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
                      {/* <Carousel data-bs-theme="dark">
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://st.depositphotos.com/4678277/58244/i/450/depositphotos_582441556-stock-photo-photo-handsome-excited-person-hold.jpg"
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-846741.jpg&fm=jpg"
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-846741.jpg&fm=jpg"
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
                      alt="Second slide"
                    />
                  </Carousel.Item>
                </Carousel> */}

                      <div className="cont-view-connect">
                        <div className="arrr-ctrl disable flex">
                          <AiOutlineLeft />
                        </div>
                        <div className="image-bx-cont">
                          <div className="share-bx flex">
                            <GiShare />
                          </div>
                          <div className="indicator-bx">
                            <div className="ind-con actvv"></div>
                            <div className="ind-con"></div>
                            <div className="ind-con"></div>
                          </div>
                          <img
                            // src="https://cdn-s-www.bienpublic.com/images/4AFF773E-4799-4A4F-8609-93C26E4883D6/NW_raw/les-compagnons-de-la-loucholle-comptent-quatre-intronises-de-plus-au-sein-de-leur-confrerie-photo-pierre-aubrun-1652788419.jpg"
                            src="images/pic3.png"
                            alt=""
                          />
                          <div className="prof-bx-connect">
                            <img
                              src="images/pic1.png"
                              alt=""
                              onClick={handleProfileClick}
                            />
                            <div className="user-nmm">Mercy Alake</div>
                            <div className="username-txtt">@mercyalkkk</div>
                            <div className="username-txtt">
                              Abeokuta, 56km From you
                            </div>
                            <div className="username-txtt biiio">
                              Adewalw wed addyjum Adewalw wed addyjum Adewal...
                            </div>
                          </div>
                          <div className="chat-stick-btn-bx flex">
                            <button className="ch-st-btn ora-btn">Chat</button>
                            <button className="ch-st-btn">Stick</button>
                          </div>
                        </div>
                        <div className="arrr-ctrl flex">
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
