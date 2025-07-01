import { useEffect, useRef } from "react";
import type { WebSocketMessage } from "../src/lib/types";

// custom hook to setup websocket connection

export function useWebSocket(
  url: string,
  onMessage: (data: WebSocketMessage) => void
) {
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket(url);
    socketRef.current = socket;

    // event listner for successful server connection
    socket.onopen = () => {
      console.log("WebSocket Connected");
    };

    // event listner for receiving message
    socket.onmessage = (event) => {
      console.log(event.data);
      const data = JSON.parse(event.data);
      console.log(data);
      onMessage(data);
    };

    // event listner for server disconnection
    socket.onclose = () => {
      console.log("WebSocket Disconnected");
    };

    // event listner for error
    socket.onerror = (err) => {
      console.error("WebSocket Error", err);
    };

    // closing the connection when component unmounts
    return () => {
      socket.close();
    };
  }, [url, onMessage]);

  return socketRef;
}
