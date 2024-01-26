import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Emoji from "./components/Emoji";
import HomePage from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import UserPanel from "./pages/UserPanel";

function App() {
  return (
    <div className="text-white ">
      <header className="flex sticky top-0 items-center justify-between p-4 bg-white shadow-md z-10">
        <div className="flex items-center">
          <Emoji symbol="☰" label="menu" className="text-2xl" />
          <span className="px-2">ANONYMOUS</span>
        </div>
        <div className="ml-2">
          <Emoji symbol="🧑🏻‍💻" label="user" className="text-2xl" />
        </div>
      </header>
      <div>
        <div>
          <div path="/" element={<HomePage />} />
          <div path="/login" element={<LoginPage />} />
          <div path="/signup" element={<SignupPage />} />
          <div path="/panel" element={<UserPanel/>} />
        </div>
      </div>
    </div>
  );
}

export default App;
