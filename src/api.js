import axios from "axios";

const apiRoot = "https://images-api.nasa.gov";

export const getImageData = searchTerm => {
  return axios
    .get(`${apiRoot}/search`, {
      params: {
        q: `${searchTerm}`,
        media_type: "image"
      }
    })
    .then(res => {
      console.log(1, res);
      return res.data.collection.items;
    });
};
