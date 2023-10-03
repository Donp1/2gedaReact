import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Landing from "./pages/LandingPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/signup" element={<Signup />} />
        <Route index path="/landing" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
