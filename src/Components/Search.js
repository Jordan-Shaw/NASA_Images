import React, { useState } from "react";
import * as api from "../api";
import ImageList from "./ImageList";

export default function Search() {
  return (
    <div>
      <form
        onSubmit={event => {
          console.log("submitted");
          event.preventDefault();
        }}
      >
        <input type="text" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
