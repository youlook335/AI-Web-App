import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ChatButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [message, setMessage] = useState("");
  const inputRef = useRef(null);

  // Function to close input when clicking outside
  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setIsExpanded(false);
    }
  };

  // Add event listener when input is open
  useEffect(() => {
    if (isExpanded) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isExpanded]);

  return (
    <div ref={inputRef} className="position-fixed bottom-0 start-50 translate-middle-x p-3">
      <div
        className={`d-flex align-items-center bg-white shadow-lg rounded-pill px-3 ${isExpanded ? "py-2 w-100" : "py-1"}`}
        style={{ maxWidth: "350px", transition: "0.3s" }}
      >
        {/* Button (Works as Input Toggle) */}
        <button
          className={`btn ${isExpanded ? "btn-primary" : "btn-light"} rounded-pill flex-grow-1 text-start`}
          onClick={() => setIsExpanded(true)}
        >
          {isExpanded ? "Type your message..." : "Ask ChatGPT"}
        </button>

        {/* Input Field (Only visible when expanded) */}
        {isExpanded && (
          <input
            type="text"
            className="form-control ms-2 border-0"
            placeholder="Type here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            autoFocus
          />
        )}
      </div>
    </div>
  );
};

export default ChatButton;
