import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Gallery from "../../components/Gallery";
import Loader from "../../components/Loader";
import { generateEndpoint } from "../../utils/helpers";

function Explore({ favourites, setFavourites }) {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  //   const location = useLocation();

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
      try {
        setIsLoading(true);
        const response = await fetch(generateEndpoint(currentPage, tag));
        const data = await response.json();

        const newImages = data.photos.photo;
        setImages((prevImages) =>
          currentPage === 1 ? newImages : [...prevImages, ...newImages]
        );

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    loadImages();
  }, [currentPage, tag]);

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
