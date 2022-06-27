import photo from "../photo/RedSpoth.jpeg";
import photo2 from "../photo/transit.png";
import photo3 from "../photo/Eddie.jpeg";
import photo4 from "../photo/540CDDAA-3F63-45B7-B424-8B59C5E02724_1_105_c.jpeg";

const About = () => {
  return (
    <>
      <div id="photo-section-4">
        <img alt="Overview of farm" src={photo4} />
        <div className="text-in-photo">A Family History of Farming</div>
        {/* <div class="overlay">
          <p class="text-about">
            We are a third-generation, family owned and operated farm market,
            focusing on bringing your family the freshest locally grown goods
            and produce at the best price possible.
          </p>
        </div> */}
      </div>
      <div id="photo-group">
        <div id="photo-section-1-about">
          <div id="photo-1">
            <img alt="Red Spoth" src={photo} />
          </div>
          <div id="text-1">
            <p>
              Ed "Red" Spoth started growing and selling fruits and vegetables
              in front of his Transit Road home in 1951. With help from his
              eight kids and wife, Ruth, the Spoth family grew crops like corn,
              tomatoes, peppers, squash and dill, and many more.
            </p>
          </div>
        </div>
        <div id="photo-section-2-about">
          <div id="text-2">
            <p>
              After graduating from Cornell School of Agriculture, Red's son
              Dave returned home to work on the family farm full time. Red's
              oldest son, Ed, also returned to to the family business after
              graduating from Brockport. Over the years, the market has grown
              from a small roadside stand into the permanent structure it is
              today, complete with multiple bay greenhouses. Our growth not only
              allowed us to carry a wider range of fruits and vegetables, but
              also enabled our family to grow and sell plants, as well as stay
              open into the Christmas season selling Christmas trees and
              decorations.
            </p>
          </div>
          <div id="photo-2">
            <img
              alt="The family selling produce on Transit Road"
              src={photo2}
            />
          </div>
        </div>
        <div id="photo-section-3-about">
          <div id="photo-3">
            <img alt="Eddie Spoth on the tractor" src={photo3} />
          </div>
          <div id="text-3">
            <p>
              Eddie on the tractor. Ed's sonn, Eddie, also returned home after
              college to work in the family business. We farm acreage on two
              plots of land in Clarence, and operate the retail store on Transit
              Road in East Amherst. Many members of the Spoth family have worked
              at our farm market at some point in their lives - odds are that
              you'll be taken care by one of us when you visit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
