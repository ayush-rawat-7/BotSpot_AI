import './App.css';
import { Route, Routes } from "react-router-dom";
import { Login } from "./Pages/Login"
import { Signup } from "./Pages/Signup"
import { Home } from "./Pages/Home"
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
