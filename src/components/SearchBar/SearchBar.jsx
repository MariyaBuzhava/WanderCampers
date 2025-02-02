import c from "./SearchBar.module.css";
import Filters from "../Filters/Filters.jsx";
import Location from "../Location/Location.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../../redux/selectors/filtersSelectors.js";
import { selectCampers } from "../../redux/selectors/campersSelectors.js";
import { setFilteredCampers } from "../../redux/slices/filtersSlice.js";

function SearchBar() {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const campers = useSelector(selectCampers);

  const handleSearch = () => {
    const filtered = campers.filter((camper) =>
      camper.location.toLowerCase().includes(filters.location.toLowerCase())
    );

    dispatch(setFilteredCampers(filtered));
  };
  return (
    <div className={c.container}>
      <Location />
      <Filters />
      <button className="btn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
