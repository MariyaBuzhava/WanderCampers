import c from "./SearchBar.module.css";
import Filters from "../Filters/Filters.jsx";
import Location from "../Location/Location.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../../redux/selectors/filtersSelectors.js";
import { selectCampers } from "../../redux/selectors/campersSelectors.js";
import {
  resetFilters,
  setFilteredCampers,
} from "../../redux/slices/filtersSlice.js";

function SearchBar() {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const campers = useSelector(selectCampers);

  const handleSearch = () => {
    let filtered = campers;

    if (filters.location) {
      filtered = filtered.filter((camper) =>
        camper.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    if (filters.vehicleType) {
      filtered = filtered.filter(
        (camper) => camper.form === filters.vehicleType
      );
    }

    const selectedEquipment = Object.keys(filters.equipmentFilters).filter(
      (key) => filters.equipmentFilters[key] === true
    );

    if (selectedEquipment.length > 0) {
      filtered = filtered.filter((camper) =>
        selectedEquipment.every((item) => camper.equipment[item] === true)
      );
    }

    dispatch(setFilteredCampers(filtered));
    dispatch(resetFilters());
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
