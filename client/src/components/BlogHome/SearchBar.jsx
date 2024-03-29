import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import CloseIcon from "@mui/icons-material/Close";

const SearchBarInput = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "93.3%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(-.4)})`,
    paddingRight: `calc(1em + ${theme.spacing(0)})`
  }
}));

const SearchBar = ({
  value, 
  handleSearchInput, 
  setSearchInput, 
  handleClearSearch
}) => {
  return (
    <>
    <form
      id="searchBar"
      onChange={handleSearchInput}
    >
      <SearchBarInput
        id="searchBar-input"
        placeholder="Search by category"
        value={value}
        onChange={setSearchInput}
      />
      {value && 
        <CloseIcon 
          onClick={handleClearSearch}
          style={{fontSize: "17px"}}
        />
      }
      {!value.length ? handleClearSearch() : ""}
    </form>
    </>
  )
}

export default SearchBar;