import {
  BiSolidLike,
  BiLike,
  BiMessageAlt,
  BiDotsHorizontalRounded,
} from "react-icons/bi";
// import { RiMessage2Fill } from "react-icons/ri";
// import { FaShareSquare } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import Comment from "./Comment";

const PostComp = () => {
  return (
    <div className="postcom">
      <div className="post-comp-container">
        <div className="profile-time">
          <div className="post-profile">
            <img
              src="https://image.cnbcfm.com/api/v1/image/107228941-1682027700192-_DSC5658.jpg?v=1682427601&w=1920&h=1080"
              alt=""
            />
            <div className="post-profile-details">
              <div className="post-profile-name">Dr. Salem Lawal</div>
              <div className="autor-ooby">Pharmacist</div>
              <div className="autor-location">Lagos, Nigeria</div>
            </div>
          </div>
          <div className="time-posted">1hr ago</div>
        </div>
        <hr className="feed-hr" />
        <div className="post-body-box">
          <div className="post-body-text">
            This is the Opportunity to Join the World Leading Tech Professionals
            in 2022. All you need do is to register with the link below <br />
            <br />
            <a href="www.ileifetech.com/freshmen">
              www.ileifetech.com/freshmen
            </a>
          </div>
        </div>
        <div className="post-media">
          <img src="images/post1.png" alt="" />
        </div>
        <div className="post-likes-co">
          <div className="likes-per-post">
            <div className="likes-bx">
              <BiSolidLike className="likes" />
            </div>
            <div className="smil">😊</div>
            <div className="smil">😊</div>
          </div>
          <div className="liker-name-and-total">
            Ademola Kola and 3.2k others
          </div>
        </div>
        <div className="post-likes-box">
          <div className="posted-likes-cont">
            <div className="icon-text">
              <BiLike className="like" />
              <div className="con-test">23k</div>
            </div>
            <div className="icon-text">
              <BiMessageAlt className="mess" />
              <div className="con-test">115</div>
            </div>

            <div className="icon-text">
              <FiShare2 className="share" />
              <div className="con-test">1.3k</div>
            </div>
          </div>
          <BiDotsHorizontalRounded className="dot" />
        </div>
      </div>
      <Comment />
    </div>
  );
};

export default PostComp;
