import React, { useState, useEffect } from "react";
import * as S from "./styles";

function Image({ image, setFavourites, favourites }) {
  const [isFavourite, setIsFavourite] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  /*
    Since the title or author name could be too long, we truncate both strings.
    However, full string can still be displayed, by simply hovering over the text.
  */
  const truncateStr = (str) => {
    if (str.length > 20) {
      return `${str.substring(0, 20)}...`;
    }
    return str;
  };

  /*
    This function toggles the state of a boolean variable isFavourite and updates a list of
    favourites based on whether an image object is already present in the list or not.
  */
  const handleFavorite = () => {
    if (isFavourite) {
      setFavourites(
        favourites.filter((favourite) => favourite.id !== image.id)
      );
    } else {
      setFavourites([...favourites, image]);
    }
    setIsFavourite(!isFavourite);
  };

  useEffect(() => {
    const isImageAlreadyFavorited = favourites.some(
      (favouriteImage) => favouriteImage.id === image.id
    );
    setIsFavourite(isImageAlreadyFavorited);
  }, [favourites, image]);

  return (
    <S.ImgContainer onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <picture>
        <source
          media="(min-width: 420px)"
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
