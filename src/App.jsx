import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import { generateEndpoint } from "./utils/helpers";

function App() {
  const [images, setImages] = useState([]);
  const [tag, setTag] = useState(null);
  const [favourites, setFavourites] = useState([]);
  const [page, setPage] = useState(1);
  const [imgPerPage, setImagesPerPage] = useState(9);
  console.log(tag);
  const clientHeightRef = useRef(document.documentElement.clientHeight);

  useEffect(() => {
    const storedFavourites = JSON.parse(localStorage.getItem("favourites"));
    if (storedFavourites) {
      setFavourites(storedFavourites);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      clientHeightRef.current = document.documentElement.clientHeight;
      const clientHeightRem = clientHeightRef.current / 16;
      const numberOfRows = Math.floor(clientHeightRem / (14.375 + 1.75) + 1);
      setImagesPerPage(numberOfRows * 3);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log(generateEndpoint(imgPerPage, page, tag));
  useEffect(() => {
    // API call to retrieve images for the current tag and page
    fetch(generateEndpoint(imgPerPage, page, tag))
      .then((response) => response.json())
      .then((data) => {
        // Add the images to the state variable
        setImages([...images, ...data.photos.photo]);
      });
  }, [page, tag, imgPerPage]);

  const handleScroll = () => {
    const { scrollTop } = document.documentElement;
    const { scrollHeight } = document.documentElement;
    // Load more images if the user has scrolled to the bottom of the page
    if (
      scrollTop + clientHeightRef.current >= scrollHeight - 5 &&
      images.length
    ) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    // Add event listener to window for scrolling
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [images]);

  return (
    <>
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
}

export default App;
