import { useState } from "react";
import ActionButton from "../Commons/Button";
import InputField from "../Commons/InputField";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { NavLink } from "react-router-dom";

const SigninForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isUsingPhone, setIsUsingPhone] = useState(false);
  const [isUsingUsername, setIsUsingUsername] = useState(false);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleUsePhoneClick = () => {
    setIsUsingPhone(!isUsingPhone);
    setIsUsingUsername(false);
  };

  const handleUseUsernameClick = () => {
    setIsUsingUsername(!isUsingUsername);
    setIsUsingPhone(false);
  };

  return (
    <div className="sign-form">
      <div className="create-ead-txt">Login</div>
      <div className="greet-txt">
        Welcome back. Enter your details to continue.
      </div>

      <form action="">
        {isUsingPhone && !isUsingUsername && (
          <div className="inp-phone">
            <PhoneInput
              defaultCountry="NG"
              className="custom-phone-input"
              value={phone}
              style={{ height: "40px" }}
              onChange={(phone) => setPhone(phone)}
              placeholder="+1 201-555-0123"
              required
            />
          </div>
        )}

        {!isUsingPhone && !isUsingUsername && (
          <div className="inp-email">
            <InputField
              placeholder={"Input email address"}
              type={"email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        )}

        {isUsingUsername && (
          <div className="inp-username">
            <InputField
              placeholder={"Username"}
              type={"text"}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        )}

        <div className="pass-con">
          <InputField
            placeholder={"Password"}
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
        <div className="use-phone" onClick={handleUsePhoneClick}>
          {isUsingPhone
            ? "Use Email Address Instead"
            : isUsingUsername
            ? "Use Email Address Instead"
            : "Use Phone Number Instead"}
        </div>
        <div
          className="use-phone"
          onClick={
            isUsingUsername ? handleUsePhoneClick : handleUseUsernameClick
          }
        >
          {isUsingUsername
            ? "Use Phone Number Instead"
            : "Use Username Instead"}
        </div>

        <div className="btn-continu">
          <ActionButton label={"Continue"} bg={"ma-d"} />
        </div>
        <div className="alr-ave">
          New user?{" "}
          <span>
            <NavLink className="goto-link" to="/signup">
              Sign up
            </NavLink>
          </span>
        </div>
      </form>
    </div>
  );
};

export default SigninForm;
