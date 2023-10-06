import { PiMegaphoneBold } from "react-icons/pi";
const PublicShortMessage = ({ visib, name, text }) => {
  return (
    <div className="short-mess-container chat-ad">
      <div className="pro-name-cont">
        <div className="pub-icon-con">
          <PiMegaphoneBold />
        </div>
        <div className="name-txt-sot">
          <div className="pro-name-tst">{name}</div>
          <div className="sot-text">{text}</div>
        </div>
      </div>
      <div className="time-unread">
        <div className="pro-time-tx col">12:00pm</div>
        <div className={`${visib} unread-sq`}>5</div>
      </div>
    </div>
  );
};

export default PublicShortMessage;
