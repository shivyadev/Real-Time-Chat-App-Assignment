import { Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { useUserContext } from "@/context/UserContext";
import type { Messages } from "../lib/types";

interface InputBarProps {
  socketRef: React.RefObject<WebSocket | null>;
}

function InputBar({ socketRef }: InputBarProps) {
  const [input, setInput] = useState<string>("");
  const { username } = useUserContext();

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
    <div className="border-t border-gray-200 bg-white p-4">
      <div className="flex gap-2">
        <Input
          type="text"
          value={input}
          onChange={(ev) => setInput(ev.target.value)}
          placeholder="Type your message..."
          className="flex-1 h-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        />
        <Button
          type="submit"
          size={"sm"}
          className="h-10 px-4 bg-blue-600 hover:bg-blue-700 hover:cursor-pointer"
          disabled={!input.trim()}
          onClick={sendMessage}
        >
          <Send className="size-4" />
        </Button>
      </div>
    </div>
  );
}

export default InputBar;
