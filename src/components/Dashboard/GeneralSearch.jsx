import { AiOutlineClose } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { IoSendSharp } from "react-icons/io5";

const GeneralSearch = () => {
  return (
    <div className="general-search-container">
      <div className="search-send-cont">
        <div className="sear-input-box">
          <BiSearch />
          <input
            type="text"
            className="inp-general"
            placeholder="Start typing"
          />
        </div>
        <IoSendSharp className="send-iconn" />
      </div>
      <div className="down-cont">
        <div className="recent-see-all">
          <div className="recent-sear">Recent searches</div>
          <div className="clear-all-searc">Clear all</div>
        </div>
        <div className="search-text-close-bx">
          <div className="search-text">Sandra</div>
          <AiOutlineClose />
        </div>
      </div>
    </div>
  );
};

export default GeneralSearch;
