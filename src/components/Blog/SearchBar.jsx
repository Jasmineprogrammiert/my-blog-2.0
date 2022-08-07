import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ 
  submitForm, value, handleSearchInput, clearSearch
}) => {
  return (
    <>
    <form
      className="searchBar-container"
      onSubmit={submitForm}
    >
      <input 
        type="text"
        placeholder="search by category or keyword"
        value={value}
        onChange={handleSearchInput}
      />
      {/* Pro: barely visible */}
      {value && <span onClick={clearSearch}>X</span>}
      <button><SearchIcon /></button>
    </form>
    </>
  )
}

export default SearchBar;

/* New features
    1. Resonsive searchbar by inputing
*/