import React from "react";

export default function ImageCard(props) {
  const { title, imageData } = props;
  console.log(imageData);

  return (
    <div className="imageCard">
      <img
        src="https://i.stack.imgur.com/yZlqh.png"
        alt="box"
        className="nasaImage"
      />
      <h2 className="nasaImage">{title + 1}</h2>
    </div>
  );
}
