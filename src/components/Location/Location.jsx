import c from "./Location.module.css";

function Location() {
  return (
    <div className={c.container}>
      <label className={c.lable}>
        Location
        <div className={c.wrapper}>
          <svg className={c.icon} width="20" height="20">
            <use href="/public/images/symbol-defs.svg#icon-Map" />
          </svg>
          <input
            type="text"
            name="location"
            placeholder="City"
            className={c.input}
          />
        </div>
      </label>
    </div>
  );
}

export default Location;
