import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useUserContext } from "../context/UserContext";
import { useState } from "react";

export default function WelcomeScreen() {
  const { setUsername } = useUserContext();
  const [nameInput, setNameInput] = useState<string>("");

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-md space-y-8 text-center">
        {/* Logo/Icon */}
        <div className="flex justify-center">
          <div className="bg-blue-600 p-4 rounded-full">
            <MessageCircle className="h-8 w-8 text-white" />
          </div>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
            Chat App
          </h1>
          <p className="text-gray-600 text-lg">
            Welcome to the real-time chat app
          </p>
          <p className="text-gray-500 text-sm">
            Enter your username to start chatting with others
          </p>
        </div>

        {/* Input Form */}
        <div className="space-y-4">
          <div className="space-y-2">
            <Input
              type="text"
              value={nameInput}
              onChange={(ev) => setNameInput(ev.target.value)}
              placeholder="Enter your username..."
              className="h-12 text-center text-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <Button
            type="submit"
            className="w-full h-12 text-lg bg-blue-600 hover:bg-blue-700 hover:cursor-pointer"
            disabled={!nameInput.trim()}
            onClick={() => setUsername(nameInput)}
          >
            Join Chat
          </Button>
        </div>

        {/* Footer */}
        <p className="text-xs text-gray-400 mt-8">
          Connect and chat with people around the world
        </p>
      </div>
    </div>
  );
}
