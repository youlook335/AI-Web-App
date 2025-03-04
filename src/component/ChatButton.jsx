import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ChatButton = () => {
  return (
    <div className="position-fixed bottom-0 start-50 translate-middle-x p-3">
      <button className="btn btn-light rounded-pill shadow-lg px-4 py-2">
        Ask ChatGPT
      </button>
    </div>
  );
};

export default ChatButton;
