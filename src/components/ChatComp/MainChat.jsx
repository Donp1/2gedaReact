import { BiSolidMicrophone, BiSolidEdit } from "react-icons/bi";
import { BsCheck2All } from "react-icons/bs";
import "./chat.css";
const Data = [
  {
    name: "Wale Addyjum",
    text: "You should have sent the details together with the file....... You have sent the details together with the file.......",
    new: "no",
  },
];
const MainChat = () => {
  return (
    <div className="main-chat-container">
      <div className="time-mess-ent">Yesterday</div>
      {Data.length !== 0 ? (
        // Render chat messages if Data is not empty
        Data.map((message, index) => (
          <div key={index} className="chat-container-box">
            <div className="chat-message-connt">
              <div className="mess-time-bcx">{message.text}</div>
              <span>11:09 PM</span>
            </div>
            <div className="chat-message-connt owner">
              <div className="mess-time-bcx">{message.text}</div>
              <span>
                11:09 PM <BsCheck2All className="seck" />
              </span>
            </div>
          </div>
        ))
      ) : (
        // Render chat suggestion container if Data is empty
        <div className="chat-suggestion-container">
          <div className="sugg-head">Ice breaker? We got you!</div>
          <div className="sugg-boxx">
            <div className="suggestion-con">Hi, how are you?</div>
            <div className="suggestion-con">Do you like football?</div>
            <div className="suggestion-con">Do you have an office?</div>
            <div className="suggestion-con">I like your posts</div>
          </div>
        </div>
      )}

      <div className="mic-edit-boox">
        <div className="mic-mess">
          <BiSolidMicrophone />
        </div>
        <div className="mic-mess edt">
          <BiSolidEdit />
        </div>
      </div>
    </div>
  );
};

export default MainChat;
