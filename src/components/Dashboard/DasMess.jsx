import ShortMessage from "../Commons/ShortMessage";

const DashMessage = () => {
  return (
    <div className="das-mess-container">
      <div className="das-mess-container">
        <div className="mess-headline">Messages</div>
        <div className="list-people-st">
            <ShortMessage/>
            <ShortMessage/>
            <ShortMessage/>
            <ShortMessage/>
            <ShortMessage/>
            <ShortMessage/>
            <ShortMessage/>
        </div>
      </div>
    </div>
  );
};

export default DashMessage;
