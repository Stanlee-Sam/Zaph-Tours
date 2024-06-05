import './testimonials.css'
import { reviews } from './reviewData';
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Testimonial = () => {
  return (
    <section className="testimonial-container">
      <div className="testimonial-title">
        <h1>Testimonials</h1>
        <p>What clients are saying.</p>
      </div>
      <div className="slider-container">
        <Slide options={{ perPage: 1 }}>
          {reviews.map((review) => (
            <div className="box" key={review.id}>
              <img src={review.img} className="review-img" alt="" />

              <div className="content">
                <div className="info">
                  <p className="user">{review.name}</p>
                  <div className="rating">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                  </div>
                </div>
                <p className="text">{review.review}</p>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </section>
  );
};
export default Testimonial;
