const ActionButton = ({ bg, label }) => {
  return (
    <div className="act-btn-cont">
      <button type="submit" className={`action-btn ${bg}`}>
        {label}
      </button>
    </div>
  );
};

export default ActionButton;
