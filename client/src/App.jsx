import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import MainWindow from "./pages/Mainwindow.jsx";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="min-h-screen  dark:bg-gray-800 bg-white shadow-2xl px-4 md:px-10 max-w-5xl mx-auto ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<MainWindow />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
