import { useEffect, useRef } from "react";
import type { WebSocketMessage } from "../src/lib/types";

export function useWebSocket(
  url: string,
  onMessage: (data: WebSocketMessage) => void
) {
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket(url);
    socketRef.current = socket;

    socket.onopen = () => {
      console.log("WebSocket Connected");
    };

    socket.onmessage = (event) => {
      console.log(event.data);
      const data = JSON.parse(event.data);
      console.log(data);
      onMessage(data);
    };

    socket.onclose = () => {
      console.log("WebSocket Disconnected");
    };

    return () => {
      socket.close();
    };
  }, [url, onMessage]);

  return socketRef;
}
