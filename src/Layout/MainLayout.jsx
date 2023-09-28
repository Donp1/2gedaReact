import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <div className="layout-container">
      <Sidebar />
      <div className="nav-cild">
        <Navbar />
      </div>
    </div>
  );
};

export default MainLayout;
