import { useUserContext } from "../context/UserContext";
import WelcomeScreen from "./WelcomeScreen";
import ChatScreen from "../components/ChatScreen";

function Home() {
  const { username } = useUserContext();

  return (
    <div className="w-screen h-screen">
      {!username && <WelcomeScreen />}
      {username && <ChatScreen />}
    </div>
  );
}

export default Home;
