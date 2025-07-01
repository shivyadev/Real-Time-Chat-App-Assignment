export default function ChatScreen() {
  // const [messages, setMessages] = useState<Messages[]>([]);
  // const [input, setInput] = useState<string>("");

  // const handleMessage = useCallback((data: WebSocketMessage) => {
  //     console.log(data.type);
  //     if (data.type === "history") {
  //       setMessages(data.messageInfo);
  //     } else if (data.type === "message") {
  //       setMessages((prev) => [...prev, data.messageInfo]);
  //     }
  //   }, []);

  // const socketRef = useWebSocket("http://localhost:5000", handleMessage);

  // const sendMessage = () => {
  //     if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
  //       const messageInfo: Messages = {
  //         username: username,
  //         message: input,
  //       };
  //       socketRef.current.send(JSON.stringify(messageInfo));
  //       console.log("Sent:", messageInfo);
  //       setInput("");
  //     }
  //   };

  return <div>ChatScreen</div>;
}
