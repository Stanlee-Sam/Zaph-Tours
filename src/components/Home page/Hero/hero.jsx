import "./hero.css";
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="glass">
        <h1 className="h-glass">Zaph</h1>
        <div>
          <div>
            <i className="fas fa-route fa-2x"></i>
          </div>
          <div>
            <h2>Explore the world with us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
              quae tempore, nulla ipsum, velit autem sit, earum delectus
              voluptates adipisci aperiam nesciunt animi recusandae error
              corrupti qui molestiae beatae quis.
            </p>
            {/* <a href="#">
              View
              <i className="fas fa-long-arrow-alt-right"></i>
            </a> */}
            <div className="home-btn">
                <button>Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <h1 className="h-regular">Tours</h1>
    </section>
  );
};

export default Hero;
