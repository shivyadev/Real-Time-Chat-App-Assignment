import { useUserContext } from "@/context/UserContext";
import { toUpper } from "@/lib/utils";
import { LogOut } from "lucide-react";

interface HeaderProps {
  length: number;
}

function Header({ length }: HeaderProps) {
  const { username, setUsername } = useUserContext();

  const handleClick = () => {
    setUsername("");
  };

  return (
    <div className="flex items-center justify-between">
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-3">
        <h2 className="text-lg font-semibold text-gray-900">Chat Room</h2>
        <p className="text-sm text-gray-500">
          {length} messages | {toUpper(username)}
        </p>
      </div>
      <button
        onClick={handleClick}
        className="mr-6 p-3 hover:bg-gray-200 hover:rounded-full hover:cursor-pointer"
      >
        <LogOut />
      </button>
    </div>
  );
}

export default Header;
