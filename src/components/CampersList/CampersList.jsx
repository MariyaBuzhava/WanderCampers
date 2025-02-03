import c from "./CampersList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCampers } from "../../redux/operations.js";
import {
  selectCampers,
  selectError,
  selectIsLoading,
} from "../../redux/selectors/campersSelectors.js";
import Camper from "../Camper/Camper.jsx";
import { selectFavorites } from "../../redux/selectors/favoritesSelectors.js";
import { selectFilteredCampers } from "../../redux/selectors/filtersSelectors.js";

export default function CampersList() {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers) || [];
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filteredCampers = useSelector(selectFilteredCampers) || [];
  const favorites = useSelector(selectFavorites);
  const [visibleCampers, setVisibleCampers] = useState(4);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const handleLoadMore = () => {
    setVisibleCampers((prevVisibleCampers) => prevVisibleCampers + 4);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const campersToDisplay =
    filteredCampers.length > 0
      ? filteredCampers.slice(0, visibleCampers)
      : campers.slice(0, visibleCampers);
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
      {visibleCampers < (filteredCampers.length || campers.length) && (
        <button className={c.btnLoad} onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </div>
  );
}
