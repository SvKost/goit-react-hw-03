const SearchBox = ({ value, onSearching }) => {
  return (
    <div>
      <label>Find contacts by name</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onSearching(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
