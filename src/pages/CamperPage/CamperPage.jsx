import { useEffect, useState } from "react";
import c from "./CamperPage.module.css";
import { fetchCamperById } from "../../redux/operations";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCamper,
  selectError,
  selectIsLoading,
} from "../../redux/selectors/campersSelectors";

function CamperPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const camper = useSelector(selectCamper);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  const [activeSection, setActiveSection] = useState("features");

  const handleTabClick = (section) => {
    setActiveSection(section);
  };

  const renderStars = (rating) => {
    const totalStars = 5;
    let stars = [];
    for (let i = 0; i < totalStars; i++) {
      stars.push(
        <svg
          key={i}
          className={i < rating ? c.starActive : c.starInactive}
          width="16"
          height="16"
        >
          <use href="/images/symbol-defs.svg#icon-star" />
        </svg>
      );
    }
    return stars;
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!camper) return <p>Camper not found</p>;

  return (
    <div className={c.container}>
      <div className={c.camper}>
        <div className={c.camperHeader}>
          <h3 className={c.camperName}>{camper.name}</h3>
          <div className={c.camperWrapper}>
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

            <h3 className={c.camperPrice}>€{camper.price}.00</h3>
          </div>
        </div>
        <div className={c.pictures}>
          {camper.gallery && camper.gallery.length > 0 ? (
            camper.gallery
              .slice(0, 4)
              .map((image, index) => (
                <img
                  key={index}
                  className={c.camperImage}
                  src={image.thumb}
                  alt={camper.name}
                />
              ))
          ) : (
            <p>Images not found</p>
          )}
        </div>
        <p className={c.camperDescription}>{camper.description}</p>
      </div>
      <div className={c.tabs}>
        <div className={c.titles}>
          <button
            onClick={() => handleTabClick("features")}
            className={`${c.title} ${activeSection === "features" ? c.active : ""}`}
          >
            Features
          </button>
          <button
            onClick={() => handleTabClick("reviews")}
            className={`${c.title} ${activeSection === "reviews" ? c.active : ""}`}
          >
            Reviews
          </button>
        </div>
        <div className={c.lineWrapper}>
          <svg className={c.line} width="1312" height="2">
            <use href="/images/symbol-defs.svg#line"></use>
          </svg>
        </div>
      </div>
      <div className={c.content}>
        {activeSection === "features" && (
          <>
            <div className={c.containerFeatures}>
              <div className={c.camperFeatures}>
                {[
                  { icon: "icon-wind", name: "AC", value: camper.AC },
                  {
                    icon: "icon-ph_shower",
                    name: "Bathroom",
                    value: camper.bathroom,
                  },
                  {
                    icon: "icon-cup-hot",
                    name: "Kitchen",
                    value: camper.kitchen,
                  },
                  { icon: "icon-tv", name: "TV", value: camper.TV },
                  {
                    icon: "icon-ui-radios",
                    name: "Radio",
                    value: camper.radio,
                  },
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
              <div className={c.details}>
                <h2 className={c.detailsTitle}>Vehicle details</h2>
                <div className={c.lineWrapper}>
                  <svg className={c.line} width="527" height="2">
                    <use href="/images/symbol-defs.svg#line"></use>
                  </svg>
                </div>
                <div className={c.detailInfo}>
                  <div className={c.info}>
                    <p className={c.detailText}>Form</p>
                    <p className={c.detailText}>{camper.form}</p>
                  </div>
                  <div className={c.info}>
                    <p className={c.detailText}>Length</p>
                    <p className={c.detailText}>{camper.length}</p>
                  </div>
                  <div className={c.info}>
                    <p className={c.detailText}>Width</p>
                    <p className={c.detailText}>{camper.width}</p>
                  </div>
                  <div className={c.info}>
                    <p className={c.detailText}>Height</p>
                    <p className={c.detailText}>{camper.height}</p>
                  </div>
                  <div className={c.info}>
                    <p className={c.detailText}>Tank</p>
                    <p className={c.detailText}>{camper.tank}</p>
                  </div>
                  <div className={c.info}>
                    <p className={c.detailText}>Consumption</p>
                    <p className={c.detailText}>{camper.consumption}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {activeSection === "reviews" && (
          <div>
            <div className={c.reviews}>
              {camper.reviews && camper.reviews.length > 0 ? (
                camper.reviews.map((review, index) => (
                  <div key={index} className={c.review}>
                    <div className={c.user}>
                      <div className={c.avatar}>
                        <span className={c.avatarLetter}>
                          {review.reviewer_name[0].toUpperCase()}
                        </span>
                      </div>
                      <div className={c.userInfo}>
                        <p className={c.userName}>{review.reviewer_name}</p>
                        <div className={c.rating}>
                          {renderStars(review.reviewer_rating)}
                        </div>
                      </div>
                    </div>
                    <p className={c.comment}>{review.comment}</p>
                  </div>
                ))
              ) : (
                <p>No reviews yet</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CamperPage;
