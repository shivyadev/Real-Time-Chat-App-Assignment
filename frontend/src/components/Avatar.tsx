import { getAvatarColor, getInitials } from "../lib/utils";

interface AvatarProps {
  displayName: string;
}

function Avatar({ displayName }: AvatarProps) {
  return (
    <div
      className={`w-10 h-10 ${getAvatarColor(
        displayName
      )} rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0`}
    >
      {getInitials(displayName)}
    </div>
  );
}

export default Avatar;
