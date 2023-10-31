import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Slide, ToastContainer, toast } from "react-toastify";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  let [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );

  let [loading, setLoading] = useState(true);
  let [profile, setProfile] = useState([]);
  let [userdata, setUserdata] = useState([]);
  const navigate = useNavigate();
  const apiUrl = process.env.PUBLIC_URL;

  let signupUser = async (e) => {
    e.preventDefault();
    let response = await fetch(
      "https://jabbaman.onrender.com/accounts/register/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: e.target.email.value,
          phone: e.target.phone.value,
          username: e.target.username.value,
          password: e.target.password.value,
        }),
      }
    );
    let data = await response.json();
    console.log(data);
    if (response.status === 201) {
      const message = "Account created successfully";
      toast.success(message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000, //3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        transition: Slide,
      });
      setTimeout(() => {
        navigate("/signin");
      }, 3000);
    } else {
      toast.error("Invalid Credentials", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  let context_data = {
    // authTokens: authTokens,
    signupUser: signupUser, // make sure signupUser is included here
    // profile: profile,
    // userdata: userdata,
  };

  return (
    <AuthContext.Provider value={{ signupUser: signupUser }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
