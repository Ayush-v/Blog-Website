import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import VideoBg from "./Components/VideoBg";
import Home from "./pages/Home";
import About from "./pages/About";
import Create from "./pages/Create";
import NotFound from "./pages/NotFound";
import Detail from "./pages/Detail";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<Create />} />
        <Route path="/blogs/:id" element={<Detail />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <VideoBg />
    </div>
  );
}

export default App;
