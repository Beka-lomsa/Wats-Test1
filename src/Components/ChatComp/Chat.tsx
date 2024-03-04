import { ChangeEvent, useEffect, useState } from "react";
import uuid from "react-uuid";
import "./chat.css";

interface ChatProps {
  interfaceColor: string;
  messageShortcutSetting: string;
}

const Chat: React.FC<ChatProps> = ({
  interfaceColor,
  messageShortcutSetting,
}) => {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);

  const handleChangeMessage = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    if (message.trim() !== "") {
      setMessages([...messages, message]);
      setMessage("");
    }
  };


  useEffect(()=> {
    const handlekeyDown  = (e: KeyboardEvent) => {
      if(messageShortcutSetting === "on" && e.key === "Enter" && e.ctrlKey) {
        handleSubmit()
      }
    };

    document.addEventListener("keydown", handlekeyDown);
    return ()=> {
      document.removeEventListener("keydown", handlekeyDown)
    };

  }, [handleSubmit, messageShortcutSetting])

  return (
    <div
      className={
        interfaceColor === "Light"
          ? "chatMain_container"
          : "dark_chatMain_container"
      }
    >
      <div className="content_container">
        {messages.map((item) => {
          return (
            <p key={uuid()} className="send_messages">
              {item}
            </p>
          );
        })}
      </div>
      <div className="input_container">
        <input type="text" value={message} onChange={handleChangeMessage} />
        <button onClick={handleSubmit} className="submit_btn">
          <span className="send_icon">@</span>
        </button>
      </div>
    </div>
  );
};

export default Chat;

