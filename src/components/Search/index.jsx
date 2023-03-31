import React from "react";
import styles from "./Search.module.scss";
import CloseIcon from "./../../assets/img/close_icon.png";

const Search = ({ searchValue, setSearchValue }) => {
  //   console.log("Булевое значение", Boolean(searchValue));
  return (
    <div className={styles.root}>
      <input
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
        className={styles.input}
        placeholder="Поиск пиццы..."
      />
      {searchValue && (
        <img
          onClick={() => setSearchValue("")}
          className={styles.iconClose}
          src={CloseIcon}
          alt="close"
        />
      )}
    </div>
  );
};
export default Search;
