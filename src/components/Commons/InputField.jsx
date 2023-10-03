const InputField = ({ placeholder, type }) => {
  return (
    <div className="inp-cont">
      <input type={type} className="form-inp" placeholder={placeholder} />
    </div>
  );
};

export default InputField;
