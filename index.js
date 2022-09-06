const { breedFetcher } = require("./breedFetcher");

const catName = process.argv[2];

breedFetcher(catName, (error, desc) => {
  if (error) {
    console.log("Error fetch details:", error);
  } else {
    console.log(desc);//print out the callback
  }
});