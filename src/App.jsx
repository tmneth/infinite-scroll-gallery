import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";
import { sharedPreferences } from "./utils/theme";
import GlobalStyle from "./globalStyles";
import Navbar from "./components/Navbar";
import Explore from "./views/Explore";
import Favourites from "./views/Favourites";

const AppContainer = styled.div`
  max-width: ${sharedPreferences.pageWidth};
  margin: 0 auto;
  padding: calc(3.25rem + 1.75rem * 2) 1.75rem 0 1.75rem;
`;

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
    <AppContainer>
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
    </AppContainer>
  );
}

export default App;
