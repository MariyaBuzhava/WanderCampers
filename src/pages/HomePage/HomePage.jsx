import { Link } from "react-router-dom";
import c from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={c.container}>
      <div className={c.title}>
        <h1 className={c.text1}>Campers of your dreams</h1>
        <h3 className={c.text2}>
          You can find everything you want in our catalog
        </h3>
        <Link to="/catalog" className="btn">
          View Now
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
