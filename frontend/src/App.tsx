import { UserContextProvider } from "./context/UserProvider";
import Home from "./components/Home";

function App() {
  return (
    <div className="w-screen h-screen">
      <UserContextProvider>
        <Home />
      </UserContextProvider>
    </div>
  );
}

export default App;
