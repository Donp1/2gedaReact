import { BsCardImage, BsFillEmojiSmileFill } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";
import "./style.css";

const FirstSide = () => {
  return (
    <div className="first-side-container">
      <div className="post-feed-container">
        <div className="post-ead">Post on feed</div>
        <textarea
          name=""
          id=""
          placeholder="Write up to 1,000 words"
          className="text-area"
        ></textarea>

        <div className="down-post-feed">
          <div className="icon-post-feed">
            <BsCardImage />
            <FaVideo />
            <BsFillEmojiSmileFill />
          </div>
          <button className="post-btn" type="submit">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstSide;
