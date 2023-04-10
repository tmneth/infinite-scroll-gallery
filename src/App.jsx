import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Navbar from "./components/Navbar";
import Explore from "./views/Explore";
import Favourites from "./views/Favourites";

function App() {
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

  // Update local storage when favourites change
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route
          path="/explore/:tag"
          element={<Explore {...{ favourites, setFavourites }} />}
        />
        <Route
          path="/favourites"
          element={<Favourites {...{ favourites, setFavourites }} />}
        />
        <Route path="*" element={<Navigate to="/explore/all" replace />} />
      </Routes>
    </>
  );
}

export default App;
