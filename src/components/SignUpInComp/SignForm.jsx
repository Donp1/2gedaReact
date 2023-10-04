import { useState } from "react";
import ActionButton from "../Commons/Button";
import InputField from "../Commons/InputField";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { NavLink } from "react-router-dom";

const SignForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isUsingPhone, setIsUsingPhone] = useState(false);
  const [phone, setPhone] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleUsePhoneClick = () => {
    setIsUsingPhone(!isUsingPhone);
  };
  return (
    <div className="sign-form">
      <div className="create-ead-txt">Create an Account</div>
      <div className="greet-txt">
        Welcome to 2geda. To continue, please provide your details
      </div>

      <form action="">
        {isUsingPhone ? (
          <div className="inp-phone">
            <PhoneInput
              defaultCountry="NG"
              className="custom-phone-input"
              value={phone}
              style={{ height: "40px" }}
              onChange={(phone) => setPhone(phone)}
              placeholder="+234 80 2015 5501"
              required
            />
            {/* <InputField placeholder={"Input Phone Number"} type={"tel"} /> */}
            <div className="ins-bx-txt">
              We’ll verify the phone provided to be sure it belongs to you
            </div>
          </div>
        ) : (
          <div className="inp-email">
            <InputField placeholder={"Input email address"} type={"text"} />
            <div className="ins-bx-txt">
              We’ll verify the email provided to be sure it belongs to you
            </div>
          </div>
        )}

        <div className="use-phone" onClick={handleUsePhoneClick}>
          {isUsingPhone
            ? "Use Email address instead"
            : "Use Phone number instead"}
        </div>

        <InputField placeholder={"Username"} type={"text"} />
        <div className="pass-con">
          <InputField
            placeholder={"Create Password"}
            type={passwordVisible ? "text" : "password"}
          />
          <div className="eye-box" onClick={togglePasswordVisibility}>
            {passwordVisible ? (
              <BsEyeSlashFill className="eye-icon" />
            ) : (
              <BsEyeFill className="eye-icon" />
            )}
          </div>
        </div>
        <div className="btn-continu">
          <ActionButton label={"Continue"} bg={"ma-d"} />
        </div>
        <div className="alr-ave">
          Already have an account?{" "}
          <span>
            <NavLink className="goto-link" to="/signin">
              Sign in
            </NavLink>
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignForm;
