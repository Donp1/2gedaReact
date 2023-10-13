import SmallTicketCard from "../Dashboard/smallTicket";

const PopularTicket = () => {
  return (
    <div className="trending-product-container">
      <div className="product-ind">Popular events</div>
      <div className="product-card-row">
        <SmallTicketCard />
        <SmallTicketCard />
        <SmallTicketCard />
        <SmallTicketCard />
        <SmallTicketCard />
        <SmallTicketCard />
        <SmallTicketCard />
        <SmallTicketCard />
        <SmallTicketCard />
      </div>
    </div>
  );
};

export default PopularTicket;
