import { ISearchInput } from "../../types";
import "./SearchInput.css";

const SearchInput: React.FC<ISearchInput> = ({
  placeHolder,
  searchValue,
  handleChange,
  handleBlur,
  handleFocus,
}) => {
  return (
    <input
      placeholder={placeHolder}
      type="text"
      value={searchValue}
      onChange={(e) => handleChange(e.target.value)}
      className="searchInput"
      onBlur={handleBlur}
      onFocus={handleFocus}
    />
  );
};

export default SearchInput;
