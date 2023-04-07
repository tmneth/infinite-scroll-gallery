import React, { useState, useEffect } from "react";
import * as S from "./styles.jsx";

const Image = ({ image, setFavourites, favourites }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  useEffect(() => {
    const isImageAlreadyFavorited = favourites.some(
      (favouriteImage) => favouriteImage.id === image.id
    );
    setIsFavourite(isImageAlreadyFavorited);
  }, [favourites, image]);

  const truncateStr = (str) => {
    if (str.length > 20) {
      return str.substring(0, 20) + "...";
    } else {
      return str;
    }
  };

  const handleFavorite = () => {
    if (isFavourite) {
      setFavourites((favourites) =>
        favourites.filter((favourite) => favourite.id !== image.id)
      );
    } else {
      setFavourites((favourites) => [...favourites, image]);
    }
    setIsFavourite(!isFavourite);
  };

  return (
    <S.ImgWrapper>
      <S.Img
        key={image.id}
        src={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
        alt={image.title}
      />
      <S.Backdrop>
        <S.ImgTitle title={image.title}>{truncateStr(image.title)}</S.ImgTitle>
        <S.Separator />
        <S.ImgAuthor title={image.owner}>
          {truncateStr(image.owner)}
        </S.ImgAuthor>
        <S.Button onClick={handleFavorite}>
          {isFavourite ? "Remove" : "Favourite"}
        </S.Button>
      </S.Backdrop>
    </S.ImgWrapper>
  );
};

export default Image;
