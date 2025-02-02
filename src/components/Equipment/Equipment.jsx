import { useDispatch, useSelector } from "react-redux";

import c from "./Equipment.module.css";
import { selectEquipmentFilters } from "../../redux/selectors/filtersSelectors";
import { setFilteredCampers } from "../../redux/slices/filtersSlice";

function Equipment() {
  const dispatch = useDispatch();
  const selectedEquipment = useSelector(selectEquipmentFilters);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    dispatch(setFilteredCampers({ name, value: checked }));
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
          { name: "radio", icon: "icon-ui-radios", label: "Radio" },
          {
            name: "refrigerator",
            icon: "icon-solar_fridge-outline",
            label: "Refrigerator",
          },
          {
            name: "microwave",
            icon: "icon-lucide_microwave",
            label: "Microwave",
          },
          { name: "gas", icon: "icon-hugeicons_gas-stove", label: "Gas" },
          { name: "water", icon: "icon-ion_water-outline", label: "Water" },
        ].map(({ name, icon, label }) => (
          <label key={name} className={c.checkboxItem}>
            <input
              type="checkbox"
              name={name}
              checked={!!selectedEquipment[name]}
              onChange={handleCheckboxChange}
            />
            <div className={c.checkboxContent}>
              <svg
                className={`${c.icon} ${["gas", "water", "microwave"].includes(name) ? c.specialIcon : ""}`}
                width="32"
                height="32"
              >
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
