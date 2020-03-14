import React, { useState, useEffect, useRef } from "react";
import * as api from "../api";
import ImageCard from "./ImageCard";

export default function Search() {
  const ref = useRef(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [imageData, setImageData] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [searchTerm, setSearchTerm] = useState();

  useEffect(() => {
    if (ref.current) {
      api.getImageData(searchTerm).then(res => {
        setImageData(res);
      });
    } else {
      ref.current = true;
    }
  }, [searchTerm]);

  const images = [];
  for (let i = 0; i < 9; i++) {
    images.push(<ImageCard title={i} />);
  }

  const handleChange = event => {
    setTextInput(event.target.value);
  };

  const handleSubmit = event => {
    setSearchTerm(textInput);
    event.preventDefault();
  };

  return (
    <div className="searchContainer">
      <div className="searchBar">
        <form
          onSubmit={event => {
            console.log("submitted");
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
    </div>
  );
}
