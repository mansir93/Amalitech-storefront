import "./App.css";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/account/*" element={<Layout />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
