import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Navbar from "./components/Navbar";
import Explore from "./views/Explore";
import Favourites from "./views/Favourite";

function App() {
  const [tag, setTag] = useState("");
  const [favourites, setFavourites] = useState([]);

  // Load favourites from local storage on initial render
  useEffect(() => {
    try {
      const storedFavourites = JSON.parse(localStorage.getItem("favourites"));
      if (storedFavourites) {
        setFavourites(storedFavourites);
      }
    } catch (error) {
      console.error("Error loading favourites:", error);
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <Navbar setTag={setTag} />
      <Routes>
        <Route
          path="/explore"
          element={<Explore {...{ tag, favourites, setFavourites }} />}
        />
        <Route
          path="/search/:tag"
          element={<Explore {...{ tag, favourites, setFavourites }} />}
        />
        <Route
          path="/favourites"
          element={<Favourites {...{ favourites, setFavourites }} />}
        />
        {/* Default route - redirect to explore */}
        <Route path="*" element={<Navigate to="/explore" replace />} />
      </Routes>
    </>
  );
}

export default App;
