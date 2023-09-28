import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div className="layout-container">
      <Sidebar />
      <div className="nav-cild">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
