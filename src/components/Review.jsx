import ReviewImage from "../../src/assets/review-icon.png";
import "./Review.css";

const reviewPage = () => {
  return (
    <>
      <div className="main">
        <div className="above-content">
          <div className="wrapper-above-content">
            <h1>Happy Clients</h1>
            <div className="button-wrapper">
              <button>Leave a Review</button>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="review-main-section">
            <div className="section-card">
              <p className=" card-p">Awesome</p>
              <div className="image-wrapper">
                <h2>Luis Test</h2>
                <img src={ReviewImage} alt="reviewimage" />
              </div>
            </div>
            <div className="section-card">
              <p className=" card-p">Awesome</p>
              <div className="image-wrapper">
                <h2>Luis Test</h2>
                <img src={ReviewImage} alt="reviewimage" />
              </div>
            </div>
            <div className="section-card">
              <p className=" card-p">Awesome</p>
              <div className="image-wrapper">
                <h2>Luis Test</h2>
                <img src={ReviewImage} alt="reviewimage" />
              </div>
            </div>
            <div className="section-card">
              <p className=" card-p">Awesome</p>
              <div className="image-wrapper">
                <h2>Luis Test</h2>
                <img src={ReviewImage} alt="reviewimage" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default reviewPage;
