import React from "react";
import ImageCard from "./ImageCard";

export default function ImageList(props) {
  const { pageNumber, searched, loading, validatedData } = props;

  let images;

  if (loading && searched === false) {
    images = [<p key="default">Enter search term</p>];
  } else if (loading) {
    images = [<p key="default">Loading...</p>];
  } else if (validatedData.valid) {
    images = [];
    for (let i = pageNumber * 9; i < pageNumber * 9 + 9; i++) {
      if (validatedData.imageData[pageNumber * 9 + i]) {
        images.push(
          <ImageCard
            title={i}
            imageData={validatedData.imageData[pageNumber * 9 + i]}
            key={validatedData.imageData[pageNumber * 9 + i].data[0].nasa_id}
          />
        );
      }
    }
  } else {
    images = [<p>No results found</p>];
  }

  return (
    <div className="imageList">
      {images.map(image => {
        return image;
      })}
    </div>
  );
}
