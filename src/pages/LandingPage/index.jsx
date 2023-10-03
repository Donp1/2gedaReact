import NonAuthNavbar from "../../Layout/NonAuthNav/NonAuthNavbar";
import AboutLanding from "../../components/LandinComp/About";
import HeroSection from "../../components/LandinComp/HeroSection";
import "./style.css"

const Landing = () => {
  return (
    <div className="landing-container">
      <NonAuthNavbar />
     <HeroSection/>
     <AboutLanding/>
    </div>
  );
};

export default Landing;
