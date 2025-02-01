import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/slices/filtersSlice";
import c from "./Equipment.module.css";

function Equipment() {
  const dispatch = useDispatch();

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    dispatch(setFilter({ name, value: checked }));
  };
  return (
    <div className={c.container}>
      <h2 className="titleFilters">Vehicle equipment</h2>
      <div className={c.lineWrapper}>
        <svg className={c.line} width="360" height="2">
          <use href="/images/symbol-defs.svg#line"></use>
        </svg>
      </div>
      <div className={c.checkboxGroup}>
        {[
          { name: "ac", icon: "icon-wind", label: "AC" },
          { name: "automatic", icon: "icon-diagram", label: "Automatic" },
          { name: "kitchen", icon: "icon-cup-hot", label: "Kitchen" },
          { name: "tv", icon: "icon-tv", label: "TV" },
          { name: "bathroom", icon: "icon-ph_shower", label: "Bathroom" },
        ].map(({ name, icon, label }) => (
          <label key={name} className={c.checkboxItem}>
            <input
              type="checkbox"
              name={name}
              onChange={handleCheckboxChange}
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

export default Equipment;
