import React, { useState, useEffect, useRef } from "react";
import * as api from "../api";
import { validateImages } from "../utils";
import ImageList from "./ImageList";

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
  }, [searchTerm, loading]);

  const handleChange = event => {
    setTextInput(event.target.value);
  };

  const handleSubmit = event => {
    ref.current = true;
    setLoading(true);
    setSearchTerm(textInput);
    setPageNumber(0);
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
            className="textInput"
            type="text"
            onChange={event => {
              handleChange(event);
            }}
          />
          <input className="submitButton" type="submit" value="Search" />
        </form>
      </div>
      <ImageList pageNumber={pageNumber} searched={ref.current} loading={loading} validatedData={validatedData}/>
      <div className="pageChooser">
        <button
          onClick={() => {
            setPageNumber(prevPageNumber => {
              return prevPageNumber - 1;
            });
          }}
          className="pageButton"
        >
          Back
        </button>
        <h3 className="pageNumber">Page: {pageNumber + 1}</h3>
        <button
          onClick={() => {
            setPageNumber(prevPageNumber => {
              return prevPageNumber + 1;
            });
          }}
          className="pageButton"
        >
          Forwards
        </button>
      </div>
    </div>
  );
}
