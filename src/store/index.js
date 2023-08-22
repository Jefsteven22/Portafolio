import { configureStore } from "@reduxjs/toolkit";
import menu from './slices/menu.slice';
import darkMode from './slices/darkMode.slice'
import isLoading from './slices/loading.slice'

export default configureStore({
  reducer: {
    menu,
    darkMode,
    isLoading
  }
})