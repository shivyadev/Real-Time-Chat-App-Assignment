import { useState, useCallback, useRef, useEffect } from "react";
import { useWebSocket } from "../../hooks/useWebSocket";
import type { WebSocketMessage, Messages } from "../lib/types";
import { useUserContext } from "@/context/UserContext";
import ChatBubble from "./ChatBubble";
import InputBar from "./InputBar";
import Header from "./Header";

export default function ChatScreen() {
  const [messages, setMessages] = useState<Messages[]>([]);
  const { username } = useUserContext();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // function to handle onmessage event of socket
  const handleMessage = useCallback((data: WebSocketMessage) => {
    console.log(data.type);
    if (data.type === "history") {
      setMessages(data.messageInfo);
    } else if (data.type === "message") {
      setMessages((prev) => [...prev, data.messageInfo]);
    }
  }, []);

  // connecting with the web socket using the WebSocketHook
  const serverUrl = import.meta.env.VITE_SERVER_URL || "http://localhost:5000";
  const socketRef = useWebSocket(serverUrl, handleMessage);

  return (
    <div className="flex flex-col w-full max-w-4xl h-[600px] bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
      {/* Header */}
      <Header length={messages.length} />

      {/* Message Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-1 bg-gray-50">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-gray-500">
              <p className="text-lg mb-2">No messages yet</p>
            </div>
          </div>
        ) : (
          <div>
            {messages.map((message, index) => (
              <ChatBubble
                key={index}
                message={message}
                isCurrentUser={
                  username.toLowerCase() === message.username.toLowerCase()
                }
              />
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input Section */}
      <InputBar socketRef={socketRef} />
    </div>
  );
}
