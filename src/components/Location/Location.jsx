import { useDispatch } from "react-redux";
import c from "./Location.module.css";
import { setLocation } from "../../redux/slices/filtersSlice";

function Location() {
  const dispatch = useDispatch();

  const handleLocationChange = (event) => {
    dispatch(setLocation(event.target.value));
  };
  return (
    <div className={c.container}>
      <label className={c.lable}>
        Location
        <div className={c.wrapper}>
          <svg className={c.icon} width="20" height="20">
            <use href="/images/symbol-defs.svg#icon-Map" />
          </svg>
          <input
            type="text"
            name="location"
            placeholder="City"
            className={c.input}
            onChange={handleLocationChange}
          />
        </div>
      </label>
    </div>
  );
}

export default Location;
