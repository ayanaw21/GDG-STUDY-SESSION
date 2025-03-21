import { useContext } from "react";
import Button from "./components/Button";
import { UserAuthContext } from "./context/context";

function App() {
  const { login, setLogin } = useContext(UserAuthContext);

  return (
    <main className="flex justify-center items-center h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      <div className="flex flex-col justify-center items-center space-y-6 bg-white py-8 px-12 rounded-xl shadow-2xl w-96">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          User Authentication
        </h1>
        <Button
          onClick={() => setLogin(!login)}
          className="bg-blue-500 text-white px-6 py-2 rounded-md text-lg font-semibold hover:bg-blue-600 transition-colors duration-300"
        >
          {login ? "Login" : "Log Out"}
        </Button>
        <p className="text-xl text-gray-700 mt-4">
          {login ? "Please log in" : "Welcome, User!"}
        </p>
      </div>
    </main>
  );
}

export default App;
