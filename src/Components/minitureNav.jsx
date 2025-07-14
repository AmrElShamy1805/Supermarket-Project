import { Link } from 'react-router-dom';
import '../cssfiles/MinitureNav.css'
const categories = [
  "Beverages", "Snacks", "Dairy", "Produce", "Bakery",
  "Frozen", "Pantry", "Household", "Personal Care", "Stationery","Electronics","Appliances"
];

export default function ProductsBar() {
  return (
    <div className="mininavcontainer">
      <div className="categories">
        <ul className="categorylist">
          {categories.map((category) => (
            <li className="category" key={category}>
              <Link to={`/products?category=${encodeURIComponent(category)}`}>
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
