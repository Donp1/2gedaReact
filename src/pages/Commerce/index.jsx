import MainLayout from "../../Layout/MainLayout";
import BuySearchComp from "../../components/Commerce/BuySeacComp";
import "./Style.css";

const Commerce = () => {
  return (
    <div className="commerce-container">
      <MainLayout>
        <div className="full-commerce-box">
          <div className="left-commerce-cont">
            <BuySearchComp />
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default Commerce;
