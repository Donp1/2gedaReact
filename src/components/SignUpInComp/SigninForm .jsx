import { useState } from "react";
import ActionButton from "../Commons/Button";
import InputField from "../Commons/InputField";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { NavLink, useNavigate } from "react-router-dom";

const SigninForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isUsingPhone, setIsUsingPhone] = useState(false);
  const [isUsingUsername, setIsUsingUsername] = useState(false);
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const goToForgot = () => {
    navigate("/forgot");
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
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
  const phone_number = phone;

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      console.error("Both username and assword are required.");
      return;
    }
    const userData = {
      username,
      password,
    };
    console.log(userData);

    try {
      const response = await fetch(
        "https://shark-app-ia4iu.ondigitalocean.app/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
      console.log("data", userData);

      const data = await response.json();
      console.log(data); // Display the response data
    } catch (error) {
      // Handle error here
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="sign-form">
      <div className="create-ead-txt">Login</div>
      <div className="greet-txt">
        Welcome back. Enter your details to continue.
      </div>

      <form action="" onSubmit={handleLogin}>
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
              onChange={handleUsernameChange}
            />
          </div>
        )}

        {isUsingUsername && (
          <div className="inp-username">
            <InputField
              placeholder={"Username"}
              type={"text"}
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
        )}

        <div className="pass-con">
          <InputField
            placeholder={"Password"}
            type={passwordVisible ? "text" : "password"}
            onChange={handlePasswordChange}
          />
          <div className="eye-box" onClick={togglePasswordVisibility}>
            {passwordVisible ? (
              <BsEyeSlashFill className="eye-icon" />
            ) : (
              <BsEyeFill className="eye-icon" />
            )}
          </div>
        </div>
        <div className="forg-pas-contan" onClick={goToForgot}>
          Forgot password?
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
