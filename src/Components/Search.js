import React, { useState, useEffect, useRef } from "react";
import * as api from "../api";
import ImageCard from "./ImageCard";
// import PageChooser from "./PageChooser";

export default function Search() {
  const ref = useRef(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [imageData, setImageData] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [searchTerm, setSearchTerm] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (ref.current) {
      ref.current = false;
      api.getImageData(searchTerm).then(res => {
        setImageData(res);
        setLoading(false);
      });
    }
  }, [searchTerm]);

  let images;

  if (loading) {
    images = [<p>Loading...</p>];
  } else {
    images = [];

    for (let i = 0; i < 9; i++) {
      images.push(
        <ImageCard title={i} imageData={imageData[pageNumber * 9 + i]} />
      );
    }
  }

  const handleChange = event => {
    setTextInput(event.target.value);
  };

  const handleSubmit = event => {
    ref.current = true;
    setLoading(true);
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
      <div className="pageChooser">
        <button
          onClick={() => {
            setLoading(true)
            setPageNumber(prevPageNumber => {
              return prevPageNumber - 1;
            });
          }}
        >
          Back
      </button>
        <h3>Page: {pageNumber + 1}</h3>
        <button
          onClick={() => {
            setLoading(true)
            setPageNumber(prevPageNumber => {
              return prevPageNumber + 1;
            });
          }}
        >
          Forwards
      </button>
      </div>
    </div>
  );
}
