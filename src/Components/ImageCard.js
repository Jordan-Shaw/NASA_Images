import React, { useRef, useEffect, useState } from "react";
import * as api from "../api";

export default function ImageCard(props) {
  const { title, imageData } = props;
  const [nasa_id, setNasa_id] = useState(imageData.data[0].nasa_id);
  const [href, setHref] = useState("");
  console.log(12345, href);

  useEffect(() => {
    console.log("request-sent");
    api.getImageLink(nasa_id).then(res => {
      const { href } = res;
      setHref(href);
    });
  }, []);

  return (
    <div className="imageCard">
      <img src={href} alt="box" className="nasaImage" />
      <h2 className="nasaImage">{title + 1}</h2>
    </div>
  );
}
