import { useUserContext } from "../context/UserContext";
import { getAvatarColor, getInitials } from "../lib/utils";

function Avatar() {
  const { username } = useUserContext();

  return (
    <div
      className={`w-10 h-10 text-sm ${getAvatarColor(
        username
      )} rounded-full flex items-center justify center text-white font-semibold flex-shrink-0`}
    >
      {getInitials(username)}
    </div>
  );
}

export default Avatar;
