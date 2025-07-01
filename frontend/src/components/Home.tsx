import { useUserContext } from "../context/UserContext";
import WelcomeScreen from "./WelcomeScreen";
import ChatScreen from "../components/ChatScreen";

function Home() {
  const { username } = useUserContext();

  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-gray-200">
      {!username && <WelcomeScreen />}
      {username && <ChatScreen />}
    </div>
  );
}

export default Home;
