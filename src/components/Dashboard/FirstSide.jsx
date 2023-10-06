import { BsCardImage, BsMic } from "react-icons/bs";
import { FaVideo, FaMusic, FaFileAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import "./style.css";
// import PostFormModal from "../Modals/PostFormModal";

const FirstSide = ({ handleMainContainerClick, hdPhotoOpen }) => {
  return (
    <div className="first-side-container" onClick={handleMainContainerClick}>
      <div className="post-feed-container">
        <div className="post-ead">Post on feed</div>
        {/* <textarea
          name=""
          id=""
          placeholder="Write up to 1,000 words"
          className="text-area"
        ></textarea> */}
        {/* <PostFormModal /> */}

        <div className="down-post-feed">
          <div className="icon-post-feed">
            <BsCardImage className="pic-vid" onClick={hdPhotoOpen} />
            <FaVideo className="pic-vid" />
            <IoLocation className="loca" />
            <FaMusic className="music" />
            <BsMic className="mic" />
            <FaFileAlt className="fil" />
          </div>
          {/* <button className="post-btn" type="submit">
            Post
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default FirstSide;
