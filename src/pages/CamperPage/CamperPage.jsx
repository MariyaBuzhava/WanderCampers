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
import BookingForm from "../../components/BookingForm/BookingForm";
import Features from "../../components/Features/Features";
import Reviews from "../../components/Reviews/Reviews";

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
        {activeSection === "features" && <Features />}
        {activeSection === "reviews" && <Reviews />}
        <BookingForm />
      </div>
    </div>
  );
}

export default CamperPage;
