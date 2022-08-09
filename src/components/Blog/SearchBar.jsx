import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import CloseIcon from '@mui/icons-material/Close';

const SearchBarInput = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '93.3%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(-.4)})`,
    paddingRight: `calc(1em + ${theme.spacing(0)})`
  }
}));

const SearchBar = ({ 
  submitInput, value, handleSearchInput, clearSearch
}) => {
  return (
    <>
    <form
      id="searchBar"
      onChange={submitInput}
    >
      <SearchBarInput
        id="searchBar-input"
        placeholder="Search by category"
        value={value}
        onChange={handleSearchInput}
      />
      {value && 
        <CloseIcon 
          onClick={clearSearch} 
          style={{fontSize: '1.5vw'}}
        />
      }
    </form>
    </>
  )
}

export default SearchBar;

/* To be done: 
    clear search when input field is empty: for keyboard
*/