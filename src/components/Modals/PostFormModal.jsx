import { AiOutlineClose } from "react-icons/ai";
import "./style.css";
const PostFormModal = () => {
  return (
    <div className="postFormModal-container">
      <div className="post-clos-box">
        <div className="post-ead">Post on feed</div>
        <AiOutlineClose className="cls-post" />
      </div>
      <textarea
        name=""
        id=""
        placeholder="Write up to 1,000 words"
        className="text-area"
      ></textarea>
      <div className="hashtags-container"></div>
    </div>
  );
};

export default PostFormModal;
