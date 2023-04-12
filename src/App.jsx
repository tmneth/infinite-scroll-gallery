import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";
import Navbar from "./components/Navbar";
import Explore from "./views/Explore";
import Favourites from "./views/Favourites";
import { sharedPreferences } from "./utils/theme";

const StyledAppContainer = styled.div`
  max-width: ${sharedPreferences.pageWidth};
  margin: 0 auto;
  padding: calc(3.25rem + 1.75rem * 2) 1.75rem 1.75rem;
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
    try {
      localStorage.setItem("favourites", JSON.stringify(favourites));
    } catch (error) {
      console.error("Error updating local storage:", error);
    }
  }, [favourites]);

  return (
    <StyledAppContainer>
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
    </StyledAppContainer>
  );
}

export default App;
