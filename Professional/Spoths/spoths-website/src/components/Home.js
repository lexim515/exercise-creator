import photo2 from "../photo/spoths-flowers.jpeg";
import photo3 from "../photo/IMG_2766.JPG";
import mainPhoto from "../photo/IMG_0577.jpeg";
import photo from "../photo/IMG_2785.JPG";
import header from "../photo/IMG_2775.jpeg";

const Home = () => {
  return (
    <>
      {/* <img id="logo-image" src={mainPhoto} alt="logo" /> */}
      <h1 id="title">Spoth's Farm Market</h1>
      {/* <img id="img-header" src={header} alt="" /> */}
      <h1 id="container-1">
        Now open for the 2022 season! Thank you for your business.
      </h1>
      <h2 className="individual-title">
        Socially Distanced Curbside Custom Order
      </h2>
      <p className="individual-about">
        You can now place a custom order to be picked up from the safety of your
        vehicle. Give us a call at 716-688-1110 and let us know what you are
        looking for. From produce to plants to dairy products, you can order any
        of our items with no increased item cost or fees. We will take your
        credit card over the phone and call you back when your order is ready
        and give you the total. Drive-up to our market and we will take your
        name and load your car, you don't even need to leave your vehicle.
      </p>
      <section id="main-page">
        <div id="photo-section-2">
          <img alt="flowers" src={photo2} />
          {/* <div class="overlay">
            <p class="text">
              Thank you for visiting the webpage of Spoth's Farm Market! We are
              a family-owned and operated farmer's market, providing high
              quality goods and produce to the Western New York community for
              over 60 years.
            </p>
          </div> */}
        </div>
        <div id="photo-section-1">
          <img alt="sign" src={photo} />
          <div class="overlay">
            <p class="text">
              Thank you for visiting the webpage of Spoth's Farm Market! We are
              a family-owned and operated farmer's market, providing high
              quality goods and produce to the Western New York community for
              over 60 years.
            </p>
          </div>
        </div>
        <div id="photo-section-3">
          <img alt="" src={photo3}></img>
        </div>
      </section>
    </>
  );
};

export default Home;
