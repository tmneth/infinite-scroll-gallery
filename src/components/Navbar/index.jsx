import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const Navbar = ({ setTag }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  /*
    If the input is not empty, when toggled, we are setting new tag.
    The input is then cleared, and user is redirected to 'All' page.
  */
  const handleSearch = () => {
    if (searchTerm) {
      setTag(searchTerm);
      setSearchTerm("");
      navigate("/all");
    }
  };

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
          <S.Link to="all">All</S.Link>
        </S.NavMenuItem>
        <S.NavMenuItem>
          <S.Link to="favourites">Favourite</S.Link>
        </S.NavMenuItem>
        <S.NavMenuItem>
          <S.SearchContainer>
            <S.NavSearch
              placeholder="Enter a tag"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <S.SearchButton>
              <S.SearchIcon
                className="fa-solid fa-magnifying-glass"
                onClick={handleSearch}
              />
            </S.SearchButton>
          </S.SearchContainer>
        </S.NavMenuItem>
      </S.NavMenu>
    </S.NavContainer>
  );
};

export default Navbar;
