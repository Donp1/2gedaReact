import { useEffect, useState } from "react";
import ActionButton from "../Commons/Button";

const VerifyForm = () => {
  const [inputValues, setInputValues] = useState({
    inputValue1: "",
    inputValue2: "",
    inputValue3: "",
    inputValue4: "",
    inputValue5: "",
  });
  const [seconds, setSeconds] = useState(42);
  const [isActive, setIsActive] = useState(true);
  const [timerExpired, setTimerExpired] = useState(false);

  const [inputRefs, setInputRefs] = useState([null, null, null, null, null]);
  console.log(setInputRefs);
  useEffect(() => {
    if (inputRefs[0]) {
      inputRefs[0].focus();
    }
  }, [inputRefs]);

  const handleInputChange = (e, inputNumber) => {
    const value = e.target.value;
    if (value.length <= 1) {
      setInputValues((prevState) => ({
        ...prevState,
        [`inputValue${inputNumber}`]: value,
      }));

      if (value.length === 1 && inputNumber < 5) {
        inputRefs[inputNumber].focus();
      }
    }
  };

  useEffect(() => {
    let interval;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsActive(false);
      setTimerExpired(true);
      // Timer has reached 00:00, you can add your logic here
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, seconds]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    remainingSeconds
  ).padStart(2, "0")}`;

  const allInputsComplete = Object.values(inputValues).every(
    (value) => value !== ""
  );

  console.log("inputValues:", inputValues); // Debug log inputValues
  console.log("allInputsComplete:", allInputsComplete);
  return (
    <div className="verify-form-container">
      <div className="be-condo">Please verify your email</div>
      <div className="ins-tst-dig">
        We sent a 5 digits code to the email you provided
      </div>
      <div className="change-email">
        faithincrease23@gmail.com <span>change</span>
      </div>
      <form action="">
        <div className="verify-inputs">
          {[1, 2, 3, 4, 5].map((inputNumber) => (
            <input
              key={inputNumber}
              type="number"
              value={inputValues[`inputValue${inputNumber}`]}
              onChange={(e) => handleInputChange(e, inputNumber)}
              className={`ver-inp ${
                inputValues[`inputValue${inputNumber}`].length === 1
                  ? "input-background-fill"
                  : ""
              }`}
              ref={(input) => (inputRefs[inputNumber - 1] = input)}
            />
          ))}
        </div>

        <div className="counter-resend">
          <div className="count">{formattedTime}</div>
          <div className="resend">
            Didn’t get code?
            {timerExpired ? (
              <span className={`act-resend `}> Resend</span>
            ) : (
              <span className={`resend `}> Resend</span>
            )}
          </div>
        </div>
        <div className="veri-bttn-bx">
          <ActionButton
            label={"verify"}
            bg={allInputsComplete ? "complete-button ver-uncop" : "ver-uncop"}
          />
        </div>
      </form>
    </div>
  );
};

export default VerifyForm;
