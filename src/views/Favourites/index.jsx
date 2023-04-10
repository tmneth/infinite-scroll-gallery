import React from "react";
import styled from "styled-components";
import Gallery from "../../components/Gallery";

const Message = styled.h2`
  padding-top: calc(3.25rem + 1.75rem * 2);
  text-align: center;
  display: flex;
  justify-content: center;
`;

function Favourites({ favourites, setFavourites }) {
  return favourites.length ? (
    <Gallery
      images={favourites}
      setFavourites={setFavourites}
      favourites={favourites}
    />
  ) : (
    <Message>Nothing here yet!</Message>
  );
}

export default Favourites;
