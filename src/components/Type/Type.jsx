import { useDispatch } from "react-redux";
import { setVehicleType } from "../../redux/slices/filtersSlice";
import c from "./Type.module.css";

function Type() {
  const dispatch = useDispatch();
  const handleTypeChange = (event) => {
    dispatch(setVehicleType(event.target.value));
  };
  return (
    <div className={c.container}>
      <h2 className="titleFilters">Vehicle type</h2>
      <div className={c.lineWrapper}>
        <svg className={c.line} width="360" height="2">
          <use href="/images/symbol-defs.svg#line"></use>
        </svg>
      </div>
      <div className={c.checkboxGroup}>
        {[
          { value: "van", icon: "icon-bi_grid-1x2", label: "Van" },
          {
            value: "fullyIntegrated",
            icon: "icon-bi_grid",
            label: "Fully Integrated",
          },
          { value: "alcove", icon: "icon-bi_grid-3x3-gap", label: "Alcove" },
        ].map(({ value, icon, label }) => (
          <label key={value} className={c.checkboxItem}>
            <input
              type="radio"
              name="vehicleType"
              value={value}
              onChange={handleTypeChange}
            />
            <div className={c.checkboxContent}>
              <svg className={c.icon} width="32" height="32">
                <use href={`/images/symbol-defs.svg#${icon}`} />
              </svg>
              <span>{label}</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}

export default Type;
