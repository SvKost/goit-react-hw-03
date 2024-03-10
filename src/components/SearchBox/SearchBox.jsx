import css from "./SearchBox.module.css";

const SearchBox = ({ value, onSearching }) => {
  return (
    <div className={css.searchBox}>
      <label className={css.label}>Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={(e) => onSearching(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
