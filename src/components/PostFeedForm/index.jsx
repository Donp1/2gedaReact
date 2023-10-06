import PostFormModal from "../Modals/PostFormModal";
import PostFormPhotoModal from "../Modals/PostFormPhotoModal";

const PostFeedFormCont = ({
  hdClose,
  isModalOpen,
  isPhotoOpen,
  hdPhotoClose,
  hdPhotoOpen,
}) => {
  return (
    <>
      {isModalOpen && (
        <div className="modal-full-container">
          <PostFormModal
            handleCloseMainContainerClick={hdClose}
            hdPhotoOpen={hdPhotoOpen}
          />
        </div>
      )}
      {isPhotoOpen && (
        <div className="modal-full-container">
          <PostFormPhotoModal handleClosePhotoModalClick={hdPhotoClose} />
        </div>
      )}
    </>
  );
};

export default PostFeedFormCont;
