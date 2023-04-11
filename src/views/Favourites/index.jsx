import React from "react";
import Gallery from "../../components/Gallery";
import Error from "../../components/Warning";

function Favourites({ favourites, setFavourites }) {
  return favourites.length ? (
    <Gallery
      images={favourites}
      setFavourites={setFavourites}
      favourites={favourites}
    />
  ) : (
    <Error message="Nothing here yet!" />
  );
}

export default Favourites;
