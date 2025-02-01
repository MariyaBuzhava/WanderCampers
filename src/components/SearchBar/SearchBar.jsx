import c from "./SearchBar.module.css";
import Filters from "../Filters/Filters.jsx";
import Location from "../Location/Location.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilteredCampers } from "../../redux/operations.js";
import {
  selectEquipmentFilters,
  selectLocation,
  selectVehicleType,
} from "../../redux/selectors/filtersSelectors.js";

function SearchBar() {
  const dispatch = useDispatch();
  const location = useSelector(selectLocation);
  const vehicleType = useSelector(selectVehicleType);
  const equipmentFilters = useSelector(selectEquipmentFilters);

  const handleSearch = () => {
    const filters = {
      location,
      type: vehicleType,
      ac: equipmentFilters.ac,
      automatic: equipmentFilters.automatic,
      kitchen: equipmentFilters.kitchen,
      tv: equipmentFilters.tv,
      bathroom: equipmentFilters.bathroom,
    };
    dispatch(fetchFilteredCampers(filters));
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
