import type { Messages } from "@/lib/types";
import Avatar from "./Avatar";
import { toUpper } from "@/lib/utils";

interface ChatBubbleProps {
  message: Messages;
  isCurrentUser: boolean;
}

function ChatBubble({ message, isCurrentUser }: ChatBubbleProps) {
  return (
    <div
      className={`flex gap-3 mb-4 ${
        isCurrentUser ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <Avatar displayName={toUpper(message.username)} />

      <div
        className={`flex flex-col max-w-xs lg:max-w-md ${
          isCurrentUser ? "items-end" : "items-start"
        }`}
      >
        <span
          className={`text-xs text-gray-500 mb-1 px-1 ${
            isCurrentUser ? "text-right" : "text-left"
          }`}
        >
          {message.username}
        </span>

        <div
          className={`relative px-4 py-2 rounded-2xl ${
            isCurrentUser
              ? "bg-blue-400 text-white rounded-br-md"
              : "bg-gray-300 text-gray-600 rounded-bl-md"
          }`}
        >
          <p className="text-sm leading-relaxed break-words ">
            {message.message}
          </p>
        </div>

        <span className={`text-xs text-gray-400 mt-1 px-1 text-right`}>
          {message.displayTime}
        </span>
      </div>
    </div>
  );
}

export default ChatBubble;
