const utils = require("../src/utils");
const { expect } = require("chai");

describe("validateImages", () => {
  let validDataResult;
  let invalidDataResult;

  beforeEach(() => {
    const validData = [
      {
        href:
          "https://images-assets.nasa.gov/image/hubble-observes-one-of-a-kind-star-nicknamed-nasty_17754652960_o/collection.json",
        links: [
          {
            rel: "preview",
            render: "image",
            href:
              "https://images-assets.nasa.gov/image/hubble-observes-one-of-a-kind-star-nicknamed-nasty_17754652960_o/hubble-observes-one-of-a-kind-star-nicknamed-nasty_17754652960_o~thumb.jpg"
          }
        ],
        data: [
          {
            media_type: "image",
            nasa_id:
              "hubble-observes-one-of-a-kind-star-nicknamed-nasty_17754652960_o",
            title: "Hubble Observes One-of-a-Kind Star Nicknamed ‘Nasty’",
            description:
              "Astronomers using NASA’s Hubble Space Telescope have uncovered surprising new clues about a hefty, rapidly aging star whose behavior has never been seen before in our Milky Way galaxy. In fact, the star is so weird that astronomers have nicknamed it “Nasty 1,” a play on its catalog name of NaSt1. The star may represent a brief transitory stage in the evolution of extremely massive stars.  First discovered several decades ago, Nasty 1 was identified as a Wolf-Rayet star, a rapidly evolving star that is much more massive than our sun. The star loses its hydrogen-filled outer layers quickly, exposing its super-hot and extremely bright helium-burning core.  But Nasty 1 doesn’t look like a typical Wolf-Rayet star. The astronomers using Hubble had expected to see twin lobes of gas flowing from opposite sides of the star, perhaps similar to those emanating from the massive star Eta Carinae, which is a Wolf-Rayet candidate.   Instead, Hubble revealed a pancake-shaped disk of gas encircling the star. The vast disk is nearly 2 trillion miles wide, and may have formed from an unseen companion star that snacked on the outer envelope of the newly formed Wolf-Rayet.  Based on current estimates, the nebula surrounding the stars is just a few thousand years old, and as close as 3,000 light-years from Earth.  Credits: NASA/Hubble",
            keywords: (3)[("Hubble", "Milky Way", "star")],
            date_created: "2015-03-21T00:00:00Z",
            center: "GSFC"
          }
        ]
      }
    ];
    const emptyArray = [];
    invalidDataResult = utils.validateImages(emptyArray);
    validDataResult = utils.validateImages(validData);
  });

  it("Should return an object when passed an array", () => {
    expect(invalidDataResult).to.be.an("object");
  });
  it("Returned object should have imageData, length, and valid properties when passed valid or invalid array", () => {
    expect(invalidDataResult).to.haveOwnProperty("imageData");
    expect(invalidDataResult).to.haveOwnProperty("length");
    expect(invalidDataResult).to.haveOwnProperty("valid");
    expect(validDataResult).to.haveOwnProperty("imageData");
    expect(validDataResult).to.haveOwnProperty("length");
    expect(validDataResult).to.haveOwnProperty("valid");
  });
  it("Valid property should be falsy when passed an empty array", () => {
    expect(invalidDataResult).to.haveOwnProperty("valid", false)
  });
  it("Valid property should be truthy when passed a valid array", () => {
    expect(validDataResult).to.haveOwnProperty("valid", true);
  });
  it("length property should equal 1 when passed an array of length 1", () => {
    expect(validDataResult).to.haveOwnProperty("length", 1);
  });
});
