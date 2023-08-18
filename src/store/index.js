import { configureStore } from "@reduxjs/toolkit";
import menu from './slices/menu.slice';
import darkMode from './slices/darkMode.slice'

export default configureStore({
  reducer: {
    menu,
    darkMode
  }
})