import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import SignUp from "./Pages/Auth/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
