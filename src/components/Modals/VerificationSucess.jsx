import { FaCheck } from "react-icons/fa";
import ActionButton from "../Commons/Button";

const VerificationSucess = () => {
  return (
    <div className="verif-sucess-container flex">
      <div className="checked-sucss flex">
        <FaCheck />
      </div>
      <div className="req-sent">Request sent</div>
      <div className="pass-info">
        Profile Verification takes up to a weeks or more at times.
      </div>
      <ActionButton label={"Done"} />
    </div>
  );
};

export default VerificationSucess;
