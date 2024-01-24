import { useState } from "react";
import Page from "./Page";
import { MovieContext, ThemeContext } from "./context";

export default function App() {
  const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <MovieContext.Provider value={{ cartData, setCartData }}>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <Page />
      </ThemeContext.Provider>
    </MovieContext.Provider>
  );
}