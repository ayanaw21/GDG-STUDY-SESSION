import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import ThemeContext from "./context";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  // Toggling the "dark" class on the document element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark"); // adds dark class
    } else {
      document.documentElement.classList.remove("dark"); // removes dark class
    }
  }, [darkMode]); // Re-run when darkMode state changes

  return (
    <header className="dark:bg-gray-900 text-gray-900 dark:text-white  md:px-6 py-2 shadow-lg">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="">
          <img src={logo} alt="logo" />
        </div>

        <div className="flex space-x-6 px-2 py-2">
          <Link to="/" className="px-2 md:px-4 md:py-2">
            Home
          </Link>
          <Link to="/about" className="px-2 md:px-4 md:py-2">
            About
          </Link>
          <Link to="/users" className="px-2 md:px-4 md:py-2">
            Users
          </Link>
        </div>

        <button
          className="text-3xl"
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        >
          {darkMode ? <MdDarkMode /> : <MdLightMode />}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
