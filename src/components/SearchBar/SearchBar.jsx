import c from "./SearchBar.module.css";
import Filters from "../Filters/Filters.jsx";
import Location from "../Location/Location.jsx";

function SearchBar() {
  return (
    <div className={c.container}>
      <Location />
      <Filters />
      <button>Search</button>
    </div>
  );
}

export default SearchBar;
