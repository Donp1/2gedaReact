import { useState } from "react";
import MainLayout from "../../Layout/MainLayout";
import AutomobileProduct from "../../components/Commerce/Automobile";
import BuySearchComp from "../../components/Commerce/BuySeacComp";
import FurnitureProduct from "../../components/Commerce/Funiture";
import Shortcart from "../../components/Commerce/ShortCart";
import SkinCareProduct from "../../components/Commerce/SkinCare";
import SuggestedBusiness from "../../components/Commerce/SuggestedBusiness";
import TrendingProduct from "../../components/Commerce/TrendingPro";
import SelectCategory from "../../components/Dashboard/SelectCategory";
import TopSeller from "../../components/Dashboard/TopSeller";
import SellItem from "../../components/Modals/SellItem";
import "./Style.css";

const Commerce = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMainContainerClick = () => {
    setIsModalOpen(true);
  };
  const handleCloseMainContainerClick = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="commerce-container">
      <MainLayout>
        {isModalOpen && (
          <div className="modal-full-container">
            <SellItem
              handleCloseMainContainerClick={handleCloseMainContainerClick}
            />
          </div>
        )}

        <div className="full-commerce-box">
          <div className="left-commerce-cont">
            <BuySearchComp />
            <TrendingProduct />
            <div className="prod-ads">
              <img src="images/ads5.png" alt="" />
            </div>
            <AutomobileProduct />
            <SuggestedBusiness />
            <FurnitureProduct />
            <SkinCareProduct />
          </div>
          <div className="rightSide-commerce">
            <div className="btn-sell-pro">
              <button
                className="sell-item-comm"
                onClick={handleMainContainerClick}
              >
                Sell an item
              </button>
            </div>
            <div className="btn-sell-pro">
              <button className="sell-item-comm mann">Manage store</button>
            </div>
            <SelectCategory />
            <TopSeller />
            <Shortcart />
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default Commerce;
