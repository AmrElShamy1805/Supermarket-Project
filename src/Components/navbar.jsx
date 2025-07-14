import '../cssfiles/navbar.css'
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function NavigationBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault(); // prevent form refresh
    if (searchTerm.trim() !== '') {
      navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
      setSearchTerm('');
    }
  };

  return (
    <div className="Navbarcontainer">
      <div className="logoarea">
        Logo Here
      </div>

      <form onSubmit={handleSearch} className="navbar-search-form">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="navbar-search-input"
        />
        <button type="submit" className="navbar-search-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
      </form>

      <div className="paths">
        <ul className="pathslist">
          <li className="path">
            <Link to='/'>Home</Link>
          </li>
          <li className="path">
            <Link to='/products'><i className="fa-brands fa-product-hunt"></i> Products</Link>
          </li>
          <li className="path">
            <Link to='/cart'><i className="fa-solid fa-cart-shopping"></i> Cart</Link>
          </li>
          <li className="path">
            <Link to='/'><i className="fa-solid fa-gear"></i> Settings</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
