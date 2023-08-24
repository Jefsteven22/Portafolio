import "./Styles/DarkMode.css";
import { useDispatch, useSelector } from "react-redux";
import { setDarkModeG } from "../../store/slices/darkMode.slice";
import { useEffect } from "react";
import { setIsLoadingG } from "../../store/slices/loading.slice";
import { setMenuG } from "../../store/slices/menu.slice";

const DarkMode = () => {
  const darkMode = useSelector((reducer) => reducer.darkMode);
  const dispatch = useDispatch();
  const isDark = localStorage.getItem("dark");

  useEffect(() => {
    if (isDark === "true") {
      dispatch(setDarkModeG(true));
      document.body.classList.add("darkOn");
    } else {
      dispatch(setDarkModeG(false));
      document.body.classList.remove("darkOn");
    }
  }, [isDark]);

  const handleClose = () => {
    dispatch(setMenuG(false));
  };

  const handleDarkMode = () => {
    if (darkMode) {
      dispatch(setDarkModeG(false));
      dispatch(setIsLoadingG(true));
      document.body.classList.remove("darkOn");
      localStorage.setItem("dark", "false");
      handleClose();
    } else {
      dispatch(setDarkModeG(true));
      dispatch(setIsLoadingG(true));
      document.body.classList.add("darkOn");
      localStorage.setItem("dark", "true");
      handleClose();
    }
  };

  return (
    <div
      onClick={handleDarkMode}
      className={`darkMode ${darkMode ? "active" : ""}`}
    >
      <div className="darkMode__button"></div>
    </div>
  );
};

export default DarkMode;
