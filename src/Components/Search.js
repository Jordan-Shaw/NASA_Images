import React, { useState, useEffect, useRef } from "react";
import * as api from "../api";
import ImageCard from "./ImageCard";
import { validateImages } from "../utils";
// import PageChooser from "./PageChooser";

export default function Search() {
  const ref = useRef(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [validatedData, setValidatedData] = useState();
  const [textInput, setTextInput] = useState("");
  const [searchTerm, setSearchTerm] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (ref.current) {
      ref.current = false;
      api.getImageData(searchTerm).then(res => {
        setValidatedData(validateImages(res));
        setLoading(false);
      });
    }
  }, [searchTerm]);

  const handleChange = event => {
    setTextInput(event.target.value);
  };

  const handleSubmit = event => {
    ref.current = true;
    setLoading(true);
    setSearchTerm(textInput);
    event.preventDefault();
  };

  let images;

  if (loading && ref.current === false) {
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
        {/* <button
          onClick={() => {
            // setLoading(true);
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
            // setLoading(true);
            setPageNumber(prevPageNumber => {
              return prevPageNumber + 1;
            });
          }}
        >
          Forwards
        </button> */}
      </div>
    </div>
  );
}
