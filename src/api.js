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
      const { items } = res.data.collection;
      return items;
    });
};

export const getImageLink = nasa_id => {
  return axios.get(`${apiRoot}/asset/${nasa_id}`).then(res => {
    return res.data.collection.items[0];
  });
};
