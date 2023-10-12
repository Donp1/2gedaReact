import TickectCardFull from "../../components/TicketComp/TickectCardFull";
import TicketSearchComp from "../../components/TicketComp/TicketSearchComp";

const PromotedTicket = () => {
  return (
    <>
      <TicketSearchComp label={"Promoted events"} />
      <div className="ticket-full-box">
        <TickectCardFull />
      </div>
    </>
  );
};

export default PromotedTicket;
