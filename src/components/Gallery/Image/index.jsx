import React, { useState, useEffect } from "react";
import * as S from "./styles";
import { sharedPreferences } from "../../../utils/theme";

function Image({ image, setFavourites, favourites }) {
  const [isFavourite, setIsFavourite] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Handle mouse hover events
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  // Truncate string to 20 characters
  const truncateStr = (str) =>
    str.length > 20 ? `${str.substring(0, 20)}...` : str;

  // Add/remove image to/from favourites
  const handleFavorite = () => {
    const updatedFavourites = isFavourite
      ? favourites.filter((favourite) => favourite.id !== image.id)
      : [...favourites, image];
    setFavourites(updatedFavourites);
    setIsFavourite(!isFavourite);
  };

  // Set initial favourite status on load or on favourites update
  useEffect(() => {
    const isImageAlreadyFavorited = favourites.some(
      (favouriteImage) => favouriteImage.id === image.id
    );
    setIsFavourite(isImageAlreadyFavorited);
  }, [favourites, image]);

  return (
    <S.ImgContainer onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <picture>
        {/* Serve worse quality images for smaller screens */}
        <source
          media={`(min-width: ${sharedPreferences.breakpoints.xs})`}
          srcSet={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_b.jpg`}
        />
        <S.Img
          src={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
          alt={image.title}
        />
      </picture>

      <S.Backdrop isHovering={isHovering}>
        <S.ImgTitle aria-label={`Title: ${image.title}`} title={image.title}>
          {truncateStr(image.title)}
        </S.ImgTitle>
        <S.Separator />
        <S.ImgAuthor
          aria-label={`Author: ${image.ownername}`}
          title={image.ownername}
        >
          {truncateStr(image.ownername)}
        </S.ImgAuthor>
        <S.Button
          onClick={handleFavorite}
          aria-label={
            isFavourite ? "unfavourite-button-label" : "favourite-button-label"
          }
        >
          {isFavourite ? "Unfavourite" : "Favourite"}
        </S.Button>
      </S.Backdrop>
    </S.ImgContainer>
  );
}

export default Image;
