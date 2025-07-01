import WelcomeScreen from "../components/WelcomeScreen";
import { UserContextProvider } from "../context/UserProvider";

function App() {
  return (
    <div className="w-screen h-screen">
      <UserContextProvider>
        <WelcomeScreen />
        {/* <ChatScreen /> */}
      </UserContextProvider>
    </div>
  );
}

export default App;
