const yargs = require("yargs");
const axios = require("axios");

const search = async (keyword) => {
  try {
    const options = yargs
      .usage("Usage: -n <name>")
      .option("s", { alias: "search", describe: "Search term", type: "string", demandOption: true })
      .argv;

    if (options.search) {
      console.log(`Searching for books about ${options.search}...`);
    }
    const results = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${options.search}&printType=books&startIndex=0&maxResults=5`
    );
    results.data.items.forEach((book) => {
      //   console.log(book.volumeInfo);
      console.log(`
    ******************************************************
        Title: ${book.volumeInfo.title}
        Author(s): ${book.volumeInfo.authors}
        Publisher: ${book.volumeInfo.publisher}
        ISBN: ${book.volumeInfo.industryIdentifiers[1].identifier}
    ******************************************************
        `);
    });
  } catch (error) {
    console.error(error);
  }
};
search();

module.exports = search;
