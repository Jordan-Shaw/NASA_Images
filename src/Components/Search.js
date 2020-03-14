import React, { useState, useEffect, useRef } from "react";
import * as api from "../api";
import ImageCard from "./ImageCard";
import PageChooser from "./PageChooser";

export default function Search() {
  console.log("render");
  const ref = useRef(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [imageData, setImageData] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [searchTerm, setSearchTerm] = useState();

  useEffect(() => {
    if (ref.current) {
      console.log("request-sent");
      ref.current = false;
      api.getImageData(searchTerm).then(res => {
        setImageData(res);
      });
    }
  }, [searchTerm]);

  const images = [];
  for (let i = 0; i < 9; i++) {
    images.push(
      <ImageCard title={i} imageData={imageData[pageNumber * 9 + i]} />
    );
  }

  const handleChange = event => {
    setTextInput(event.target.value);
  };

  const handleSubmit = event => {
    ref.current = true;
    setSearchTerm(textInput);
    event.preventDefault();
  };

  return (
    <div className="searchContainer">
      <div className="searchBar">
        <form
          onSubmit={event => {
            handleSubmit(event);
          }}
        >
          <input
            type="text"
            onChange={event => {
              handleChange(event);
            }}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div className="imageList">
        {images.map(image => {
          return image;
        })}
      </div>
      <PageChooser setPageNumber={setPageNumber} pageNumber={pageNumber} />
    </div>
  );
}
