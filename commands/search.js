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

module.exports = async (query) => {
  try {
    const options = yargs.option("s", {
      alias: "search",
      describe: "Search term",
      type: "string",
      demandOption: true,
    }).argv;
    //   .option("a", {
    //     alias: "add",
    //     describe: "Add book to list",
    //     type: "string",
    //   }).argv;

    if (options.search) {
      const msg = chalk.white.bold(`
      Searching for books about ${options.search}...
        
      Results (5): `);
      const msgBox = boxen(msg, boxenOptions);
      console.log(msgBox);
    }
    const results = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${options.search}&printType=books&startIndex=0&maxResults=5`
    );
    results.data.items.forEach((book, i) => {
      const bookInfo = chalk.green.bold(`
${i + 1}
      Title: ${book.volumeInfo.title}
      Author(s): ${book.volumeInfo.authors}
      Publisher: ${book.volumeInfo.publisher}
      ISBN: ${book.volumeInfo.industryIdentifiers[1].identifier}
      `);

      const bookCard = boxen(bookInfo, boxenOptions);
      console.log(bookCard);
    });
    return results;
  } catch (error) {
    console.error(error);
  }
};
// search();

// module.exports = search;
// ISBN: ${book.volumeInfo.industryIdentifiers[1].identifier}
