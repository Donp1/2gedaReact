import {
  BsCardImage,
  BsMic,
  BsFillFileEarmarkPdfFill,
  BsAndroid2,
  BsFiletypeExe,
} from "react-icons/bs";
import { FaVideo, FaMusic, FaFileAlt } from "react-icons/fa";
import { PiMicrosoftPowerpointLogo } from "react-icons/pi";
import { SiMicrosoftword, SiMicrosoftexcel } from "react-icons/si";
import { IoLocation, IoCloseSharp } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import "./style.css";
import PostFormPhotoModal from "./PostFormPhotoModal";
import PostFormMusicModal from "./PostFormMusicModal";
import PostFormRecModal from "./PostFormRecModal";
import PostFormWordModal from "./PostFormWordModal";
import PostFormExcelModal from "./PostFormExcelModal";
import PostFormPowerModal from "./PostFormPowerModal";
import PostFormPdfModal from "./PostFormPdfModal";
import PostFormApkModal from "./PostFormApkModal";
import PostFormExeModal from "./PostFormExeModal";
import PostFormLocationModal from "./PostFormLocModal";
const PostFormModal = ({
  handleCloseMainContainerClick,
  hdPhotoOpen,
  hdPhotoClose,
  isPhotoOpen,
}) => {
  return (
    <>
      <div className="postFormModal-container">
        <div className="post-clos-box">
          <div className="post-ead">Post on feed</div>
          <AiOutlineClose
            className="cls-post"
            onClick={handleCloseMainContainerClick}
          />
        </div>
        <textarea
          name=""
          id=""
          placeholder="Write up to 1,000 words"
          className="text-area"
        ></textarea>
        {/* {isPhotoOpen && (
          <div className="viwdt">
            <PostFormPhotoModal handleClosePhotoModalClick={hdPhotoClose} />
          </div>
        )} */}
        {/* {isPhotoOpen && (
          <div className="viwdt">
            <PostFormMusicModal />
          </div>
        )} */}
        {/* {isPhotoOpen && (
          <div className="viwdt">
            <PostFormRecModal />
          </div>
        )} */}
        {/* {isPhotoOpen && (
          <div className="viwdt">
            <PostFormWordModal />
          </div>
        )} */}
        {/* {isPhotoOpen && (
          <div className="viwdt">
            <PostFormExcelModal />
          </div>
        )} */}
        {/* {isPhotoOpen && (
          <div className="viwdt">
            <PostFormPowerModal />
          </div>
        )} */}
        {/* {isPhotoOpen && (
          <div className="viwdt">
            <PostFormPdfModal />
          </div>
        )} */}
        {/* {isPhotoOpen && (
          <div className="viwdt">
            <PostFormApkModal />
          </div>
        )} */}
        {/* {isPhotoOpen && (
          <div className="viwdt">
            <PostFormExeModal />
          </div>
        )} */}
        {isPhotoOpen && (
          <div className="viwdt">
            <PostFormLocationModal />
          </div>
        )}
        <div className="hashtags-container">
          <div className="add-tags-btn">Add hashtag</div>
          <div className="add-tags-btn added-tag-cont">
            <div className="added-tag-tst">#let’sgo</div>
            <AiOutlineClose className="cls-tag" />
          </div>
        </div>
        <div className="hashtags-container">
          <div className="add-tags-frd">Tag Friends</div>
        </div>
        <div className="taged-frd-box">
          <div className="tag-frd-cont">
            <img
              src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
              alt=""
            />
            <IoCloseSharp className="cls-tag-fr" />
          </div>
          <div className="tag-frd-cont">
            <img
              src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
              alt=""
            />
            <IoCloseSharp className="cls-tag-fr" />
          </div>
        </div>
        <div className="down-post-feed">
          <div className="icon-post-feed">
            <BsCardImage className="pic-vid" onClick={hdPhotoOpen} />
            <FaVideo className="pic-vid" />
            <IoLocation className="loca" />
            <FaMusic className="music" />
            <BsMic className="mic" />
            <FaFileAlt className="fil" />
            <SiMicrosoftword className="word" />
            <SiMicrosoftexcel className="excel" />
            <PiMicrosoftPowerpointLogo className="prese" />
            <BsFillFileEarmarkPdfFill className="pdf" />
            <BsAndroid2 className="apk" />
            <BsFiletypeExe className="apk" />
          </div>
          <button className="post-btn" type="submit">
            Post
          </button>
        </div>
      </div>
    </>
  );
};

export default PostFormModal;
