import c from "./Header.module.css";
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <div className={c.container}>
      <img
        src="/assets/images/TravelTrucks.svg"
        alt="Logo"
        width="136"
        height="16"
      />
      <Navigation />
    </div>
  );
}

export default Header;
