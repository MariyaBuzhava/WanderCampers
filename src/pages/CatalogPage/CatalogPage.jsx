import c from "./CatalogPage.module.css";
import CampersList from "../../components/CampersList/CampersList.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";

function CatalogPage() {
  return (
    <div className={c.container}>
      <SearchBar />
      <CampersList />
    </div>
  );
}

export default CatalogPage;
