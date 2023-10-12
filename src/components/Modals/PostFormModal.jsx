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
import PostFormFilesModal from "./PostFormFilesModal";
const PostFormModal = ({
  handleCloseMainContainerClick,
  selectedIcon,
  handleIconClick,
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

        <div className="viwdt">
          {selectedIcon === "photo" && <PostFormPhotoModal />}
          {selectedIcon === "music" && <PostFormMusicModal />}
          {selectedIcon === "rec" && <PostFormRecModal />}
          {selectedIcon === "word" && <PostFormWordModal />}
          {selectedIcon === "excel" && <PostFormExcelModal />}
          {selectedIcon === "power" && <PostFormPowerModal />}
          {selectedIcon === "pdf" && <PostFormPdfModal />}
          {selectedIcon === "apk" && <PostFormApkModal />}
          {selectedIcon === "exe" && <PostFormExeModal />}
          {selectedIcon === "location" && <PostFormLocationModal />}
          {selectedIcon === "allfiles" && <PostFormFilesModal />}
        </div>
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
            <BsCardImage
              className="pic-vid"
              onClick={() => handleIconClick("photo")}
            />
            <FaVideo
              className="pic-vid"
              onClick={() => handleIconClick("photo")}
            />
            <IoLocation
              className="loca"
              onClick={() => handleIconClick("location")}
            />
            <FaMusic
              className="music"
              onClick={() => handleIconClick("music")}
            />
            <BsMic className="mic" onClick={() => handleIconClick("rec")} />
            <FaFileAlt
              className="fil"
              onClick={() => handleIconClick("allfiles")}
            />
            <SiMicrosoftword
              className="word"
              onClick={() => handleIconClick("word")}
            />
            <SiMicrosoftexcel
              className="excel"
              onClick={() => handleIconClick("excel")}
            />
            <PiMicrosoftPowerpointLogo
              className="prese"
              onClick={() => handleIconClick("power")}
            />
            <BsFillFileEarmarkPdfFill
              className="pdf"
              onClick={() => handleIconClick("pdf")}
            />
            <BsAndroid2
              className="apk"
              onClick={() => handleIconClick("apk")}
            />
            <BsFiletypeExe
              className="apk"
              onClick={() => handleIconClick("exe")}
            />
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
