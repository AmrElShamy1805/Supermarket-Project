import { useLocation } from "react-router-dom";
import ItemList from "../Components/listofitems";
import NavigationBar from "../Components/navbar";
import ProductsBar from "../Components/minitureNav";

export default function ProductsPage({ items , addCartItem }) {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const searchTerm = query.get("search")?.toLowerCase() || "";
  const selectedCategory = query.get("category");

  const filteredItems = items.filter(item => {
    const matchesCategory = selectedCategory ? item.category === selectedCategory : true;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <NavigationBar />
      <div className="featuredproductsdiv">
        <h1>
          {selectedCategory && searchTerm
            ? `${selectedCategory} - Results for "${searchTerm}"`
            : selectedCategory
            ? `${selectedCategory} Products`
            : searchTerm
            ? `Results for "${searchTerm}"`
            : "Featured Products"}
        </h1>
      </div>
      <ProductsBar />
      <ItemList listofitems={filteredItems} addCartItem = {addCartItem} />
    </>
  );
}
