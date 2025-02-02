import { useSelector } from "react-redux";
import c from "./Features.module.css";
import { selectCamper } from "../../redux/selectors/campersSelectors";

function Features() {
  const camper = useSelector(selectCamper);
  return (
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
  );
}

export default Features;
