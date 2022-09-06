const request = require("request");
const endpointUrl = "https://api.thecatapi.com/v1/breeds/search?q=";

const breedFetcher = (catName, callback) => {
  const url = endpointUrl + catName;
  request(url, (error, response, body) => {
    if (error) {
      callback("Error: ", null);
    }
    if (Number(response.statusCode) > 299) {
      callback("Error: ", null);
    }
    if (!body) {
      callback("No cat info found.", null);
    }
    const data = JSON.parse(body);
    const catDesc = data[0]['description'];
    if (catDesc) (
      callback(null, catDesc)
    );
  });
};


module.exports = { breedFetcher };