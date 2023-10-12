import { useState } from "react";
import StatusModal from "../Modals/StatusModal";
import Status from "./Status";
import { FaPlus } from "react-icons/fa6";

const StatusContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleMainContainerClick = () => {
    setIsModalOpen(true);
  };
  const handleCloseMainContainerClick = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {isModalOpen && (
        <div className="modal-full-container">
          <StatusModal
            handleCloseMainContainerClick={handleCloseMainContainerClick}
          />
        </div>
      )}
      <div className="life-satus" onClick={handleMainContainerClick}>
        <div className="em-im">
          <FaPlus />
        </div>
        <div className="status-text">Your lifestyle</div>
      </div>
      <Status />
      <Status />
      <Status />
      <Status />
      <Status />
      <Status />
      <Status />
      <Status />
      <Status />
      <Status />
      <Status />
      <Status />
    </>
  );
};

export default StatusContainer;
