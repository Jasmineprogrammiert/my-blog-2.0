import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  // backgroundColor: theme.palette.primary.dark,
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const SearchBar = ({ 
  submitInput, value, handleSearchInput, clearSearch
}) => {
  return (
    <>
    <Search
      id="searchBar"
      onChange={submitInput}
    >
      <StyledInputBase
        placeholder="Search by category"
        // inputProps={{ 'aria-label': 'search' }}
        value={value}
        onChange={handleSearchInput}
      />
    </Search>

    <form
      className="searchBar0"
      onSubmit={submitInput}
    >
      <input 
        type="text"
        placeholder="search by category"
        value={value}
        onChange={handleSearchInput}
      />
      {value && <span onClick={clearSearch}>X</span>}
      <button><SearchIcon /></button>
    </form>
    </>
  )
}

export default SearchBar;