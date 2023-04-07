import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";

const YOUR_API_KEY = "5d632f69197140e4b010732022e8dbc4";

const App = () => {
  const [images, setImages] = useState([]);
  const [tag, setTag] = useState("Cat");
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const favourites = JSON.parse(localStorage.getItem("favourites"));
    if (favourites) {
      setFavourites(favourites);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  useEffect(() => {
    // Initial API call to retrieve the first set of images
    fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${YOUR_API_KEY}&format=json&nojsoncallback=1&per_page=9&tags=${tag}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Add the images to the state variable
        setImages(data.photos.photo);
      });
  }, [tag]);

  return (
    <>
      {/* managing state, by passing setters to children, is pain. So to escape the hell, I'm just rerendrering, DOM */}
      <GlobalStyle />
      <Navbar setTag={setTag} />
      <Routes>
        <Route
          path="/all"
          element={
            <Gallery
              images={images}
              setFavourites={setFavourites}
              favourites={favourites}
            />
          }
        />
        <Route
          path="/favourites"
          element={
            <Gallery
              images={favourites}
              setFavourites={setFavourites}
              favourites={favourites}
            />
          }
        />
        <Route path="*" element={<Navigate to="/all" replace />} />
      </Routes>
    </>
  );
};

export default App;
