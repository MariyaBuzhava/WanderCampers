import Equipment from "../Equipment/Equipment.jsx";
import Type from "../Type/Type.jsx";
import c from "./Filters.module.css";

function Filters() {
  return (
    <div className={c.container}>
      <h2 className={c.title}>Filters</h2>
      <Equipment />
      <Type />
    </div>
  );
}

export default Filters;
