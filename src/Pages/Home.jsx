import NavigationBar from "../Components/navbar";
import ItemList from "../Components/listofitems";
import Carousel from "../Components/Carousel";
import "../cssfiles/Homepage.css";
import FooterSection from "../Components/Footer";
export default function HomePage() {
  return (
    <>
      <NavigationBar />

      {/* Notification Banner */}
      <div className="notification-banner">
        <span className="left-icon"><i className="fa-solid fa-gift"></i></span>
        <p className="message">
          First order? Use discount code: <strong>"First110!"</strong> and enjoy 15% off — up to EGP 120!
        </p>
        <span className="right-icon"><i className="fa-solid fa-pen-to-square"></i></span>
      </div>

      {/* Carousel */}
      <Carousel />

      {/* Welcome Section */}
      <div className="welcome-section">
        <div className="welcome-text-container">
            <h1>Welcome to ShopEase!</h1>
            <p>Your one-stop online supermarket — <strong>Fast, Fresh, and Affordable.</strong></p>
        </div>
        </div>

      {/* Sponsor Section */}
      <div className="sponser-section-wrapper">
        <div className="sponser-section">
          <div className="small-section">
            <i className="fa-solid fa-users"></i>
            <div className="small-section-text-area">
              <span className="Smaller-text">Our Community</span>
              <span>Join the community!</span>
            </div>
          </div>
          <div className="small-section">
            <i className="fa-solid fa-utensils"></i>
            <div className="small-section-text-area">
              <span className="Smaller-text">Our Items</span>
              <span>Check out our items!</span>
            </div>
          </div>
          <div className="small-section">
            <i className="fa-solid fa-percent"></i>
            <div className="small-section-text-area">
              <span className="Smaller-text">Deals</span>
              <span>Our Deals!</span>
            </div>
          </div>
          <div className="small-section">
            <i className="fa-solid fa-money-bill"></i>
            <div className="small-section-text-area">
              <span className="Smaller-text">In a hurry?</span>
              <span>Buy again</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <section className="quick-categories">
        <h2>Shop by Category</h2>
        <div className="category-buttons">
          <button>Beverages</button>
          <button>Snacks</button>
          <button>Personal Care</button>
          <button>Household</button>
          <button>Electronics</button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section">
        <h2>Top Picks For You</h2>
        {/* Placeholder — You can dynamically load some items later */}
        <p>Check out our most popular items and exclusive deals!</p>
        {/* <ItemList listofitems={items.slice(0, 8)} /> // Optional in future */}
      </section>
      <FooterSection/>
    </>
  );
}
