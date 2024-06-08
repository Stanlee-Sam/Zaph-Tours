import "./featdest.css";

const Topfeatdest = () => {
  return (
    <section className="top-dest-section">
      <h1>Top Destinations</h1>
      
      <div className="top-dest-pics-descriptions">
        <div className="individual-destination">
          <div className="dest-pic">
            <img
              src="/public/assets/top_destinations/kenya.jpeg"
              alt=""
            />
          </div>
          <div className="top-dest-pic-descriptions">
            <h3>Mt Kenya</h3>
            <p>
              One of the world’s largest mountains. A truly enchanting
              spectacle!
            </p>
          </div>
        </div>

        <div className="individual-destination">
          <div className="dest-pic">
            <img
              src="/public/assets/top_destinations/ruwenzori.jpeg"
              alt=""
            />
          </div>
          <div className="top-dest-pic-descriptions">
            <h3>Mt Ruwenzori</h3>
            <p>
              Named the ‘rain-maker’ in local language. A haven to numerous
              eccentric species.{" "}
            </p>
          </div>
        </div>

        <div className="individual-destination">
          <div className="dest-pic">
            <img
              src="/public/assets/top_destinations/nakuru.jpeg"
              alt=""
            />
          </div>
          <div className="top-dest-pic-descriptions">
          <h3>Lake Nakuru</h3>
          <p>
            A shimmering lake that transforms into a pink mass of flamboyants
            flamingoes.{" "}
          </p>
          </div>
        </div>
        <div className="individual-destination">
          <div className="dest-pic">
            <img
              src="/public/assets/top_destinations/tsavo.jpeg"
              alt=""
            />
          </div>
          <div className="top-dest-pic-descriptions">
          <h3>Tsavo National Park</h3>
          <p>Kenya’s largest national park and an explorer’s paradise. </p>

          </div>
        </div>
        <div className="individual-destination">
          <div className="dest-pic">
            <img
              src="/public/assets/top_destinations/nairobi.jpeg"
              alt=""
            />
          </div>
          <div className="top-dest-pic-descriptions">
          <h3>Nairobi National Park</h3>
          <p>
            The world’s wildlife capital right at the doorstep of Kenya’s
            bustling capital.{" "}
          </p>
          </div>
        </div>
        <div className="individual-destination">
          <div className="dest-pic">
            <img
              src="/public/assets/top_destinations/coast.jpeg"
              alt=""
            />
          </div>
          <div className="top-dest-pic-descriptions">
          <h3>Coastal Kenya</h3>
          <p>
            Sparkling turquoise waters, sundrenched beaches, rich cultural
            heritage. A tropical paradise.{" "}
          </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topfeatdest;
