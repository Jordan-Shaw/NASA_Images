import React, { useEffect, useState } from "react";
import * as api from "../api";
import { validateImages } from "../utils";
import { Link } from "@reach/router";

export default function SingleImage(props) {
  const { nasa_id } = props;
  const [validatedData, setValidatedData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getSingleImageData(nasa_id).then(res => {
      setValidatedData(validateImages(res));
      setLoading(false);
    });
  }, [nasa_id]);

  console.log(validatedData);

  if (loading) {
    return <p>Loading...</p>;
  } else if (validatedData.valid) {
    const { imageData } = validatedData;
    const { href } = imageData[0].links[0];
    const { title, location, date_created, description } = imageData[0].data[0];
    return (
      <div className="singleImagePage">
        <img src={href} className="singleImage" alt={title} />
        <h1 className="title">{title}</h1>
        <h3 className="dateLocation">
          Date: {date_created.slice(0, 9)}, {location}
        </h3>
        <p className="description">{description}</p>
        <Link to="/">
          <button
            onClick={() => {
              console.log("returning");
            }}
            className="returnButton"
          >
            Return
          </button>
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <p>Invalid nasa_id provided. Please return to the search page</p>

        <button
          onClick={() => {
            console.log("returning");
          }}
          className="returnButton"
        >
          <Link to="/">Return</Link>
        </button>
      </div>
    );
  }
}
