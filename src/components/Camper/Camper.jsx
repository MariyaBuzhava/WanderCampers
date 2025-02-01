import { useDispatch } from "react-redux";
import c from "./Camper.module.css";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/slices/favoritesSlice";

function Camper({ camper, isFavorite }) {
  const dispatch = useDispatch();

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(camper.id));
    } else {
      dispatch(addToFavorites(camper.id));
    }
  };

  const handleShowMoreClick = () => {
    window.open(`/campers/${camper.id}`, "_blank");
  };
  return (
    <li className={c.camperWrapper}>
      <div className={c.camperItem}>
        <img
          className={c.camperImage}
          src={camper.gallery[0].thumb}
          alt={camper.name}
        />
        <div className={c.camperDetails}>
          <div className={c.camperHeader}>
            <div className={c.camperInfo}>
              <h3 className={c.camperName}>{camper.name}</h3>
              <div className={c.camperPriceContainer}>
                <h3 className={c.camperPrice}>€{camper.price}.00</h3>
                <svg
                  onClick={handleFavoriteClick}
                  className={`${c.iconHeart} ${isFavorite ? c.favoriteActive : ""}`}
                  width="26"
                  height="24"
                >
                  <use href="/images/symbol-defs.svg#icon-heart" />
                </svg>
              </div>
            </div>
            <div className={c.camperRatingLocation}>
              <div className={c.camperRating}>
                <svg
                  className={`${c.iconStar} ${camper.reviews.length > 0 ? c.iconStarActive : ""}`}
                  width="16"
                  height="16"
                >
                  <use href="/images/symbol-defs.svg#icon-star" />
                </svg>
                <h3 className={c.camperReviews}>
                  {camper.rating}({camper.reviews.length} Reviews)
                </h3>
              </div>
              <div className={c.camperLocation}>
                <svg className={c.icon} width="16" height="16">
                  <use href="/images/symbol-defs.svg#icon-Map" />
                </svg>
                <h3 className={c.camperLocationText}>{camper.location}</h3>
              </div>
            </div>
          </div>
          <p className={c.camperDescription}>{camper.description}</p>
          <div className={c.camperFeatures}>
            {[
              { icon: "icon-wind", name: "AC", value: camper.AC },
              {
                icon: "icon-ph_shower",
                name: "Bathroom",
                value: camper.bathroom,
              },
              { icon: "icon-cup-hot", name: "Kitchen", value: camper.kitchen },
              { icon: "icon-tv", name: "TV", value: camper.TV },
              { icon: "icon-ui-radios", name: "Radio", value: camper.radio },
              {
                icon: "icon-solar_fridge-outline",
                name: "Refrigerator",
                value: camper.refrigerator,
              },
              {
                icon: "icon-lucide_microwave",
                name: "Microwave",
                value: camper.microwave,
              },
              {
                icon: "icon-hugeicons_gas-stove",
                name: "Gas",
                value: camper.gas,
              },
              {
                icon: "icon-ion_water-outline",
                name: "Water",
                value: camper.water,
              },
            ]
              .filter((feature) => feature.value)
              .map((feature, index) => (
                <span key={index} className={c.camperFeature}>
                  <svg
                    className={`${c.icon} ${["icon-hugeicons_gas-stove", "icon-ion_water-outline", "icon-lucide_microwave"].includes(feature.icon) ? c.specialIcon : ""}`}
                    width="20"
                    height="20"
                  >
                    <use href={`/images/symbol-defs.svg#${feature.icon}`} />
                  </svg>
                  <p>{feature.name}</p>
                </span>
              ))}
          </div>
          <button className="btn" onClick={handleShowMoreClick}>
            Show more
          </button>
        </div>
      </div>
    </li>
  );
}

export default Camper;
