import { BiSolidMicrophone, BiSolidEdit } from "react-icons/bi";
import { BsCheck2All } from "react-icons/bs";
import "./chat.css";
import { useEffect, useRef, useState } from "react";
import ChatInputField from "../Modals/chatInputField";
const Data = [
  {
    name: "Wale Addyjum",
    text: "You should have sent the details together with the file....... You have sent the details together with the file.......",
    new: "no",
  },
];
const MainChatPublic = () => {
  const chatContainerRef = useRef(null);
  const [showChatInput, setShowChatInput] = useState(false);

  useEffect(() => {
    // Function to scroll to the bottom of the chat container
    const scrollToBottom = () => {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop =
          chatContainerRef.current.scrollHeight;
      }
    };

    // Scroll to the bottom when the component mounts
    scrollToBottom();
  }, []);
  const handleMicEditClick = () => {
    // Toggle the display of ChatInputField
    setShowChatInput((prevShowChatInput) => !prevShowChatInput);
  };

  return (
    <div className="main-chat-container">
      <div className="message-content">
        <div className="chat-cont" ref={chatContainerRef}>
          <div className="time-mess-ent">Yesterday</div>
          <div className="chat-container-box">
            <div className="chat-message-connt">
              <div className="mess-time-bcx">
                You should have sent the details together with the file.......
                You have sent the details together with the file.......
              </div>
              <span>11:09 PM</span>
            </div>
          </div>
          <div className="message-owner">
            <div className="chat-message-connt owner">
              <div className="mess-time-bcx">
                You should have sent the details together with the file.......
              </div>
              <span>
                11:09 PM <BsCheck2All className="seck" />
              </span>
            </div>
          </div>
          <div className="message-owner">
            <div className="chat-message-connt owner">
              <div className="mess-img">
                <img src="images/pic2.png" alt="" />
                <img src="images/pic1.png" alt="" />
              </div>
              <div className="mess-time-bcx">
                You should have sent the details together with the file.......
              </div>
              <span>
                11:09 PM <BsCheck2All className="seck" />
              </span>
            </div>
          </div>
        </div>
        {/* // Render chat suggestion container if Data is empty */}
        <div className="non-chat-container"></div>
      </div>
      <div className="field-inp-cont">
        {showChatInput && <ChatInputField />}
      </div>
      <div className="mic-edit-boox">
        {/* <div className="mic-mess">
          <BiSolidMicrophone />
        </div> */}
        <div className="mic-mess edt" onClick={handleMicEditClick}>
          <BiSolidEdit />
        </div>
      </div>
    </div>
  );
};

export default MainChatPublic;
