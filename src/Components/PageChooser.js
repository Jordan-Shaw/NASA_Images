import React from "react";

export default function PageChooser(props) {
  const { pageNumber, setPageNumber } = props;

  return (
    <div className="pageChooser">
      <button
        onClick={() => {
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
          setPageNumber(prevPageNumber => {
            return prevPageNumber + 1;
          });
        }}
      >
        Forwards
      </button>
    </div>
  );
}
