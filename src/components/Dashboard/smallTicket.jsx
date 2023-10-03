import "./second.css";
const SmallTicketCard = () => {
  return (
    <div className="small-ticket-card">
      <div className="im-tic-con">
        <div className="live-tict-lo">
          <div className="live-tic">Live event</div>
        </div>
        <div className="live-tict-im">
          <img src="images/lo1.png" alt="" />
        </div>
        <img src="images/pic1.png" alt="" />
      </div>
      <div className="tic-title">Meta app unveil</div>
      <div className="date-loc">Thur, 17 Aug, 2023 - Eko Hotel ....</div>

      <div className="tic-btn-con">
        <button className="tick-btn">Get ticket</button>
      </div>
    </div>
  );
};

export default SmallTicketCard;
