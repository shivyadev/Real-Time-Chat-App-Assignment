import { useCallback, useState } from "react";
import { useWebSocket } from "../hooks/useWebSocket";
import type { Messages, WebSocketMessage } from "../utils/types";

function App() {
  const [messages, setMessages] = useState<Messages[]>([]);
  const [input, setInput] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  const handleMessage = useCallback((data: WebSocketMessage) => {
    console.log(data.type);
    if (data.type === "history") {
      setMessages(data.messageInfo);
    } else if (data.type === "message") {
      setMessages((prev) => [...prev, data.messageInfo]);
    }
  }, []);

  const socketRef = useWebSocket("http://localhost:5000", handleMessage);

  const sendMessage = () => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      const messageInfo: Messages = {
        username: username,
        message: input,
      };
      socketRef.current.send(JSON.stringify(messageInfo));
      console.log("Sent:", messageInfo);
      setInput("");
    }
  };

  return (
    <div>
      <div style={{ padding: "1rem", fontFamily: "monospace" }}>
        <h3>WebSocket Test</h3>
        <div
          style={{
            maxHeight: 200,
            overflowY: "auto",
            border: "1px solid #ccc",
            padding: "1rem",
            marginBottom: "1rem",
          }}
        >
          {messages?.map((msg, i) => (
            <div key={i} className="flex">
              <span className="h-2 font-semibold text-lg">{msg?.username}</span>
              <span className="">{msg?.message}</span>
            </div>
          ))}
        </div>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Type username..."
          style={{ padding: "0.5rem", width: "70%" }}
        />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type message..."
          style={{ padding: "0.5rem", width: "70%" }}
        />
        <button
          className="bg bg-gray-300"
          onClick={sendMessage}
          style={{ padding: "0.5rem", marginLeft: "0.5rem" }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
