import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const TicketSearchComp = ({ label }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/commerce");
  };
  return (
    <div className="buy-sell-comp-cont tic-sea">
      <div className="back-title">
        <AiOutlineArrowLeft className="ti-bc" onClick={goBack} />
        <div className="head-line">{label}</div>
      </div>
      <div className="search-product">
        <div className="sear-input-pro">
          <input type="text" className="inp-pro" placeholder="Search Events" />
        </div>
        <BiSearch className="seah-con" />
      </div>
    </div>
  );
};

export default TicketSearchComp;
