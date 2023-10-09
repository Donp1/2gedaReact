import { AiOutlineArrowLeft } from "react-icons/ai";
import "./Second.css";
const SellItem = ({ handleCloseMainContainerClick }) => {
  return (
    <div className="postFormModal-container status-modal-container">
      <div className="sell-connt">
        <AiOutlineArrowLeft
          className="cls-post"
          onClick={handleCloseMainContainerClick}
        />
        <div className="fels">
          <div className="ceny">2geda</div>
        </div>
      </div>

      <div className="status-img-container">
        <div className="status-back-box">
          <div className="status-images-cont-bbx">
            <img src="images/pic2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellItem;
