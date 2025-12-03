import { Link } from "react-router-dom";
import moon from "../assets/data/moon.png";
import sun from "../assets/data/night-mode.png";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="bg-white dark:bg-gray-800 dark:text-white shadow-lg px-4 md:px-10 max-w-5xl mx-auto border-b">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link className="text-2xl font-bold text-blue-400" to="/">
          TypeMaster
        </Link>

        <div className="flex items-center gap-6 text-lg font-medium">
          <Link className="hover:text-blue-300 transition" to="/">
            Home
          </Link>

          <Link className="hover:text-blue-300 transition" to="/result">
            Result
          </Link>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-200"
          >
            {darkMode ? (
              <img src={moon} alt="Dark Mode" className="w-6 text-white"  />
            ) : (
              <img src={sun} alt="Light Mode" className="w-6 " />
            )}
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
