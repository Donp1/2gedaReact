import { BsCardImage, BsMic } from "react-icons/bs";
import { FaVideo, FaMusic, FaFileAlt } from "react-icons/fa";
import { IoLocation, IoCloseSharp } from "react-icons/io5";
import { AiOutlineClose, AiFillDelete } from "react-icons/ai";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import "./style.css";
import { useState } from "react";
const PostFormPhotoModal = ({ handleClosePhotoModalClick }) => {
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setImages([...images, ...selectedImages]);
  };

  const handleImageDrop = (e) => {
    e.preventDefault();
    const droppedImages = Array.from(e.dataTransfer.files);
    setImages([...images, ...droppedImages]);
  };

  const preventDefault = (e) => {
    e.preventDefault();
  };
  const handleDeleteItem = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1); // Remove the item at the specified index
    setImages(updatedImages);
  };
  return (
    <div className="postFormModal-container">
      <div className="post-clos-box">
        <div className="post-ead">Post on feed</div>
        <AiOutlineClose
          className="cls-post"
          onClick={handleClosePhotoModalClick}
        />
      </div>
      <textarea
        name=""
        id=""
        placeholder="Write up to 1,000 words"
        className="text-area"
      ></textarea>

      <div
        className="post-img-cont-box"
        onDrop={handleImageDrop}
        onDragOver={preventDefault}
      >
        {images.length > 0 ? (
          images.map((file, index) => {
            if (file.type.startsWith("image/")) {
              // Display images using <img> element
              return (
                <div className="im-vi-bxb">
                  <div
                    className="delete-item"
                    onClick={() => handleDeleteItem(index)}
                  >
                    <AiFillDelete />
                    <div className="del-tss">Delete</div>
                  </div>
                  <img
                    key={index}
                    src={URL.createObjectURL(file)}
                    // alt={`User's Image ${index + 1}`}
                    alt=""
                    className="tem-pic"
                  />
                </div>
              );
            } else if (file.type.startsWith("video/")) {
              // Display videos using <video> element
              return (
                <div className="im-vi-bxb">
                  <div
                    className="delete-item"
                    onClick={() => handleDeleteItem(index)}
                  >
                    <AiFillDelete />
                    <div className="del-tss">Delete</div>
                  </div>
                  <video key={index} autoPlay={false} className="tem-video">
                    <source src={URL.createObjectURL(file)} type={file.type} />
                    Your browser does not support the video tag.
                  </video>
                </div>
              );
            }
            return null; // Ignore unsupported file types
          })
        ) : (
          <>
            <input
              type="file"
              accept="image/*,video/*"
              multiple
              onChange={handleImageChange}
              style={{ display: "none" }}
              id="image-input"
            />
            <label htmlFor="image-input" className="dra-im">
              <MdOutlineAddPhotoAlternate />
              <div className="add-vid">Add Photos/Videos</div>
              <div className="or-dr">or drag and drop</div>
            </label>
          </>
        )}
      </div>
      {images.length > 0 && (
        <>
          <input
            type="file"
            accept="image/*,video/*"
            multiple
            onChange={handleImageChange}
            style={{ display: "none" }}
            id="image-input"
          />
          <label htmlFor="image-input" className="add-new-pic-or">
            <MdOutlineAddPhotoAlternate />
            <div className="add-nnew">Add new</div>
          </label>
        </>
      )}

      {/* <div className="add-new-pic-or">
        <MdOutlineAddPhotoAlternate />
        <div className="add-nnew">Add new</div>
      </div> */}
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
          <BsCardImage className="pic-vid" />
          <FaVideo className="pic-vid" />
          <IoLocation className="loca" />
          <FaMusic className="music" />
          <BsMic className="mic" />
          <FaFileAlt className="fil" />
        </div>
        <button className="post-btn" type="submit">
          Post
        </button>
      </div>
    </div>
  );
};

export default PostFormPhotoModal;
