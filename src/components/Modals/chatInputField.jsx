import { GrAttachment } from "react-icons/gr";

const ChatInputField = () => {
  return (
    <div className="chat-input-field">
      <textarea
        type="text"
        className="mess-inpt"
        placeholder="type ur message here"
      />
      <GrAttachment className="att-icon" />
    </div>
  );
};

export default ChatInputField;
