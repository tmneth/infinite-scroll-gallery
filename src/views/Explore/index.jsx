import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Gallery from "../../components/Gallery";
import Loader from "../../components/Loader";
import { generateEndpoint } from "../../utils/helpers";

function Explore({ tag, favourites, setFavourites }) {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  // Load more images when the user scrolls to the bottom of the page
  const handleScroll = () => {
    const { scrollTop } = document.documentElement;
    const { scrollHeight } = document.documentElement;

    if (scrollTop + window.innerHeight >= scrollHeight - 500 && images.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Add event listener for scroll on initial render
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [images]);

  useEffect(() => {
    const loadImages = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(generateEndpoint(currentPage, tag));
        const data = await response.json();

        if (currentPage === 1) {
          // If the current page is 1, set the images to the new photos
          setImages(data.photos.photo);
        } else {
          // Otherwise, append the new photos to the existing images
          setImages((prevImages) => [...prevImages, ...data.photos.photo]);
        }
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    loadImages();
  }, [currentPage, location]);

  useEffect(() => {
    setImages([]);
    setCurrentPage(1);
  }, [tag]);

  return (
    <>
      <Gallery
        images={images}
        setFavourites={setFavourites}
        favourites={favourites}
      />
      {isLoading && <Loader />}
    </>
  );
}

export default Explore;
