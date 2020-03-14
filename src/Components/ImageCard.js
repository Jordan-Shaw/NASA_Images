import React, { useEffect, useState } from "react";
import * as api from "../api";

export default function ImageCard(props) {
  const { title, imageData } = props;
  let nasa_id = imageData.data[0].nasa_id;
  const [href, setHref] = useState("");

  useEffect(() => {
    api.getImageLink(nasa_id).then(res => {
      const { href } = res;
      setHref(href);
    });
  });

  return (
    <div className="imageCard">
      <img src={href} alt="box" className="nasaImage" />
      <h2 className="nasaImage">{title + 1}</h2>
    </div>
  );
}
