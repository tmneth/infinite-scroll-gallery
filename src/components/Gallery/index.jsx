import React from "react";
import * as S from "./styles";
import Image from "../Image";

function Gallery({ images, setFavourites, favourites }) {
  return (
    <S.Container>
      {images.map((image, index) => (
        <Image {...{ image, setFavourites, favourites }} key={index} />
      ))}
    </S.Container>
  );
}

export default Gallery;
