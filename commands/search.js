const yargs = require("yargs");
const axios = require("axios");
const chalk = require("chalk");
const boxen = require("boxen");

const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "green",
  backgroundColor: "#555555",
};

const search = async (keyword) => {
  try {
    const options = yargs
      .usage("Usage: -n <name>")
      .option("s", { alias: "search", describe: "Search term", type: "string", demandOption: true })
      .argv;

    if (options.search) {
      const msg = chalk.white.bold(`Searching for books about ${options.search}...
      \n Here are 5 books related to your search: `);
      const msgBox = boxen(msg, boxenOptions);
      console.log(msgBox);
    }
    const results = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${options.search}&printType=books&startIndex=0&maxResults=5`
    );
    results.data.items.forEach((book) => {
      const bookInfo = chalk.green.bold(`
      Title: ${book.volumeInfo.title}
      Author(s): ${book.volumeInfo.authors}
      Publisher: ${book.volumeInfo.publisher}
      ISBN: ${book.volumeInfo.industryIdentifiers[1].identifier}`);

      const bookCard = boxen(bookInfo, boxenOptions);
      console.log(bookCard);
    });
  } catch (error) {
    console.error(error);
  }
};
search();

module.exports = search;
