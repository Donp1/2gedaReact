import { AiOutlineClose } from "react-icons/ai";
import { IoSendSharp } from "react-icons/io5";
import "./Style.css";
const BuySearchComp = () => {
  return (
    <div className="buy-sell-comp-cont">
      <div className="head-line">Buy and sell instantly</div>
      <div className="search-send-cont">
        <div className="sear-input-box">
          <AiOutlineClose className="cls" />
          <input
            type="text"
            className="inp-general"
            placeholder="Start typing"
          />
        </div>
        <IoSendSharp className="send-iconn" />
      </div>
    </div>
  );
};

export default BuySearchComp;
