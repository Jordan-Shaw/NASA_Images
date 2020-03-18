import React, { useEffect, useState } from "react";

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
  }, [link])

  if (imageData) {
    return (
      <div className="imageCard">
        <img src={href} alt="box" className="nasaImage" />
      </div>
    );
  } else {
    return <div className="imageCard">
      <p>search new image yo</p>
    </div>;
  }

}
