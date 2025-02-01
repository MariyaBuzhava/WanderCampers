import c from "./CampersList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCampers, fetchFilteredCampers } from "../../redux/operations.js";
import {
  selectCampers,
  selectError,
  selectIsLoading,
} from "../../redux/selectors/campersSelectors.js";
import Camper from "../Camper/Camper.jsx";
import {
  selectEquipmentFilters,
  selectLocation,
  selectVehicleType,
} from "../../redux/selectors/filtersSelectors.js";
import { selectFavorites } from "../../redux/selectors/favoritesSelectors.js";

export default function CampersList() {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers) || [];
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const location = useSelector(selectLocation);
  const vehicleType = useSelector(selectVehicleType);
  const equipmentFilters = useSelector(selectEquipmentFilters);
  const favorites = useSelector(selectFavorites);
  const [visibleCampers, setVisibleCampers] = useState(4);

  const filters = {
    location,
    type: vehicleType,
    ac: equipmentFilters.ac,
    automatic: equipmentFilters.automatic,
    kitchen: equipmentFilters.kitchen,
    tv: equipmentFilters.tv,
    bathroom: equipmentFilters.bathroom,
  };

  useEffect(() => {
    if (
      location ||
      vehicleType ||
      Object.values(equipmentFilters).some((val) => val)
    ) {
      dispatch(fetchFilteredCampers(filters));
    } else {
      dispatch(fetchCampers());
    }
  }, [dispatch, location, vehicleType, equipmentFilters]);

  const handleLoadMore = () => {
    setVisibleCampers((prevVisibleCampers) => prevVisibleCampers + 4);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const campersToDisplay = campers.slice(0, visibleCampers);

  return (
    <div className={c.container}>
      {campersToDisplay.length > 0 ? (
        <ul className={c.wrapper}>
          {campersToDisplay.map((camper) => (
            <Camper
              key={camper.id}
              camper={camper}
              isFavorite={favorites.includes(camper.id)}
            />
          ))}
        </ul>
      ) : (
        <p>No campers found.</p>
      )}
      {visibleCampers < campers.length && campers.length > 0 && (
        <button className={c.btnLoad} onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </div>
  );
}
