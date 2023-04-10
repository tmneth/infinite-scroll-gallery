import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

function Navbar({ setTag }) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  /*
    If the input is not empty, when toggled, we are setting new tag.
    The input is then cleared, and user is redirected to 'All' page.
  */
  const handleSearch = () => {
    if (searchTerm) {
      setTag(searchTerm);
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  const handleExplore = () => setTag("");

  // Toggle search by pressing enter
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <S.NavContainer>
      <S.NavMenu>
        <S.NavMenuItem>
          <S.Link onClick={handleExplore} to="explore" aria-label="Explore">
            <S.NavSpan>Explore</S.NavSpan>
            <S.NavIcon className="fa-brands fa-wpexplorer fa-xl" />
          </S.Link>
        </S.NavMenuItem>
        <S.NavMenuItem>
          <S.Link to="favourites" aria-label="Favourites">
            <S.NavSpan>Favourites</S.NavSpan>
            <S.NavIcon className="fa-regular fa-heart fa-xl" />
          </S.Link>
        </S.NavMenuItem>
        <S.NavMenuItem>
          <S.SearchContainer>
            <S.NavSearch
              placeholder="Enter a tag"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              aria-label="Search images by tag"
            />
            <S.SearchButton aria-label="search-button">
              <S.SearchIcon
                className="fa-solid fa-magnifying-glass fa-lg"
                onClick={handleSearch}
              />
            </S.SearchButton>
          </S.SearchContainer>
        </S.NavMenuItem>
      </S.NavMenu>
    </S.NavContainer>
  );
}

export default Navbar;
