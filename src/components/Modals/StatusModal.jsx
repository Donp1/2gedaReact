import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";
import EachStatus from "../Commons/EachStatus";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://3.bp.blogspot.com/-km-24oMrcqo/Wv3Kj82uFtI/AAAAAAAAWBQ/Tw8RBvpyaBU3dtpIcyp1Opr4nKgzrufEACLcBGAs/s1600/STREET%2BPHOTOGRAPHY%2Bwith%2BPeter%2BMcKinnon.jpg",
  "https://1.bp.blogspot.com/-SRfm7uawCzI/XEeaeZkTp1I/AAAAAAAAX0s/0bZ0jwlbVtgHke6igAsXJInLs-Z32UBjwCLcBGAs/s1600/3%2Bcamera%2Btricks%2BNO%2BONE%2Bwill%2Bsuspect%2521.jpg",
  // Add more image URLs as needed
];
const Arrow = ({ direction, onClick }) => (
  <div className={`arrow ${direction}`} onClick={onClick}>
    {direction === "left" ? "<" : ">"}
  </div>
);

const StatusModal = ({ handleCloseMainContainerClick }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1,
    autoplay: true, // Autoplay the carousel
    autoplaySpeed: 20000, // Autoplay speed in milliseconds
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="arrow left" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  }

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <div className="arrow right" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  }
  return (
    <div className="postFormModal-container status-modal-container">
      <div className="status-nav">
        <AiOutlineClose
          className="cls-post"
          onClick={handleCloseMainContainerClick}
        />
        <div className="logo-container status-nav-logo">
          <img src="images/lo2.png" alt="" className="logo-img" />
          <div className="logo-text">2geda</div>
        </div>
      </div>
      <div className="all-status-container">
        <div className="owner-status-cont">
          <div className="add-status-m">
            <FaPlus />
          </div>
          <div className="life-style-cont">
            <div className="life-style">Your lifestyle</div>
            <div className="advi-style">Share an event or happening.</div>
          </div>
        </div>
        <div className="all-the-sticker-status">
          <div className="the-sticker-status-cont">
            <EachStatus />
            <EachStatus />
            <EachStatus />
            <EachStatus />
            <EachStatus />
            <EachStatus />
            <EachStatus />
            <EachStatus />
            <EachStatus />
            <EachStatus />
            <EachStatus />
          </div>
        </div>
      </div>
      <div className="status-img-container">
        <div className="status-back-box">
          <div className="arrow-control">
            <AiOutlineLeft />
          </div>
          <div className="status-images-cont-bbx">
            <img src="images/pic2.png" alt="" />
          </div>
          <div className="arrow-control">
            <AiOutlineRight />
          </div>
          {/* <Slider {...settings}>
            <div className="test">
              <img
                src="https://3.bp.blogspot.com/-km-24oMrcqo/Wv3Kj82uFtI/AAAAAAAAWBQ/Tw8RBvpyaBU3dtpIcyp1Opr4nKgzrufEACLcBGAs/s1600/STREET%2BPHOTOGRAPHY%2Bwith%2BPeter%2BMcKinnon.jpg"
                alt=""
              />
            </div>
            <div className="test">
              <img
                src="https://1.bp.blogspot.com/-SRfm7uawCzI/XEeaeZkTp1I/AAAAAAAAX0s/0bZ0jwlbVtgHke6igAsXJInLs-Z32UBjwCLcBGAs/s1600/3%2Bcamera%2Btricks%2BNO%2BONE%2Bwill%2Bsuspect%2521.jpg"
                alt=""
              />
            </div>
            <div className="test">
              <img
                src="https://3.bp.blogspot.com/-km-24oMrcqo/Wv3Kj82uFtI/AAAAAAAAWBQ/Tw8RBvpyaBU3dtpIcyp1Opr4nKgzrufEACLcBGAs/s1600/STREET%2BPHOTOGRAPHY%2Bwith%2BPeter%2BMcKinnon.jpg"
                alt=""
              />
            </div>
          </Slider> */}
        </div>
      </div>
    </div>
  );
};

export default StatusModal;
