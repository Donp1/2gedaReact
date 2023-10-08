import { useState } from "react";
import MainLayout from "../../Layout/MainLayout";
import ActiveMessage from "../../components/ChatComp/ActiveMessage";
import PrivateMessage from "../../components/ChatComp/PrivateMessage";
import PublicMessage from "../../components/ChatComp/PublicMessage";
import TopCard1 from "../../components/ChatComp/TopCard1";
import TopCard2 from "../../components/ChatComp/TopCard2";
import TopCard3 from "../../components/ChatComp/TopCard3";
import DashMessage from "../../components/Dashboard/DasMess";
import Follower from "../../components/Dashboard/Follower";
import SelectCategory from "../../components/Dashboard/SelectCategory";
import "./style.css";
import ChatHeader from "../../components/ChatComp/ChatHeader";
import MainChat from "../../components/ChatComp/MainChat";
import ChatHeaderPublic from "../../components/ChatComp/ChatHeaderPublic";
import MainChatPublic from "../../components/ChatComp/MainChatPublic";
const Data = [
  {
    name: "Abraham Adesanya",
    text: "How was your flight Joe, i couldnt",
    new: "yes",
  },

  {
    name: "Wale Addyjum",
    text: "How was your flight Joe, i couldnt",
    new: "no",
  },
  {
    name: "Wale Addyjum",
    text: "How was your flight Joe, i couldnt",
    new: "no",
  },
  {
    name: "Wale Addyjum",
    text: "How was your flight Joe, i couldnt",
    new: "no",
  },
];

const Chat = () => {
  const [selectedTopCard, setSelectedTopCard] = useState(1);
  const [showMainChatMess, setShowMainChatMess] = useState(false);
  const [showPublicChatMess, setShowPublicChatMess] = useState(false);

  // Click handlers for each TopCard
  const handleTopCard1Click = () => {
    setSelectedTopCard(1);
  };

  const handleTopCard2Click = () => {
    setSelectedTopCard(2);
  };

  const handleTopCard3Click = () => {
    setSelectedTopCard(3);
  };
  const handleGotoMessagBox = () => {
    setShowMainChatMess(true);
  };
  const handleCloseMessagBox = () => {
    setShowMainChatMess(false);
  };
  const handleGotoPublicMessagBox = () => {
    setShowPublicChatMess(true);
  };
  const handleClosePublicMessagBox = () => {
    setShowPublicChatMess(false);
  };
  // const handleGotoActiveMessagBox = () => {
  //   setShowActiveChatMess(true);
  // };
  // const handleCloseActiveMessagBox = () => {
  //   setShowActiveChatMess(false);
  // };
  return (
    <div className="home-container">
      <MainLayout>
        <div className="main-containe bvc">
          <div className="left-side-container wvit">
            {showMainChatMess && (
              <div className="main-chat-mess">
                <ChatHeader handleCloseMessagBox={handleCloseMessagBox} />
                <MainChat />
              </div>
            )}
            {showPublicChatMess && (
              <div className="main-chat-mess">
                <ChatHeaderPublic
                  handleClosePublicMessagBox={handleClosePublicMessagBox}
                />
                <MainChatPublic />
              </div>
            )}
            {!showMainChatMess && !showPublicChatMess && (
              <div className="add-contt">
                <div className="add-bboxx">
                  <div className="chat-head">Chats</div>
                  <div className="pri-pub-act-row">
                    <TopCard1
                      bg="your-bg-class"
                      handleTopCard1Click={handleTopCard1Click}
                      data={Data.length}
                    />
                    <TopCard2
                      bg="your-bg-class"
                      handleTopCard2Click={handleTopCard2Click}
                      data={Data.length}
                    />
                    <TopCard3
                      bg="your-bg-class"
                      handleTopCard3Click={handleTopCard3Click}
                      data={Data.length}
                    />
                  </div>
                  <div className="ads-mag ">
                    <img src="images/ads4.png" alt="" />
                  </div>
                </div>
                {selectedTopCard === 1 && (
                  <PrivateMessage
                    Data={Data}
                    handleGotoMessagBox={handleGotoMessagBox}
                  />
                )}
                {selectedTopCard === 2 && (
                  <PublicMessage
                    Data={Data}
                    handleGotoPublicMessagBox={handleGotoPublicMessagBox}
                  />
                )}
                {selectedTopCard === 3 && (
                  <ActiveMessage
                    Data={Data}
                    handleGotoMessagBox={handleGotoMessagBox}
                  />
                )}
              </div>
            )}
          </div>
          <div className="middle-side-container cvvv">
            <img src="images/ads1.png" alt="" />
            {/* <img src="images/ads2.png" alt="" />
            <img src="images/ads3.png" alt="" /> */}
          </div>
          <div className="right-side-container">
            <SelectCategory />
            <Follower />
            <div className="mess-bxx-conn">
              <DashMessage />
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default Chat;
