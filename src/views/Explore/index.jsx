import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Gallery from "../../components/Gallery";
import Loader from "../../components/Loader";
import Warning from "../../components/Warning";
import { generateEndpoint } from "../../utils/helpers";

function Explore({ favourites, setFavourites }) {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // Get the tag parameter from the URL
  const { tag } = useParams();

  const handleScroll = () => {
    // Get the current scroll position of the document
    const { scrollTop } = document.documentElement;
    // Get the total height of the document
    const { scrollHeight } = document.documentElement;

    // If the user has scrolled to the bottom of the page (with a buffer of 250 pixels)
    if (scrollTop + window.innerHeight >= scrollHeight - 250) {
      // Increment page, to fetch images from the next page
      setCurrentPage(currentPage + 1);
    }
  };

  // Add event listener for scroll on initial render
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Reset images and current page when tag changes
  useEffect(() => {
    setImages([]);
    setCurrentPage(1);
  }, [tag]);

  // Load images from the Flickr API using the current page and tag
  useEffect(() => {
    const loadImages = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const response = await fetch(generateEndpoint(currentPage, tag));
        const data = await response.json();

        setImages((prevImages) => [...prevImages, ...data.photos.photo]);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
      setIsLoading(false);
    };
    loadImages();
  }, [currentPage, tag]);

  setTimeout(() => {
    console.log("set timeout");
  }, 0);

  console.log("after set timeout");

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
    <Warning message="Unable to get images, please try again later" />
  );
}

export default Explore;
