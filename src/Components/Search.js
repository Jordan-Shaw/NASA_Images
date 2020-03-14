import React, { useState } from "react";
import * as api from "../api";
import ImageCard from "./ImageCard";

export default function Search() {
  const images = [];
  for (let i = 0; i < 9; i++) {
    images.push(<ImageCard title={i} />);
  }

  return (
    <div className="searchContainer">
      <form
        onSubmit={event => {
          console.log("submitted");
          event.preventDefault();
        }}
      >
        <input type="text" />
        <input type="submit" value="Submit" />
      </form>
      <div className="imageList">
        {images.map(image => {
          return image;
        })}
      </div>
    </div>
  );
}
