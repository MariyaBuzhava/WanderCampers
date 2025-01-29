import Filters from "../Filters/Filters.jsx";
import Location from "../Location/Location.jsx";

function SearchBar() {
  return (
    <div>
      <Location />
      <Filters />
      <button>Search</button>
    </div>
  );
}

export default SearchBar;
