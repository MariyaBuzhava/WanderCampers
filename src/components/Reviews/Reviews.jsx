import { useSelector } from "react-redux";
import { selectCamper } from "../../redux/selectors/campersSelectors";
import c from "./Reviews.module.css";

function Reviews() {
  const camper = useSelector(selectCamper);

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
  return (
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
  );
}

export default Reviews;
