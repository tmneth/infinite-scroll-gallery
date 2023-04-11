import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Gallery from "../../components/Gallery";
import Loader from "../../components/Loader";
import WarningMessage from "../../components/Warning";
import { generateEndpoint } from "../../utils/helpers";

function Explore({ favourites, setFavourites }) {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const { tag } = useParams();

  // Load more images when the user scrolls to the bottom of the page
  const handleScroll = () => {
    const { scrollTop } = document.documentElement;
    const { scrollHeight } = document.documentElement;

    if (scrollTop + window.innerHeight >= scrollHeight - 250) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Add event listener for scroll on initial render
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [images]);

  useEffect(() => {
    setImages([]);
    setCurrentPage(1);
  }, [tag]);

  useEffect(() => {
    const loadImages = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const response = await fetch(generateEndpoint(currentPage, tag));
        const data = await response.json();

        const newImages = data.photos.photo;
        setImages((prevImages) => [...prevImages, ...newImages]);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
      setIsLoading(false);
    };
    loadImages();
  }, [currentPage, tag]);

  return !isError ? (
    <>
      <Gallery
        images={images}
        setFavourites={setFavourites}
        favourites={favourites}
      />
      {isLoading && <Loader />}
    </>
  ) : (
    <WarningMessage message="Unable to get images, please try again later" />
  );
}

export default Explore;
