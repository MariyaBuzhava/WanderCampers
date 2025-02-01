import Equipment from "../Equipment/Equipment.jsx";
import Type from "../Type/Type.jsx";
import c from "./Filters.module.css";

function Filters({ dispatch }) {
  return (
    <div className={c.container}>
      <h2 className={c.title}>Filters</h2>
      <Equipment dispatch={dispatch} />
      <Type dispatch={dispatch} />
    </div>
  );
}

export default Filters;
