import { BiSearch } from "react-icons/bi";
import { GoFilter } from "react-icons/go";
import { useState } from "react";
import BussinessFilterModal from "../Modals/BussinessFilterModal";

const TicketSearh = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const handleFilterClick = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="business-search-container">
      <div className="search-container-busi">
        <BiSearch />
        <input
          type="text"
          className="search-inp-bus"
          placeholder="Find event"
        />
      </div>
      {isFilterOpen && <BussinessFilterModal />}
      <div className="filter-search-bus" onClick={handleFilterClick}>
        <GoFilter />
      </div>
    </div>
  );
};

export default TicketSearh;
