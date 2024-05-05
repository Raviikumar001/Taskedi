import { Routes, Route } from "react-router-dom";
import Home from "./home/home";
import Auth from "./auth/Auth";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accounts" element={<Auth />} />;
      </Routes>
    </>
  );
}

export default App;
