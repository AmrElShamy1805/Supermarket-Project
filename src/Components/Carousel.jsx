import '../cssfiles/Carousel.css'
export default function Carousel() {
  return (
    <div className="carousel-wrapper">
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          />
        </div>

        <div className="carousel-inner">
          <div
            className="carousel-item active text-white"
            data-bs-interval="5000"
            style={{
              backgroundImage: `url("https://i.pinimg.com/736x/14/b0/c2/14b0c2a59e2f8472b0c8aa5a35b43aa7.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "400px",
            }}
          >
            <div className="carousel-caption custom-caption">
              <h5 className="text-light">Fresh Groceries</h5>
              <p className="text-light">
                Get the best produce and essentials delivered to your door.
              </p>
            </div>
          </div>

          <div
            className="carousel-item text-white"
            data-bs-interval="5000"
            style={{
              backgroundImage: `url("https://i.pinimg.com/736x/8b/70/31/8b703126489c6bd1cda78a18392d3a70.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "400px",
            }}
          >
            <div className="carousel-caption custom-caption">
              <h5 className="text-light">Great Offers</h5>
              <p className="text-light">
                Save more with our weekly discounts and bundle deals.
              </p>
            </div>
          </div>

          <div
            className="carousel-item text-white"
            style={{
              backgroundImage: `url("https://i.pinimg.com/736x/c0/5b/33/c05b331573bc11efe1948d58f355d45d.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "400px",
            }}
          >
            <div className="carousel-caption custom-caption">
              <h5 className="text-light">Easy Shopping</h5>
              <p className="text-light">
                Fast and smooth checkout experience, from cart to home.
              </p>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
