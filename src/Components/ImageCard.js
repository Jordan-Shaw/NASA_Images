import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";

export default function ImageCard(props) {
  const { imageData } = props;

  let link;
  if (imageData) {
    link = imageData.links[0].href;
  } else {
    link = "";
  }

  const [href, setHref] = useState(link);

  useEffect(() => {
    setHref(link);
  }, [link]);

  console.log(imageData.data[0].nasa_id);

  if (imageData) {
    const { nasa_id } = imageData.data[0];
    return (
      <div className="imageCard">
        <Link to={`${nasa_id}`}>
          <img src={href} alt="box" className="nasaImage" />
        </Link>
      </div>
    );
  } else {
    return (
      <div className="imageCard">
        <p>empty slot...</p>
      </div>
    );
  }
}
