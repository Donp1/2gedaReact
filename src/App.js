import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Landing from "./pages/LandingPage";
import Signin from "./pages/Signin";
import Verify from "./pages/Verify";
import ForgotPassword from "./pages/ForgotPassword";
import PersonalDetails from "./pages/PersonalDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/signup" element={<Signup />} />
        <Route index path="/signin" element={<Signin />} />
        <Route index path="/landing" element={<Landing />} />
        <Route index path="/verify" element={<Verify />} />
        <Route index path="/forgot" element={<ForgotPassword />} />
        <Route index path="/personaldetail" element={<PersonalDetails />} />
      </Routes>
    </div>
  );
}

export default App;
