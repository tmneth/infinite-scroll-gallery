import React from "react";
import Gallery from "../../components/Gallery";

function Favourites({ favourites, setFavourites }) {
  return (
    <Gallery
      images={favourites}
      setFavourites={setFavourites}
      favourites={favourites}
    />
  );
}

export default Favourites;
