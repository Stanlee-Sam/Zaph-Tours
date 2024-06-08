
import { useState, useEffect } from "react";
import "./trips.css";

const Trips = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const imagesHoneymoon = [
    "/assets/Trips_type/Honeymoon1.jpeg",
    "/assets/Trips_type/Honeymoon2.jpeg",
    "/assets/Trips_type/Honeymoon3.jpeg",
  ];
  const imagesFamily = [
    "/assets/Trips_type/family1.jpeg",
    "/assets/Trips_type/family2.jpeg",
    "/assets/Trips_type/family3.jpeg",
  ];
  const imagesAdventure = [
    "/assets/Trips_type/adventure1.jpeg",
    "/assets/Trips_type/adventure2.jpeg",
    "/assets/Trips_type/adventure3.jpeg",
  ];
  const imagesCultural = [
    "/assets/Trips_type/cultural1.jpeg",
    "/assets/Trips_type/cultural2.jpeg",
    "/assets/Trips_type/cultural3.jpeg",
  ];
  const imagesWildlife = [
    "/assets/Trips_type/wildlife1.jpeg",
    "/assets/Trips_type/wildlife2.jpeg",
    "/assets/Trips_type/wildlife3.jpeg",
  ];
  const imagesEcotours = [
    "/assets/Trips_type/ecotour1.jpeg",
    "/assets/Trips_type/ecotour2.jpeg",
    "/assets/Trips_type/ecotour3.jpeg",
  ];
  const imagesLuxury = [
    "/assets/Trips_type/luxury1.jpeg",
    "/assets/Trips_type/luxury2.jpeg",
    "/assets/Trips_type/luxury3.jpeg",
  ];
  const imagesBeach = [
    "/assets/Trips_type/beach1.jpeg",
    "/assets/Trips_type/beach2.jpeg",
    "/assets/Trips_type/beach3.jpeg",
  ];
  const imagesRetreats =[
    "/assets/Trips_type/retreats1.jpeg",
    "/assets/Trips_type/retreats2.jpeg",
    "/assets/Trips_type/retreats3.jpeg",
  ]
  const imagesCulinary = [
    "/assets/Trips_type/culinary1.jpeg",
    "/assets/Trips_type/culinary2.jpeg",
    "/assets/Trips_type/culinary3.jpeg",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % imagesHoneymoon.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="trips-section">
      <h1>Trips Type</h1>
      <div className="trips-section-cards">
        <div className="trips-product">
          <div className="trips-image-gallery">
            <img src={imagesHoneymoon[imageIndex]} id="productImg" alt="" />
            <div className="controls">
              {imagesHoneymoon.map((_, index) => (
                <span
                  key={index}
                  className={`trip-img-btn ${
                    index === imageIndex ? "active" : ""
                  }`}
                  onClick={() => setImageIndex(index)}
                ></span>
              ))}
            </div>
          </div>
          <div className="trips-product-details">
            <div className="details">
              <h1>Honeymoon</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, quaerat.
              </p>
              <h3>- Ksh 100,000 -</h3>

              <h4>35% off</h4>
              <div className="trips-btn">
                <button>View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="trips-product">
          <div className="trips-image-gallery">
            <img src={imagesFamily[imageIndex]} id="productImg" alt="" />
            <div className="controls">
              {imagesFamily.map((_, index) => (
                <span
                  key={index}
                  className={`trip-img-btn ${
                    index === imageIndex ? "active" : ""
                  }`}
                  onClick={() => setImageIndex(index)}
                ></span>
              ))}
            </div>
          </div>
          <div className="trips-product-details">
            <div className="details">
              <h1>Family Trip</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, quaerat.
              </p>
              <h3>- Ksh 150,000 -</h3>

              <h4>40% off</h4>
              <div className="trips-btn">
                <button>View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="trips-product">
          <div className="trips-image-gallery">
            <img src={imagesAdventure[imageIndex]} id="productImg" alt="" />
            <div className="controls">
              {imagesAdventure.map((_, index) => (
                <span
                  key={index}
                  className={`trip-img-btn ${
                    index === imageIndex ? "active" : ""
                  }`}
                  onClick={() => setImageIndex(index)}
                ></span>
              ))}
            </div>
          </div>
          <div className="trips-product-details">
            <div className="details">
              <h1>Adventure</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, quaerat.
              </p>
              <h3>- Ksh 70,000 -</h3>

              <h4>30% off</h4>
              <div className="trips-btn">
                <button>View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="trips-product">
          <div className="trips-image-gallery">
            <img src={imagesCultural[imageIndex]} id="productImg" alt="" />
            <div className="controls">
              {imagesCultural.map((_, index) => (
                <span
                  key={index}
                  className={`trip-img-btn ${
                    index === imageIndex ? "active" : ""
                  }`}
                  onClick={() => setImageIndex(index)}
                ></span>
              ))}
            </div>
          </div>
          <div className="trips-product-details">
            <div className="details">
              <h1>Cultural Tours</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, quaerat.
              </p>
              <h3>- Ksh 60,000 -</h3>

              <h4>40% off</h4>
              <div className="trips-btn">
                <button>View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="trips-product">
          <div className="trips-image-gallery">
            <img src={imagesWildlife[imageIndex]} id="productImg" alt="" />
            <div className="controls">
              {imagesWildlife.map((_, index) => (
                <span
                  key={index}
                  className={`trip-img-btn ${
                    index === imageIndex ? "active" : ""
                  }`}
                  onClick={() => setImageIndex(index)}
                ></span>
              ))}
            </div>
          </div>
          <div className="trips-product-details">
            <div className="details">
              <h1>Wildlife Safaris</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, quaerat.
              </p>
              <h3>- Ksh 50,000 -</h3>

              <h4>10% off</h4>
              <div className="trips-btn">
                <button>View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="trips-product">
          <div className="trips-image-gallery">
            <img src={imagesEcotours[imageIndex]} id="productImg" alt="" />
            <div className="controls">
              {imagesEcotours.map((_, index) => (
                <span
                  key={index}
                  className={`trip-img-btn ${
                    index === imageIndex ? "active" : ""
                  }`}
                  onClick={() => setImageIndex(index)}
                ></span>
              ))}
            </div>
          </div>
          <div className="trips-product-details">
            <div className="details">
              <h1>Eco-tours</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, quaerat.
              </p>
              <h3>- Ksh 90,000 -</h3>

              <h4>20% off</h4>
              <div className="trips-btn">
                <button>View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="trips-product">
          <div className="trips-image-gallery">
            <img src={imagesLuxury[imageIndex]} id="productImg" alt="" />
            <div className="controls">
              {imagesLuxury.map((_, index) => (
                <span
                  key={index}
                  className={`trip-img-btn ${
                    index === imageIndex ? "active" : ""
                  }`}
                  onClick={() => setImageIndex(index)}
                ></span>
              ))}
            </div>
          </div>
          <div className="trips-product-details">
            <div className="details">
              <h1>Luxury Vacations</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, quaerat.
              </p>
              <h3>- Ksh 100,000 -</h3>

              <h4>20% off</h4>
              <div className="trips-btn">
                <button>View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="trips-product">
          <div className="trips-image-gallery">
            <img src={imagesBeach[imageIndex]} id="productImg" alt="" />
            <div className="controls">
              {imagesBeach.map((_, index) => (
                <span
                  key={index}
                  className={`trip-img-btn ${
                    index === imageIndex ? "active" : ""
                  }`}
                  onClick={() => setImageIndex(index)}
                ></span>
              ))}
            </div>
          </div>
          <div className="trips-product-details">
            <div className="details">
              <h1>Beach Holidays</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, quaerat.
              </p>
              <h3>- Ksh 80,000 -</h3>

              <h4>15% off</h4>
              <div className="trips-btn">
                <button>View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="trips-product">
          <div className="trips-image-gallery">
            <img src={imagesRetreats[imageIndex]} id="productImg" alt="" />
            <div className="controls">
              {imagesRetreats.map((_, index) => (
                <span
                  key={index}
                  className={`trip-img-btn ${
                    index === imageIndex ? "active" : ""
                  }`}
                  onClick={() => setImageIndex(index)}
                ></span>
              ))}
            </div>
          </div>
          <div className="trips-product-details">
            <div className="details">
              <h1>Wellness Retreats</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, quaerat.
              </p>
              <h3>- Ksh 60,000 -</h3>

              <h4>25% off</h4>
              <div className="trips-btn">
                <button>View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="trips-product">
          <div className="trips-image-gallery">
            <img src={imagesCulinary[imageIndex]} id="productImg" alt="" />
            <div className="controls">
              {imagesCulinary.map((_, index) => (
                <span
                  key={index}
                  className={`trip-img-btn ${
                    index === imageIndex ? "active" : ""
                  }`}
                  onClick={() => setImageIndex(index)}
                ></span>
              ))}
            </div>
          </div>
          <div className="trips-product-details">
            <div className="details">
              <h1>Culinary Tours</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, quaerat.
              </p>
              <h3>- Ksh 75,000 -</h3>

              <h4>20% off</h4>
              <div className="trips-btn">
                <button>View Details</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Trips;
