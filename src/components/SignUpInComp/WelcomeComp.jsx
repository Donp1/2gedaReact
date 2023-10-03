import "./style.css";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const WelcomeComp = () => {
  return (
    <div className="welcome-comp-box">
      <img src="images/hero3.jpg" alt="" />
      <div className="ad-main-con">
        <div className="ad-main">
          <div className="ad-text-main">
            Unlock Business and Personal Potentials
          </div>
          <div className="ad-more-tst">
            Meet prospective clients and vendors for your next product or
            service needs
          </div>

          <div className="welc-navi-box">
            <div className="ad-more-tst">Welcome to 2geda</div>

            <div className="navig-cont">
              <div className="navigate-box">
                <AiOutlineArrowLeft />
              </div>
              <div className="navigate-box">
                <AiOutlineArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeComp;
