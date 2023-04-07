import React from "react";
import * as S from "./styles";
import Image from "../Image";

const Gallery = ({ images, setFavourites, favourites }) => {
  return (
    <S.Wrapper>
      {images.map((image) => (
        <Image
          image={image}
          setFavourites={setFavourites}
          favourites={favourites}
        />
      ))}
    </S.Wrapper>
  );
};

export default Gallery;
